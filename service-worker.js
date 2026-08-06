// Service Worker — Simulador de Examen (Repositorio)
// Estrategia: cache-first para el App Shell, permite funcionamiento 100% offline.

const CACHE_NAME = 'simulador-cache-v1';
const ARCHIVOS_CACHE = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './preguntas.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ARCHIVOS_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if(event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if(cachedResponse) return cachedResponse;

      return fetch(event.request)
        .then((networkResponse) => {
          if(networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic'){
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return networkResponse;
        })
        .catch(() => {
          if(event.request.mode === 'navigate'){
            return caches.match('./index.html');
          }
        });
    })
  );
});
