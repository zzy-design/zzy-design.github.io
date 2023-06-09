/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/10862679c3fa/index.html","bf23cd180f8c995e240fcafee02a324b"],["/223a80ba41d6/index.html","bcd9e9755ac58cae4ca9712e8575b3b9"],["/3582a0555ae1/index.html","7e0c0a55ef3fb03d14529ba4d0907560"],["/368c8b7cab21/index.html","a63ea33f7ee88af7d896e3380b6918bd"],["/3ee606c7fabf/index.html","b2bb89013a652edf5c0025495ba65ea8"],["/404.html","b3cac544a7eba084a7c2c34642da6fa4"],["/4132844b2efe/index.html","7597f13e690bcea6f82baee39f05023d"],["/5134766ba3d1/index.html","c20840e86e70fa1aea79665ded2c4fdf"],["/66d2dc06dddc/index.html","9d3423f03a1994c81519ed095756af7d"],["/7c4c0b8793a3/index.html","8e951089b0164847f9b25a5e0f144dbb"],["/820530ad7203/index.html","cafe1c07d449be0cbfe4c34c4495c9d7"],["/a3dc247d52a5/index.html","f5313a892725c0545904eb49ade333b5"],["/about/index.html","6e8ab5dab65ffd476a2df3aa56508fda"],["/archives/2023/04/index.html","81be28841c3573df8bd1358b75100527"],["/archives/2023/05/index.html","43bdddf7d987a5d859a4013f04f6f907"],["/archives/2023/index.html","699d3b06bf941af89003985ef694c5e3"],["/archives/2023/page/2/index.html","a1c29c05311abc548ed8606376c8b04d"],["/archives/index.html","2997d47a40aad3b7babaa87b66ae77d5"],["/archives/page/2/index.html","c8a8e76fa2a0accea462db9600b17495"],["/b2937a13eef6/index.html","f8e212a4b86f209d030a18277cfc117a"],["/bookmark/index.html","a063e8c5d27d5186e983e595b9793b55"],["/c11a99d2c881/index.html","915e181bfeb73f68eb1e67a0096b6b20"],["/c1a24517aa76/index.html","c6ee222bbca170d6adac88e5693f0193"],["/categories/ChatGPT/index.html","7b451c41084a014b62fe673a8c3b0fb7"],["/categories/docker/index.html","4e258f9de45fbc40a3c15f421194f864"],["/categories/index.html","7095575853a5a6de3907618a871c2a3a"],["/categories/java/index.html","ddc5aa2a79bc2869e3fa2b23ea01bbce"],["/categories/linux/index.html","14b916d66fd3edf300640ea6cd1a95d3"],["/categories/mysql/index.html","7e9cbbf5fc30d23a673e03efe7703057"],["/categories/nginx/index.html","f1c91ba79728ae5e020479089aa95ea6"],["/categories/rabbitmq/index.html","aa865996165043850888eaa20b392122"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","90639908380ff25478edbbbef60dbc5c"],["/css/style.css","aff75c4b93543f6adba319e7d83484af"],["/db216b4516c5/index.html","80c6afa9625593e9da58abb06859bfc5"],["/e4a7b2375fef/index.html","021ea9f7b0cf1cecc1b21e5d09bd0c98"],["/f45df1cd3575/index.html","4f41171dc17b133a185d05666dceba79"],["/fcircle/index.html","add48720457fab8df3ea9e10eb0cb7d9"],["/friends/index.html","3dce9ef162b6b3419f39bb1126e5c589"],["/index.html","87300c733f3560495b456bc0f6881311"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/click-word/click-word.js","ea48cc040c8828bd1cc07be103b0f71e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/title/funnyTitle.js","f268216ec84defda248af83f8a9c9073"],["/messages/index.html","171ee366ff681ae85c60f63431af3ebf"],["/movies/index.html","42e10f2cfbcfe5225af609de019a298f"],["/mylist/index.html","66024bb3b9c15e378532eeb827d0f9a8"],["/navigate/index.html","3a64946efab67230635bbb86bf2b9a51"],["/page/2/index.html","573b55b12ac7a6c0efcd97adf430e0ad"],["/sw-register.js","da06b78b89c9dc126c7f6dddc3cc10e4"],["/tags/ChatGPT/index.html","ca782f3b883a17c8b563f10d19f00b6d"],["/tags/docker/index.html","52683994ffb5d67f8f1a1f3cf6adcb20"],["/tags/index.html","750f3187c94a70aeae39f111e45c714a"],["/tags/java/index.html","76b4e68e3f25eb2620d484d60ecffd77"],["/tags/linux/index.html","8f53cc7a2c3d461639344a7c1e791b85"],["/tags/mysql/index.html","1c12da37713efbbc00027d7b8328d2d4"],["/tags/nginx/index.html","49a3ef59d3860ae41dece4048cc8fc15"],["/tags/中间件/index.html","f206463939afaed773caca16c83923b2"]];
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
