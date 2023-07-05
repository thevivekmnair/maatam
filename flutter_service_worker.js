'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "beb11e1cbdcd6325ab701c710c936d2d",
"splash/img/light-2x.png": "e394c2d4e6ba298f54e0940b0e7d425c",
"splash/img/dark-4x.png": "bfe6d72f45dfeb41170a91319bd9fd75",
"splash/img/light-3x.png": "5268406d400184b072e7a203c7df5bf1",
"splash/img/dark-3x.png": "5268406d400184b072e7a203c7df5bf1",
"splash/img/light-4x.png": "bfe6d72f45dfeb41170a91319bd9fd75",
"splash/img/dark-2x.png": "e394c2d4e6ba298f54e0940b0e7d425c",
"splash/img/dark-1x.png": "35f6f9edc327a83366bba90643cb7d02",
"splash/img/light-1x.png": "35f6f9edc327a83366bba90643cb7d02",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "c4c3be35afbd722272b9c588cb4a8638",
"index.html": "0e4f42a2d2d8a6e23e5bad2f04062832",
"/": "0e4f42a2d2d8a6e23e5bad2f04062832",
"main.dart.js": "0e33b9922ad2a4733ca7f13abf52a51e",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"README.md": "d96bbed348e832bb0f0ecdae54d41b4c",
"favicon.png": "ea600ce28e2651612dffcb610af5730c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f9e883a47092ba097ce3e4f86858cbde",
".git/ORIG_HEAD": "61265a6032a12001f0bf177df403c53d",
".git/config": "fcdd5ce062258662df5c82b2db440157",
".git/objects/0d/7da03b796905a852f60076383ba791d04e45fc": "15b67ccb0912d6b4b36a382ae7de4194",
".git/objects/0d/c4cb7c39769c8603e8adb9fbc37125c7b80fd2": "28da0ec3ad78f562232a178c73e38514",
".git/objects/95/3bdbf0dd945db7841a6266b618a5120f4f11b3": "5d3cc42c4d9a437fce843299bd713207",
".git/objects/59/3c6671237268925924f4611383f359c7c5f354": "b1c315d9857020ed7b9addd04ab1b327",
".git/objects/92/03bc0a6cfbd4bc83ff8590ee6ac44a4a657b69": "0ed1f1aaf897092e9502ad62616fcb17",
".git/objects/0c/b525833a070431f0c323f39dd95bea4dfa1acf": "2775086bc3413a0e799bcdcacde5c956",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/6f/6463cf1cd0674679448d387c153a787dce9243": "510cd3ac87b490279ac8f6d43b0300bc",
".git/objects/03/894e935c27f491b2e04290c7cbf6caf9bfcb2b": "8c72a7283a6b03c966dce36a2dec4df4",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/30b0efd7cd1212554a7123a834c732ec0d0950": "c4357ab4577005c112d51f239e30322e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/9d/fc77d8ced69b0a57be56b4d38c77688ab6a820": "a01f7cf4b5b9c7cc63ff176ad5878f47",
".git/objects/02/6399e8170aaec5efbf7f12e45a83a530e46566": "3f5dff39bd96583a66d6be8d2bc27146",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d1/cca42a483630ef5675a2b20b50a5d68e426ba1": "e035dd4de17af317bed1f16e1fdbfdb5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/ab98246a3673431a19cf91738eb537e9266b63": "e8c2261b827f732dbbf734874de2914c",
".git/objects/c9/e5ba78bbd57d33e0c26cf5d7941d9bb640be74": "6b6075576fb8adc3281a275710a80785",
".git/objects/4e/05d217cfb98d68ca8d814cc3b717165c8555b6": "235cc63dfef6bc31178fe6731ee099d2",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/20/61cfe0f41704f04a84c13ab408a879361d6276": "9b6ea28f6c692188c139089252a35f6d",
".git/objects/pack/pack-586266e95208726dc89d2e0d7b9ca4b9b363d17c.idx": "1354fcc1b71ecb8f186a172797d88b44",
".git/objects/pack/pack-586266e95208726dc89d2e0d7b9ca4b9b363d17c.pack": "81d5e0225b7ae4817933d4d74a038de8",
".git/objects/29/a43713776e0e0713a232fd35a22fcb9bbf16a7": "23bff96c2103072fcff1060eedcfdf44",
".git/objects/80/5e4ce33359f16dfe976722c0b1483b9cf47a62": "5be023e832669d06a9cf5c0f27fb867b",
".git/objects/74/3f1f838f83f8c2e1a868f5b02edda19e4eecb4": "5cb9f6c10b60ea8341c569bd3a3606b0",
".git/objects/8f/09280ebf7234f1f80261eb1cb1b0ba601c513c": "48dc1f528cd605ac178f5201f8e7eab7",
".git/objects/8a/784910770683beeee0af2fd08f8587d2bca6b1": "b5a7141a4cac8248ab671db8dfcaab42",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/19/66c1f243e5d3772840f9e3c317b88b3bf98204": "be13a03144875f60351811c71d9ac096",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/75/00717096bf45d53acd0405ff1df59b9d0d29cf": "4634fbfb0c13f718a07859ca6ee65a87",
".git/objects/81/eebb4a5317e7986bf7e2c4021ec748a7b508ee": "9ac555aaf2e2145f94d283147b4fb719",
".git/objects/81/fa434c5aa7026ba59a208dc822f445b0f75600": "9da25a19377e58a09ea89cee649cb1cf",
".git/objects/2a/3fa9a1470c35df211c4615d57e4dda110b68be": "31b408763d8a33af920be342cf329ced",
".git/objects/88/d0bbb96db2eaece90083fb6a5e88c9d8302a76": "a63cafe58b4223ebdc08237b492a8929",
".git/objects/88/63365e4c40b5e2942179a606f41d0e78796002": "ae83439768ed79d7187e668055624570",
".git/objects/88/82dc158aa721988913ce78d95daa9320b4b206": "e73f6851878cc96ce7350b77e355b5a3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/c2c1b085496cab0771956cc641e6dadb7b209a": "d1521c2c3af9d3e9460ca749b9ccd087",
".git/objects/36/9a4df9fc5361b44ddfecb424300a0a795c1a26": "e3ed1e4ed163978f188175dccf86b294",
".git/objects/5d/8ed71fe148062a17d70dfdabb203df4e77ecd4": "c7a3ce78619855469fa7b7439b0f7a9f",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/87d8008700daa4e90b3ac25dd0b28727e43400": "c40db89413664685606f65027ad9122b",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/dc/eeed2bab92f9dde04494f7a5833f84db140a8b": "0172a02e2cc76f4c315c3e23a9e55e11",
".git/objects/b6/e69fb96bc86907c59c16b24ec3d1e898e3970a": "13388481382eb066c51c75544a236a35",
".git/objects/af/3a84c88bed213fe371ffced5045a53f96fa64c": "9bd1cee1e8e90853dcc9c98a788e00b6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/d22a46e7571d2317aa0221cadace59d101172f": "25c8727ae95bd723cc55fa9ea460fc96",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cd/8f480d174c68404c0695534ecf3d2285ea2e6f": "665d02ab283d874cee017379195298ed",
".git/objects/cc/828ff6864b0a035fbc18d9f6123c1729b7fbda": "97049356fd0baeebdc213251d57b56e5",
".git/objects/2d/312ecd9f670162a34498eeb276ed9434c4f87e": "4f8459179eac50ad1dcbb1697bf70b1d",
".git/objects/1b/b62d06b11389f171e2bbffff22feb04fb86728": "3cde8fc72cab59ab1e1bbe0066196dac",
".git/objects/1b/a386c5489bdd6634c3dc480f7783deb7e4bea4": "5a80615bb7ad9e31a413cf71f1c7e808",
".git/objects/77/902fbcf75c304d4fd00db5d17ef50e5b33cf92": "bf810483a289de501a4e7d6b313acfc5",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/48/a79cb36b62c49c62ab275a6055fa5c8dc4d115": "cf28fe1247c0bbdd65232713557418be",
".git/objects/1e/7265f45f352e0d2edb2e1ac4fd5dacd8bd3796": "e399646818d620de0d7575073e773814",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/4f/507ca9621b820487366d5377f9bb56a33a1493": "fc72d77be365ed83aeb1125f8b571c69",
".git/objects/4f/7bbd205875d78d4204df32e24cc8b2da015a3c": "59c452f5e847850cf7fbe7a608ab1a0f",
".git/objects/85/c6834a80e207f86559fd1dd94b1c5dba9aeed3": "4c812b7d35ed04a103f19efca252debf",
".git/objects/1c/f4bffd0c5c69fe9284a8d96a87b5c9b479e671": "b3fc95b5b0d5acb1a111c5defb99b73f",
".git/objects/49/1a14c76c04c7edba026ccf9955cc6c3035a544": "117d6592d41501b737ca3c5a9f0ba30f",
".git/objects/14/1e4996f6ca42f9883112f81f3770435ca68214": "cc883834f53893fc5ea53ba962ca2ae4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "de13a736de90302c75de496022be3664",
".git/logs/refs/heads/master": "193dbdcf6f5927d29ad1c36cf5a55133",
".git/logs/refs/heads/main": "a58b869c92907bc9446b1e7e4c62347b",
".git/logs/refs/remotes/maatam/master": "3c1a76bbcd66b35815037539fb52d239",
".git/logs/refs/remotes/maatam/main": "38d5ef844bde98693f1b461b06079815",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "dc9319712df96e4b8b7d80aaf6a89a3a",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "bff22a56cae99e478ac195d3729ac799",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "cfbc5900caeffbac6ba3fb3337ea9993",
".git/refs/heads/main": "61265a6032a12001f0bf177df403c53d",
".git/refs/remotes/maatam/master": "cfbc5900caeffbac6ba3fb3337ea9993",
".git/refs/remotes/maatam/main": "61265a6032a12001f0bf177df403c53d",
".git/index": "df01f4e245d119c4e9dec877046c36fa",
".git/COMMIT_EDITMSG": "87fe217587fde1505cc0734c6d39e087",
".git/FETCH_HEAD": "f599ed0d410e46409fdfb14348296bf4",
"assets/AssetManifest.json": "d993a97e5084f682b43d28a6f435b259",
"assets/NOTICES": "427da05922c85d77f996e9303823a087",
"assets/FontManifest.json": "86030d27e7a14996955324ef6a71ea9c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "97f8be7bc01351655347d9bfa714ef69",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/contents/kaimaatam.png": "0648c3946911103f1955e52ca3205a82",
"assets/assets/contents/experience.png": "26cb3306bdd357badf4391bc308fcac3",
"assets/assets/contents/a-z.png": "248fb33c4ec2fb58c4f85b60830ea91f",
"assets/assets/contents/innovation.png": "3e1d169b218a791af65bec8dab28fcd7",
"assets/assets/contents/bethechange.png": "bb7288c063ee1933a980222bcc6bbcff",
"assets/assets/contents/architecture.png": "08a1fdc04e2070c8cc947452f5272230",
"assets/assets/maatam_logo.png": "bc67a1f0f17164c0974ef9d07c0eec4f",
"assets/assets/collaborators/col_3.png": "f523192f76f500e80c4268842e9331b1",
"assets/assets/collaborators/col_2.png": "1b6bb1d4ae14680377284cea7e00fc7b",
"assets/assets/collaborators/col_1.png": "d91e7d209f683e049d101acfaae6d1f6",
"assets/assets/fonts/Unbounded-Regular.ttf": "2430b9e2222630e5794de6de534e7a68",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
