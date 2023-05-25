/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/25/7c4c0b8793a3/index.html","e5a9f2ea7728ad0e8b76c7b00804ce3c"],["/2023/04/26/f45df1cd3575/index.html","adbdc0bd08d1dfa21651cc4b02a331a2"],["/2023/04/27/10862679c3fa/index.html","b6836d3f5724c6f08fbc7cd52ba5f63a"],["/2023/04/27/3ee606c7fabf/index.html","806ead4ab63468844d74d2c3a92a9b09"],["/2023/04/29/3582a0555ae1/index.html","0dcb7cb16ff93a8efb85981485df8650"],["/2023/04/29/820530ad7203/index.html","74c9e908749ab0eb0a9a5f870a21756f"],["/2023/04/30/223a80ba41d6/index.html","bef3ae9875bb6b27f2c2bc09383acaf4"],["/2023/05/01/b2937a13eef6/index.html","a63a4a63f333782249da76fe4957ae3a"],["/2023/05/01/e4a7b2375fef/index.html","399b9b98f7a55937d627490add63a11b"],["/2023/05/04/c1a24517aa76/index.html","836c1c1ce5acfb46001f6720d18e5ae7"],["/2023/05/12/a3dc247d52a5/index.html","a94917dc19a2fe71caa595212ee14832"],["/2023/05/13/368c8b7cab21/index.html","4284a72396466ee7c018455902a43cca"],["/2023/05/13/5134766ba3d1/index.html","a66db37f2220c3b1faddc01ef0b69953"],["/2023/05/14/66d2dc06dddc/index.html","4b15a9a28ec913fa29cf767f2185e66a"],["/2023/05/14/c11a99d2c881/index.html","dda996d8a0d56051563d9053f86e5c17"],["/2023/05/23/db216b4516c5/index.html","6d6006728043eb7846d636788bb482b2"],["/404.html","557c19f6c6d32f759e71480f94136915"],["/about/index.html","a178d637f140a8c36c954d7db248dad3"],["/archives/2023/04/index.html","3449d3283fe3b5acdd144d7416e6bedf"],["/archives/2023/05/index.html","3a1dd5081f1b84e9c4dce09c59720b4e"],["/archives/2023/index.html","11b51c3734787544922097e8e16ab8ab"],["/archives/2023/page/2/index.html","73ecbf84e53ed451415d8ed7494916b8"],["/archives/index.html","edd1e304d417999d71e9629e1bc777fd"],["/archives/page/2/index.html","549d30c20e02a63af478fccb29d4cf50"],["/bookmark/index.html","087c1547ada412365733af3f98f18650"],["/categories/ChatGPT/index.html","9d1b9d5279af0c78e11e7fdf4c6cfe65"],["/categories/docker/index.html","d2b50a22701289f64e387b95f2ac45a7"],["/categories/index.html","0e4579d9bec3b1d438751a11c247c4d8"],["/categories/java/index.html","bfbd04883beef9e5000d35440b15592c"],["/categories/linux/index.html","a7a106afe30f7ebe6d11df7ebfceaaed"],["/categories/mysql/index.html","492cc95e6ea4fe85271ff0b45a99df84"],["/categories/nginx/index.html","3c65a41d343a51abe997f38cc87c2bff"],["/categories/rabbitmq/index.html","6ae65f6a511db28a88a34c2591b83d89"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","90639908380ff25478edbbbef60dbc5c"],["/css/style.css","aff75c4b93543f6adba319e7d83484af"],["/friends/index.html","bb73c736c6b6f63f485a72c3b38cea71"],["/index.html","e5613bedeb3fc9b66c3e780b6e3c036b"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/click-word/click-word.js","ea48cc040c8828bd1cc07be103b0f71e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/title/funnyTitle.js","f268216ec84defda248af83f8a9c9073"],["/messages/index.html","aa45d76b8fddbc4e1fe8cf686aa20268"],["/movies/index.html","90f9dcea8cd3e042c9b92237c5701325"],["/mylist/index.html","243fcd43c43d5148d7d6036a14be845b"],["/navigate/index.html","5f691ed21af7b3d11b04035cf3fd6025"],["/page/2/index.html","d63ded0aa5cde77b7a8986a965929e44"],["/sw-register.js","08a7140efc175cbf505aca1eedc1ad0b"],["/tags/ChatGPT/index.html","41c5570881bcf4ac198f819ef7c0471d"],["/tags/docker/index.html","7cf0728954cf1c20fd03dd939dc5c721"],["/tags/index.html","36a60c4cfaf36a872a34c05701570351"],["/tags/java/index.html","2a58fa6bc5ebbb199cc459c1f97215ac"],["/tags/linux/index.html","b321c333254bef1e307709e1b3436983"],["/tags/mysql/index.html","b6e76879f02642890b4f0d71bd820ada"],["/tags/nginx/index.html","2812575820e51c2687c90d54a671cdd3"],["/tags/中间件/index.html","412164ede28cbd60613e3828c0a73f85"]];
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
