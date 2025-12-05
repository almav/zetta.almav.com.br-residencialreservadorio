// Este é o service worker para cópia offline das páginas

const CACHE = "almav-mapas-zetta-reservadorio-offline-v1.00";

// Importa a biblioteca Workbox do CDN
// https://developer.chrome.com/docs/workbox/modules/workbox-sw
// https://github.com/googlechrome/workbox/releases
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/7.4.0/workbox-sw.js"
);

// Event listener para a mensagem de skipWaiting
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Estratégia de cache para usar stale-while-revalidate para todas as requisições
workbox.routing.registerRoute(
  ({ request }) =>
    request.destination === "document" ||
    request.destination === "script" ||
    request.destination === "style" ||
    request.destination === "image" ||
    request.destination === "font" ||
    request.destination === "text" ||
    request.destination === "json",
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE,
  })
);

// Cache de URLs externas específicas com CORS
const externalUrls = [
  "https://maps.app.almav.com/",
  "https://maptiles.almav.com/",
  "https://storage.almav.com/",
  "https://unpkg.com/",
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile",
  "https://almav.github.io",
  "https://cdn.jsdelivr.net"
];

externalUrls.forEach((url) => {
  workbox.routing.registerRoute(
    new RegExp(url),
    new workbox.strategies.NetworkFirst({
      cacheName: CACHE,
      fetchOptions: {
        mode: "cors",
      },
    })
  );
});