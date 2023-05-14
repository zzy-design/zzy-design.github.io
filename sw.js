/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/25/7c4c0b8793a3/index.html","50b945713374fe906caa0a38e1180d89"],["/2023/04/26/f45df1cd3575/index.html","6fc65b06b27dee5dd3ee1b0837cf699a"],["/2023/04/27/10862679c3fa/index.html","6e0c07b81128c3d7ec27b69e7282016a"],["/2023/04/27/3ee606c7fabf/index.html","6cee6c3125b9ca02b98392fc2540e6c6"],["/2023/04/29/3582a0555ae1/index.html","7fbae5d365d31f9726cc9fe6adcf21ae"],["/2023/04/29/820530ad7203/index.html","8afda699adb29a8f191d630c13072b91"],["/2023/04/30/223a80ba41d6/index.html","771a0d5ea273482e2f2306a53965dbd0"],["/2023/05/01/b2937a13eef6/index.html","c51f851edb88177417d511cb43864144"],["/2023/05/01/e4a7b2375fef/index.html","f3faa1962917e7889cd834d6bf836981"],["/2023/05/04/c1a24517aa76/index.html","411e45ec492fa818729ebab073ae1b53"],["/2023/05/12/a3dc247d52a5/index.html","e2f6764c564300fe979e12f92670b400"],["/2023/05/13/368c8b7cab21/index.html","f6f92b3dc95771f8df13cd6f83c945cd"],["/2023/05/13/5134766ba3d1/index.html","5840695b69d90dca023cf7e38ef39e07"],["/2023/05/14/66d2dc06dddc/index.html","c32cf7839eb0910ed4cacd944d19e003"],["/2023/05/14/c11a99d2c881/index.html","236987e682ea047165a417584192f093"],["/404.html","4cdc44b49d1b3c19ef667343de0fda0e"],["/about/index.html","8664ab1ebcdf381c77aeacc19caa31a1"],["/archives/2023/04/index.html","c2494c44879089391fc384dcce85c750"],["/archives/2023/05/index.html","5358e5d3aa5601018d9db69a0576ec61"],["/archives/2023/index.html","37716941530d5d217f90a91fd743287f"],["/archives/2023/page/2/index.html","4f1bf6a9e18ec7327f2cdf858dfd449d"],["/archives/index.html","aa3afcca298a6e3bce8b839a97998728"],["/archives/page/2/index.html","87ea9e4abff270e2cef988df4a499dfc"],["/bookmark/index.html","069beb4d8d3d4b626711af6b45583315"],["/categories/docker/index.html","0039523de14e3f6afb86ea7c5f64b2f3"],["/categories/index.html","abd2e14340c3d9486cb4089591abec31"],["/categories/java/index.html","13c542d06be37050fcfa1a04dcd9a8e6"],["/categories/linux/index.html","88d33de7446707e243ccecc579b754ae"],["/categories/mysql/index.html","3cf18a23b75a380e6b19b71f6b2a69d1"],["/categories/nginx/index.html","3f5e14c796bfea2ee4c7b2d77e52d83f"],["/categories/rabbitmq/index.html","f91c31fe95002d44d590b401c6b5457b"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","90639908380ff25478edbbbef60dbc5c"],["/css/style.css","d86e48484db5c41ff696b5c4d2693ece"],["/friends/index.html","166a3a3a7fa42527fb3cb257940c2ea4"],["/index.html","f645680d58a851147c1c95974b03a4b5"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/click-word/click-word.js","ea48cc040c8828bd1cc07be103b0f71e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/title/funnyTitle.js","f268216ec84defda248af83f8a9c9073"],["/messages/index.html","b9ff020a32e84a45aad383ee0403cec0"],["/movies/index.html","08558840616cd6c2b179af090b40e872"],["/mylist/index.html","ce2d72c8fa08db91f0e1c04b2b29e882"],["/navigate/index.html","5fa3d9897184deec45a25e82e0aa3859"],["/page/2/index.html","c2dfb338db91c1e60ade62c249c0855f"],["/sw-register.js","91882f89654b6d5d2a266db14f3d5bf6"],["/tags/docker/index.html","4020283809d52ef9a0be2006032422d9"],["/tags/index.html","f10d50dde52f91aff0072f509012646d"],["/tags/java/index.html","8744d1afb692f70639c3c081c7d2f2ca"],["/tags/linux/index.html","2ac0bca4e3ac487533a44b836bb82239"],["/tags/mysql/index.html","c4484f3121fb8c279f17280f66309cdb"],["/tags/nginx/index.html","139790ce7ba6ee60065df04b7c358476"],["/tags/中间件/index.html","9659813c7a71b8fcdbf839bb95df23bd"]];
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
