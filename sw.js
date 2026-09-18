const CACHE_NAME = 'adhikar-cache-v20260918-r21';
const urlsToCache = [
  './',
  './index.html',
  './rights.html',
  './schemes.html',
  './articles.html',
  './drafter.html',
  './problem-to-remedy.html',
  './official-contacts.html',
  './status-check.html',
  './templates.html',
  './escalation-guide.html',
  './land-revenue-guide.html',
  './fee-transparency.html',
  './fraud-warning.html',
  './legal.html',
  './article-awas.html',
  './article-fir.html',
  './article-gramsabha.html',
  './article-pension.html',
  './article-pmkisan.html',
  './article-ration.html',
  './article-rti.html',
  './article-varasat.html',
  './css/styles.css?v=20260918-r21',
  './js/main.js?v=20260918-r1',
  './js/config.js',
  './js/drafter.js',
  './data/schemes.json',
  './assets/hero_village_panoramic.jpg',
  './assets/hero_rights_justice.jpg',
  './assets/hero_schemes_farmer.jpg',
  './assets/hero_articles_study.jpg',
  './assets/hero_drafter_desk.jpg',
  './assets/hero_problem_remedy.jpg',
  './assets/hero_status_track.jpg',
  './assets/hero_official_contacts.jpg',
  './assets/hero_templates_forms.jpg',
  './assets/hero_escalation_steps.jpg',
  './assets/hero_land_survey.jpg',
  './assets/hero_fee_transparency.jpg',
  './assets/hero_fraud_warning.jpg',
  './assets/poster_legal_policy.svg'
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
