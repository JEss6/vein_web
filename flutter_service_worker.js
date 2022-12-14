'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "464fc39f93d34ccd5989575adf64b944",
"index.html": "fb01115e0cb429b09af7925f3f7e3e27",
"/": "fb01115e0cb429b09af7925f3f7e3e27",
"main.dart.js": "503e5963cf1eca4a02a6e614f9fb1abf",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "873fa2cc119fd9e7cdfd1b0f30621d70",
".git/config": "be9161aa77a5d3d8d7e5fe962c03f3ca",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/6a/8002c44c0e031d800145067f5d389b65feff6c": "277aec54e5ed92895d4f2e78a9d58aee",
".git/objects/69/e9de9275eff51bc7843620dd955a121f78261f": "7feb60f9b1d69091f7d312a6f8219a28",
".git/objects/05/9e608f2851f456bf76899e1cdbe7ab485ef718": "9e2e75606982bda11855c2d11ac598c3",
".git/objects/05/60e7da58d1bd7944567d483edabc419dd38a8a": "ae8414dcfe606295c80cc61ff8d42b72",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/da/581e0b9085e79b32f8edc790a14974bad65926": "d4051ab3e3e0c1f7cb5adaff8314ea50",
".git/objects/a2/9763941fb49bedbfea8c78cb59b9cb715f4c74": "d9ab9803b11630ce48faa1d248fc8721",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/79881bc56ec01cd8661898f59a9c6460c3ddc0": "a175c953dc015c6bacef9de1c9b4ed58",
".git/objects/e3/11c6006534da7ea8c8ab22c0e85157ad69c722": "c9791fad6076745b09aaec1778ca47fb",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/18/541f30b0cbe99ff2fd548ac3e2607d47980135": "8d8872293bd9ff9a36fb8620de130bb4",
".git/objects/73/f2b8f63a2cf4a758b1cae99da4c1499b59940a": "6ab4d71a6252511398d54c7576c3f31c",
".git/objects/7b/d92f4384810e5ba190898712ae4fad83fa9727": "8cea66ed5d98e78b09249398f41929d3",
".git/objects/8a/0e252b617e79905032a455c98181244283927b": "fb5bcf647bec9cf5e84d7463ae69779f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/f426e324c1bee0a50f986bcd9a6712ee4dff38": "00795be9ecf37b8d5593147cdfa76522",
".git/objects/86/37dfc84ee17d87b7c0773e439e001c7bab70d7": "988949cc8d6a5ec3dfbfa8077f26c586",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/c6736233c18b2343da3ecdaa3b70d949d8bb89": "f08fa61c031f5662d12707e49c59b109",
".git/objects/9a/1063533dfb8695571353bbcd0724429c8dca7f": "a650a8dd17a15c49ddec8db1c846a216",
".git/objects/36/88b836c1026c894a80ff6b2c3fc98297af4eb7": "8de8624d75c5428774a57e7c5072460b",
".git/objects/65/249995b9dacbbe62089d09988897a312b5b666": "05be4100a43ea38301e128971e0b9830",
".git/objects/65/45720440dc91e473001e3557cc09d9ea51ea01": "f2c6a9167c436102b046f0406bbc140a",
".git/objects/54/384d0daa246d05550ccf55a8e8cbf8bd5195cc": "382e0e52f307ea12d8c08f4cf92110ed",
".git/objects/0f/7c4636d40d33a7618bfe26388933b8f42e5643": "abac05e1116abe8bac121763f69febd7",
".git/objects/a7/eb448f91c1def7c97fae023a5277888a9615d7": "f2bae1eb90910ff861acc859c952253f",
".git/objects/a9/1af7b6c93cdfdf158f0da2975c9b5a77f486c2": "55ca8b779cde4b7de150b79b2ea5e0cf",
".git/objects/a9/8f52c24defe98dd238e7208005c24d3f2a4a9d": "48c83a28bac361418ca9fe9b378a12ff",
".git/objects/a9/816623f4887948f676dc9ae5ffb1c10e2c1edf": "efebd75487b487c2123b091ad1af8623",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/c5a0524c70c6ecf8f7f459316a8fe1e6e09ebf": "97b852c4d8a5dc1ff4fcd9e604568328",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/b6b2894111a855f969b61ef7130e685ff3bf87": "ff7732182f8ea69011296b3009ce98a4",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f1/a622cc61ae99e87df0dfd45656b44e91f1c179": "07282bb0a77e6609e82a4a431cebf34e",
".git/objects/f1/ae8310ba3068c67792f6a75972aa8c2a279b11": "8a7efcde2241ebf87fa28f8e5abe73b7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/41/83ae8714110d342486b8da966b95adc2bd29a9": "5e66d297081bb092cbf07bedacaeda6f",
".git/objects/48/fd1df0fb885f061990954083f8b52d1f149ed9": "7005dfbf2e2ea54a88e42e49649f1e1b",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/cbd58c0efef22079a57eff036b0ee4842f7293": "1eff67c5ef4f14cd23d8e5e6098f327f",
".git/objects/12/43e1c5ab14cccff0832cf3d2f14d2ed53caf0d": "df36a8e00f4b33b55e9dc69c7051f1cd",
".git/objects/85/4371ab0c308745f5f6b9dd93a223cf93cccea8": "dc8b9a04b514682594c957756c985742",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/13/2480d869627f8359371765b4e7bed3710e0b36": "57263bdf4b0057bb49ce95bd0d9f5343",
".git/objects/7a/2c172672082e5186b54e6cda00b8187213ee1f": "52cc336ec7a6344bdfd716cb595bbbb6",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "628a6fbdd6a646a99d7858a3aa48f164",
".git/logs/refs/heads/master": "628a6fbdd6a646a99d7858a3aa48f164",
".git/logs/refs/remotes/origin/HEAD": "bbb9c56cfabcd2972817e687653c0eaf",
".git/logs/refs/remotes/origin/master": "c79714f235402cb654a2092d312326ff",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "d874d003566125e79b2ff8c5d24cc95d",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "d874d003566125e79b2ff8c5d24cc95d",
".git/index": "ea245657e7a2ef44ef6e47232e4d7df1",
".git/COMMIT_EDITMSG": "319a943d8619b3abc892b99229b0f6fa",
".git/FETCH_HEAD": "dd9c1a477e3bfc7f0efc8040dcea8b28",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "aff442e02ee49226c1480f23f7d7cf50",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
