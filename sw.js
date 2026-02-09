/* Service Worker - PWA Offline Support */

const CACHE_NAME = 'daily-tarot-v1';
const ASSETS_TO_CACHE = [
    '/',
    'index.html',
    'manifest.json',
    'css/style.css',
    'js/i18n.js',
    'js/tarot-data.js',
    'js/app.js',
    'icon-192.svg',
    'icon-512.svg',
    'js/locales/ko.json',
    'js/locales/en.json',
    'js/locales/zh.json',
    'js/locales/ja.json',
    'js/locales/hi.json',
    'js/locales/ru.json',
    'js/locales/es.json',
    'js/locales/pt.json',
    'js/locales/id.json',
    'js/locales/tr.json',
    'js/locales/de.json',
    'js/locales/fr.json'
];

// Install event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS_TO_CACHE).catch(err => {
                console.log('Cache addAll error:', err);
                // Continue even if some assets fail to cache
                return Promise.resolve();
            });
        })
    );
    self.skipWaiting();
});

// Activate event
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch event
self.addEventListener('fetch', event => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    // Network first, fallback to cache
    event.respondWith(
        fetch(event.request)
            .then(response => {
                // Cache successful responses
                if (response.ok) {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, responseClone);
                    });
                }
                return response;
            })
            .catch(() => {
                // Fallback to cache
                return caches.match(event.request)
                    .then(response => {
                        if (response) {
                            return response;
                        }
                        // Return a fallback page if needed
                        return caches.match('index.html');
                    });
            })
    );
});

// Background sync for future features
self.addEventListener('sync', event => {
    if (event.tag === 'sync-readings') {
        event.waitUntil(
            // Sync reading data with server when connection is restored
            Promise.resolve()
        );
    }
});
