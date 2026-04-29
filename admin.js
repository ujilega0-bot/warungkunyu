'use strict';

const $ = (id) => document.getElementById(id);
const formatRp = (n) => 'Rp ' + Number(n || 0).toLocaleString('id-ID');

let db = null;

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[char]));
}

function isFirebaseConfigured() {
  return Boolean(
    window.WARUNGKU_FIREBASE_ENABLED &&
    window.WARUNGKU_FIREBASE_CONFIG &&
    window.WARUNGKU_FIREBASE_CONFIG.projectId &&
    !window.WARUNGKU_FIREBASE_CONFIG.projectId.startsWith('ISI_') &&
    window.firebase
  );
}

function showAdminAlert(message, type = 'info') {
  const alert = $('adminAlert');
  alert.textContent = message;
  alert.className = `admin-alert show ${type}`;
}

function getFirebaseErrorMessage(error) {
  const message = error?.message || 'Terjadi kesalahan Firebase.';
  const code = error?.code || '';

  if (code.includes('permission-denied') || message.toLowerCase().includes('permission')) {
    return 'Izin Firestore ditolak. Buka Firebase Console > Firestore Database > Rules, lalu izinkan read/write untuk collection orders.';
  }

  if (code.includes('unavailable') || message.toLowerCase().includes('network')) {
    return 'Firebase tidak bisa diakses. Cek koneksi internet lalu refresh halaman admin.';
  }

  if (code.includes('failed-precondition') && message.toLowerCase().includes('index')) {
    return 'Firestore meminta index. Klik link index yang muncul di console browser atau hapus orderBy.';
  }

  if (code.includes('not-found')) {
    return 'Firestore Database belum dibuat. Buat Firestore Database dulu di Firebase Console.';
  }

  return message;
}

function initFirebaseAdmin() {
  if (!isFirebaseConfigured()) {
    showAdminAlert('Firebase belum terhubung. Cek firebase-config.js, script Firebase, dan upload semua file ke GitHub.', 'warning');
    return false;
  }

  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(window.WARUNGKU_FIREBASE_CONFIG);
    }
    db = firebase.firestore();
    return true;
  } catch (error) {
    showAdminAlert(`Firebase init gagal: ${getFirebaseErrorMessage(error)}`, 'warning');
    return false;
  }
}

function renderOrders(orders) {
  const wrap = $('adminOrders');

  if (!orders.length) {
    wrap.innerHTML = `
      <div class="admin-empty">
        <i class="fas fa-database"></i>
        <strong>Belum ada pesanan</strong>
        <span>Coba checkout dari halaman toko, lalu refresh dashboard ini.</span>
      </div>`;
    return;
  }

  wrap.innerHTML = orders.map((order) => {
    const items = Array.isArray(order.items) ? order.items : [];
    const itemText = items.map((item) => `${item.name} (${item.qty}x)`).join(', ');
    return `
      <article class="admin-order-card">
        <div class="admin-order-top">
          <div>
            <strong>${escapeHtml(order.orderNo || '-')}</strong>
            <span>${escapeHtml(order.dateStr || '-')} ${escapeHtml(order.timeStr || '')}</span>
          </div>
          <b>${formatRp(order.total)}</b>
        </div>
        <div class="admin-order-grid">
          <div><span>Pelanggan</span><strong>${escapeHtml(order.name || '-')}</strong></div>
          <div><span>WhatsApp</span><strong>${escapeHtml(order.phone || '-')}</strong></div>
          <div><span>Metode</span><strong>${escapeHtml(order.paymentMethod || '-')}</strong></div>
          <div><span>Status</span><strong>${escapeHtml(order.orderStatus || '-')}</strong></div>
        </div>
        <div class="admin-order-address">${escapeHtml(order.address || '-')}</div>
        <div class="admin-order-items">${escapeHtml(itemText || '-')}</div>
      </article>`;
  }).join('');
}

function updateStats(orders) {
  const revenue = orders.reduce((sum, order) => sum + Number(order.total || 0), 0);
  const cod = orders.filter((order) => order.paymentMethod === 'COD').length;
  const qris = orders.filter((order) => order.paymentMethod === 'QRIS').length;

  $('adminTotalOrders').textContent = orders.length;
  $('adminRevenue').textContent = formatRp(revenue);
  $('adminCodOrders').textContent = cod;
  $('adminQrisOrders').textContent = qris;
}

async function loadOrders() {
  if (!db && !initFirebaseAdmin()) {
    renderOrders([]);
    return;
  }

  showAdminAlert('Mengambil data pesanan dari Firebase...', 'info');

  try {
    let snapshot;
    try {
      snapshot = await db.collection('orders').orderBy('createdAtMs', 'desc').get();
    } catch {
      snapshot = await db.collection('orders').get();
    }
    const orders = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    orders.sort((a, b) => Number(b.createdAtMs || 0) - Number(a.createdAtMs || 0));
    renderOrders(orders);
    updateStats(orders);
    showAdminAlert('Data pesanan berhasil dimuat.', 'success');
  } catch (error) {
    showAdminAlert(`Gagal memuat database: ${getFirebaseErrorMessage(error)}`, 'warning');
  }
}

async function testDatabaseConnection() {
  if (!db && !initFirebaseAdmin()) return;

  showAdminAlert('Mengetes koneksi tulis ke Firebase...', 'info');

  try {
    const testId = `TEST-${Date.now()}`;
    await db.collection('orders').doc(testId).set({
      orderNo: testId,
      name: 'Tes Database',
      phone: '6280000000000',
      address: 'Data tes dari halaman admin',
      note: 'Boleh dihapus dari Firebase Console',
      paymentMethod: 'TEST',
      paymentStatus: 'TEST',
      orderStatus: 'Tes Koneksi',
      subtotal: 0,
      discount: 0,
      shipping: 0,
      total: 0,
      items: [],
      dateStr: new Date().toLocaleDateString('id-ID'),
      timeStr: new Date().toLocaleTimeString('id-ID'),
      createdAtMs: Date.now(),
      createdAt: new Date().toISOString()
    });

    showAdminAlert('Tes berhasil. Firebase sudah bisa menerima data pesanan.', 'success');
    loadOrders();
  } catch (error) {
    showAdminAlert(`Tes gagal: ${getFirebaseErrorMessage(error)}`, 'warning');
  }
}

$('refreshOrdersBtn').addEventListener('click', loadOrders);
$('testDatabaseBtn').addEventListener('click', testDatabaseConnection);
document.addEventListener('DOMContentLoaded', loadOrders);
