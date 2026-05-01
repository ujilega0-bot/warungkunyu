'use strict';

const products = [
  {
    id: 1, cat: 'minuman', name: 'Brown Sugar Boba',
    desc: 'Minuman boba premium dengan gula aren asli dan susu segar berkualitas tinggi.',
    rating: 4.9, reviews: 1234,
    origPrice: 28000, discPercent: 20, popular: true,
    image: 'gambar/jeruk.webp'
  },
  {
    id: 2, cat: 'minuman', name: 'Matcha Latte',
    desc: 'Matcha Jepang grade premium dengan susu oat yang creamy dan menyegarkan.',
    rating: 4.8, reviews: 876,
    origPrice: 32000, discPercent: 15, popular: false,
    image: 'gambar/caramel.jpg'
  },
  {
    id: 3, cat: 'minuman', name: 'Strawberry Smoothie',
    desc: 'Smoothie segar dari stroberi segar pilihan tanpa tambahan gula.',
    rating: 4.7, reviews: 654,
    origPrice: 25000, discPercent: 10, popular: false,
    image: 'gambar/sop buah.jpg'
  },
  {
    id: 4, cat: 'minuman', name: 'Kopi Susu Kekinian',
    desc: 'Kopi arabika spesial dipadukan susu segar dengan sedikit gula aren.',
    rating: 4.9, reviews: 2100,
    origPrice: 22000, discPercent: 25, popular: true,
    image: 'gambar/jamu.jpg'
  },
  {
    id: 5, cat: 'minuman', name: 'Jus Alpukat Krim',
    desc: 'Alpukat Wonosobo premium diblender lembut dengan susu kental manis.',
    rating: 4.6, reviews: 431,
    origPrice: 27000, discPercent: 5, popular: false,
    image: 'gambar/caramel.jpg'
  },
  {
    id: 6, cat: 'minuman', name: 'Es Teh Leci Soda',
    desc: 'Teh premium dengan topping buah leci dan soda water yang menyegarkan.',
    rating: 4.5, reviews: 312,
    origPrice: 20000, discPercent: 30, popular: true,
    image: 'gambar/sup.jpg'
  },
  {
    id: 7, cat: 'makanan', name: 'Mie Ayam Spesial',
    desc: 'Mie kenyal dengan ayam cincang berbumbu khas, lengkap dengan pangsit.',
    rating: 4.9, reviews: 3456,
    origPrice: 35000, discPercent: 15, popular: true,
    image: 'gambar/sate.jpg'
  },
  {
    id: 8, cat: 'makanan', name: 'Nasi Goreng Kampung',
    desc: 'Nasi goreng tradisional dengan cita rasa autentik, telur mata sapi, dan kerupuk.',
    rating: 4.8, reviews: 2876,
    origPrice: 30000, discPercent: 20, popular: true,
    image: 'gambar/telor.jpg'
  },
  {
    id: 9, cat: 'makanan', name: 'Soto Ayam Lamongan',
    desc: 'Soto kuning khas Lamongan dengan kunyit, soun, dan telur rebus bumbu koya.',
    rating: 4.7, reviews: 1543,
    origPrice: 28000, discPercent: 10, popular: false,
    image: 'gambar/uduk.jpg'
  },
  {
    id: 10, cat: 'makanan', name: 'Nasi Box Komplit',
    desc: 'Nasi putih dengan ayam goreng, tempe, sambal, dan sayur lalapan segar.',
    rating: 4.8, reviews: 987,
    origPrice: 42000, discPercent: 25, popular: true,
    image: 'gambar/rendang.jpg'
  },
  {
    id: 11, cat: 'makanan', name: 'Ayam Bakar Taliwang',
    desc: 'Ayam bakar bumbu Taliwang khas Lombok, pedas gurih dan menggugah selera.',
    rating: 4.9, reviews: 765,
    origPrice: 48000, discPercent: 12, popular: false,
    image: 'gambar/daging.jpg'
  },
  {
    id: 12, cat: 'makanan', name: 'Gado-Gado Jakarta',
    desc: 'Sayuran segar dengan bumbu kacang kental spesial dan kerupuk udang.',
    rating: 4.6, reviews: 432,
    origPrice: 25000, discPercent: 8, popular: false,
    image: 'gambar/telor.jpg'
  },
  {
    id: 13, cat: 'cemilan', name: 'Kentang Goreng Crispy',
    desc: 'Kentang goreng triple crispy dengan berbagai pilihan saus dip spesial.',
    rating: 4.8, reviews: 2134,
    origPrice: 20000, discPercent: 30, popular: true,
    image: `gambar/kentang.jpg`
  },
  {
    id: 14, cat: 'cemilan', name: 'Telur Gulung Mozarella',
    desc: 'Telur gulung isi keju mozarella leleh, garing di luar lembut di dalam.',
    rating: 4.7, reviews: 1543,
    origPrice: 15000, discPercent: 20, popular: false,
    image: 'gambar/kentang.jpg'
  },
  {
    id: 15, cat: 'cemilan', name: 'Cireng Bumbu Rujak',
    desc: 'Cireng kenyal dengan bumbu rujak pedas manis yang bikin ketagihan.',
    rating: 4.6, reviews: 876,
    origPrice: 12000, discPercent: 17, popular: true,
    image: 'gambar/kentang.jpg'
  },
  {
    id: 16, cat: 'cemilan', name: 'Martabak Mini Coklat',
    desc: 'Martabak tipis crispy isi coklat Toblerone dan keju edam, per 5 pcs.',
    rating: 4.9, reviews: 1234,
    origPrice: 25000, discPercent: 40, popular: true,
    image: 'gambar/kentang.jpg'
  },
  {
    id: 17, cat: 'cemilan', name: 'Seblak Kuah Pedas',
    desc: 'Seblak khas Bandung dengan kerupuk basah, bakso, dan bumbu pedas level.',
    rating: 4.8, reviews: 654,
    origPrice: 18000, discPercent: 22, popular: false,
    image: 'gambar/kentang.jpg'
  },
  {
    id: 18, cat: 'cemilan', name: 'Kacang Mete Balado',
    desc: 'Kacang mete premium goreng kering dengan bumbu balado pedas meresap.',
    rating: 4.5, reviews: 342,
    origPrice: 22000, discPercent: 15, popular: false,
    image: 'gambar/kentang.jpg'
  }
];

let cart = [];
let currentCat = 'semua';
let orderCount = parseInt(localStorage.getItem('wk_order_count') || '0', 10);
let qrisTimer = null;
let qtyChanging = false;
let selectedPayment = 'qris';
let orderHistory = [];

const ADMIN_WHATSAPP = '6288294519516';
const STORE_NAME = 'WarungKu Jakarta';
const CASHIER_NAME = 'Admin WarungKu';
const ORDER_STATUS = 'Diproses';
const SHIPPING_COST = 0;

const formatRp = (n) => 'Rp ' + n.toLocaleString('id-ID');
const discPrice = (p) => Math.round(p.origPrice * (1 - p.discPercent / 100));
const $ = (id) => document.getElementById(id);
const formatShipping = () => (SHIPPING_COST === 0 ? 'Gratis' : formatRp(SHIPPING_COST));

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartGrandTotal() {
  return getCartTotal() + SHIPPING_COST;
}

function updatePaymentTotals() {
  const total = getCartGrandTotal();
  $('qrisTotal').textContent = formatRp(total);
  $('codTotal').textContent = formatRp(total);
  $('codCourierAmount').textContent = formatRp(total);
}

function normalizePhoneNumber(value) {
  const digits = value.replace(/\D/g, '');
  if (digits.startsWith('08')) return '62' + digits.slice(1);
  if (digits.startsWith('8')) return '62' + digits;
  return digits;
}

function isValidWhatsAppNumber(value) {
  const normalized = normalizePhoneNumber(value);
  return /^62\d{9,13}$/.test(normalized);
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[char]));
}

function normalizeCartItem(rawItem) {
  const product = products.find((item) => item.id === rawItem?.id);
  if (!product) return null;

  const qty = Math.max(1, Math.min(99, Number.parseInt(rawItem.qty, 10) || 1));
  return {
    ...product,
    price: discPrice(product),
    qty
  };
}

function showToast(msg, duration = 2500) {
  const toast = $('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

function updateOrderCount() {
  orderCount += 1;
  localStorage.setItem('wk_order_count', orderCount);
}

function saveCart() {
  localStorage.setItem('wk_cart', JSON.stringify(cart));
}

function getOrderHistory() {
  return orderHistory;
}

function saveOrderHistory(receiptData) {
  const itemSummary = cart.map((item) => `${item.name} (${item.qty}x)`);
  orderHistory.unshift({
    orderNo: receiptData.orderNo,
    dateStr: receiptData.dateStr,
    timeStr: receiptData.timeStr,
    name: receiptData.name,
    paymentMethod: receiptData.paymentMethod,
    paymentStatus: receiptData.paymentStatus,
    orderStatus: receiptData.orderStatus,
    total: receiptData.total,
    items: itemSummary
  });
}

function loadCart() {
  const saved = localStorage.getItem('wk_cart');
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    cart = Array.isArray(parsed)
      ? parsed.map(normalizeCartItem).filter(Boolean)
      : [];
    saveCart();
  } catch {
    cart = [];
    localStorage.removeItem('wk_cart');
  }
}

function renderProducts(cat = 'semua', query = '') {
  const grid = $('productsGrid');
  grid.innerHTML = '';

  const filtered = products.filter((product) => {
    const matchCat = cat === 'semua' || product.cat === cat;
    const matchQuery = !query || product.name.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  if (!filtered.length) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#94a3b8;">
        <div style="font-size:56px;margin-bottom:12px;">&#128533;</div>
        <p style="font-weight:700;font-size:16px;">Produk tidak ditemukan</p>
        <p style="font-size:14px;">Coba kata kunci yang berbeda</p>
      </div>`;
    return;
  }

  filtered.forEach((product, idx) => {
    const finalPrice = discPrice(product);
    const stars = '\u2B50'.repeat(Math.floor(product.rating));
    const card = document.createElement('div');

    card.className = 'product-card';
    card.style.animationDelay = `${idx * 0.05}s`;
    card.innerHTML = `
      <div class="product-img ${product.cat}">
        <img src="${product.image}" alt="" loading="lazy" />
        <div class="badge-discount">-${product.discPercent}%</div>
        ${product.popular ? '<div class="badge-popular"><i class="fas fa-fire"></i> Terlaris</div>' : ''}
      </div>
      <div class="product-body">
        <div class="product-cat">${product.cat}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-desc">${product.desc}</div>
        <div class="product-rating">
          ${stars} <span>${product.rating} (${product.reviews.toLocaleString('id-ID')})</span>
        </div>
        <div class="product-price">
          <span class="price-orig">${formatRp(product.origPrice)}</span>
          <span class="price-disc">${formatRp(finalPrice)}</span>
        </div>
        <button class="add-btn" data-id="${product.id}">
          <i class="fas fa-cart-plus"></i> Tambah
        </button>
      </div>`;

    grid.appendChild(card);
  });

  const cards = grid.querySelectorAll('.product-card');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, i * 60);
  });
}

function animateFlyToCart(btn) {
  const fly = $('flyItem');
  const sourceRect = btn.closest('.product-card').querySelector('.product-img').getBoundingClientRect();
  const cartRect = $('cartBtn').getBoundingClientRect();
  const startLeft = sourceRect.left + sourceRect.width / 2 - 18;
  const startTop = sourceRect.top + sourceRect.height / 2 - 18;
  const endLeft = cartRect.left + cartRect.width / 2 - 18;
  const endTop = cartRect.top + cartRect.height / 2 - 18;

  fly.classList.remove('flying');
  fly.style.transition = 'none';
  fly.style.left = `${startLeft}px`;
  fly.style.top = `${startTop}px`;
  fly.style.opacity = '1';
  fly.style.transform = 'scale(1)';

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      fly.classList.add('flying');
      fly.style.transition = 'left 0.65s cubic-bezier(0.22, 1, 0.36, 1), top 0.65s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.65s ease, transform 0.65s ease';
      fly.style.left = `${endLeft}px`;
      fly.style.top = `${endTop}px`;
      fly.style.opacity = '0';
      fly.style.transform = 'scale(0.35)';
    });
  });

  setTimeout(() => {
    fly.classList.remove('flying');
    fly.style.transition = 'none';
    fly.style.opacity = '0';
    fly.style.transform = 'scale(1)';
  }, 700);
}

function addToCart(productId, btn) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const idx = cart.findIndex((item) => item.id === productId);
  if (idx >= 0) {
    if (cart[idx].qty >= 99) {
      showToast('\u274C Maksimal 99 item');
      return;
    }
    cart[idx].qty += 1;
  } else {
    cart.push({ ...product, price: discPrice(product), qty: 1 });
  }

  btn.classList.add('added');
  btn.innerHTML = '<i class="fas fa-check"></i> Ditambahkan!';
  setTimeout(() => {
    btn.classList.remove('added');
    btn.innerHTML = '<i class="fas fa-cart-plus"></i> Tambah';
  }, 1500);

  animateFlyToCart(btn);

  const badge = $('cartBadge');
  badge.classList.remove('bump');
  void badge.offsetWidth;
  badge.classList.add('bump');
  $('cartBtn').classList.remove('cart-flash');
  void $('cartBtn').offsetWidth;
  $('cartBtn').classList.add('cart-flash');

  updateCart();
  showToast(`\u{1F6D2} ${product.name} ditambahkan ke keranjang!`);
}

function updateCart() {
  cart = cart.map(normalizeCartItem).filter(Boolean);

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalOrig = cart.reduce((sum, item) => sum + item.origPrice * item.qty, 0);
  const discount = totalOrig - subtotal;
  const emptyCartMarkup = `
    <div class="cart-empty" id="cartEmpty">
      <div class="empty-icon">&#128722;</div>
      <p>Keranjangmu masih kosong</p>
      <small>Yuk, tambahkan produk favoritmu!</small>
    </div>`;

  $('cartBadge').textContent = totalQty;

  const itemsEl = $('cartItems');
  const footerEl = $('cartFooter');

  if (!cart.length) {
    itemsEl.innerHTML = emptyCartMarkup;
    footerEl.style.display = 'none';
    $('subtotalAmt').textContent = formatRp(0);
    $('discountAmt').textContent = '- ' + formatRp(0);
    $('shippingAmt').textContent = formatShipping();
    $('totalAmt').textContent = formatRp(0);
    updatePaymentTotals();
    saveCart();
    return;
  }

  footerEl.style.display = 'block';
  itemsEl.innerHTML = '';

  cart.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div class="ci-thumb">
        <img src="${item.image}" alt="" />
      </div>
      <div class="ci-info">
        <div class="ci-name">${item.name}</div>
        <div class="ci-price">${formatRp(item.price)}</div>
        <div class="ci-controls">
          <button class="qty-btn minus" data-id="${item.id}">-</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn plus" data-id="${item.id}">+</button>
          <button class="ci-delete" data-id="${item.id}"><i class="fas fa-trash"></i></button>
        </div>
      </div>`;
    itemsEl.appendChild(div);
  });

  $('subtotalAmt').textContent = formatRp(totalOrig);
  $('discountAmt').textContent = '- ' + formatRp(discount);
  $('shippingAmt').textContent = formatShipping();
  $('totalAmt').textContent = formatRp(subtotal + SHIPPING_COST);
  updatePaymentTotals();

  saveCart();
}

$('cartItems').addEventListener('click', (e) => {
  if (qtyChanging) return;

  const target = e.target.closest('[data-id]');
  const id = Number.parseInt(target?.dataset.id ?? '', 10);
  if (!id) return;

  const idx = cart.findIndex((item) => item.id === id);
  if (idx < 0) return;

  qtyChanging = true;
  setTimeout(() => {
    qtyChanging = false;
  }, 200);

  if (e.target.closest('.plus')) {
    if (cart[idx].qty < 99) {
      cart[idx].qty += 1;
      if ('vibrate' in navigator) navigator.vibrate(50);
    } else {
      showToast('\u274C Maksimal 99 item');
    }
  } else if (e.target.closest('.minus')) {
    if (cart[idx].qty > 1) {
      cart[idx].qty -= 1;
    } else {
      cart.splice(idx, 1);
    }
    if ('vibrate' in navigator) navigator.vibrate(50);
  } else if (e.target.closest('.ci-delete')) {
    cart.splice(idx, 1);
    showToast('\u{1F5D1}\uFE0F Produk dihapus dari keranjang');
  }

  updateCart();
});

function openCart() {
  $('cartSidebar').classList.add('open');
  $('cartOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  $('cartSidebar').classList.remove('open');
  $('cartOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function resetQrisTimerDisplay() {
  $('qrisCountdown').textContent = '10:00';
}

function setPaymentMethod(method) {
  selectedPayment = method;
  $('payQris').classList.toggle('active', method === 'qris');
  $('payCod').classList.toggle('active', method === 'cod');
  $('qrisBox').classList.toggle('hidden', method !== 'qris');
  $('codBox').classList.toggle('hidden', method !== 'cod');
  updatePaymentTotals();
}

function openCheckout() {
  $('checkoutOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
  $('step1').classList.remove('hidden');
  $('step2').classList.add('hidden');
  setPaymentMethod('qris');
  resetQrisTimerDisplay();
}

function closeCheckout() {
  $('checkoutOverlay').classList.remove('active');
  document.body.style.overflow = '';
  stopQrisTimer();
  resetQrisTimerDisplay();
}

function startQrisTimer() {
  let secs = 10 * 60;
  const el = $('qrisCountdown');

  stopQrisTimer();
  el.textContent = '10:00';

  qrisTimer = setInterval(() => {
    secs -= 1;
    const minutes = String(Math.floor(secs / 60)).padStart(2, '0');
    const seconds = String(secs % 60).padStart(2, '0');
    el.textContent = `${minutes}:${seconds}`;

    if (secs <= 0) {
      stopQrisTimer();
      showToast('\u23F0 Waktu pembayaran habis! Silakan coba lagi.');
      closeCheckout();
    }
  }, 1000);
}

function stopQrisTimer() {
  if (qrisTimer) {
    clearInterval(qrisTimer);
    qrisTimer = null;
  }
}

function buildReceipt() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const dateStr = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
  const timeStr = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())} WIB`;
  const orderNo = '#WK-' + String(orderCount).padStart(4, '0');
  const barcode = 'WK' + now.getFullYear() + String(orderCount).padStart(4, '0');

  const name = $('custName').value.trim();
  const phone = $('custPhone').value.trim();
  const address = $('custAddress').value.trim();
  const note = $('custNote').value.trim();

  const totalOrig = cart.reduce((sum, item) => sum + item.origPrice * item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = totalOrig - subtotal;
  const grandTotal = subtotal + SHIPPING_COST;

  const paymentMethodLabel = selectedPayment === 'cod' ? 'COD' : 'QRIS';
  const paymentStatusLabel = selectedPayment === 'cod' ? 'Bayar di Tempat' : '\u2705 LUNAS';

  $('rOrderNo').textContent = orderNo;
  $('rDate').textContent = dateStr;
  $('rTime').textContent = timeStr;
  $('rCashier').textContent = CASHIER_NAME;
  $('rName').textContent = name;
  $('rPhone').textContent = normalizePhoneNumber(phone);
  $('rAddress').textContent = address;
  $('rSubtotal').textContent = formatRp(totalOrig);
  $('rDiscount').textContent = '- ' + formatRp(discount);
  $('rShipping').textContent = formatShipping();
  $('rTotal').textContent = formatRp(grandTotal);
  $('rBarcodeNum').textContent = barcode;
  $('rPaymentMethod').textContent = paymentMethodLabel;
  $('rPaymentStatus').textContent = paymentStatusLabel;
  $('rOrderStatus').textContent = ORDER_STATUS;
  $('rPaymentStatus').classList.toggle('cod-badge', selectedPayment === 'cod');
  $('rPaymentStatus').classList.toggle('paid-badge', selectedPayment !== 'cod');

  const rItems = $('rItems');
  rItems.innerHTML = '';
  cart.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'r-item';
    div.innerHTML = `
      <div class="r-item-left">
        <div class="r-item-name">${item.name}</div>
        <div class="r-item-sub">${formatRp(item.price)} x ${item.qty}</div>
      </div>
      <div class="r-item-right">${formatRp(item.price * item.qty)}</div>`;
    rItems.appendChild(div);
  });

  const noteSection = $('rNote');
  if (note) {
    noteSection.innerHTML = `<strong>\u{1F4DD} Catatan:</strong><br>${escapeHtml(note)}`;
    noteSection.classList.add('visible');
  } else {
    noteSection.innerHTML = '';
    noteSection.classList.remove('visible');
  }

  window._receiptData = {
    name,
    phone: normalizePhoneNumber(phone),
    address,
    note,
    orderNo,
    dateStr,
    timeStr,
    storeName: STORE_NAME,
    cashierName: CASHIER_NAME,
    orderStatus: ORDER_STATUS,
    paymentMethod: paymentMethodLabel,
    paymentStatus: paymentStatusLabel,
    subtotal,
    discount,
    shipping: SHIPPING_COST,
    total: grandTotal,
    items: cart.map((item) => ({
      id: item.id,
      name: item.name,
      qty: item.qty,
      price: item.price,
      total: item.price * item.qty
    }))
  };

  saveOrderHistory(window._receiptData);
}

function openReceipt() {
  $('receiptOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeReceipt() {
  $('receiptOverlay').classList.remove('active');
  document.body.style.overflow = '';
  cart = [];
  saveCart();
  updateCart();
  ['custName', 'custPhone', 'custAddress', 'custNote'].forEach((id) => {
    $(id).value = '';
  });
}

function sendToWhatsApp() {
  const receiptData = window._receiptData;
  if (!receiptData) return;

  const divider = '--------------------';
  const itemLines = cart.length
    ? cart.map((item) => `- ${item.name} (${item.qty}x) = ${formatRp(item.price * item.qty)}`).join('\n')
    : '(kosong)';

  const msg = [
    '\u{1F6D2} *PESANAN WARUNGKU*',
    divider,
    `\u{1F4CB} *No. Order:* ${receiptData.orderNo}`,
    `\u{1F4C5} *Tanggal:* ${receiptData.dateStr}`,
    `\u23F0 *Waktu:* ${receiptData.timeStr}`,
    `\u{1F3EA} *Toko:* ${receiptData.storeName}`,
    `\u{1F9D1}\u200D\u{1F4BC} *Kasir:* ${receiptData.cashierName}`,
    divider,
    `\u{1F464} *Nama:* ${receiptData.name}`,
    `\u{1F4F1} *WhatsApp:* ${receiptData.phone}`,
    `\u{1F4CD} *Alamat:* ${receiptData.address}`,
    divider,
    '\u{1F6CD}\uFE0F *DETAIL PESANAN:*',
    itemLines,
    divider,
    `\u{1F4B0} Subtotal: ${formatRp(receiptData.subtotal + receiptData.discount)}`,
    `\u{1F381} Diskon: - ${formatRp(receiptData.discount)}`,
    `\u{1F69A} Ongkir: ${receiptData.shipping === 0 ? 'Gratis' : formatRp(receiptData.shipping)}`,
    `\u{1F4B3} *TOTAL: ${formatRp(receiptData.total)}*`,
    divider,
    `\u{1F4B3} *Pembayaran: ${receiptData.paymentMethod} ${receiptData.paymentStatus}*`,
    `\u{1F4E6} *Status Pesanan: ${receiptData.orderStatus}*`,
    receiptData.note ? `\u{1F4DD} Catatan: ${receiptData.note}` : '',
    divider,
    'Terima kasih sudah belanja di WarungKu! \u{1F64F}'
  ].filter(Boolean).join('\n');

  window.open(`https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  showToast('\u2705 Membuka WhatsApp...');
}

function printReceipt() {
  if (!window._receiptData) {
    showToast('Struk belum tersedia untuk dicetak.');
    return;
  }

  showToast('Menyiapkan struk untuk dicetak...');
  setTimeout(() => window.print(), 250);
}

function renderOrderHistory() {
  const history = getOrderHistory();
  const list = $('historyList');

  if (!history.length) {
    list.innerHTML = `
      <div class="history-empty">
        <i class="fas fa-receipt"></i>
        <strong>Belum ada pesanan</strong>
        <span>Riwayat akan muncul setelah checkout berhasil.</span>
      </div>`;
    return;
  }

  list.innerHTML = history.map((order) => `
    <div class="history-item">
      <div class="history-top">
        <strong>${escapeHtml(order.orderNo)}</strong>
        <span>${formatRp(order.total)}</span>
      </div>
      <div class="history-meta">${escapeHtml(order.dateStr)} - ${escapeHtml(order.timeStr)}</div>
      <div class="history-meta">Pelanggan: ${escapeHtml(order.name)}</div>
      <div class="history-meta">Pembayaran: ${escapeHtml(order.paymentMethod)} (${escapeHtml(order.paymentStatus)})</div>
      <div class="history-status">${escapeHtml(order.orderStatus)}</div>
      <div class="history-items">${escapeHtml((order.items || []).join(', '))}</div>
    </div>
  `).join('');
}

function openOrderHistory() {
  renderOrderHistory();
  $('historyOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeOrderHistory() {
  $('historyOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function sendContactToWhatsApp() {
  const name = $('contactName').value.trim();
  const email = $('contactEmail').value.trim();
  const message = $('contactMessage').value.trim();

  if (!name || !email || !message) {
    showToast('Lengkapi nama, email, dan pesan dulu.');
    return;
  }

  const msg = [
    '*PESAN KONTAK WARUNGKU*',
    '--------------------',
    `Nama: ${name}`,
    `Email: ${email}`,
    `Pesan: ${message}`
  ].join('\n');

  window.open(`https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  showToast('Membuka WhatsApp admin...');
  $('contactForm').reset();
}

$('cartBtn').addEventListener('click', openCart);
$('cartClose').addEventListener('click', closeCart);
$('cartOverlay').addEventListener('click', closeCart);
$('userBtn').addEventListener('click', openOrderHistory);
$('userBtn').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') openOrderHistory();
});

$('checkoutBtn').addEventListener('click', () => {
  if (!cart.length) {
    showToast('Keranjang masih kosong!');
    return;
  }

  closeCart();
  openCheckout();
});

$('clearCartBtn').addEventListener('click', () => {
  cart = [];
  saveCart();
  updateCart();
});

$('checkoutClose').addEventListener('click', closeCheckout);
$('checkoutOverlay').addEventListener('click', (e) => {
  if (e.target === $('checkoutOverlay')) closeCheckout();
});

$('payQris').addEventListener('click', () => {
  stopQrisTimer();
  resetQrisTimerDisplay();
  setPaymentMethod('qris');
  startQrisTimer();
});

$('payCod').addEventListener('click', () => {
  stopQrisTimer();
  resetQrisTimerDisplay();
  setPaymentMethod('cod');
});

$('toStep2Btn').addEventListener('click', () => {
  const name = $('custName').value.trim();
  const phone = $('custPhone').value.trim();
  const address = $('custAddress').value.trim();

  if (!name) {
    showToast('\u26A0\uFE0F Nama harus diisi!');
    $('custName').focus();
    return;
  }

  if (!phone) {
    showToast('\u26A0\uFE0F WhatsApp harus diisi!');
    $('custPhone').focus();
    return;
  }

  if (!isValidWhatsAppNumber(phone)) {
    showToast('Nomor WhatsApp harus valid, contoh: 08123456789');
    $('custPhone').focus();
    return;
  }

  if (!address) {
    showToast('\u26A0\uFE0F Alamat harus diisi!');
    $('custAddress').focus();
    return;
  }

  $('step1').classList.add('hidden');
  $('step2').classList.remove('hidden');
  updatePaymentTotals();
  if (selectedPayment === 'qris') {
    startQrisTimer();
  }
});

$('backToStep1').addEventListener('click', () => {
  $('step2').classList.add('hidden');
  $('step1').classList.remove('hidden');
  stopQrisTimer();
  resetQrisTimerDisplay();
});

$('confirmPayBtn').addEventListener('click', () => {
  const confirmBtn = $('confirmPayBtn');
  if (confirmBtn.disabled) return;

  confirmBtn.disabled = true;
  confirmBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memproses...';

  stopQrisTimer();
  updateOrderCount();
  closeCheckout();
  buildReceipt();

  // Tampilkan struk. Pengiriman ke WhatsApp dilakukan dari tombol di struk.
  openReceipt();

  confirmBtn.disabled = false;
  confirmBtn.innerHTML = '<i class="fas fa-check"></i> Konfirmasi Bayar';
});

$('receiptClose').addEventListener('click', closeReceipt);
$('receiptOverlay').addEventListener('click', (e) => {
  if (e.target === $('receiptOverlay')) closeReceipt();
});

$('sendWaBtn').addEventListener('click', sendToWhatsApp);
$('printReceiptBtn').addEventListener('click', printReceipt);
$('historyClose').addEventListener('click', closeOrderHistory);
$('historyOverlay').addEventListener('click', (e) => {
  if (e.target === $('historyOverlay')) closeOrderHistory();
});

document.querySelectorAll('.cat-btn[data-cat]').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn[data-cat]').forEach((item) => item.classList.remove('active'));
    btn.classList.add('active');
    currentCat = btn.dataset.cat;

    const titles = {
      semua: 'Semua Produk',
      minuman: 'Minuman',
      makanan: 'Makanan',
      cemilan: 'Cemilan'
    };

    const subtitles = {
      semua: 'Pilihan terbaik untuk kamu',
      minuman: 'Segar dan nikmat',
      makanan: 'Mengenyangkan dan lezat',
      cemilan: 'Camil santai tiap saat'
    };

    $('sectionTitle').textContent = titles[currentCat];
    $('sectionSubtitle').textContent = subtitles[currentCat];
    renderProducts(currentCat, $('searchInput').value.trim());
    
    $('productsSection').scrollIntoView({ behavior: 'smooth' });
  });
});

let searchTimeout;
$('searchInput').addEventListener('input', (e) => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    renderProducts(currentCat, e.target.value.trim());
  }, 300);
});

$('productsGrid').addEventListener('click', (e) => {
  const btn = e.target.closest('.add-btn');
  if (!btn) return;

  const id = Number.parseInt(btn.dataset.id, 10);
  addToCart(id, btn);
});

function scrollToProducts() {
  $('productsSection').scrollIntoView({ behavior: 'smooth' });
}

window.scrollToProducts = scrollToProducts;

window.addEventListener('scroll', () => {
  const nav = $('navbar');
  nav.style.boxShadow = window.scrollY > 10
    ? '0 4px 30px rgba(0,0,0,0.3)'
    : '0 2px 20px rgba(0,0,0,0.2)';
});

const contactForm = $('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sendContactToWhatsApp();
  });
}

const backToTop = $('backToTop');
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  localStorage.removeItem('wk_order_history');
  loadCart();
  renderProducts();
  updateCart();
  resetQrisTimerDisplay();
});
