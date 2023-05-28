/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/10862679c3fa/index.html","2eb229d834d8a58f487557c09838badf"],["/2023/223a80ba41d6/index.html","1d0e7af23fa82a9cfebd3abbc8a65f8a"],["/2023/3582a0555ae1/index.html","d5094e36d95569272d683b94b9b86455"],["/2023/368c8b7cab21/index.html","5ac1cfbc0e2153348f86f19aa19b9c66"],["/2023/3ee606c7fabf/index.html","7c1442ff165c902fbc5209fdbc39852a"],["/2023/4132844b2efe/index.html","1b891bb22cbd70a35d0962acae0f39c9"],["/2023/5134766ba3d1/index.html","1417b41c79ddcceb0314ce223906952b"],["/2023/66d2dc06dddc/index.html","40c06c9e16f97b8783d614febd778994"],["/2023/7c4c0b8793a3/index.html","3a064788f2136d77f1c7922f6cecf8dd"],["/2023/820530ad7203/index.html","a906f29e723c420fddbd323d75a8e18e"],["/2023/a3dc247d52a5/index.html","5010293a458857d16de613ac3400aee0"],["/2023/b2937a13eef6/index.html","535822dfb2d813da10a93ae90e56bd65"],["/2023/c11a99d2c881/index.html","93c0df8ff4da40fc7a30da1281a2840b"],["/2023/c1a24517aa76/index.html","68041af0f119ee2fa1253da8bde1beaf"],["/2023/db216b4516c5/index.html","16dc72cb2b31e277380920d761f29d5b"],["/2023/e4a7b2375fef/index.html","52d338ac23a927236e36804096d19b9a"],["/2023/f45df1cd3575/index.html","fa31b17c8ae979b66bab81fb702f4311"],["/404.html","4b803d0441acfcba314f4374bd4f41de"],["/about/index.html","3fb8b294905770c7869508cb8b1fd4d6"],["/archives/2023/04/index.html","6629655868d3a72aec82cce585659333"],["/archives/2023/05/index.html","335a0e69e71c8a756a199eb8427feef0"],["/archives/2023/index.html","55dd1ffb0c385e72f3bca649bddd88e5"],["/archives/2023/page/2/index.html","f737cbbcc5f2638b076143e848f58b15"],["/archives/index.html","dce7e072f4f5690e602ef371d82647fa"],["/archives/page/2/index.html","c27c6808a2b7a2a21ddaedc7c345f365"],["/bookmark/index.html","5730984d72cf6e89962ff191420ba8de"],["/categories/ChatGPT/index.html","d263bc33ec42aaf6e5aebb3c3aa1abee"],["/categories/docker/index.html","0c5b506fd54e868f5d0d5287c246c5fe"],["/categories/index.html","ecd90331310f4d6c77bdae3023055f64"],["/categories/java/index.html","b33545a79e79f1fdcd7b85d222f9c222"],["/categories/linux/index.html","00b6b1775636518d0401d8f51eb7788e"],["/categories/mysql/index.html","c8f1bf4316f044c123486a85e9bfdec9"],["/categories/nginx/index.html","f4c7af34297c968801881a8789454c51"],["/categories/rabbitmq/index.html","46877c2eae025dcf4e52e40c3dcfe86e"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","90639908380ff25478edbbbef60dbc5c"],["/css/style.css","aff75c4b93543f6adba319e7d83484af"],["/friends/index.html","0d4f6efa61037a7a68cbc710b6938a85"],["/index.html","554d0cf49fd4645c1861fcaeecce83b8"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/click-word/click-word.js","ea48cc040c8828bd1cc07be103b0f71e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/title/funnyTitle.js","f268216ec84defda248af83f8a9c9073"],["/messages/index.html","97aaabd7c9b72b4236edd1aa791cf9f8"],["/movies/index.html","053905c90eef77445dfb562b227aa8eb"],["/mylist/index.html","206f27c0ea69fd809371bc7203c3aaea"],["/navigate/index.html","0850f5b88d9b65ae26051edb2da24402"],["/page/2/index.html","e8e875266077760324f43c0e81a0c2e4"],["/sw-register.js","84fc0416337407e1c5f398ff2432e083"],["/tags/ChatGPT/index.html","e29fa1863eb4cfcada12d7d5bb341135"],["/tags/docker/index.html","eb6ebee1a9c7c888b8bb58a6437b165b"],["/tags/index.html","ea360c7673e2b9b57a9d0e51d7e197a2"],["/tags/java/index.html","3bcb01dbc3ade98efbf1fcf2e5801d22"],["/tags/linux/index.html","bc851f90fa15cc7d15c295961dd44d63"],["/tags/mysql/index.html","2538bfcbdbaf57b8a35d3daf0477565e"],["/tags/nginx/index.html","6b1e348f672e40a16fe117968cd06a76"],["/tags/中间件/index.html","9d14f2ec8c986aaff72d144a99615983"]];
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
