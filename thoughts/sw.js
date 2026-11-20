/* When Your Thoughts Won't Stop: keeps the page, voice guide and water sounds available offline. */
var CACHE = 'wml-thoughts-v1';
var FILES = [
  '/thoughts/', '/thoughts/index.html', '/thoughts/manifest.webmanifest',
  '/thoughts/icon-192.png', '/thoughts/icon-512.png',
  '/thoughts/audio/When-Your-Thoughts-Wont-Stop.mp3', '/thoughts/audio/stream-loop.mp3', '/thoughts/audio/rain-loop.mp3',
  '/thoughts/When-Your-Thoughts-Wont-Stop.pdf',
  '/breathe/art/sea.jpg', '/site/nav.css?v=4', '/site/nav.js?v=4', '/site/share.js?v=1', '/assets/favicon-48.png'
];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return Promise.all(FILES.map(function (u) { return c.add(new Request(u, { cache: 'reload' })).catch(function () {}); }));
  }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k.indexOf('wml-thoughts-') === 0 && k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== location.origin) return;
  // Pages: network first so updates arrive, cached copy when offline.
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(function (r) {
      var copy = r.clone(); caches.open(CACHE).then(function (c) { c.put('/thoughts/', copy); }); return r;
    }).catch(function () { return caches.match('/thoughts/'); }));
    return;
  }
  // Audio uses range requests: go to the network first, and fall back to the cached file offline.
  if (req.headers.get('range')) {
    e.respondWith(fetch(req).catch(function () { return caches.match(url.pathname); }));
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: url.pathname.indexOf('/thoughts/') === 0 }).then(function (hit) {
    return hit || fetch(req);
  }));
});
