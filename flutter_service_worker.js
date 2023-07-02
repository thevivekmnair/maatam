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
"index.html": "944c8f1a5e22b290ea43935ba566d88e",
"/": "944c8f1a5e22b290ea43935ba566d88e",
"main.dart.js": "67c05c13a0131e3b58a039f510ae7c3b",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"README.md": "d96bbed348e832bb0f0ecdae54d41b4c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f9e883a47092ba097ce3e4f86858cbde",
".git/ORIG_HEAD": "9b2413f6bf456dad09fd6e87cda26612",
".git/config": "38851d49ef5a594e734a313201f943fb",
".git/objects/66/75d7082797d32f22a9343af86d5d0b15a37824": "46db6e681dc4f87f909ce10d56d980ee",
".git/objects/3e/aae4c341c1351780c07cf4c34adabd60e842ed": "9bc4d38c6dbb3c97d8878118be757e81",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/3b/69ac34a730f87298609cdde5805f2c25377318": "7278d120dc1f1106af21006fba1fc8d4",
".git/objects/03/060aea0a1ab5f0fe77110a0e359c535dde878d": "acfff2dada78bba3e6604ae159ffc097",
".git/objects/04/5c170861f3b881c20719f95c70b3c855e9bc89": "9cdc349db0d40c43ad8035458f503fd1",
".git/objects/6a/d9d2cd2a5ff439c84c89913e2d222667473277": "37c691e5af3a74e3ec19f8ac05788bbb",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/67/a4643bfbe8a4c4679a290577ea15bd78086e01": "d89a544dbc534e0fa292edd477ab1231",
".git/objects/02/87d15266e20f059d262366047789600b63bbed": "60c19ef5d0be56ba2da04d9e5ec222c0",
".git/objects/bb/8ca41a4d0565d63eaed85e1fae55b2234f35ac": "24f3c3031d9a05f8eee121ade606fe97",
".git/objects/d0/5263a605732071931c3b0c3de3904588df8e0b": "885f449925d745de6b3b5c233b8b69a5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/e55d9aa70241130d8c85ea735a2c27afcb4eb5": "ab0b96de71d36b799d5b6381bc4354c0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/4320013ceee7e6db9424bf6e8fef46e99a1460": "4ef3b184c53bb429a1786270afb3b64a",
".git/objects/f3/2f2c750f7e90a8d43db5afa7ec7997fd697ef9": "3f94e0403f77c64392a7a92acfc3842a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/deecb039a5577c51d8f80a656ad4e3a768cdda": "166821d154f9c083eb44158c610c1c89",
".git/objects/ee/18d41b3b2011e4828a5a3574e8918c0585070b": "069a64185330ed42999c8b4ef90b08c0",
".git/objects/f2/f2255ca80a16305af87289d172dfd26475acd9": "ad82c1de8afcc89f357adfc1fc99b1d7",
".git/objects/ca/dbb6c4856be382d111ee965daaf29831de5ae4": "8f058fde89f429569067c4a7ef0c068f",
".git/objects/4e/f203f8d94f4fd19cd0ede83b97269f035e6768": "ea2b6a0d9e717357f7b8c6b3c7df837e",
".git/objects/18/253e7300b49b837baa4e7af0a0b5394379a018": "3d84fbed41c08ab851d3a67ab353c136",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/28/1bbf3003aa959f970747f385da4c4544c04bea": "a194350d70d8c7dfcff47fc685c8620a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/baff47e2609fe0aedba6993ed42fcc15495a56": "312f49e2d9bfe2b81877a6c2603ded95",
".git/objects/75/f2797127119be28073c3d332b326c15a45d279": "1bae220805c620733c6437b1c35080de",
".git/objects/81/fa434c5aa7026ba59a208dc822f445b0f75600": "9da25a19377e58a09ea89cee649cb1cf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/534b8c47a4841a01abeec86dda99a57b9e9b06": "c83edb8da9f2736c43742d86b709dcb8",
".git/objects/38/979a29882dff859db1b670e9e26b0c38f86020": "70da82932bcddad5ce049de6a53c08df",
".git/objects/5d/8ed71fe148062a17d70dfdabb203df4e77ecd4": "c7a3ce78619855469fa7b7439b0f7a9f",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/52/aa2821f1e4f7671930a35d40a510cfab4eefb5": "6242b4990ad0ac03eb0a85f7602160c7",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/63/68f52df22cbd6af484c4982a6866036990b4f9": "850ceed2abf5ed5decae83e78997b622",
".git/objects/bf/8854b846c69fa669a5c5bbd5c7e27e81bd60cb": "ddc11248937c3679ea5a9d29b0f5a762",
".git/objects/d4/aeb016df6a2d66270924da059f7da6b09df6a4": "46cb0300b97930cf4f1bfc0b2c8e3915",
".git/objects/d4/6905e396cb88885cb6e9e22fffe2879084d5a0": "10288bfde9cb19a47200329fb4b42d49",
".git/objects/dd/b586f2f2ef07e7c32ec35cc8f2f8355aa6e8a9": "8a29b7e22be719096059857a5eeb4d6a",
".git/objects/af/5ed5a4344728afe9bf3e71940369bc3d5fd7f5": "4b9f5df479a390f03c4b768475220c8c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/1dbea017ec5de36269a29452bf28ecfcf7538d": "8037108e67ff450d17299c97db1d72c4",
".git/objects/c4/bf56f5543e49efef7a4a4599e7df75997a79fa": "cc8f41eb0090c0dc497761dfead4bfd6",
".git/objects/f6/2ac586d995603bcb9bf700390dcd5f4614951c": "38547b98df7169ef450fa182f0c04e07",
".git/objects/cb/8196d8a05c26f3b6c0769b95f0f4b3046fe01a": "ac4e39132f95169f0c849b16949ebda3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/57a3612a85c0eeaea58b7e55540bedde2b1acd": "8f7b12b6c1e311b83c7d69af93d30f25",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/3234357fdec471d13f1752cbfb923ca95dbeb5": "f9254b5d4cdec3cf2dd3ffb2f6692ebf",
".git/objects/48/a79cb36b62c49c62ab275a6055fa5c8dc4d115": "cf28fe1247c0bbdd65232713557418be",
".git/objects/70/7ee1668ea948b9e6ba094b26c5e1d894411ce7": "f15387159b12bc5275b1d02974ef2d95",
".git/objects/4a/4fae8bced3045d1cec515363fb5abac06a1a74": "f2935c85cc250a8d326f6ce8fb0cdff9",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/85/c6834a80e207f86559fd1dd94b1c5dba9aeed3": "4c812b7d35ed04a103f19efca252debf",
".git/objects/1d/6334df2a8b7a6da624491357142a486d2f6fcd": "7065d5df3a7008f2e41619e3cc43749d",
".git/objects/1d/13d31ea7fc08e57784ca5dae420cb7c7b2d9b1": "7db5db7e21f95b625f4451506efb4ba4",
".git/objects/82/932d884dba9a6dc643af8d71c30e3352614660": "6038ff8b76a727fde1174e4716338b16",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "83683c1014afeaaa01f21a42c15e52d8",
".git/logs/refs/heads/main": "1fb58f2fb8de8e4f27dc4c466f4e0741",
".git/logs/refs/remotes/origin/main": "bc3fac24130b7a1cfc9bdad63c70fb65",
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
".git/refs/heads/main": "de36ded90469dea9d1c16b41ed8a5023",
".git/refs/remotes/origin/main": "de36ded90469dea9d1c16b41ed8a5023",
".git/index": "4089bfc0fa3878d2981810a1901e1b1b",
".git/COMMIT_EDITMSG": "2d2300ba0d235b753b94363ba574c8e2",
".git/FETCH_HEAD": "164e431ef31bc5c172161ba3fd75f63f",
"assets/AssetManifest.json": "04f7336c4b00b61686aef441918c188e",
"assets/NOTICES": "f09a2b25a9271fc500b52624a0b031ad",
"assets/FontManifest.json": "3ffcc53c9188f183258a3785eefc49c1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "cc5f748c519c43ef70b675fbaf1d243d",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/contents/kaimaatam.png": "0648c3946911103f1955e52ca3205a82",
"assets/assets/contents/experience.png": "26cb3306bdd357badf4391bc308fcac3",
"assets/assets/contents/a-z.png": "248fb33c4ec2fb58c4f85b60830ea91f",
"assets/assets/contents/innovation.png": "3e1d169b218a791af65bec8dab28fcd7",
"assets/assets/contents/bethechange.png": "bb7288c063ee1933a980222bcc6bbcff",
"assets/assets/contents/architecture.png": "08a1fdc04e2070c8cc947452f5272230",
"assets/assets/maatam_logo.png": "bc67a1f0f17164c0974ef9d07c0eec4f",
"assets/assets/hands.png": "b5df42927fba190922f7c7d5c3189cd1",
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
