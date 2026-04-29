'use strict';

const statusEl = document.getElementById('testStatus');
const outputEl = document.getElementById('testOutput');
let db = null;

function setStatus(message, type = 'info') {
  statusEl.textContent = message;
  statusEl.className = `admin-alert show ${type}`;
}

function print(value) {
  outputEl.textContent = typeof value === 'string' ? value : JSON.stringify(value, null, 2);
}

function init() {
  try {
    if (!window.WARUNGKU_FIREBASE_ENABLED) {
      throw new Error('WARUNGKU_FIREBASE_ENABLED masih false.');
    }

    if (!window.firebase) {
      throw new Error('Firebase SDK tidak termuat. Cek internet atau script Firebase.');
    }

    if (!firebase.apps.length) {
      firebase.initializeApp(window.WARUNGKU_FIREBASE_CONFIG);
    }

    db = firebase.firestore();
    setStatus('Firebase SDK terhubung. Sekarang klik Tulis Data Tes.', 'success');
    print({
      projectId: window.WARUNGKU_FIREBASE_CONFIG.projectId,
      enabled: window.WARUNGKU_FIREBASE_ENABLED
    });
  } catch (error) {
    setStatus(`Init gagal: ${error.message}`, 'warning');
    print(error.message);
  }
}

async function writeTest() {
  if (!db) init();
  if (!db) return;

  const id = `TEST-${Date.now()}`;
  const data = {
    orderNo: id,
    name: 'Tes Firebase Langsung',
    phone: '6280000000000',
    address: 'Data dari firebase-test.html',
    paymentMethod: 'TEST',
    paymentStatus: 'TEST',
    orderStatus: 'Tes Berhasil',
    total: 0,
    items: [],
    createdAtMs: Date.now(),
    createdAt: new Date().toISOString()
  };

  try {
    await db.collection('orders').doc(id).set(data);
    setStatus(`Berhasil menulis data: ${id}`, 'success');
    print(data);
  } catch (error) {
    setStatus(`Tulis gagal: ${error.message}`, 'warning');
    print({
      errorCode: error.code,
      errorMessage: error.message,
      solusi: 'Kalau permission denied, buka Firestore Rules dan izinkan read/write untuk orders.'
    });
  }
}

async function readOrders() {
  if (!db) init();
  if (!db) return;

  try {
    const snapshot = await db.collection('orders').limit(10).get();
    const rows = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setStatus(`Berhasil membaca ${rows.length} data dari orders.`, 'success');
    print(rows);
  } catch (error) {
    setStatus(`Baca gagal: ${error.message}`, 'warning');
    print({
      errorCode: error.code,
      errorMessage: error.message
    });
  }
}

document.getElementById('writeBtn').addEventListener('click', writeTest);
document.getElementById('readBtn').addEventListener('click', readOrders);
document.addEventListener('DOMContentLoaded', init);
