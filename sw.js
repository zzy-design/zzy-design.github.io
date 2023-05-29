/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/10862679c3fa/index.html","e2708fcba64020ba226b95e76c485482"],["/2023/223a80ba41d6/index.html","c9453189944bc30606bad5c9fdb16abf"],["/2023/3582a0555ae1/index.html","b4f3b045ea0b25036b0fec2da53b7ac5"],["/2023/368c8b7cab21/index.html","d23142d06a1e2acb94f90926efa0cdfd"],["/2023/3ee606c7fabf/index.html","452e640f16c8516886764925d972826b"],["/2023/4132844b2efe/index.html","7ee3350220a4e191645916090b0bfcd6"],["/2023/5134766ba3d1/index.html","35059109367c56b936b8ae38c8b33fd8"],["/2023/66d2dc06dddc/index.html","d4b3c4c31f88e2815289c38276cb7030"],["/2023/7c4c0b8793a3/index.html","2acbc9d83445f44d9ed8033c997d25b1"],["/2023/820530ad7203/index.html","a6e81943bab51b574e2e792cc077b100"],["/2023/a3dc247d52a5/index.html","8dc23f9be4810e0af663c15922390a49"],["/2023/b2937a13eef6/index.html","6146e3c8b754cf7942cc89f39d456566"],["/2023/c11a99d2c881/index.html","77cd75741252110c0cf528949d0f3ff5"],["/2023/c1a24517aa76/index.html","9b4c26465593b6b5fa9ed9969d81fec1"],["/2023/db216b4516c5/index.html","646c95be76c023721d005e7a86695e9c"],["/2023/e4a7b2375fef/index.html","e87aaecd2d399c879ad2f527ffecf04c"],["/2023/f45df1cd3575/index.html","a18890844864f721c3b9243ac6f7b1a5"],["/404.html","0bfa13479d144ef1c4aad2bbd1b42c01"],["/about/index.html","f2078c0e676f7449853ff48572729145"],["/archives/2023/04/index.html","6f7de69415a555672d153fd6ac1cd845"],["/archives/2023/05/index.html","94ccb8a730fb4683e3bc8230b3249272"],["/archives/2023/index.html","f5a1ddbfd14ced3417e7bb57dfc2faf8"],["/archives/2023/page/2/index.html","c9991457b601fcf7a4278bf7781fa5a9"],["/archives/index.html","94639d26a2b2356b55b9b2da6219d5de"],["/archives/page/2/index.html","75bb53be789bc70f022d17a9f09649ea"],["/bookmark/index.html","0fbc21b3d5756e393f12c6bbebe55402"],["/categories/ChatGPT/index.html","25faef92fbfebe09cfd631595ba9e4f4"],["/categories/docker/index.html","b8d40829bb04c073b4827e8db036487a"],["/categories/index.html","88db94b6470330e1da722c71649257c6"],["/categories/java/index.html","332617c7a8235541b724c6fcd58c2359"],["/categories/linux/index.html","b09e795d0768869e0fc20374b8c4e798"],["/categories/mysql/index.html","43adf0ec52da7648d01bc2281144f30a"],["/categories/nginx/index.html","adc52003a2ab445d0cbf9e5c3c33feaf"],["/categories/rabbitmq/index.html","460b8af91b3534402e959d035c05bcea"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","90639908380ff25478edbbbef60dbc5c"],["/css/style.css","aff75c4b93543f6adba319e7d83484af"],["/fcircle/index.html","78932b82b1e70bd538ef7d47b511d914"],["/friends/index.html","21ef99848eaa91d5e62f5a53e2adf0c7"],["/index.html","7a1ac1b737f0fda350492691f0301dd0"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/click-word/click-word.js","ea48cc040c8828bd1cc07be103b0f71e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/title/funnyTitle.js","f268216ec84defda248af83f8a9c9073"],["/messages/index.html","0f08aad3b3559cde0ac7a47dadbf6f8c"],["/movies/index.html","154997455d83033a0af5ece36ef7c58c"],["/mylist/index.html","00b4b2bd24824d0a1a9d181f45360050"],["/navigate/index.html","3c634a12ab7ccf5cd4bf9ef2e5ebe79c"],["/page/2/index.html","cfe9c8450aa13be23313966ee10c8631"],["/sw-register.js","2975efdce7f507acc8a3d70fc03cb96e"],["/tags/ChatGPT/index.html","579ec91248e2058ab7d9d3a45f3edcbe"],["/tags/docker/index.html","2a25ec219201f885095367956b5b24ed"],["/tags/index.html","14485a7ff714eaa953e8d084280b39ef"],["/tags/java/index.html","e17168475986ca5a1e58f817f91a59cc"],["/tags/linux/index.html","30d1f7b6b86657d5088cd8df76b8c69d"],["/tags/mysql/index.html","8a2123fda68e422a1b900ddb31553d52"],["/tags/nginx/index.html","2598438af233310ccb066a76c673dc1b"],["/tags/中间件/index.html","a626a34a7ea66d7331fcb90820824d78"]];
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
