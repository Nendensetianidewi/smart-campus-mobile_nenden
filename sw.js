const CACHE_NAME = 'smartcampus-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  'https://code.jquery.com/jquery-3.6.4.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});