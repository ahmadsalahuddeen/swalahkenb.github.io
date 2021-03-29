'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "fdf6a573da3525b48baccace711ca2c7",
".git/config": "8dfba46c634ba04568e1701551eef4b1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5b8009175be6d4560fd1f3e86d9c8554",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f22bb4ceeff9464a5c1eb876a09d7693",
".git/logs/refs/heads/master": "f22bb4ceeff9464a5c1eb876a09d7693",
".git/logs/refs/remotes/origin/master": "4774d7d19639bcd4b0c7eba23866909b",
".git/objects/02/0d9ce993c91ed7c2dc840988ab66f426c254d4": "c743d524a9abcf878121cb9c3bb7cb0b",
".git/objects/08/1af6c521815bb7c54725b862b9b0c299308b8a": "de0fd7aa33532a21c8d933350e4eee39",
".git/objects/0a/6d2b4d83ecb77fb66ee79664b187809159d940": "f591028334cfc14fa28b2f74389ef12e",
".git/objects/19/1c0deece0a84474c47520f134ae8acf1a9639c": "38dbb91926b03079a33685c660cfc1ee",
".git/objects/1a/53bd7c185d36ef754ec24544bba63f463a6540": "57f45fda913041b32b135319df1baf0d",
".git/objects/1a/974abd3b073028e718ce30c9c8f5fee145e03a": "bf44c2d26d82238d73a5fed08e70cf3c",
".git/objects/20/5b2843a7361d45b2069086123cade0a4f98cad": "af69c572720ca54b2137f038cae5c635",
".git/objects/24/6a861a77e28073ff254655f032b155c3b2158c": "79770b75cba5c9b62bf501c3931e04ca",
".git/objects/33/5170de7d3c5eac00a27984c5377150cb1ff5e1": "33e02e73f8e1914eef928d851b789c3c",
".git/objects/38/bd57dd02450af2736bbba8e78953c6323f79ce": "d5758d7464764a18365c55af0614fb4a",
".git/objects/3b/bad2a8be022a5bfa26e33cd1b5b7824a51bc7f": "b14c072cd4a2b08ffbc12220fd1293a2",
".git/objects/3e/f790f6297ff9f9a7dcd2c1268cc79bb35b46d4": "e6a0b535bf072e71ede5e7c65977b2df",
".git/objects/44/313ca448a294de7a8e39b816203390edc52377": "ea2eff9e264f5bf8ffa3b6310728c416",
".git/objects/46/20a42186782af5c54c8ae3d681929144c8c5f3": "31b9e0e88ce6502708680f3116dc678f",
".git/objects/4a/387e2ac7ecea97f8185bf26bc8839d6408864e": "d15b4319696f3d71e922b04f43597689",
".git/objects/4a/76f4719aae9ee4ea7ff9da1c9391b53b27e84a": "37ca453a9ab7e2a1c34f836999afb6d9",
".git/objects/4b/39cfee0af318bac24795f46cba007fa27ba5fb": "323a59475991b1353275164c7a697572",
".git/objects/4d/409e03e6929ca1a70d1912931de4f36928dda5": "adbd0d234758148a138208d987007944",
".git/objects/55/26c22e116ed4421599ba28235287a7e77612c6": "fd763cd2bf17b84d839e77afc9e6cab4",
".git/objects/5b/46f19856a1267a1094a10935440f8242cf9e7c": "0fe9ab07feeca7e015363cd18b7b7ab0",
".git/objects/6f/57e0c52ba433d489816342713e675a2b5eaf13": "c47154d946a06abea051872ace9c456a",
".git/objects/70/6f50866c0e71dfb32ceaee8ff8ebfb7d262df2": "07b0f3c3f3ab67c5cec9d95f36f76eea",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/79cb2905cb772748c6fd8427e53e71a2813471": "5a7ea5bb8fe79639569b2cdd65610632",
".git/objects/7c/ae3c71f5c114b81794b36d9eed4551f54bac31": "a9a802ea0d1af14d13ecb9dbd9cff5da",
".git/objects/7f/b45c4917dae9e2d2d4da8e68acfd49c37b6178": "f523a9b067cbcb600f603103943e20b1",
".git/objects/7f/fadc5f2abfc6443e27f4ffb38bace480caa744": "02d99f726a79ea2753babd93650fa3c3",
".git/objects/88/d0f1ebf8d845edf0933fbb90375324b73c3a49": "7dd9b2fe00d490fd8ce6dbeb49bd1879",
".git/objects/8a/6ac6855dd38e2641483c06febfb7fd3f8d4498": "f532efc72ea0d29800f32c45e3407129",
".git/objects/8b/800296907d89237df5f1c89d552cc4c543b3fb": "e3ace0dacefc05c61e76106132754ddd",
".git/objects/8e/721c4d0275651976e7880b213a40177f12fe4e": "eb08e0953ae5edd3f3de621c93cb211d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/c0a0239e9ca1c6c51bd6303e50fae7f1bdfcd3": "f51530c48cef9607cfb2e88d619476e0",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b8/c37e72a56bd81657a2b8e71bd2a23a6434430a": "db105e398010156dfadc6db27a551c6c",
".git/objects/cb/a9851c7ff735d863e1fc377af232b667cf4ce7": "748a0403ae124e755f89dda9f3e223f8",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/ed6610d8d387827a01dea0c66a19891ea7bec0": "87e5874488a9d0ba3543b81ce84ec1c1",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/ff/aa911d4f81096a3c29bd4a137ab3f109932eaf": "c983f58fc1d7d07a623949a9ac02a813",
".git/refs/heads/master": "bdc010ff8138ea14680b38fbd39b6228",
".git/refs/remotes/origin/master": "bdc010ff8138ea14680b38fbd39b6228",
"assets/AssetManifest.json": "e410b92658a1aaf7275a80e383b3df56",
"assets/assets/fonts/Poppins-Black.ttf": "8971d1710cbf4c91bca1b460aec154d7",
"assets/assets/fonts/Poppins-Bold.ttf": "7940efc40d8e3b477e16cc41b0287139",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "0e6906b2b7be194f68b8f7b7252c4f6c",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "f99f9d50a569dbcf72e3084ef1a43208",
"assets/assets/fonts/Poppins-Light.ttf": "3352653dedd571bbc490c8be132b38cd",
"assets/assets/fonts/Poppins-Medium.ttf": "a4e11dda40531debd374e4c8b1dcc7f4",
"assets/assets/fonts/Poppins-Regular.ttf": "731a28a413d642522667a2de8681ff35",
"assets/assets/fonts/Poppins-SemiBold.ttf": "e63b93dfac2600782654e2b87910d681",
"assets/assets/fonts/Poppins-Thin.ttf": "735aa7d8e35b63068b9113ea2545f0c3",
"assets/assets/images/dp.png": "267684c40ca4ed04f50e5f61e2656091",
"assets/assets/images/github_logo.png": "1fbf1eeb622038a1ea2e62036d33788a",
"assets/assets/images/instagram.jpg": "19f061aa9983308d8d04433f36b32d2d",
"assets/assets/images/instagram2.jpg": "de1bde04a450972d3bbcd6fcc02e8672",
"assets/assets/images/logo2.png": "1f94392caa9e18eefe55412920b18eea",
"assets/assets/images/personalwebsite.png": "d14d6d261195aa4d70364e5e70a24666",
"assets/assets/images/twitter.png": "585bbab4ea70e62d8261d84648d7ef8d",
"assets/FontManifest.json": "f477ffc5a4f1828ffbe010aa4eb65b6b",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "e424396c1fbd43c8c6e96a3241e9007f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "6377550792a7b088abbb8741c62a894c",
"icons/icon-192.png": "e59b1c71be7abb06b3bac4369447f25f",
"icons/icon-512.png": "5edef86ff3a0786a765ef37b739e2d70",
"index.html": "6de9b7eccab7b4a1758b6a9b702f8326",
"/": "6de9b7eccab7b4a1758b6a9b702f8326",
"main.dart.js": "4a7ac46ccde304392619bf3c1fbe6422",
"manifest.json": "fd86d70dd6d8f0334f8e0865b0cabfa7",
"version.json": "9a083dabe128befda1a0ba2861e388ec"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
