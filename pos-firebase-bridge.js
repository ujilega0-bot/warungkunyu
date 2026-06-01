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

    return Object.values(data)
      .filter(Boolean)
      .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  }

  async function loadOnlineOrders() {
    if (!isFirebaseConfigured()) {
      console.warn('Isi WARUNGKU_FIREBASE_DATABASE_URL di firebase-config.js agar POS bisa membaca order online.');
      return [];
    }

    const url = `${getFirebaseDatabaseUrl()}/${POS_ONLINE_ORDERS_PATH}.json`;
    const response = await fetch(url, { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`Firebase error ${response.status}`);
    }

    const data = await response.json();
    const orders = normalizeOrders(data);

    localStorage.setItem(POS_ONLINE_ORDERS_KEY, JSON.stringify(orders));
    window.dispatchEvent(new CustomEvent('warungku:online-orders', {
      detail: { orders }
    }));

    if (typeof window.onWarungKuOnlineOrders === 'function') {
      window.onWarungKuOnlineOrders(orders);
    }

    return orders;
  }

  window.WarungKuPOSBridge = {
    loadOnlineOrders,
    isFirebaseConfigured
  };

  loadOnlineOrders().catch((error) => {
    console.warn('Order online belum bisa dibaca:', error);
  });

  window.setInterval(() => {
    loadOnlineOrders().catch((error) => {
      console.warn('Order online belum bisa dibaca:', error);
    });
  }, REFRESH_INTERVAL_MS);
}());
