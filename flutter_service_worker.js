'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e6731929d6f1ddbbe1cb021f0665d7ef",
"assets/AssetManifest.bin.json": "0004f98f0d40daa1d9613b1ac76b80d1",
"assets/AssetManifest.json": "8745f0ae1cbbdc26b41be2d87cbaf480",
"assets/assets/images/apk_icon.png": "614ab581e31acd593ab36f5bb7d5abff",
"assets/assets/images/app_store_icon.png": "e7d949298d160648d1ed983e59aadc72",
"assets/assets/images/background_image_1.png": "f342143c168b43ff9fb46a59f0ad7734",
"assets/assets/images/background_image_2.png": "1ee2fa95943b6a4c10c1390aa0da905d",
"assets/assets/images/behance.png": "bbfda184c4ff25c382844629da3af6d8",
"assets/assets/images/Carzo.jpg": "18a4125def77fa607e3bef482fd028b8",
"assets/assets/images/github_icon.png": "a165bf6db4e13579db1d1c0224bf2e84",
"assets/assets/images/google_play_icon.png": "826d9e6d409bade781ec4aeeef56191e",
"assets/assets/images/Modish.jpg": "b6212829ad068050d2cfc7a0d73ef613",
"assets/assets/images/placeholder.jpg": "a283c37d0aca050ea5dacdd17c531eb8",
"assets/assets/images/Pockito.jpg": "08567868cd41d3a4e4df759a319042ec",
"assets/assets/images/profile.jpg": "b8f2054d69a35dd561519fd7c48a41fd",
"assets/assets/images/qutouf_al_daad.jpg": "249b6347bc8712fbaf2f6d66902d7379",
"assets/assets/master/logo.png": "2c334213485df5b17e071b18014731b3",
"assets/assets/master/splash_screen.png": "3b6d785711cb7946db81ca6a62acbc1e",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/fonts/MaterialIcons-Regular.otf": "38f806dd3c8b12687bd4d14abdb3e5c6",
"assets/NOTICES": "f7cc9f2569b624cbadd0249f03e242b8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "27cfa127617ce10593433c073c1c3a58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "03d4d10f4ba51a280d186f2da3b9b456",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.ico": "6295952dae03f7f2ee49391aeb2cee93",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "91101865ce5c9c0ba41be774eaa727d0",
"icons/Icon-192-maskable.png": "2db7e1b674572a3a55820a67e5a92b98",
"icons/icon-192.png": "7751e0dd0407f455fff390b30bfd716f",
"icons/Icon-512-maskable.png": "ccd1e607b808d3adf5c1b58dac004567",
"icons/icon-512.png": "18098657eb133c81b440fde8cd6eb897",
"index.html": "a11e2c5b95386818fd972967067bac7b",
"/": "a11e2c5b95386818fd972967067bac7b",
"main.dart.js": "dcb2f9ef08d581112effc40e2e67142f",
"manifest.json": "0b17348f6dd60b80a2a3963ef1e3f562",
"splash/img/dark-1x.png": "9a79aa54f72f93a3eba822359b4eedf3",
"splash/img/dark-2x.png": "ffb6bb1256c34a721fb9d85375cf2325",
"splash/img/dark-3x.png": "34396110f80f6f86be91cb24f1a30b59",
"splash/img/dark-4x.png": "4e172a2bacd216e80e6cc971615dc8f9",
"splash/img/light-1x.png": "9a79aa54f72f93a3eba822359b4eedf3",
"splash/img/light-2x.png": "ffb6bb1256c34a721fb9d85375cf2325",
"splash/img/light-3x.png": "34396110f80f6f86be91cb24f1a30b59",
"splash/img/light-4x.png": "4e172a2bacd216e80e6cc971615dc8f9",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
