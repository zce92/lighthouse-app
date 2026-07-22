const CACHE_NAME = "lighthouse-v1";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(APP_SHELL);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k !== CACHE_NAME; }).map(function(k){ return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

// Cache-first for our own app shell files. Everything else (like the
// live location-lookup API call) goes straight to the network, untouched —
// we never want to serve a stale emergency number from cache.
self.addEventListener("fetch", function(event){
  const url = new URL(event.request.url);
  if(url.origin !== self.location.origin){
    return; // let cross-origin requests (the geocoding API) pass through normally
  }
  event.respondWith(
    caches.match(event.request).then(function(cached){
      return cached || fetch(event.request).then(function(response){
        return caches.open(CACHE_NAME).then(function(cache){
          cache.put(event.request, response.clone());
          return response;
        });
      }).catch(function(){
        return caches.match("./index.html");
      });
    })
  );
});
