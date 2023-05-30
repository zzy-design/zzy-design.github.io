/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/10862679c3fa/index.html","5e161c6390ecc753b34de0e8e70198f4"],["/223a80ba41d6/index.html","d0cb0682b969597181ba56dfa6b7a806"],["/3582a0555ae1/index.html","10323e98992cf2bd307819bfaadbad63"],["/368c8b7cab21/index.html","3221561865c49bd717ab41c346722185"],["/3ee606c7fabf/index.html","622a6827c5ea7578894214b8f66c5eb0"],["/404.html","1a4d4538e3036b52d68f0be3157d32ea"],["/4132844b2efe/index.html","b5d2b6508d41545ec977d43eccac663d"],["/5134766ba3d1/index.html","843730bc9c5aa70dd181714f05f8e7b0"],["/66d2dc06dddc/index.html","b5bcfe47f939b5a52da7f2845dc35862"],["/7c4c0b8793a3/index.html","23c470568b44ab0c19b19b5b51fe9a98"],["/820530ad7203/index.html","7a577700850f1e05a9bef80b5b89b453"],["/a3dc247d52a5/index.html","5664667fa83f591d6e3caa0c6f735fdd"],["/about/index.html","ebecb65f0c07c7d8e38827e2728dead2"],["/archives/2023/04/index.html","fb7caf5c10bbb4154221d67c8e3d8aa7"],["/archives/2023/05/index.html","8ad9f691f1100717501a638f90f6462b"],["/archives/2023/index.html","4c5c7a1e520ce832245c7ead9c8e023a"],["/archives/2023/page/2/index.html","d799f423b279fca4c6d80fdee85a7fbe"],["/archives/index.html","4ede5b672f9621995dab01b065f54762"],["/archives/page/2/index.html","41d4161f3473b98b850e65352a2f4e8e"],["/b2937a13eef6/index.html","fbf23f2249252a29929a0ec33e132229"],["/bookmark/index.html","cee8fdd5075849a3a883d058919f4eba"],["/c11a99d2c881/index.html","6f9ab5b24cc3ce3addb1ddcbff6aa9ee"],["/c1a24517aa76/index.html","ad8d47c17e405852a172002bb12e935c"],["/categories/ChatGPT/index.html","0dbd409d86afe8abf5ef31e821bf1636"],["/categories/docker/index.html","139d13d1c1c52eac7b808f27c67d34f6"],["/categories/index.html","db826ea5db5efdd86f6f41a203d89631"],["/categories/java/index.html","3c3373abf4de6a44694443b54fda837d"],["/categories/linux/index.html","3ea2d7d5bc8354a78304c5bcd0e6d994"],["/categories/mysql/index.html","2f5811acd19f94244f7f636448d97768"],["/categories/nginx/index.html","cd5174e150a1f686543cff2ed798e4ac"],["/categories/rabbitmq/index.html","7b0e359f6f7f29b022e71fcef32e45b5"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","90639908380ff25478edbbbef60dbc5c"],["/css/style.css","aff75c4b93543f6adba319e7d83484af"],["/db216b4516c5/index.html","6b4d59f0417eb2aaeb72f6adb1baeec4"],["/e4a7b2375fef/index.html","35ca2acc7c697408d837675c8b3758ce"],["/f45df1cd3575/index.html","1750de0c24f251ea1091ee16749e0c34"],["/fcircle/index.html","4ed67010f212679227d27c624b5d2784"],["/friends/index.html","b316bd9dafd81f34c28716e07b312e27"],["/index.html","b92d48a44e8ed3e167e62f7899641ae7"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/click-word/click-word.js","ea48cc040c8828bd1cc07be103b0f71e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/title/funnyTitle.js","f268216ec84defda248af83f8a9c9073"],["/messages/index.html","e03b736a4959d3c452cb003db7958868"],["/movies/index.html","e2f9dcabf51a818a249f48a5fc112fa8"],["/mylist/index.html","d0514e0d445d3cb22140844d63430bc5"],["/navigate/index.html","fbc1171b037de9ea08ae1fdd8d93c4fb"],["/page/2/index.html","626ee92b21f87d9d3be99f8fe2f6b895"],["/sw-register.js","026a7547b00b99f211f76c25d14c9dd6"],["/tags/ChatGPT/index.html","adb16fa7f359413ede26b2d9ddc30346"],["/tags/docker/index.html","988d47a850cf7f79e8c2ab7dfc928111"],["/tags/index.html","f948bbdebc63edf63ea2b22f559267df"],["/tags/java/index.html","5dacd6259511cbd1609c375444e2d3b5"],["/tags/linux/index.html","526d9de3c1edae9e738d74388e94f7b2"],["/tags/mysql/index.html","9f10d975eee01584213253d878f1115c"],["/tags/nginx/index.html","d411d2d67cd22631de2108caa99c72b2"],["/tags/中间件/index.html","ca9a440a60dc8905f11695680b1b42ee"]];
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
