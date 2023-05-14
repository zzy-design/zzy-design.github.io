/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/25/7c4c0b8793a3/index.html","0d29f5d3a8f411e9365e70f85b7a6711"],["/2023/04/26/f45df1cd3575/index.html","839329aabcee32acb2072580bd2134ed"],["/2023/04/27/10862679c3fa/index.html","b2726af2339ef8b8d0f0b952e8b3cad6"],["/2023/04/27/3ee606c7fabf/index.html","dfcef16cc7450aa4e9de20864398262e"],["/2023/04/29/3582a0555ae1/index.html","5293a57d7d34f5c466af746076b60fb2"],["/2023/04/29/820530ad7203/index.html","c1cb7857fd6dbc44c65ac2878f4ff772"],["/2023/04/30/223a80ba41d6/index.html","5b791cbb067d0ca9ce20e1fb63d06dff"],["/2023/05/01/b2937a13eef6/index.html","37e64974b3f670ad64ba6ca703d8163c"],["/2023/05/01/e4a7b2375fef/index.html","b3730e2fe38df39531e04bed5ddf079c"],["/2023/05/04/c1a24517aa76/index.html","b8b0e959e2e7dc2fe9e772d9f09ac5a5"],["/2023/05/12/a3dc247d52a5/index.html","172a70cc8446f06607f28cc2bc992992"],["/2023/05/13/368c8b7cab21/index.html","83351a85dc56f41cb70cbf200ef166de"],["/2023/05/13/5134766ba3d1/index.html","9bf61f01a729851ceb3e07cc336e4cf9"],["/2023/05/14/66d2dc06dddc/index.html","a22afbb3f2dbbc0dcb8d8473fd9e4ce7"],["/2023/05/14/c11a99d2c881/index.html","5930ebf4484ec6cbd0c2980730106b59"],["/404.html","7984329c07a2376968cc997fb24da011"],["/about/index.html","0ca305c6985bc95203207dbf064bfac9"],["/archives/2023/04/index.html","b9aa601506e09d0fd8ed1e8761e8311c"],["/archives/2023/05/index.html","95287b2a2f11da58dc1a791ab4b7cc5d"],["/archives/2023/index.html","f9eb5bec11872fb44c8182c8dae50aa4"],["/archives/2023/page/2/index.html","1ffb92aeae4226c190b522fc68489cbd"],["/archives/index.html","551e671679eb64446c71fa90da6004ef"],["/archives/page/2/index.html","cfecc6ca47091c0a3be3d53d67f07e8f"],["/bookmark/index.html","f9cfeb1e9bbef9917a5d6812121bff86"],["/categories/docker/index.html","2baec6bd55d48e78979841920f3a2b18"],["/categories/index.html","811ff5e5ff937aca0b7c3cb2ba4e7b56"],["/categories/java/index.html","8abba328e6f3772f9451259caff80908"],["/categories/linux/index.html","2583a02fafc9611db54f8a18e1660c78"],["/categories/mysql/index.html","41ce2fd7cf6a98c6d5d522608c239ca0"],["/categories/nginx/index.html","fd8e6fe231b7c1377c9c00af346febc5"],["/categories/rabbitmq/index.html","4f7b6ae7a3d5b865db347a6ec4d0ee08"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","90639908380ff25478edbbbef60dbc5c"],["/css/style.css","d86e48484db5c41ff696b5c4d2693ece"],["/friends/index.html","fe338d01cf770828f565b6dbb0acfbdf"],["/index.html","5595766ccde450a89e57f81cfb0c02f4"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/click-word/click-word.js","aecb5a1975c17ae63432ac21b5d6bd9c"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/title/funnyTitle.js","f268216ec84defda248af83f8a9c9073"],["/messages/index.html","2979b97f16ee88498180b3238a1c942b"],["/movies/index.html","958ee9b4dd76c62186eacbdb0ff4cb9a"],["/mylist/index.html","343409d02df4148ab94e253ab4949be2"],["/navigate/index.html","32c06217a428ccf3aa6f969fca005124"],["/page/2/index.html","931dd5cdabbe16c00f7970e098358aa3"],["/sw-register.js","cdc5e8065aaedfd7853b9d9576ea82f9"],["/tags/docker/index.html","8f35adf0b03ca700d0d472aceeb0dae0"],["/tags/index.html","9c9b0884ecd697d13f3501eafb227c0a"],["/tags/java/index.html","f14017aec32387b01b5aad3315fe9a70"],["/tags/linux/index.html","020bb99f6d849c913fa2716046f7b4ba"],["/tags/mysql/index.html","452bd372aff74c0ebf293bf143f110fe"],["/tags/nginx/index.html","8dbc2a56e98fa516ef4de243fc26013c"],["/tags/中间件/index.html","eec2b42be34e4301e12103598cb02a58"]];
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
