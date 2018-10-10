//declare what want to cache along with cache name
const cacheName = "static";
//yes, you can cache external fetched resources
const precacheResources = [
  "/",
  "index.html",
  "about.html",
  "contact.html",
  "work.html",
  "funcredits.html",
  "css/main.css",
  "js/main.js",
  "img/background.jpg",
  "img/yodaPortrait_reduced.jpg",
  "img/yodaPortrait.jpg",
  "img/projects/project1.jpg",
  "img/projects/project2.jpg",
  "img/projects/project3.jpg",
  "img/projects/project4.jpg",
  "img/projects/project5.jpg",
  "img/icons/app-icon-96.png",
  "img/icons/app-icon-192.png",
  "img/icons/app-icon-256.png",
  "img/icons/app-icon-512.png",
  "https://use.fontawesome.com/releases/v5.2.0/css/all.css"
];

// Listen for install event, set callback
self.addEventListener("install", function(event) {
  console.log("Service worker installed");
  //add the declared static assets want to cache
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(precacheResources);
    })
  );
});

// Listen for activate event, set callback
self.addEventListener("activate", function(event) {
  console.log("Service worker activated");
});

// Listen for fetch event, set callback
self.addEventListener("fetch", event => {
  console.log("Service worker fetching:", event.request.url);

  //use worker as network proxy
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
