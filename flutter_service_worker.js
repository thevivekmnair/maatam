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
"index.html": "be808b11f781013b70319c374d78dc49",
"/": "be808b11f781013b70319c374d78dc49",
"main.dart.js": "62887404444f728456458e99e77d29b8",
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
".git/objects/92/35a5a92dddf430edf8818a57ae69a4405325f3": "6fac4185454b1b8d6f3f09432e37c955",
".git/objects/0c/b525833a070431f0c323f39dd95bea4dfa1acf": "2775086bc3413a0e799bcdcacde5c956",
".git/objects/66/ef32c03081430664661c687ecc60ae090d7e3d": "5a9b57255586e089ba172176fdda19a7",
".git/objects/68/294a8573fbfd8ab7c6956d0ae03b8a5f66f4f1": "1eeec9624e972bb8a2161c11461a93e2",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/6f/6463cf1cd0674679448d387c153a787dce9243": "510cd3ac87b490279ac8f6d43b0300bc",
".git/objects/03/15556ceae4b6eecbbec1304c48159542aaef42": "7af18a78b8925a4fa70e265cc832e97a",
".git/objects/03/894e935c27f491b2e04290c7cbf6caf9bfcb2b": "8c72a7283a6b03c966dce36a2dec4df4",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/b5e5c53db7f4f77747c389ca9a87461983a40d": "79cb4094c858af11a3955f225af7987d",
".git/objects/04/30b0efd7cd1212554a7123a834c732ec0d0950": "c4357ab4577005c112d51f239e30322e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/a058c13e186c67d209557358a79be05d73595e": "542dc6e97d483766b0fcc612dd1a6b7d",
".git/objects/69/b33353ac3bcb00a4d7d1cb200278e1638edb70": "075962040a28f7ec9320c24843e5694d",
".git/objects/69/10a663bcc6d5284ce266c0932de8a83626e41b": "eac1c136db6f12e69e52520f3c537349",
".git/objects/69/ac81a2a1852dacf3834c2aae221e1cc2fb1cee": "a155fa9ae8292ff9b26cb5d490d8bbc3",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/67/aa21f58e5e839e7e57be34c9510c11064a8d99": "062b77e679aba9798a058ec2c0530d7c",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/94/0d956749b193acc413c9b69b34ed5f39968eec": "9e9838f59bbc8d023e17f6cc207a1f58",
".git/objects/60/d9a02883acf3c00449868ef5d0822e9e0c731d": "d44dc20a74c0f987a1d4b644952efd3b",
".git/objects/5f/769a776c245ddd8a526272fb554a978b65d8c3": "7b86c6e697d384388d2956d712bede4a",
".git/objects/33/18060f29dac850a43ac80c8ae67793ca016bd8": "0a0c3ca56865b2c5bc7ac469668beb5a",
".git/objects/05/84babc1e8c66e4f1ea2c369e0bac8ac7f5d932": "65d27e906727b64e6efc9e8aafd567ff",
".git/objects/9d/fc77d8ced69b0a57be56b4d38c77688ab6a820": "a01f7cf4b5b9c7cc63ff176ad5878f47",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9d/85d0c31c0715faf13a68661b7dc4a7e7ef1135": "9a8ad2eba480a9ad8b9b76db2155ad67",
".git/objects/02/6399e8170aaec5efbf7f12e45a83a530e46566": "3f5dff39bd96583a66d6be8d2bc27146",
".git/objects/02/731fefb5ab27ff0d7e0202708933bf55cd116d": "855ed501f0c364fae7c6c4681ef6f1a2",
".git/objects/a4/755e5e7dd87fd59bb6af29a00d9f86f28b10cf": "fb13b898ebed6063b2cea1dabe45e72f",
".git/objects/a3/2ef67cf2b81dbf7451f6ed31748178e94839b1": "10774f42df5b0e5d1b86799fd3bb0df6",
".git/objects/a3/4c0583f1d25905a19be42d30a63da29783cb99": "6f228a1fd7e9e1975e59f3b48592156a",
".git/objects/a3/28df78bda2d7b1c6df34f95965068e79c18521": "8f062a9dab314d3e5c2673ce595cecc8",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/d9/a4f9dd9e264a4b58153fcb457f5abb76accc60": "7c4b6c354f2dd538727b54fd5d5ba101",
".git/objects/ad/2097a1dec49a66ede6a0161a728be3cdb50b81": "9c4ca12d322c5c6a1c89006d2e26bdfd",
".git/objects/bb/4ad6d10a9ba0cd3aa9e4396e29e330408c189c": "d497410a62464bd0383ad38ac95e6e86",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/d5e8c996f86992f7a26587bf72659dd9055f71": "9e375b347ca84d305c8740dd822d132d",
".git/objects/d0/602104f8063074d1fd6a5b230b0def9e9b36ff": "57df5ac45b7e5e888512ab72521780af",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/da/f5a3ef56504605a27ec2c433af3f65a59103c4": "f6d0ff5a2396e48dff65884032408158",
".git/objects/da/6613a8729f0838614fe1d2dafb28a8df87baf5": "9dbffa4c666a27144f656979e005eb71",
".git/objects/b4/717894ec7b18bfc05f521bd1086a92582ac941": "f6b2ccb52618f86acdd30914a57515cb",
".git/objects/a5/9fba0663937d2b501a065c8752c50ec74ca0f3": "62e0b9e6c330778941927f4e0cc0c923",
".git/objects/d1/448dd8c34d9bad4216475a544574612ca69356": "3579fc0a2b406dc5ea7fce8789e51ef2",
".git/objects/d1/ab86feec04e73b234cc83c1eafbf7ed4d5d814": "ede041c6f4f4a132c2f58078a97edffa",
".git/objects/d1/cca42a483630ef5675a2b20b50a5d68e426ba1": "e035dd4de17af317bed1f16e1fdbfdb5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/ab40d3f08b6899b8ee0700fc50b50604a3d0f3": "61b27875e6b644c31f64f6fdd44ec2d9",
".git/objects/bc/577eea1a6f9332b32024d668cc070133627873": "33df763649b6a918f4140e082457c98b",
".git/objects/ae/a35ace20d444529fe743ff041705b3a2ad7428": "071ae9d898973644ae56eea86009f346",
".git/objects/ae/d283808662f20c4d063e9377d722627e348b1b": "f24bf82645b88c7c0c7db4b8c4053b66",
".git/objects/ab/5f4f4e40256fe573d49e20e6485a5b30c74978": "7074ff01fa7dbb513aad14a33611c48a",
".git/objects/e5/a6cf17d55de0ff81d5da0cfba3244af5233f50": "5caf3032efcc04e1168060052a171ecd",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e2/e0c232aba9d788d5360506ceb642174d5c776b": "967b313fbcd43254dd4a362678402dc2",
".git/objects/f3/615412587028c7ef83b4b177818770d1df6523": "93ab5ad37881dcb534bf1d2b2188b4d7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/da855e8a678fa36df3d9941866442e22bea28e": "9d5ba76bf6ee96f66a1d17d213eb611b",
".git/objects/c0/55dcc9de8de9da66ec3735976d17114371819b": "63ee9e435cbfb114ed831be9bac465b5",
".git/objects/c0/ab98246a3673431a19cf91738eb537e9266b63": "e8c2261b827f732dbbf734874de2914c",
".git/objects/c0/7360ba73433ff0570cbc87d109c3b96d792deb": "9d4a4811996cb22e591a02f1e6a3a459",
".git/objects/c9/e5ba78bbd57d33e0c26cf5d7941d9bb640be74": "6b6075576fb8adc3281a275710a80785",
".git/objects/c9/c1d3c9939ce5d9e0df4c8414f31051185b64ea": "d2cb326d442939a1c59da26e4bb8a89e",
".git/objects/fc/5dd63dc4151eaede0ebbf5ff060f82e2ddd1a2": "dfbf2a10422810e09c8a0efd360bb341",
".git/objects/fc/71a3eee0812e1688a621d5344e594db9c3f722": "fad2fede00069601d8e6a88ed4344600",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fc/4c4c86b56fdf13f4157bdb097f2d8b4a99622c": "4c6bfc1138e7e9c50106028111b6b255",
".git/objects/fd/7c51db6244d637c1a3725c457798e20551625e": "10217659cd901587f7a8e91742838a84",
".git/objects/f2/bacf994ec7e069d807f38a419272676ab4dc89": "58d06ccd812030f150007368f5b45141",
".git/objects/f5/6b78ed1d5486cd6d6641b7a2d89b6eba87e411": "50f8184aa02fe311831f5e827ee590db",
".git/objects/f5/e8eeed0412a0a3a4d4abceaf4f63852770eaa2": "77dcaef9298b11fe5a20b7f15f457e31",
".git/objects/ca/bc7592fee379c52c1501b5c31086f4785d3f32": "e6bc85eb437d7cb2efbf0920d773f964",
".git/objects/ca/258b265cd4994832922bc3205653b0db520486": "6c9a64340d81449ecfc02e12d4793eef",
".git/objects/fe/fed208e74952ca14cdb63e959fef05c10f26f3": "e801e1bf2f764fe50937092cc9e26a82",
".git/objects/fe/2dc3beac2e79edb79de04250a47ca3114f8a99": "bf077b3a942e15b7ec319108c7f1ddad",
".git/objects/fb/f0a5c79de3d8de807d5443f2d01ddc9feb6fa5": "120f5098c44b80a7e1513738c3b02ef1",
".git/objects/c6/9dc9b2cdfa9ec42ecfec62a465f9f520a57bd3": "005ac6f9292d904eb272a5a3f7874e4e",
".git/objects/c6/49506a3657db54557f4ff0f8a28819d9efc194": "91c590855ee5dbec23ed0924069502af",
".git/objects/4e/c51b17280e2088dd766b1af5795cd91474d3cc": "db541c67d477d9efb8dbbca0dca19310",
".git/objects/4e/05d217cfb98d68ca8d814cc3b717165c8555b6": "235cc63dfef6bc31178fe6731ee099d2",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/20/61cfe0f41704f04a84c13ab408a879361d6276": "9b6ea28f6c692188c139089252a35f6d",
".git/objects/20/387440e3e17a81294a2b961bb851c9b17edec3": "54b875eccd175fa5ad101c8f498aeb7f",
".git/objects/18/a656768042b29349545280180d9c2bdd8e8b55": "9131e4320a16b77e7538e3f3017bdc40",
".git/objects/27/027ddd074e664f3759e05e71fdbbefd5efd7d2": "bfe8b2565f20a0e96c147ee42e96e796",
".git/objects/27/48f88e83885867effd7bbbd331e1d793d1b914": "774ff29b8e84ef204ab9f58006cecd58",
".git/objects/27/e99e74e2c40c2024ad380e5d03aaa310dbb7dd": "1a6a7fb29d4e50f38f4d174ce25cc0af",
".git/objects/4b/5b2bf02b7c531e806bb6f6b0cf262038797d54": "b48a2f3a8540f692e0941956d6c97ee3",
".git/objects/pack/pack-586266e95208726dc89d2e0d7b9ca4b9b363d17c.idx": "1354fcc1b71ecb8f186a172797d88b44",
".git/objects/pack/pack-586266e95208726dc89d2e0d7b9ca4b9b363d17c.pack": "81d5e0225b7ae4817933d4d74a038de8",
".git/objects/11/1fa72c7f39beca929d52a293edbda3f59f0b3f": "caa3b7df42ff75fd540926adccd526ce",
".git/objects/7d/6ce16ecdd4afb063600a3c23658c93f949f018": "6e57a247bbf7a7fcd36c88d287cc2083",
".git/objects/29/a43713776e0e0713a232fd35a22fcb9bbf16a7": "23bff96c2103072fcff1060eedcfdf44",
".git/objects/7c/0a0c27f2a41da43856127c8a3def30700f530a": "f8f0142774eab0851feb3284e1c646d7",
".git/objects/7c/f87e705c42a0786b446f987f871f586f80640f": "087ad117d14aeed8ded6bb24ef5e99d2",
".git/objects/16/1e6e1e40da865b37a7f6cc42b39a9a74bf8225": "3835c3781a2d4bd782ef222de1307ff2",
".git/objects/45/2e8f5a29a7af60bfbc6b8423630c9d52431f9d": "74727109d9089276917811c3e82b7051",
".git/objects/1f/d5db46abb02e2976e6ee1bf90d76a45a1a8401": "1a2091396102247c1995101485dc6a87",
".git/objects/1f/2249465c6c0539e44a00d149b351f72de0f13e": "e720260c6ec375a1051b3882712690b0",
".git/objects/1f/3e2f46427f9fe989bdb1f6252643a670756e97": "81f40373708e895b1d459892170769e6",
".git/objects/87/7241ec0a76c1480529f7daeb9c0e44ffcc571b": "effd5b2c1c789e89a883fe00e41df77a",
".git/objects/80/7872ee02277773844a1f25c301541536cff702": "54fd303901a30d613cb69fc2a8141d89",
".git/objects/80/5e4ce33359f16dfe976722c0b1483b9cf47a62": "5be023e832669d06a9cf5c0f27fb867b",
".git/objects/74/7cd6c1fa86c644569908ed6094a2277def5fba": "656f976ddb0b1ad65b8c49e9f3507d8a",
".git/objects/74/3f1f838f83f8c2e1a868f5b02edda19e4eecb4": "5cb9f6c10b60ea8341c569bd3a3606b0",
".git/objects/28/ed709a20afaa778cd9c7f0ee61fe318541ce0c": "04db723e14b42cc8ef7296954f6e5ff5",
".git/objects/28/62f927ab2bc476fbeeb8b5f1fc54af26044cc2": "35e4d75e9e726c4e735a311a7cf988fb",
".git/objects/17/a61ca57db61bc1aaab6a0f196b0a5c30cf6bc6": "02f565a6e13d7f1dd85c8b310989b343",
".git/objects/8f/09280ebf7234f1f80261eb1cb1b0ba601c513c": "48dc1f528cd605ac178f5201f8e7eab7",
".git/objects/8a/784910770683beeee0af2fd08f8587d2bca6b1": "b5a7141a4cac8248ab671db8dfcaab42",
".git/objects/8a/13ba36408c89d8f28683a8c3d57ca923856ede": "6b355e3e89cbcd5dce730f4fc65022da",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/19/6f98601d1cabd3e2898ce5b40a9ca310e3b991": "a96982c49c246de0a1da46d69f03cd3d",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/19/b6f9ef18bf173e67488f72c5c1cd0fb0e4b36a": "220b2d6a8278de740e0d00a8de21d2c9",
".git/objects/19/3bba8f6446a78a94bf3bee41d8d6646ed004f7": "da14d419e48234b2610c78218e951973",
".git/objects/19/66c1f243e5d3772840f9e3c317b88b3bf98204": "be13a03144875f60351811c71d9ac096",
".git/objects/26/724a5537ae1385c82d6e5202241453c4cd9904": "1685ffaa1b2903785d7b2d5f01e27f18",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/21/36ebbfc5adb717dea9becc1fcc4c622caa0e82": "d95896b0bff57f962ead2528dfad34e3",
".git/objects/75/00717096bf45d53acd0405ff1df59b9d0d29cf": "4634fbfb0c13f718a07859ca6ee65a87",
".git/objects/81/eebb4a5317e7986bf7e2c4021ec748a7b508ee": "9ac555aaf2e2145f94d283147b4fb719",
".git/objects/81/fa434c5aa7026ba59a208dc822f445b0f75600": "9da25a19377e58a09ea89cee649cb1cf",
".git/objects/86/18a9dc6d2097b4d381321caf9f39377fd965a0": "ef356c306cce58f77ecae1198d8d42f8",
".git/objects/72/7b0a3354148fd97736677bd7eec699a3ef309c": "27deca1a9f9c13696969026d67d85d10",
".git/objects/44/606c68fc3fbdd2c2fea51c91be9482477c1556": "3a476a9eab3e3205e619a243cf0dab24",
".git/objects/2a/3fa9a1470c35df211c4615d57e4dda110b68be": "31b408763d8a33af920be342cf329ced",
".git/objects/2f/9ad48a4d910bfd57994fb5a2ad87c9fee420c5": "d9b41be897fa49bde2a7caa8af72155a",
".git/objects/2f/ac07cab73d789c33b53e10a6fdd9c43910e0fa": "3115fb2f310fc8ef7592e7f004c74f83",
".git/objects/2f/8eaa7bcdabff44cf3139e397974cc5f671ee3b": "515b4d783d6531faeefd25c1bdcd3c67",
".git/objects/2f/9eccc4032e4626e07145f33da4ae0fdd1d63d4": "2c8d6e8a67f7084836ed036b158e7a25",
".git/objects/43/8c4eca4960aaf92d7ed07d3aaad33134fde025": "e318ef94576161dbe34d412060628787",
".git/objects/88/d0bbb96db2eaece90083fb6a5e88c9d8302a76": "a63cafe58b4223ebdc08237b492a8929",
".git/objects/88/63365e4c40b5e2942179a606f41d0e78796002": "ae83439768ed79d7187e668055624570",
".git/objects/88/82dc158aa721988913ce78d95daa9320b4b206": "e73f6851878cc96ce7350b77e355b5a3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/8f26a7418f478d9516241b4d2ced035694e7f6": "cd66bfc1dbfef2230fb93466425fcda4",
".git/objects/88/c2c1b085496cab0771956cc641e6dadb7b209a": "d1521c2c3af9d3e9460ca749b9ccd087",
".git/objects/6b/f2f9d281593e5a6d2e604ccdeabb5951a858d9": "a8e81f61b1c21eade1e717414d8084a1",
".git/objects/07/4ccc65955af7cfbf14bf721797cc6a3c103b6f": "f37f8e8d66a082af3e5db3f2cf76d21d",
".git/objects/38/957f29ee7f559709842fa4ed70d2f38135cae0": "fee0209b9543c001056c10483e470635",
".git/objects/38/bff0cedc6b5f8ec9b7cffd8b3854f0af9e3355": "a0531ae7e1b74007294a44f31d0badca",
".git/objects/00/4213ec97b0cf06aab5bc6a1a9df3910923b144": "4e868dc4ad21044cc2fa37f4ceaf3933",
".git/objects/6e/aa89a5ddf6df27311ef7f99f9369dd3b327045": "f49fbe3738672fbf31e2222b7fdf5653",
".git/objects/6e/5343959ae3ec8fca5e11bc228e33b1a535258c": "a81da4587013c4f436fb934df6f931eb",
".git/objects/9a/e8dd5fd5d9d3214771ddff335b680875859021": "fbb5860bbf2baae4fd374e1d9adccc3f",
".git/objects/36/9a4df9fc5361b44ddfecb424300a0a795c1a26": "e3ed1e4ed163978f188175dccf86b294",
".git/objects/36/58fd45e8fc520544539ec78665e94300e0f63b": "40cd18e534a4a124ae907f728176bbeb",
".git/objects/36/d0c1927356f11df21916248d11ac59ada82f05": "8c72faa47e37bf96122c4b2238905c39",
".git/objects/5d/8ed71fe148062a17d70dfdabb203df4e77ecd4": "c7a3ce78619855469fa7b7439b0f7a9f",
".git/objects/5d/8e50db146f6b86a65dd5fe3024d5c88d1d128c": "3bb31f692178a0a8ef5a926846071548",
".git/objects/31/4de41df0103a417ded128686afc0d111269e13": "de2e40df055e78fa138b04a97bd7fa3b",
".git/objects/91/914013a917dd5903e63be42c9d23b1eaabfd5b": "e3fd630d3bf8bce80f88b8622b1f9977",
".git/objects/65/d24a27bb2a7217c52f9078a989582754253634": "203c4f1231fb88c7f4c0edea26cdd6cb",
".git/objects/62/789d204d7a5da587af6599e5f9f6d4530b8f4b": "9ef6319021935963f6ac5bfca691c57a",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/1bcd30b14603b8fd3f99bc9854eda3bfe1691d": "3345d70252a4301daefa61e5c1764c61",
".git/objects/96/2e1959ca3c951040fa0a17958f224a54b157d4": "0a249690bc1c81db5f95adeb1744621d",
".git/objects/96/cb82654e43260e4ec11165da884b2b563161d6": "427a6b3dc4301911d43949b6fc33e748",
".git/objects/3a/c5a5deee60f7ffc92e588942942e2c1de53d0b": "9af68c89eb01dd93d983ee32b5aa9ae6",
".git/objects/3a/f0772f0f2b7688a31cf45e9fbb70eeda41dca1": "68af6271c9769d1b82239195da8bd5e4",
".git/objects/54/35c0c0e8098fdd4db96b6d0ce2286d9aaf5f82": "513ed3fadd8277413e6717cfa1e753e9",
".git/objects/98/b9ce1cab5967f8a748f952d8217eaefa279d4b": "26bbe425f128fdf33c997402a403b973",
".git/objects/53/349b652f48547891b148388890e5ee8fcf74b4": "b800888333ee4853f1b0cd442865f7e3",
".git/objects/53/6e2164257cd62e76b8f75f6cd375a9fb652a63": "97ae1fa3cdf23e7825f002ff8a88b2a9",
".git/objects/3f/58ce42a8ed1d128f0e0cb597166585504dbfa8": "bb0bab245ab27e58132753c2253e3a8e",
".git/objects/5b/40106bc8f9edd739c102968f38de456c75bedd": "67348f50c5dd9050dff11430429c77ce",
".git/objects/5b/25f86b4e9af390dc9620e28876f015ee58f83c": "da51ddf96fceed66996f56cd20e9bc87",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/08/59db4e962b79ac20cac93790213e3ab9164e17": "8e6aa829b83ed06854a2776f9a7875b6",
".git/objects/01/a0d79c12b78fbb6f052f60d03db2565b413049": "5cbb6b45d94066cbd977efe543471504",
".git/objects/6c/4f52dab3bb24c12317687039602b1887ccdcc7": "c377320b84b178305dff60185d678da1",
".git/objects/6c/648e47a99416d7a068df65636ca5ae6e51cb9d": "983e86b6691000aee6ed342a37a9b510",
".git/objects/39/87d8008700daa4e90b3ac25dd0b28727e43400": "c40db89413664685606f65027ad9122b",
".git/objects/55/302e786dc18783720cbe1eae2b1ac1d8919af0": "54eaa5621f1e2552f447921dfd9f4798",
".git/objects/97/0e4281d2a1da0e6565195af5b030d9d861755e": "2a1af4bfa119d4f1de71b2a787cb6da8",
".git/objects/63/089b6fa559e53978fd889fe49e0a961386a9d8": "a8e3f7b8dfdfeeef3391cb48d2455f9d",
".git/objects/0f/54962d24a3a1b183dae96d5458161542fddab4": "c55d94d93bd879c9f2b90d2e69441749",
".git/objects/0f/2d05c6d79f53840958ab784750bafaedc8b286": "942c65cfb658c9c3db571b81b98aabee",
".git/objects/0f/c74c132b78cdf3f589be4a50d7461f69237729": "cfdef2ddbaa11030dde9c88f0ec84e88",
".git/objects/64/6d32b426881d74ed9c7f1f6fd894d6f6d126ab": "2b4ef41c109b99c43e2d96a852f54696",
".git/objects/d3/fc47cf8f4d21f0be77e781440551a6d7bbf761": "2340b2c358b1b7047e34212513d4ad7d",
".git/objects/d3/e23b6a6983575661054ecf048ea97c16f4f3d8": "94c8a18b179b36eff761814d4ba3c6a8",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/b1/38e76b986fa8ea98e521bf12ca82d2fc710ffd": "46c9468fe247f81bff2b39149c4f1a86",
".git/objects/dd/3a18fb857f0413901e8761527f1b26f32f7d58": "ce6911f043cc4491f4747f1abe080812",
".git/objects/dc/eeed2bab92f9dde04494f7a5833f84db140a8b": "0172a02e2cc76f4c315c3e23a9e55e11",
".git/objects/b6/c53ff241fbb092939b7939b31e07958f82369f": "6ef784776f7d384af450f51f976207e8",
".git/objects/b6/3c957e6a2bff3d710c879cb9fbf47d1e63e78c": "e2b865334f3930b1c1d3e7d9cc428dbb",
".git/objects/b6/e69fb96bc86907c59c16b24ec3d1e898e3970a": "13388481382eb066c51c75544a236a35",
".git/objects/d5/17e0cf056dea783b116c4f576fbffd81748ce3": "1de7cd9327b7b2e3a0b83f3cdb45f52c",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/aa/93504c2973d3021febcc1f158c019d69b5e69f": "1d4dded8890eaf93d91be63790f26bce",
".git/objects/aa/20a4136a72043b52f99d744a5290d4da6b71ab": "d530d19f846c46498e5c96dcf4a0a8b6",
".git/objects/af/48a344752b31c65316d62614eccc15ad36b176": "c047eea1d80547c5a7b5a533e897381d",
".git/objects/af/3a84c88bed213fe371ffced5045a53f96fa64c": "9bd1cee1e8e90853dcc9c98a788e00b6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/d22a46e7571d2317aa0221cadace59d101172f": "25c8727ae95bd723cc55fa9ea460fc96",
".git/objects/a8/cd2ad5f4e14d275238db4437dad3489d6ad212": "a2fd1950e77d2a9b6fa5b0ff57121cbf",
".git/objects/de/17b5c7a48b257ecdbe75a26f37c2c7cc8d44c8": "9ee52c73d99c28444665bacf5f0ee530",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/52ce661e3c892d112af956515d58abbc995645": "c7e66439a2c16ad778d46846a81e6c99",
".git/objects/ea/edafafb059278f03748755febbe654542bd83e": "ac4139435aa5047489accd7ee8728967",
".git/objects/e1/6a6a235b3b323eded9efe1f527065bcb81379a": "245406faceb9bb609684cab779ef3f10",
".git/objects/e1/65931ab65664128275f0eadb447b86ec3f1d2c": "27787154dacab60e7bd7b9fc947813a6",
".git/objects/cd/8f480d174c68404c0695534ecf3d2285ea2e6f": "665d02ab283d874cee017379195298ed",
".git/objects/cd/7dbcf883e5d4d98084b44fa258646a23c31178": "8505a83165acaca336e21b84014e6357",
".git/objects/cc/828ff6864b0a035fbc18d9f6123c1729b7fbda": "97049356fd0baeebdc213251d57b56e5",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/f9/050cc3472107123d817317e910ca48694e0467": "54f7044c592bdc1b3cd21245d5ea6543",
".git/objects/f9/36058d9a366fd7224d1e0127404372627fbafc": "db4a5be0d44427657c2c224916638f01",
".git/objects/f7/d57166d803758643b617c59c29dbfbdbb9e389": "78ee5319c6a4f695b8b258a5fe6b1729",
".git/objects/f7/52521864fc3d3dff484bb19274a21eba4034bb": "358f05e6a883e31cc0cc7d23d80a5df9",
".git/objects/e8/3d1278dc6c5c377b744f04aa100d672f0333d0": "22228de13cfca99e2f51b552d7b732da",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/c5/1214450aef7c12eae56570a7e0f79dd942d1bb": "9a1ad8046095691013cbcaaa72107d74",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/ce/4f95c9c125e3b95437fca2b95483ac158fe3fc": "2e04e140b9bdc871d531249d3c5d5b08",
".git/objects/e0/f5a265002a19c0f812b32d097086f52eea0160": "e20e38505aaf3a7422d57fbdae8d45d6",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e0/9773cd2b40cb4e9bf5d0b4af1c5c1ce1eae300": "3d22cf18e1c1d8b39fd29674c0804194",
".git/objects/79/9867791ac7adc1b5d16ae831cdeefd320b8d81": "0f0e9a786102550d2c12483d7716a404",
".git/objects/79/6b503e9cf5a132d00b8846e4bcd8fbf1b47363": "344cb9279fe5fca050db8b6d1a305a66",
".git/objects/2d/312ecd9f670162a34498eeb276ed9434c4f87e": "4f8459179eac50ad1dcbb1697bf70b1d",
".git/objects/2d/2134fde006c1258f8ae7a193022296864bf3fb": "b82447da8cc6edaac4777dbcefd3df7d",
".git/objects/41/fb33e3cee9edbd73a4489dedd097999fcf7829": "2e71deb29e61e417674743817f3e2bbd",
".git/objects/41/8d448bd7d35ecd70177df630113e93ea117e98": "8f9335e515cb5e9757c88a8d214c5fa2",
".git/objects/83/aa796ea97a24223b4a17c86d5cb455076cbaa1": "2edcc9c6e7d6634b85f067fffa378d68",
".git/objects/83/0b382de6e534345a74ff3e80fd7652d41d764a": "1c5f4eed5a92444c4cce5a7c3dfb7e46",
".git/objects/83/04af301d5c087f1f77060eb6bc25a907985a1d": "68609b825fb313245e62436f2e8088e9",
".git/objects/83/38b7af06c0a78ce4ebfee300cff8474c791a15": "68fcc2c5527b57023a0fd1b220665d50",
".git/objects/1b/b62d06b11389f171e2bbffff22feb04fb86728": "3cde8fc72cab59ab1e1bbe0066196dac",
".git/objects/1b/a386c5489bdd6634c3dc480f7783deb7e4bea4": "5a80615bb7ad9e31a413cf71f1c7e808",
".git/objects/77/902fbcf75c304d4fd00db5d17ef50e5b33cf92": "bf810483a289de501a4e7d6b313acfc5",
".git/objects/77/8c288c70ee4f77530d292d7b661e1a7d300445": "376d06f8b1a9ab1a1f8a40ca91a39c48",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/48/a79cb36b62c49c62ab275a6055fa5c8dc4d115": "cf28fe1247c0bbdd65232713557418be",
".git/objects/48/874b5662a36055b60886a1ee1bf8eaad76e57f": "484559a74f261155c25b0f13ea23d78e",
".git/objects/70/83474653e77f3e95fc936cdc2fa094d24dc275": "c43c57816aeb8d17aeccdf5c7109835d",
".git/objects/70/433c9e36ba872e9fa9b1f2810c826a14ca28c0": "1f171975ef5f9c5e798979b0884012d5",
".git/objects/1e/7265f45f352e0d2edb2e1ac4fd5dacd8bd3796": "e399646818d620de0d7575073e773814",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/4a/e2b95476b5d87d1f31796e4a2ad77dc234e399": "3f7595368c3bfe8b89d2f9793dcb9b3f",
".git/objects/24/f7def57edefeceaf210ea1f6e0747558973318": "d8be2b835adc71e262751c2771d3d9ad",
".git/objects/23/a085b65b2419c19112a5be348067eb3be03e99": "bc916b625939a7b4bca6e5f6c14346b4",
".git/objects/23/9a13c9d296dcdd447647115d43c2df2afc6cfc": "2cdb37838f3205556e06168f874e20b1",
".git/objects/4f/507ca9621b820487366d5377f9bb56a33a1493": "fc72d77be365ed83aeb1125f8b571c69",
".git/objects/4f/7bbd205875d78d4204df32e24cc8b2da015a3c": "59c452f5e847850cf7fbe7a608ab1a0f",
".git/objects/12/43abc92a3b6a38207ba2a3a8f2db12d581ce6a": "c1053ddd484a7431ee62170e58b50644",
".git/objects/8c/bbdce5eeaac0aaec45154232c0f1238b5e657f": "e5262d5c5ba9f927513014107dc6c497",
".git/objects/85/c6834a80e207f86559fd1dd94b1c5dba9aeed3": "4c812b7d35ed04a103f19efca252debf",
".git/objects/85/8bbb046ee7ed85c6d7c5525884c330b9a53f3b": "04b54cd78b3571c176a7619e629c6bdd",
".git/objects/1d/d5f1a04beb82105b13d98b62dd1856d0f10534": "bf638f86df94f86e724f7bc23906324f",
".git/objects/76/beeab14998fae2bae74ba95cce39d06bc558cb": "dbd9a895253f42a8b110a576e6881842",
".git/objects/1c/984017af08ff065e6b5724ccbb97e8bea24f59": "d47ef35771d67ae292e9f74501f7ff48",
".git/objects/1c/f4bffd0c5c69fe9284a8d96a87b5c9b479e671": "b3fc95b5b0d5acb1a111c5defb99b73f",
".git/objects/82/aaa98d99c5a67f30c05ddfdb1a0be6b1ccd6cc": "667b52d071fc1b46095221b9bf3f9cf9",
".git/objects/49/0efbf5511252bf2a798bca153f8f39e8a8fe84": "38200f5274f0d28a123f353e822f1c58",
".git/objects/49/1a14c76c04c7edba026ccf9955cc6c3035a544": "117d6592d41501b737ca3c5a9f0ba30f",
".git/objects/49/6df39ca05da2f50a0f42975aaf260de6304b0d": "e11fc3283f785e4e2f5ba12778675aaa",
".git/objects/40/bc37ba2e9aa4e70482be4c575b0b79deab4206": "a8d5a2888dd4f22f3a7ce6f67ee09520",
".git/objects/2b/82ac03e7e9ad63f7fcc78aef0b6798c4cf61ab": "1c4d39b419f1e08b57b8f304752a4eec",
".git/objects/13/da2e78191b73e21da42c6b3a011c2d92f15647": "302a2762dd409e9c1508646322debdfb",
".git/objects/7f/5e8768b8f9c3e5b6e0db95fc0f89a10e12fc61": "04295004d01bc1ce708738c8e7ba0428",
".git/objects/7f/7e391d6608324069f9eb14f49089988382a2c8": "cdc226a61cb5fbd7e2749633864aea8b",
".git/objects/14/1e4996f6ca42f9883112f81f3770435ca68214": "cc883834f53893fc5ea53ba962ca2ae4",
".git/objects/8e/0a6a041c23f844a097b55099370ef58e3a80ac": "c6c134594ffa1e3ac1ff62294bf1d837",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "88d1d63ed4b677373adef9c2786d61c1",
".git/logs/refs/heads/master": "193dbdcf6f5927d29ad1c36cf5a55133",
".git/logs/refs/heads/main": "5c7d40af4e77c1cc4403622efd05f9c2",
".git/logs/refs/remotes/maatam/master": "3c1a76bbcd66b35815037539fb52d239",
".git/logs/refs/remotes/maatam/main": "312b7a78f64715a62f33ded18a775c08",
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
".git/refs/heads/main": "a944cbe0c9c21e04cf6c60f9f13d812e",
".git/refs/remotes/maatam/master": "cfbc5900caeffbac6ba3fb3337ea9993",
".git/refs/remotes/maatam/main": "a944cbe0c9c21e04cf6c60f9f13d812e",
".git/index": "d2e78d9bf7824d7da061d8050cbe25d4",
".git/COMMIT_EDITMSG": "a75f2b708dd2138e0d810015f87ade74",
".git/FETCH_HEAD": "f599ed0d410e46409fdfb14348296bf4",
"assets/AssetManifest.json": "d3339bdce5393b491d54117ae301485a",
"assets/NOTICES": "7466eb7670795bf5433b45246b5d2d3f",
"assets/FontManifest.json": "86030d27e7a14996955324ef6a71ea9c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "ebe729288894dad618fba0af216bb482",
"assets/fonts/MaterialIcons-Regular.otf": "b4d322612566755d987a7f68081f6ebf",
"assets/assets/contents/kaimaatam.jpg": "b20ac2932ffbc88c152968c3e95d41e1",
"assets/assets/contents/a-z.jpeg": "98552bcbd3a47d23e5258ccca2473cce",
"assets/assets/contents/arch.jpg": "871ae64d8e45e410c08bc44ba865bc0e",
"assets/assets/contents/innovation.jpg": "c3ea55ba1c381ae1ee0789a36e226052",
"assets/assets/contents/bethechange.jpg": "81d719094cb358ac85c5b7b1de3e7fb1",
"assets/assets/vendors/86698e5f-c475-4970-bf65-16e1eaae7e1b%2520Medium.jpeg": "0c756d66875aef0f1f188a167a0acc6a",
"assets/assets/vendors/IMG_5920%2520Medium.jpeg": "13d1ee52b39b082e17ab858943759f73",
"assets/assets/vendors/IMG_5919%2520Medium.jpeg": "85b26860cbabc8d5be9d522e8224c360",
"assets/assets/vendors/PHOTO-2023-08-16-11-53-24%2520Medium.jpeg": "5f54ae9917e1069073d3d4739e36ec5e",
"assets/assets/vendors/59c9ba8b-bc6c-4b1b-aa4e-f4d021f0bbd8%2520Medium.jpeg": "c0c09dc28770578f4f4fe1bac3db1f2c",
"assets/assets/vendors/450f664d-f201-42c1-9377-d3a1607885cc%2520Medium.jpeg": "bbeb75c079281c548976932571b5185a",
"assets/assets/vendors/20230719_143143_0000%2520Medium.jpeg": "248ccf88201e06bc4e314cdac7d47b4b",
"assets/assets/vendors/IMG_5913%2520Medium.jpeg": "97fd2d7a8eee1ccc5efaf94dec906522",
"assets/assets/vendors/IMG_5912%2520Medium.jpeg": "5eed80e2158447d156cddb701032a7d8",
"assets/assets/vendors/4b574937-475d-41df-b53b-dda0adcde7b6%2520Medium.jpeg": "505491265b2acb20cdc5e1b4a2ae4f28",
"assets/assets/maatam_logo.png": "bc67a1f0f17164c0974ef9d07c0eec4f",
"assets/assets/location_marker.png": "362605c71cb71977a471868f4dac147a",
"assets/assets/kaimaatam/DSCF3378%2520Medium.jpeg": "9c750033c036dc621eadda8a8be09286",
"assets/assets/kaimaatam/WhatsApp%2520Image%25202023-08-01%2520at%252012.37.25%2520Medium.jpeg": "4c04f678b3e2a8bc700ae5a41353716d",
"assets/assets/kaimaatam/DSCF3261%2520Medium.jpeg": "4454725635b499f5c38eb2311a9a81dc",
"assets/assets/kaimaatam/DSCF3271%2520Medium.jpeg": "fe5884dfb4a6a7018efd5bbc788a17d2",
"assets/assets/kaimaatam/DSCF3293%2520Medium.jpeg": "9a5024b2a23b966f444485172d505fef",
"assets/assets/kaimaatam/DSCF3273%2520Medium.jpeg": "5fcb6d7caf310be91c6ec0c67be20442",
"assets/assets/kaimaatam/Copy%2520of%2520WhatsApp%2520Image%25202023-04-27%2520at%252010.35.02%2520Medium.jpeg": "9b0fbe78be89e675f73ea011d6fda070",
"assets/assets/kaimaatam/DSCF3377%2520Medium.jpeg": "1cac919a6c1676ab0bb1204ea370fc60",
"assets/assets/kaimaatam/DSCF3269%2520(1)%2520Medium.jpeg": "79c6b0a35eca9c757296e659089702d9",
"assets/assets/collaborators/Agency_for_New_and_Renewable_Energy_Research_and_Technology_(ANERT).jpg": "7ae4158dd017753bd9ffa6d7440cd8db",
"assets/assets/collaborators/WhatsApp%2520Image%25202023-09-06%2520at%252020.39.50%2520(1).jpeg": "fb3c2844775e1fbeba683601cd875ca3",
"assets/assets/collaborators/cropped-Rect_1.png": "46d5ae3a7699cd9f2d3de2dd32f43d9c",
"assets/assets/collaborators/WhatsApp%2520Image%25202023-09-06%2520at%252020.39.50.jpeg": "42967f8d4485fd33fabe9ba098283c7b",
"assets/assets/collaborators/Screenshot%25202023-09-06%2520at%252011.14.36%2520PM.png": "c6c5d4370544b5040f0b40da445b45f2",
"assets/assets/collaborators/logo.webp.png": "c2d8819e826f1ba8dea446f25f1e2ca6",
"assets/assets/gallery/ACS04474%2520Medium.jpeg": "8e6342e6a0b61a6828caa5fd541b1bd0",
"assets/assets/gallery/DSC08626%2520Medium.jpeg": "54f81700c575474fa39a106647796ebb",
"assets/assets/gallery/DSC09142%2520Medium.jpeg": "0f3c0986bcbed0050d8f48a233ab547d",
"assets/assets/gallery/DSC08790%2520Medium.jpeg": "6eaf2b78507fa378bf91f5849ed3d9ec",
"assets/assets/arch/WhatsApp%2520Image%25202023-06-11%2520at%252020.22.36%2520Medium.jpeg": "e60bcda0d88e07579ba26215bc3af1e1",
"assets/assets/arch/Sajitha%2520R%2520Shankhar%2520Medium.jpeg": "851d18e8ab3b2532f79a2e1dfac8347d",
"assets/assets/arch/Copy%2520of%2520DSCF0262%2520Medium.jpeg": "b9750d0bf560a8f7f4cec390715f2988",
"assets/assets/arch/333109867_152991130996323_439488039298082541_n%2520Medium.jpeg": "616adbf74c5c57f05ea52f0b05dcc65b",
"assets/assets/arch/DSCF0874%2520Medium.jpeg": "104820474cdd3371cded0f370e291546",
"assets/assets/arch/ANP01057%2520Medium.jpeg": "75a52dc3ea8c2f168a3c57cc8cbac12f",
"assets/assets/arch/ANP00039%2520Medium.jpeg": "44e4030ee008d5cee39924768fd0bc18",
"assets/assets/arch/DSCF0256%2520Medium.jpeg": "af73716f9e5c3f91ef002e95c7fc26c9",
"assets/assets/fonts/Unbounded-Regular.ttf": "2430b9e2222630e5794de6de534e7a68",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
