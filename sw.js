
const CACHE_NAME = 'adhikar-cache-v1';
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
  './css/styles.css',
  './js/main.js',
  './js/config.js',
  './data/schemes.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
