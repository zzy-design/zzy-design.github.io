/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/10862679c3fa/index.html","abdfd26338bf28029b9c908f14402964"],["/223a80ba41d6/index.html","3c24421f84d60bc5cab35db3366be399"],["/3582a0555ae1/index.html","56294b1bcadd7f764c829dcc42d779d0"],["/368c8b7cab21/index.html","f76daa4627428cc56dd480520495b3fc"],["/3ee606c7fabf/index.html","c9e91dc7bb623a6d28cbaa5389d34c83"],["/404.html","ce72e996e431644eb0132f6322e831a8"],["/4132844b2efe/index.html","d7f975ceae06978f6a25e528615fe0b8"],["/5134766ba3d1/index.html","e1e266154c49a284bf366b3954ac3a8a"],["/52870188c2ad/index.html","7b411c03dacfcb0099c3d0a3f29333a5"],["/66d2dc06dddc/index.html","585b84355770f3d445a66b97198508ce"],["/7c4c0b8793a3/index.html","5e4d56a7e75048ee5f0416944108cae6"],["/820530ad7203/index.html","a41d8dc5e11d5e510e2aacc8f1029e09"],["/a3dc247d52a5/index.html","25706ae545a4b637d99d600c91da1277"],["/about/index.html","a1d0e8b3c9faf646a9c115f2723c9569"],["/archives/2023/04/index.html","ebdd8998acce609dc64fd06302a9feb1"],["/archives/2023/05/index.html","a99969236bc5e41eae72466c22f5d7f8"],["/archives/2023/07/index.html","363f15953653bfc823fb61b760b8b17e"],["/archives/2023/index.html","a16e896fb66c96b708166501f45e5840"],["/archives/2023/page/2/index.html","c46bc477c494a04a1e4a1be80844d1a7"],["/archives/index.html","3f19f6503df9a74be1c41a13737d813e"],["/archives/page/2/index.html","29009ad86d8d494f76e7ea603c922f19"],["/b2937a13eef6/index.html","feea919fe50dddb1528c1b0cb3317b06"],["/bookmark/index.html","6b34661de7f8435f7726f6ff82b38e3e"],["/c11a99d2c881/index.html","f9f26dad3b3b38f8a708d6204f737026"],["/c1a24517aa76/index.html","e81722405d5dbb7a64e83dea159cb79b"],["/categories/ChatGPT/index.html","31e4732089ce17dda70dcf9e9879f55d"],["/categories/docker/index.html","5f91dedb39497180132f36fb9d6df231"],["/categories/index.html","8d47b04b356f97c4c2f54d9ee055a696"],["/categories/java/index.html","4119d525cdcdf24147871fd899872356"],["/categories/linux/index.html","99943650cc15f163d8319a57f06516b3"],["/categories/mysql/index.html","9b8308b3238274cc6e8c07a2396ba819"],["/categories/nginx/index.html","5162aa508051a8769e97c281fc4dee41"],["/categories/rabbitmq/index.html","0c23a3deab7ff26d24b197bda5bd04a4"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","90639908380ff25478edbbbef60dbc5c"],["/css/style.css","aff75c4b93543f6adba319e7d83484af"],["/db216b4516c5/index.html","330187ab8aad7dcb54a021bf711cfd45"],["/e4a7b2375fef/index.html","fbb9c04c039b5afe619922196e5c5eb8"],["/f45df1cd3575/index.html","462a1fa9033890befab7bdbe8523445d"],["/fcircle/index.html","7a1766fff349c04a9257c053deb9613d"],["/friends/index.html","b632b97747c3062ee2befd8d7b4f95da"],["/index.html","5a904adadfdfdcd238634c6511c82ae2"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/click-word/click-word.js","ea48cc040c8828bd1cc07be103b0f71e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/title/funnyTitle.js","f268216ec84defda248af83f8a9c9073"],["/messages/index.html","97917d8286aca4ba890ef021a41d0abd"],["/movies/index.html","905c2df954216ceebdf29fcdbcb4bace"],["/mylist/index.html","95876419b66b4b16f298ef1889ab1de1"],["/navigate/index.html","c7083efc7279db46a0b3692f0e3de6a1"],["/page/2/index.html","45b82190bc93808ac56f74dda1c5375a"],["/sw-register.js","54dc8f5407ea50cdcdbba00d322a81bb"],["/tags/ChatGPT/index.html","0d8905882f73caa1e592fd16f14ca677"],["/tags/docker/index.html","e3484160a3bb04229132d1124652933d"],["/tags/index.html","a0340a2c3668e6b002c43e848cfff6a2"],["/tags/java/index.html","2212628132a15342a939e87ced70e4b1"],["/tags/linux/index.html","6c87e499099582c6c6293b8d12ee44b9"],["/tags/mysql/index.html","7b9ba283c92ccef2d77191a268f7e4be"],["/tags/nginx/index.html","d59833e28b04ea5c28aaee410adff6db"],["/tags/中间件/index.html","14f124b778f3933d38a7986f61379111"]];
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
