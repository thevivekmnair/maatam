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
"index.html": "e0cfef674cd11d6c6b41405134df485e",
"/": "e0cfef674cd11d6c6b41405134df485e",
"main.dart.js": "9def96d2cad06085ed4117e9ae233e8f",
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
".git/objects/0d/7da03b796905a852f60076383ba791d04e45fc": "15b67ccb0912d6b4b36a382ae7de4194",
".git/objects/95/f19c087779981e3e3ad7d4efa45745eb1d7e90": "ad5f4002d77297ecff52b9173c200a41",
".git/objects/59/3c6671237268925924f4611383f359c7c5f354": "b1c315d9857020ed7b9addd04ab1b327",
".git/objects/0c/b525833a070431f0c323f39dd95bea4dfa1acf": "2775086bc3413a0e799bcdcacde5c956",
".git/objects/0c/6c78c42cfd50ccb970e665e6acb98f89d2cd6c": "147086d00d05f485bf5ff11171382f76",
".git/objects/66/75d7082797d32f22a9343af86d5d0b15a37824": "46db6e681dc4f87f909ce10d56d980ee",
".git/objects/3e/aae4c341c1351780c07cf4c34adabd60e842ed": "9bc4d38c6dbb3c97d8878118be757e81",
".git/objects/3b/a7e31bb590a3ad6ff4393d7b3cb9ed522594ea": "579d432258767c89d524585cfc485a74",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/3b/69ac34a730f87298609cdde5805f2c25377318": "7278d120dc1f1106af21006fba1fc8d4",
".git/objects/6f/6463cf1cd0674679448d387c153a787dce9243": "510cd3ac87b490279ac8f6d43b0300bc",
".git/objects/03/060aea0a1ab5f0fe77110a0e359c535dde878d": "acfff2dada78bba3e6604ae159ffc097",
".git/objects/03/894e935c27f491b2e04290c7cbf6caf9bfcb2b": "8c72a7283a6b03c966dce36a2dec4df4",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/5c170861f3b881c20719f95c70b3c855e9bc89": "9cdc349db0d40c43ad8035458f503fd1",
".git/objects/6a/d9d2cd2a5ff439c84c89913e2d222667473277": "37c691e5af3a74e3ec19f8ac05788bbb",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/32/f885f5a299ca87f1ce96e53cc143320854ee98": "a5850e78b014726db43635b7200a0d8a",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/67/a4643bfbe8a4c4679a290577ea15bd78086e01": "d89a544dbc534e0fa292edd477ab1231",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/9d/942ff508f471965d7a8af8648d4c1cf6419899": "441ebb6d307fe05a8aabf025091ed617",
".git/objects/9d/fc77d8ced69b0a57be56b4d38c77688ab6a820": "a01f7cf4b5b9c7cc63ff176ad5878f47",
".git/objects/02/87d15266e20f059d262366047789600b63bbed": "60c19ef5d0be56ba2da04d9e5ec222c0",
".git/objects/02/6399e8170aaec5efbf7f12e45a83a530e46566": "3f5dff39bd96583a66d6be8d2bc27146",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/ac/6850103f87f9723dac22c008dad3235612d594": "dbc9b25554c93bb25bbf54e1be400306",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/8ca41a4d0565d63eaed85e1fae55b2234f35ac": "24f3c3031d9a05f8eee121ade606fe97",
".git/objects/d0/5263a605732071931c3b0c3de3904588df8e0b": "885f449925d745de6b3b5c233b8b69a5",
".git/objects/be/899766e7b54b10ebd5a3084388aca1b79fffe7": "c26f6c52354889a1bbd3362c2560eeb2",
".git/objects/df/4cf308a8fa64c6f29f855a9927d4c61f3e81b3": "2d923f6c2760b789429f0168e0042d17",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/e55d9aa70241130d8c85ea735a2c27afcb4eb5": "ab0b96de71d36b799d5b6381bc4354c0",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/4320013ceee7e6db9424bf6e8fef46e99a1460": "4ef3b184c53bb429a1786270afb3b64a",
".git/objects/f4/c1b4662aead656a33c06edef816307793d88f7": "904b59c2f0ed41710a54b213a8f04ba9",
".git/objects/f3/2f2c750f7e90a8d43db5afa7ec7997fd697ef9": "3f94e0403f77c64392a7a92acfc3842a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/deecb039a5577c51d8f80a656ad4e3a768cdda": "166821d154f9c083eb44158c610c1c89",
".git/objects/c0/eda0a48cf307c9b3ab5a605385f95f579e6227": "15f91a93f4cd29af1dfb10025f52b73e",
".git/objects/c0/ab98246a3673431a19cf91738eb537e9266b63": "e8c2261b827f732dbbf734874de2914c",
".git/objects/ee/18d41b3b2011e4828a5a3574e8918c0585070b": "069a64185330ed42999c8b4ef90b08c0",
".git/objects/f2/f2255ca80a16305af87289d172dfd26475acd9": "ad82c1de8afcc89f357adfc1fc99b1d7",
".git/objects/ca/dbb6c4856be382d111ee965daaf29831de5ae4": "8f058fde89f429569067c4a7ef0c068f",
".git/objects/fe/4cc050b63c264a7671fdb2fec324b1a188d7a9": "9893b938be29a1b16deb787777699f0f",
".git/objects/ed/75e8e834081726b957ca2a0fcd9351ababe857": "7ba349494b98f91891092d3c67d5e8a7",
".git/objects/4e/f203f8d94f4fd19cd0ede83b97269f035e6768": "ea2b6a0d9e717357f7b8c6b3c7df837e",
".git/objects/4e/f9b8a6d1cd04dc19dba1a9b8778026d080511d": "e44ecf7b71c7798fda7e40af5ed1225e",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/20/61cfe0f41704f04a84c13ab408a879361d6276": "9b6ea28f6c692188c139089252a35f6d",
".git/objects/18/253e7300b49b837baa4e7af0a0b5394379a018": "3d84fbed41c08ab851d3a67ab353c136",
".git/objects/4b/35d285e8cb33a8879469f7905f1befd02fc8d9": "3f1f4f577dd4cadf35203a290677164f",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/29/a43713776e0e0713a232fd35a22fcb9bbf16a7": "23bff96c2103072fcff1060eedcfdf44",
".git/objects/7c/818d4fa55826ce15b3d7e4e048c8df75773d71": "3d95d449af89f98dadda22c59647658e",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/80/5e4ce33359f16dfe976722c0b1483b9cf47a62": "5be023e832669d06a9cf5c0f27fb867b",
".git/objects/74/3f1f838f83f8c2e1a868f5b02edda19e4eecb4": "5cb9f6c10b60ea8341c569bd3a3606b0",
".git/objects/28/1bbf3003aa959f970747f385da4c4544c04bea": "a194350d70d8c7dfcff47fc685c8620a",
".git/objects/8a/784910770683beeee0af2fd08f8587d2bca6b1": "b5a7141a4cac8248ab671db8dfcaab42",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/4c/baff47e2609fe0aedba6993ed42fcc15495a56": "312f49e2d9bfe2b81877a6c2603ded95",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/75/79fcc6e026f114abd4a6b8b00ed0d873f6473a": "e4561bb4f236ac02442950afd01a6939",
".git/objects/75/f2797127119be28073c3d332b326c15a45d279": "1bae220805c620733c6437b1c35080de",
".git/objects/81/fa434c5aa7026ba59a208dc822f445b0f75600": "9da25a19377e58a09ea89cee649cb1cf",
".git/objects/2f/ab2b31faa88f4406c387d252f3d0954706ee75": "e6e278dc22e3c8ecf10eda7cf0e9b8e1",
".git/objects/88/d0bbb96db2eaece90083fb6a5e88c9d8302a76": "a63cafe58b4223ebdc08237b492a8929",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/fec56e172df454ca1da82da73fdf3f22e845f3": "c3655a30a2c3fe399d67a0d87a008c37",
".git/objects/9f/534b8c47a4841a01abeec86dda99a57b9e9b06": "c83edb8da9f2736c43742d86b709dcb8",
".git/objects/38/979a29882dff859db1b670e9e26b0c38f86020": "70da82932bcddad5ce049de6a53c08df",
".git/objects/00/74e7b0c7c2ad0a5563df17d76517453c6dd7bc": "882b8f1d1c1216aa6082900c3cb90b09",
".git/objects/5d/8ed71fe148062a17d70dfdabb203df4e77ecd4": "c7a3ce78619855469fa7b7439b0f7a9f",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/06/27cb5a80a3e7480c938a34fba29e61fee5cd32": "ba876d28390ec8320879066fb070a59b",
".git/objects/52/aa2821f1e4f7671930a35d40a510cfab4eefb5": "6242b4990ad0ac03eb0a85f7602160c7",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/63/68f52df22cbd6af484c4982a6866036990b4f9": "850ceed2abf5ed5decae83e78997b622",
".git/objects/63/e70acdacb40ea3ca608aa4f7d64e406f1b139e": "c8af18ed44538f655b3842b305134afe",
".git/objects/bf/8854b846c69fa669a5c5bbd5c7e27e81bd60cb": "ddc11248937c3679ea5a9d29b0f5a762",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/aeb016df6a2d66270924da059f7da6b09df6a4": "46cb0300b97930cf4f1bfc0b2c8e3915",
".git/objects/d4/6905e396cb88885cb6e9e22fffe2879084d5a0": "10288bfde9cb19a47200329fb4b42d49",
".git/objects/ba/b6513097f2314c843c09f16a30fd24bc366f7b": "b393b2c8ce7b0fd0662bbaaa550e2636",
".git/objects/dd/b586f2f2ef07e7c32ec35cc8f2f8355aa6e8a9": "8a29b7e22be719096059857a5eeb4d6a",
".git/objects/dc/eeed2bab92f9dde04494f7a5833f84db140a8b": "0172a02e2cc76f4c315c3e23a9e55e11",
".git/objects/af/5ed5a4344728afe9bf3e71940369bc3d5fd7f5": "4b9f5df479a390f03c4b768475220c8c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/99259f14811c78733e05de9afc8f7e721bcd78": "a15f50b91239a83dee48a83034165164",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/1dbea017ec5de36269a29452bf28ecfcf7538d": "8037108e67ff450d17299c97db1d72c4",
".git/objects/c3/29401757cc9425bb5517a160215d539d752ab3": "e3a6fffd59d0fe78b4ad1874eb26a0e6",
".git/objects/c4/bf56f5543e49efef7a4a4599e7df75997a79fa": "cc8f41eb0090c0dc497761dfead4bfd6",
".git/objects/e1/70e20cf5eb2569b69b7f947302728d46080dae": "1e44b376ae4445a3757caa0aba298753",
".git/objects/cd/8f480d174c68404c0695534ecf3d2285ea2e6f": "665d02ab283d874cee017379195298ed",
".git/objects/c5/812382c51fe1fc7150c4e5f31bca7a0e4c6082": "d903f55502cec59fd9b7a35c61a40421",
".git/objects/f6/2ac586d995603bcb9bf700390dcd5f4614951c": "38547b98df7169ef450fa182f0c04e07",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/cb/8196d8a05c26f3b6c0769b95f0f4b3046fe01a": "ac4e39132f95169f0c849b16949ebda3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/57a3612a85c0eeaea58b7e55540bedde2b1acd": "8f7b12b6c1e311b83c7d69af93d30f25",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/3234357fdec471d13f1752cbfb923ca95dbeb5": "f9254b5d4cdec3cf2dd3ffb2f6692ebf",
".git/objects/1b/a386c5489bdd6634c3dc480f7783deb7e4bea4": "5a80615bb7ad9e31a413cf71f1c7e808",
".git/objects/77/902fbcf75c304d4fd00db5d17ef50e5b33cf92": "bf810483a289de501a4e7d6b313acfc5",
".git/objects/48/a79cb36b62c49c62ab275a6055fa5c8dc4d115": "cf28fe1247c0bbdd65232713557418be",
".git/objects/70/7ee1668ea948b9e6ba094b26c5e1d894411ce7": "f15387159b12bc5275b1d02974ef2d95",
".git/objects/1e/7265f45f352e0d2edb2e1ac4fd5dacd8bd3796": "e399646818d620de0d7575073e773814",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/4a/4fae8bced3045d1cec515363fb5abac06a1a74": "f2935c85cc250a8d326f6ce8fb0cdff9",
".git/objects/4f/507ca9621b820487366d5377f9bb56a33a1493": "fc72d77be365ed83aeb1125f8b571c69",
".git/objects/4f/7bbd205875d78d4204df32e24cc8b2da015a3c": "59c452f5e847850cf7fbe7a608ab1a0f",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/0ad008e1e07cbe80b695557121de730c2fae88": "164a45536366fb79326c2df151a44e84",
".git/objects/8c/bc593d837b946dffccfd7ac8631f113918960e": "efd42d3b914b612007548872893574cd",
".git/objects/85/c6834a80e207f86559fd1dd94b1c5dba9aeed3": "4c812b7d35ed04a103f19efca252debf",
".git/objects/1d/6334df2a8b7a6da624491357142a486d2f6fcd": "7065d5df3a7008f2e41619e3cc43749d",
".git/objects/1d/13d31ea7fc08e57784ca5dae420cb7c7b2d9b1": "7db5db7e21f95b625f4451506efb4ba4",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/71/b930c940389a9cb1e9323bf07011e64280bad4": "3940a6b7da96e80cbcc49bee50e6b2ae",
".git/objects/82/5e907e9cd72a9f82f0d46d95c99f27c05e8378": "aa7623f1ec9774a5313f7a965c614fc9",
".git/objects/82/932d884dba9a6dc643af8d71c30e3352614660": "6038ff8b76a727fde1174e4716338b16",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "819f504250f80205a8fca6201270b6a9",
".git/logs/refs/heads/main": "d3314e86326ada2175abb4d3cfb116a5",
".git/logs/refs/remotes/origin/main": "c3a74f98836987cc4f64dfa0172098b5",
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
".git/refs/heads/main": "107ab243d72c01d26be1bf0dbc493091",
".git/refs/remotes/origin/main": "107ab243d72c01d26be1bf0dbc493091",
".git/index": "02bbfd0e06d4df4262a5e1f1afc6bd3a",
".git/COMMIT_EDITMSG": "f2ef17b0a5ef0251de71d75ce796b222",
".git/FETCH_HEAD": "164e431ef31bc5c172161ba3fd75f63f",
"assets/AssetManifest.json": "d81fad80e454744d9bbe08e0d2b1bf6e",
"assets/NOTICES": "130bfbf6010b92829f5c5b1c19110327",
"assets/FontManifest.json": "3ffcc53c9188f183258a3785eefc49c1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "1d987edd0a9d33f29cbd27593b3e4409",
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
