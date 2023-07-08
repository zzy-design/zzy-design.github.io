/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/10862679c3fa/index.html","5c4d9ec06f092d87befaf44898f03a27"],["/223a80ba41d6/index.html","a15990d2447d66d0493fbf841b798114"],["/3582a0555ae1/index.html","338ab488d8b78a30f2b5b017adbf82d3"],["/368c8b7cab21/index.html","1e2a7ebd369da1463fd08f4355e1ab30"],["/3ee606c7fabf/index.html","802d144bd67c07ad6819c2fb1f5a7256"],["/404.html","f15da74d1a0b55b8b177cbc3cfb53018"],["/4132844b2efe/index.html","fda3c6088b103c50419a10e281116d6b"],["/5134766ba3d1/index.html","4144920bd8450f006ec788b953aa3f90"],["/52870188c2ad/index.html","5695f38dfc4dfe9d3ea02270d7874a85"],["/66d2dc06dddc/index.html","e5a55b71647c796f2aa44a7271bb62a2"],["/7c4c0b8793a3/index.html","47c39dc041cea1a1308ac981168d742e"],["/820530ad7203/index.html","220d265e815993ca0f8d90f186eb883f"],["/a3dc247d52a5/index.html","8c50c100407e5eb3c99d86a73fb06704"],["/about/index.html","4a18415c5f7e3724ac84e256008c202b"],["/archives/2023/04/index.html","e97d9d8cd7e900ea268990ac6a7790b3"],["/archives/2023/05/index.html","75a03d4461f879fa04e2a22fac42ef86"],["/archives/2023/07/index.html","5a939415620a922d24a981709004a752"],["/archives/2023/index.html","7483d3b4ff7f17ddcfcf934372f38c47"],["/archives/2023/page/2/index.html","d5a7d83726f0c9eefe257d34870cb733"],["/archives/index.html","78485fd450cf74ef446ded4313bf9586"],["/archives/page/2/index.html","7d34a2a6da101369e2985c64df8b94e1"],["/b2937a13eef6/index.html","342ba07aecaed18340242767dcd48769"],["/bookmark/index.html","89cad160ffab7ede64c7cebe9bf3fd86"],["/c11a99d2c881/index.html","67749a808d773ab6b31242b1c0cd8f3e"],["/c1a24517aa76/index.html","501f71b791c574250dbf7199a922a798"],["/categories/ChatGPT/index.html","31ee40b000a60b6c975ac4852b80d0eb"],["/categories/docker/index.html","0c27df0ddf3f6b15308352b27f1744fc"],["/categories/index.html","69d73954f0d398aaf1435f010e19e5e2"],["/categories/java/index.html","386630d5085c1dfede7f82108067c35e"],["/categories/linux/index.html","036ab330959b37e4bb89df04f88945c4"],["/categories/mysql/index.html","065f69b6c833f2e78b43723ac275db1e"],["/categories/nginx/index.html","1586528b906e30688ea2eb272b286cc3"],["/categories/rabbitmq/index.html","5b19b0ca8ac9e1938689ad3675aa67a1"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","90639908380ff25478edbbbef60dbc5c"],["/css/style.css","aff75c4b93543f6adba319e7d83484af"],["/db216b4516c5/index.html","9c777b441e3c015e9cf3876298a6491a"],["/e4a7b2375fef/index.html","4cd11eafd7f09121a60a285f00b1391c"],["/f45df1cd3575/index.html","22ead5723def1e571556dd3f4e09e206"],["/fcircle/index.html","4c645b2e7cb033847fb464997635d7d7"],["/friends/index.html","c7175e30856f9f408708899794061f72"],["/index.html","9c5875e030793ad03501a0cba5f670a0"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/click-word/click-word.js","ea48cc040c8828bd1cc07be103b0f71e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/title/funnyTitle.js","f268216ec84defda248af83f8a9c9073"],["/messages/index.html","e9a1561a25cc6f9ba4f92b5cbf643202"],["/movies/index.html","f0d09b29ce774efaea1e87bd73316609"],["/mylist/index.html","a7ff1820a5cfccf2fdea4dad153d86be"],["/navigate/index.html","6bd724570c0a2345254a577f13576596"],["/page/2/index.html","e99fb3894ca5ea48e6c3616cd6bb0ae2"],["/sw-register.js","becf5b2c6fe4815320b48b4ef5418dc7"],["/tags/ChatGPT/index.html","c8e1f3c94c734fb9e789c05d36556833"],["/tags/docker/index.html","a7853a39a0def52fbba4fe08ce61a8ee"],["/tags/index.html","47b6a6fcaf0c0e4a1f2d694ad280de83"],["/tags/java/index.html","9e2fe5c6cfcb900014b0747cd143160c"],["/tags/linux/index.html","b5fcb3d8c574b1100fc4002130ea8c9b"],["/tags/mysql/index.html","f527b27ab4cd2744b3ad3e86d4ced78d"],["/tags/nginx/index.html","d87afcb6608b5df9f9f006f318700b18"],["/tags/中间件/index.html","77c5169ffe3beab30bc7b67588e75e00"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
