'use strict';

(function () {
  const POS_ONLINE_ORDERS_KEY = 'pos.onlineOrders';
  const POS_ONLINE_ORDERS_PATH = 'onlineOrders';
  const REFRESH_INTERVAL_MS = 5000;

  function getFirebaseDatabaseUrl() {
    return String(window.WARUNGKU_FIREBASE_DATABASE_URL || '').trim().replace(/\/$/, '');
  }

  function isFirebaseConfigured() {
    return /^https:\/\/.+firebaseio\.com$|^https:\/\/.+firebasedatabase\.app$/.test(getFirebaseDatabaseUrl());
  }

  function normalizeOrders(data) {
    if (!data || typeof data !== 'object') return [];

    return Object.entries(data)
      .map(([id, order]) => ({ id, ...order }))
      .filter((order) => order && typeof order === 'object')
      .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  }

  function getLocalOrders() {
    try {
      const raw = localStorage.getItem(POS_ONLINE_ORDERS_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function publishOrders(orders) {
    localStorage.setItem(POS_ONLINE_ORDERS_KEY, JSON.stringify(orders));
    window.dispatchEvent(new CustomEvent('warungku:online-orders', {
      detail: { orders }
    }));

    if (typeof window.onWarungKuOnlineOrders === 'function') {
      window.onWarungKuOnlineOrders(orders);
    }
  }

  function publishError(error) {
    window.dispatchEvent(new CustomEvent('warungku:online-orders-error', {
      detail: { error }
    }));
  }

  async function loadOnlineOrders() {
    if (!isFirebaseConfigured()) {
      console.warn('Isi WARUNGKU_FIREBASE_DATABASE_URL di firebase-config.js agar POS bisa membaca order online.');
      return getLocalOrders();
    }

    const url = `${getFirebaseDatabaseUrl()}/${POS_ONLINE_ORDERS_PATH}.json`;
    const response = await fetch(url, { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`Firebase error ${response.status}`);
    }

    const data = await response.json();
    const orders = normalizeOrders(data);

    publishOrders(orders);

    return orders;
  }

  async function updateOrderStatus(orderId, status) {
    if (!orderId || !status) return false;

    const localOrders = getLocalOrders().map((order) => (
      order.id === orderId ? { ...order, status } : order
    ));
    publishOrders(localOrders);

    if (!isFirebaseConfigured()) return false;

    const url = `${getFirebaseDatabaseUrl()}/${POS_ONLINE_ORDERS_PATH}/${encodeURIComponent(orderId)}.json`;
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        status,
        updatedAt: new Date().toISOString()
      })
    });

    if (!response.ok) {
      throw new Error(`Firebase error ${response.status}`);
    }

    return true;
  }

  window.WarungKuPOSBridge = {
    getLocalOrders,
    loadOnlineOrders,
    updateOrderStatus,
    isFirebaseConfigured
  };

  loadOnlineOrders().catch((error) => {
    console.warn('Order online belum bisa dibaca:', error);
    publishError(error);
  });

  window.setInterval(() => {
    loadOnlineOrders().catch((error) => {
      console.warn('Order online belum bisa dibaca:', error);
      publishError(error);
    });
  }, REFRESH_INTERVAL_MS);
}());
