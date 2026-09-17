const CACHE_NAME = 'adhikar-cache-v20260917-r3';
const urlsToCache = [
  './',
  './index.html',
  './rights.html',
  './schemes.html',
  './official-contacts.html',
  './fraud-warning.html',
  './problem-to-remedy.html',
  './fee-transparency.html',
  './escalation-guide.html',
  './land-revenue-guide.html',
  './status-check.html',
  './templates.html',
  './css/styles.css?v=20260917-r3',
  './js/main.js?v=20260917-r3',
  './js/config.js',
  './data/schemes.json'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache).catch(() => {}))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Purging old SW cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Network-first strategy for HTML pages, CSS, and JS so updates apply immediately.
// Offline fallback to cached versions when no network connection.
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const isNavigation = event.request.mode === 'navigate';
  const isCode = event.request.destination === 'style' || event.request.destination === 'script';

  if (isNavigation || isCode) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        });
      })
  );
});
