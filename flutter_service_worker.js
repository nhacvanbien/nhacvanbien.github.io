'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "24185e3206966099deadf620961f01e4",
".git/config": "2d495fbf184f28740bb4f3d4b376222a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "740454ec960534aa4770217a4860f191",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "23105e73bf718267c2755704f8f1f796",
".git/logs/refs/heads/master": "23105e73bf718267c2755704f8f1f796",
".git/logs/refs/remotes/origin/master": "f3220d247f236001e082d286f0896b2c",
".git/objects/09/92154586fa9c1dcbc1d1ec102b96988c00f5bd": "b09d6cba96ac95a13acb487ad6e1d5d9",
".git/objects/0e/9263d86fd9b5313172c6cb7d9208869cfa788c": "7be3b2f4a500b617dbe5ea126595858a",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/10/12ebefd46fda03da94f6d080da77d2974dd199": "a407329948f87666f99380a0df90517d",
".git/objects/11/ccbb9a64ccd33f6a255a062b297c361ac8b0ff": "fcb2eb87b139afe08a44580f5d69a76d",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1c/342cb63f2bf060465db66f0b519015a01a062d": "e492f0827829571afa480689761d2b8b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/95927ce21b9beb2ed6303a3321a7619699b21b": "b15a7f59331fa6bd71baeac35ee194c1",
".git/objects/25/f07128b87b360a1f2c5a012e6d184c5aa7d35e": "0558bd34516d890d628e47941bc29abe",
".git/objects/27/b09c61e9dbeeb5b262e0d3874882d16da6d188": "2d2908cd8f39fca9a9520f7abae43426",
".git/objects/2e/765dc4b9655337a08041605215f2c7d7d4515a": "c55961516d8800f1c65bd853d3377b9b",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/38/49a2200163e132ebc046a0be46faf3b576a2b7": "1e915e32a440ffd79d65530c67fbfa26",
".git/objects/3c/400ee64d4f676c4c4a3ac746b1a5d7f0b51265": "4123deff6ec3533c22f1f0dbe98477f1",
".git/objects/3f/6b9af5044baf9f06f1c5d7888cbf037ff018bb": "6042c463cc9b25d03feed0633e35d909",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/0f4501c604f6f58d970068767c7857c6b466d8": "e11a6cb907669ddff7f65d8a19c4e481",
".git/objects/4e/177df025f8b92be51e2e13a576f809bd4eb126": "470000aabb5c3ff1ce81eda243bef3c7",
".git/objects/53/464d9ef8420e32cbac1d554fd987080ed3852b": "57ab27bfb485a7511923afe22c775b83",
".git/objects/59/358576e213791e99dbfe0fc7af4c423cee351a": "b883e225d5eaf280a36d999395c55733",
".git/objects/5c/028cd6b98470e01c43c668d2a39cb028ba7cb7": "14b688116446c015fe2144427e4c64a2",
".git/objects/5c/a15bc2c0bc83ba6ffe7c1d93d4d4a0d4a27219": "48e850ef5953bb02d5878c31d27f1363",
".git/objects/5f/56be7957a4ecf4d537aed68377593bee895677": "507caa7445ec53a75d4413c8658a641d",
".git/objects/63/f97b6ef419793271d07a949317adb44d30be13": "c0de2c4133cc551ee9098200f8c63970",
".git/objects/66/c17b3703085b4eea62d9bfe88466d1f747072e": "2c50509512edc90aab3642c3e232c416",
".git/objects/7a/92cd60f7e7072b2b263a09d5cc5bfcd7f58e10": "e9c94f4041b5e8256b454190d17c896e",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/83/b98ddc8589814111de8bab1ed203264ba244d4": "bb1b1a4dd1018c2e638a70117e10eb88",
".git/objects/83/bcac83130a868b5f71d8ddf43ba6e8c0507e1e": "18d7eb72cd5f0a87ea73c65ef130728f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/8b861539e46daa1ced309a9ab1f1926998a520": "d0299dbfd46aeb93ab2e4d9bd7f442bb",
".git/objects/92/3ba60d0a4343f58381203f6ddf0651e47b3942": "c53f385bb75bae097676a5aa625e1746",
".git/objects/93/c9b9e4b6637e9f9195eb5c5f848a00226075d6": "4af066d1b7e5fe762c1a6dd86bf86bfc",
".git/objects/96/cf1e979f14e456696c516ebce85b7b7e91cef9": "3831a44c086964d2885286e845c04332",
".git/objects/a1/29a670e59e67f103378e136ec66256f8203a59": "67dfe06a634581da4a469919c87fe818",
".git/objects/a4/95eed100fe06800e9905dfee3cd9fc10d1fad4": "44d2c30469bbb3a21325193baf4d4cf2",
".git/objects/a4/972a88d37dc987a4329bdd6bf3ab4512e957b8": "9c8862d007df4edd099ae2aeefcd4f6b",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/af/6a332ebf81f5ebd2edf2abfe13fc6fdaff92a6": "9a0016f4a3d03fa67135b88190ef71cd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/6e9ccb02e97ed2ca2ef6cd1c7ad9fb52a8bc9d": "bff03e351b78b6fb906925777690199b",
".git/objects/be/39dadca89e28e3943415753fade50ee1d00118": "03c1f5d74c6ad00dcd379d6d62a340ef",
".git/objects/c2/965ed74febd7b96a7eba081f82836f49076413": "43cbb15edc12c6766ff90ee9e768d2b2",
".git/objects/c9/54ee9e910d6df1cf7f2f2fbf7c50d144fb4e26": "7494474e53a456ac0c16f6c64f097b36",
".git/objects/d6/8f579d2c9de34149b865f0b40a0b882a82c77e": "c6150f0a14a67915dca7cff76430b2e2",
".git/objects/d7/06a7f2b6f6fec6792c56bb1836ace4af3cc5fd": "6b058f551f3bf4088fbd2d0b406718cc",
".git/objects/e8/9aafa8fde4c6267558c06b5f6112db9ddda29c": "e481bd41787244595930c21210269e6f",
".git/objects/f2/14165a2fce67b2b95ebc9f4365f3214e9f47cb": "ae81948eb2027462ac5342c07b426553",
".git/objects/f3/d2afa0672ed60f5e8962fd0f2e85f88609d12e": "4a8a418298ae68ed9c91fdacb4fad0d0",
".git/objects/f5/f56b3ba898e7fad04e7a690e270eb98933cd46": "b717b89a2f8eaf6b49fbfbecc9a8ffdc",
".git/objects/f9/b1c06cb73a3aad563ba60c79b05f06554cbbd9": "57a9d3a2ebf19e1639f07d4c24418620",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "3e06ae3b3d6e0e84b2833abbab168161",
".git/refs/remotes/origin/master": "3e06ae3b3d6e0e84b2833abbab168161",
"assets/AssetManifest.json": "7b178fee23a848b77dc8400a41d42818",
"assets/assets/images/avatar.png": "a3fc973f59048ca67093c34e4cfbec47",
"assets/assets/images/background.jpg": "a50d65f5438af3ade79149977d2f653e",
"assets/assets/images/background.png": "0614a717659df3fd409c60ff04fac983",
"assets/assets/images/bg_img_2.png": "8257ef89b2dfeab767578260965a7e2d",
"assets/assets/images/contact_icon.png": "856b95eb03d60fa2576140e4c3d034b9",
"assets/assets/images/desktop.png": "d4794e3ddcb4fce9a2c12246e3b4d8a7",
"assets/assets/images/download.png": "d9317d736e7b69f20f57f6ab13f34d3c",
"assets/assets/images/email.png": "f59e8ec158ec05d21c8b251d7b0017ca",
"assets/assets/images/graphic.png": "d7aaa5a5615483382572b5d5c24c5e5b",
"assets/assets/images/hand.png": "d7c6f40ec1244a86fb4610cd515fee55",
"assets/assets/images/Hover.png": "f0a2318c40269d84384f56f54d25ad69",
"assets/assets/images/Hover_flip.png": "57d317fc22080b316188ebe73407065b",
"assets/assets/images/Intreaction_design.png": "98e873648b7c2d3062556f2f8c09d4c3",
"assets/assets/images/Logo.png": "f76fc5deb917710b053e34eb147af750",
"assets/assets/images/messanger.png": "beacdbb3a93df25674af2f5302f5633a",
"assets/assets/images/people.png": "f6561cf54d239a098a72225cd21bdc80",
"assets/assets/images/recent_work_bg.png": "531a8461fd1ec42f03f4cfb891790635",
"assets/assets/images/sign.png": "09ce9472b81f95dc3193a4ce58872bfb",
"assets/assets/images/skype.png": "955d4329bf55cd47008c2edd6c08ad99",
"assets/assets/images/ui.png": "6ca82a6c70f80fd75c56b1fe66caa180",
"assets/assets/images/whatsapp.png": "e33ef8b852729cd9dd7c6af3837f9b23",
"assets/assets/images/work_1.png": "ff8242cdad37e4c83136a90a325810a8",
"assets/assets/images/work_2.png": "e1d3843d3e6d8752cfe40f655caab6d5",
"assets/assets/images/work_3.png": "035401cff7e0fc62875bb280c53523c5",
"assets/assets/images/work_4.png": "74e5fc2d50c04cdd638cfa878bd2ef66",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "0ebac1831889338ba99ea07c2b52dbd3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "9200fedbab739a290d1ca02c7aef2b7a",
"/": "9200fedbab739a290d1ca02c7aef2b7a",
"main.dart.js": "ce43c2a53bebedc941a0cc07ac116e15",
"manifest.json": "9d3d57f21e96b6052aaf48bd974ffe62",
"version.json": "3daa223e44daa89a1858e16114a8f6d3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
