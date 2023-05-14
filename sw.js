/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/25/7c4c0b8793a3/index.html","d629b1ead52d436bcedf55a5627e757a"],["/2023/04/26/f45df1cd3575/index.html","a0ab74183e64b35a43bf916c8b831b91"],["/2023/04/27/10862679c3fa/index.html","16c6210cf478eca5789e0511d3ea80ab"],["/2023/04/27/3ee606c7fabf/index.html","25eb6ae90ca4664828486fd790bcb868"],["/2023/04/29/3582a0555ae1/index.html","a96690ba4f48328b31c2d6368ff626fa"],["/2023/04/29/820530ad7203/index.html","50a274773a1134cfa69440526421c219"],["/2023/04/30/223a80ba41d6/index.html","dc53e763e83ed84d528a060cc97809f7"],["/2023/05/01/b2937a13eef6/index.html","3cabed85f240ece3d846d657fe5d7e1a"],["/2023/05/01/e4a7b2375fef/index.html","08de7be52bafccbd14e02b14696bfb0e"],["/2023/05/04/c1a24517aa76/index.html","6e65f482f48c36fa3925d60436d72c0f"],["/2023/05/12/a3dc247d52a5/index.html","d4e6107b799eab1c3dc76457b1db7458"],["/2023/05/13/368c8b7cab21/index.html","725e254b4ef3d7a122edea4c3303750d"],["/2023/05/13/5134766ba3d1/index.html","37d3947a05515bf428293bbdd5316bbe"],["/2023/05/14/66d2dc06dddc/index.html","3f945a87344ca0ff0a65921bcc3655e3"],["/2023/05/14/c11a99d2c881/index.html","8649cd6e58bb47a0aa1a1e5a425c0cd2"],["/404.html","2d8a4213bbafb1743a024788da306a9b"],["/about/index.html","5590c4ab3e7029bac59f322ebc69d7a4"],["/archives/2023/04/index.html","3bfba4998d8ba7715972c25be7afc536"],["/archives/2023/05/index.html","a8d1aef2ea407d5009017774cc718b0a"],["/archives/2023/index.html","64958d23c9c01474df5fc6f19b831b74"],["/archives/2023/page/2/index.html","2aaa92097d9575645632a71619c05fc0"],["/archives/index.html","ae5ebd4a335cd42ec6907c168b59ebc7"],["/archives/page/2/index.html","146c2da8c71d9252822b6560b3688e8b"],["/bookmark/index.html","466bce15a5abd597895d5777798d2964"],["/categories/docker/index.html","cb02b1758241cfde51f1466e819b823f"],["/categories/index.html","05ab4b249a27559d6474fbbbf8b0cccf"],["/categories/java/index.html","1ad1947d5aa08f309165711a60c19c6d"],["/categories/linux/index.html","1187d1d108216416ad09f683bf882c68"],["/categories/mysql/index.html","97a31624b6d698be1d001ef712d1ed88"],["/categories/nginx/index.html","2b48c62119bddedafe090d39fb318561"],["/categories/rabbitmq/index.html","21b28adf44587400e5f628e1ca6e0ca3"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","90639908380ff25478edbbbef60dbc5c"],["/css/style.css","d86e48484db5c41ff696b5c4d2693ece"],["/friends/index.html","6980ecd78be8608a6415e4a8133618aa"],["/index.html","684e9b312b52aa19f48d875bab75673e"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/click-word/click-word.js","ea48cc040c8828bd1cc07be103b0f71e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/title/funnyTitle.js","f268216ec84defda248af83f8a9c9073"],["/messages/index.html","08625a672dc6381c06a15ecae3e9a03c"],["/movies/index.html","3a5d9115aa6fb9f416708d87c691830d"],["/mylist/index.html","edd1435ec54761379652cf5d1121ebb3"],["/navigate/index.html","27fb621a386b3849a2bcf1e238050fe7"],["/page/2/index.html","297c85bffd67eb6b68dca7488feca035"],["/sw-register.js","a8305cecd03f5f7888293acb83af4e36"],["/tags/docker/index.html","8539d3de3d361495e13925d79eb2c0d6"],["/tags/index.html","edc5f65f6e70c83bca395ff919bd3ab2"],["/tags/java/index.html","3ebf7f4e6162aaf55cc8c38567cb2d0e"],["/tags/linux/index.html","2abe7a7b882b6e91c26e0175ad640dbf"],["/tags/mysql/index.html","5855c949a2b4702f627a29f3806c764e"],["/tags/nginx/index.html","9e3aa6b05fd7ab89ffac2d51b3e93406"],["/tags/中间件/index.html","d3cd1aab2ea5227eb103e1941f761dc7"]];
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
