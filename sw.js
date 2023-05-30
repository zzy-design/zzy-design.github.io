/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/10862679c3fa/index.html","12878b9e2a6a3f05c22d130152c2c664"],["/223a80ba41d6/index.html","6106e74b8c92f74cc828709aed1ac4e5"],["/3582a0555ae1/index.html","0ca32b1013a7da1a95da9e2eddea0af9"],["/368c8b7cab21/index.html","27682d4d07bf45b91edfd0af1e7aec2c"],["/3ee606c7fabf/index.html","27d79911262c0e976648ae7059a3f47a"],["/404.html","1e5453592d6ccba968c03e11e4c0a750"],["/4132844b2efe/index.html","43e32b517228586dd7d80b9daecd2f17"],["/5134766ba3d1/index.html","91e30586d1223ed1e39b0cde14a2f3ab"],["/66d2dc06dddc/index.html","ec6c621fbd9a9792b3e9a538a71cd38b"],["/7c4c0b8793a3/index.html","aa22eb5c024a331bb4bf7c1afd488629"],["/820530ad7203/index.html","63f7b777073df79786be5babe3af26a9"],["/a3dc247d52a5/index.html","8ec500785913142ed31fee50fd2d44e2"],["/about/index.html","7113ed50aab35358695b85473b0773be"],["/archives/2023/04/index.html","e86c13ff8edefeea8f9e1d04df22da95"],["/archives/2023/05/index.html","a13fb6cca85af1ef21e6caf93c267f7d"],["/archives/2023/index.html","5848f5d4f4bc9ddf16dfb0e08638ae3f"],["/archives/2023/page/2/index.html","39a5f61393b75e13dd0a50717e22fdcb"],["/archives/index.html","d2d7d33af5a644cbb67f1b12e79708fc"],["/archives/page/2/index.html","ec6eeed26e6b2be9309709d9df24ac22"],["/b2937a13eef6/index.html","2e7035509b221837e53d785b1c64c688"],["/bookmark/index.html","b25b0243f60d4930b68863185287b0a0"],["/c11a99d2c881/index.html","07dbb52381fbd8d30d32b265be8a9121"],["/c1a24517aa76/index.html","3239ec8e839563a086d8fe2a7fce048e"],["/categories/ChatGPT/index.html","5f5f4ea8f20cb901e0a1d931c576ed6d"],["/categories/docker/index.html","49b72a9c5246244864710acee267e68c"],["/categories/index.html","14346a7163a41bd8dfc969f5eb1466fd"],["/categories/java/index.html","62ea445bd77029e4b8a8c4c4b88072b0"],["/categories/linux/index.html","7356cfedda283d7ea2ca7571a2a4c124"],["/categories/mysql/index.html","a4fd4c91e97c2fb32f21986bf1137dfc"],["/categories/nginx/index.html","11bc85da796c1c75e5034a212874a9ae"],["/categories/rabbitmq/index.html","3bab8920a4365f7c6bddc42c5ea794f1"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","90639908380ff25478edbbbef60dbc5c"],["/css/style.css","aff75c4b93543f6adba319e7d83484af"],["/db216b4516c5/index.html","0e1b9c5b271f8ef15d3d1279e37dd911"],["/e4a7b2375fef/index.html","b4deca0402f035454e31eda90a359d6d"],["/f45df1cd3575/index.html","82085ae8e5fef95c25b5645765eec904"],["/fcircle/index.html","ad1b418f3c149281f7958bf34d05edac"],["/friends/index.html","4d1e526c1445dc93c3dc05a8c5a9f643"],["/index.html","fe23ffd89ad1947c9311d3f0a6211004"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/click-word/click-word.js","ea48cc040c8828bd1cc07be103b0f71e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/title/funnyTitle.js","f268216ec84defda248af83f8a9c9073"],["/messages/index.html","8ac62adf35350c2c2e495c01338d7459"],["/movies/index.html","042ce0edc98c583ac871c3c59ef766d2"],["/mylist/index.html","8f1a11e7f3b0015171b620629bfb197c"],["/navigate/index.html","31d398452cdf149a4076a75afaee12a6"],["/page/2/index.html","266048f1960d0075fea3f9641dd5f48a"],["/sw-register.js","f19ccd9513263b59d8f3aed04f1d4793"],["/tags/ChatGPT/index.html","202a90e6f8b11c2a5fe195b9f229d1e8"],["/tags/docker/index.html","b4e3cd05d94f9122256f3c5a5731cd2e"],["/tags/index.html","74ca01e28872c1acd6fd05f55b858eee"],["/tags/java/index.html","f5b19c6ce31bcbb7a3b63d144ba1cd60"],["/tags/linux/index.html","7760f2acb566d751ef01593eb5627425"],["/tags/mysql/index.html","ec45774bdc6836d678593353672f446b"],["/tags/nginx/index.html","098dc49663cdcdfece94ad3b86529439"],["/tags/中间件/index.html","6ad94e570bfbdc068603c5c2667bb96c"]];
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
