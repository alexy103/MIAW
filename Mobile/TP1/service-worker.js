var CACHE_NAME = "my-cache-v1";
var urlsToCache = [
  "/",
  "css/mini.css",
  "img/icons/pwa-app-icon-192.png",
  "img/icons/pwa-app-icon-512.png",
  "img/icons/logo_univlr.png",
  "js/main.js",
  "index.html",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// self.addEventListener('activate', async function(event){
//   self.clients.claim(); //le nouveau service worker prend le contrôle de toutes les pages ouvertes de console.log("ServiceWorker activé");
//   });
//   self.addEventListener("fetch", function(event) {
//   console.log("Fetch request for:", event.request.url);
//   event.respondWith(
//   fetch(event.request)
//   .catch(function() { return caches.match("index.html"); // reponse en cas d’erreur
//   })
//   );
//   });

self.addEventListener("activate", function (event) {
  var cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }

      var fetchRequest = event.request.clone();
      return fetch(fetchRequest).then(function (response) {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        var responseToCache = response.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseToCache);
        });
        return response;
      });
    })
  );
});

function reSync() {
  self.addEventListener("sync", (event) => {
    if (event.tag === "syncData") {
      const request = indexedDB.open(dbName);
      request.onsuccess = (event) => {
        const transaction = event.target.result.transaction(
          "events",
          "readonly"
        );
        const store = transaction.objectStore("events");
        const getAllRequest = store.getAll();
        getAllRequest.onsuccess = (event) => {
          const data = event.target.result;
          // a rajouter : envoi des données vers le serveur
          fetch("https://bbessere.lpmiaw.univ-lr.fr/TPBase/getdata.php", {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify(record),
          })
            .then(function (res) {
              console.log("OK sending data", res);
            })
            .catch(function (err) {
              console.log("Error while sending data", err);
            });
          // en cas de succès, effacer les enregistrements de indexedDB
          // en cas d’échec, on s’arrete là
        };
      };
      request.onerror = (event) => {
        reject("Error opening IndexedDB: " + event.target.error);
      };
    }
  });
}
