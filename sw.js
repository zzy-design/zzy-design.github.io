/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/10862679c3fa/index.html","5940b208b6a9ba25d8d3b4662be8521c"],["/2023/223a80ba41d6/index.html","e1d07492247bd5fe396add74cd09727d"],["/2023/3582a0555ae1/index.html","672db52af9e7c49aa9547f73ba39a80d"],["/2023/368c8b7cab21/index.html","ea7e155dedc78feacde730028766a6de"],["/2023/3ee606c7fabf/index.html","09a14d8c8ac7469c1792a9d4a68a8ad2"],["/2023/4132844b2efe/index.html","8fd0592b051be58a0511ca77abe38781"],["/2023/5134766ba3d1/index.html","48626c15940bcdea327eb5ab312d5d56"],["/2023/66d2dc06dddc/index.html","e6161ebb142e352e2f9cfa9bcbf3d977"],["/2023/7c4c0b8793a3/index.html","3696ff1b0194d2273fcf4fe13eae3c06"],["/2023/820530ad7203/index.html","de428d439ae09cdca0bc36880eea9945"],["/2023/a3dc247d52a5/index.html","94f60169a2249fa2c8f7cb6c0b8f3e18"],["/2023/b2937a13eef6/index.html","02b97f89d2e038608776c30c186d48cd"],["/2023/c11a99d2c881/index.html","4622283f4e2db592addad1626920ba44"],["/2023/c1a24517aa76/index.html","70acd6a4b9ab857dac723ef759fd185b"],["/2023/db216b4516c5/index.html","762a043b5ca6684f628c12bc24b01d13"],["/2023/e4a7b2375fef/index.html","9d7322491731000ad48751f1e3cce52d"],["/2023/f45df1cd3575/index.html","b2a792947051fb2ac31f4751b3290608"],["/404.html","0cb0e6e622625b4e421973bc454eaaea"],["/about/index.html","9bbbb6f66cf0a00765f6b047b743d048"],["/archives/2023/04/index.html","7260a159542baf3f4ee25217212249e8"],["/archives/2023/05/index.html","de0ec633946b8f95044cfb765065e4b0"],["/archives/2023/index.html","738d1a73913ecda2507457b3d06b4888"],["/archives/2023/page/2/index.html","42c52c85ca01de2e098277151114e392"],["/archives/index.html","b178162706d8db4a40e1a1fd3b109bad"],["/archives/page/2/index.html","90b8bf8ae6866d9828171b04619753f7"],["/bookmark/index.html","4785a705f27a58cbefc30016bb5adcd4"],["/categories/ChatGPT/index.html","43997372a15583bfb882a21eb765fd68"],["/categories/docker/index.html","2a946d1ebb3288cfcf65b372c8eea55c"],["/categories/index.html","f740f5036c198a0386de48304cc9aa6b"],["/categories/java/index.html","7bb5ebcdac4c444961c38a20c1f54aaf"],["/categories/linux/index.html","860242a7daf577f05f754800a045eba8"],["/categories/mysql/index.html","c3388f42200831d74df87e3608a492e2"],["/categories/nginx/index.html","92fdc1757839c4ff92fff6f46f1adfb3"],["/categories/rabbitmq/index.html","18401623a8751f5c7e70bdb56078979b"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","90639908380ff25478edbbbef60dbc5c"],["/css/style.css","aff75c4b93543f6adba319e7d83484af"],["/friends/index.html","d910b67b7b668db3f9f4fc0bbdc6eaae"],["/index.html","c2a83089c6615314bc0e5837f8f5b191"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/click-word/click-word.js","ea48cc040c8828bd1cc07be103b0f71e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/title/funnyTitle.js","f268216ec84defda248af83f8a9c9073"],["/messages/index.html","d08c190d4955a9fb6f4b6ab46a2237fc"],["/movies/index.html","61ae99224352e2eda54bd1bbd40bf9b8"],["/mylist/index.html","99a5e1bc7e4bed016444b4a67ad94c0c"],["/navigate/index.html","621aed4ad25d765c8a1bae94fe5a4cfe"],["/page/2/index.html","7c0c13fae2dedb92adcf1b6e4ba3863a"],["/sw-register.js","fab85b86867d62fcd7a53613e4da1a55"],["/tags/ChatGPT/index.html","d6d414650040261483657fd0b7694496"],["/tags/docker/index.html","c50010f74c85a5d83195b0cb72ce380d"],["/tags/index.html","2fc05192efbd6923dbee4291ca3933b1"],["/tags/java/index.html","4c48a7b88bf27c09ff33ed13ebb0ac55"],["/tags/linux/index.html","46119e8967de4cb87557a88603c3cff7"],["/tags/mysql/index.html","ac47dbffa1bad6dd629a10ec95c27463"],["/tags/nginx/index.html","2ab58d13516562128f3102acc8080d7a"],["/tags/中间件/index.html","7d0486e1e6c1eadd03a3d2aa0972a16e"]];
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
