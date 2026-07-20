console.log("[SW] Custom Service Worker cargado");

self.addEventListener("install", (event) => {
  console.log("[SW] Install");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("[SW] Activate");
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  console.log("[SW] Fetch:", event.request.url);
});

self.addEventListener("message", (event) => {
  console.log("[SW] Mensaje recibido:", event.data);
});

// Importa el Service Worker
importScripts("./ngsw-worker.js");