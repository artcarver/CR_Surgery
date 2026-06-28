// Service worker for the Colorectal Surgery Rotation Reference.
// Cache-first with background refresh so the page works offline after the
// first visit. Bump CACHE to invalidate when the app shell changes.
const CACHE = 'crs-v2';

// Same-origin app shell to precache on install.
const ASSETS = [
  './',
  './index.html',
  './support.js',
  './site.webmanifest',
  './icon.svg',
  './favicon-16.png',
  './favicon-32.png',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './colorectal_surgery_cheat_sheet.md'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    caches.match(req).then((hit) => {
      const net = fetch(req).then((res) => {
        // Cache successful same-origin and CDN (React, fonts) responses so
        // repeat visits work offline. Opaque responses are cached as-is.
        if (res && (res.ok || res.type === 'opaque')) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => hit);
      // Serve cache immediately when present; otherwise wait on the network.
      return hit || net;
    })
  );
});
