import 'regenerator-runtime';
import { precacheAndRoute } from 'workbox-precaching';
import { clientsClaim, setCacheNameDetails } from 'workbox-core';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, NetworkFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import CONFIG from './global/config';

const {
  BASE_URL,
  PRECACHE_NAME,
  PRECACHE_PREFIX,
  API_CACHE_NAME,
  IMAGE_CACHE_NAME,
} = CONFIG;

self.skipWaiting();
clientsClaim();

setCacheNameDetails({
  prefix: PRECACHE_PREFIX,
  precache: PRECACHE_NAME,
});

// Precache app shell
self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell(self.__WB_MANIFEST));
});

// Delete old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

// Precache other assets
precacheAndRoute(self.__WB_MANIFEST, {ignoreURLParametersMatching: [/.*/]});

registerRoute(
    ({url, request}) => {
      return url.origin === API_BASE_URL && request.destination !== 'image';
    },
    new NetworkFirst({cacheName: API_CACHE_NAME}),
);

registerRoute(
    ({url, request}) => {
      return url.origin === API_BASE_URL && request.destination === 'image';
    },
    new CacheFirst({
      cacheName: IMAGE_CACHE_NAME,
      plugins: [
        new CacheableResponsePlugin({statuses: [0, 200]}),
        new ExpirationPlugin({
          maxEntries: 40,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
      ],
    }),
);

// Handle fetch events
self.addEventListener('fetch', (event) => {
  if (event.request.method === 'GET') {
    event.respondWith(CacheHelper.revalidateCache(event.request));
  }
});
