/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/25/7c4c0b8793a3/index.html","c577cb462389283e6fc80a7184649ada"],["/2023/04/26/f45df1cd3575/index.html","ba8bca100883d31441379b96ff18e696"],["/2023/04/27/10862679c3fa/index.html","137a53ad6069e91f9324506c4fa101a0"],["/2023/04/27/3ee606c7fabf/index.html","830978712ae8446b1ddbb6704d55099c"],["/2023/04/29/3582a0555ae1/index.html","0669bbc6c806898aa4728b8619620d16"],["/2023/04/29/820530ad7203/index.html","9ecc6c73ca179558729cfe4cd4df9861"],["/2023/04/30/223a80ba41d6/index.html","45ef3eae5c36748f142327a5a7a28eaa"],["/2023/05/01/b2937a13eef6/index.html","c4725da279ca0f4014962ac36c0321ed"],["/2023/05/01/e4a7b2375fef/index.html","f3a05ff7da5eb2f3175108fe0e5bf4f3"],["/2023/05/04/c1a24517aa76/index.html","b34c4583c431c6c5d29da3b62af664ad"],["/2023/05/12/a3dc247d52a5/index.html","d34024fb7fdb8cb1963c1576271682a0"],["/2023/05/13/368c8b7cab21/index.html","62b037dab94c7856fa4ca40db70b31c7"],["/2023/05/13/5134766ba3d1/index.html","1d2c54ff893cfc1de73c8e010ed7f463"],["/2023/05/14/66d2dc06dddc/index.html","b7f8a9d23993acf40e66e3286f1aa2cd"],["/2023/05/14/c11a99d2c881/index.html","f48567b2fa8fa3b4435be7eb77e0ce50"],["/404.html","4fec0dc6d05e6db13a93c81a5103ad9a"],["/about/index.html","39059258e62ca45ffe54b459ea860c3d"],["/archives/2023/04/index.html","28bc2aee0008f8ea989801b14e005f66"],["/archives/2023/05/index.html","9afb73ee10923466d239a21fd9292d3c"],["/archives/2023/index.html","95e95ee5d3e6e24af4cb069dfe30171f"],["/archives/2023/page/2/index.html","ff00cdc5e94b8ff347fd807f55870eaf"],["/archives/index.html","6e6912de4a44a05d4a4cddecb8b531b5"],["/archives/page/2/index.html","fce297c1061f1630f20dd2e718df8ce6"],["/bookmark/index.html","ab6e1d704864529d215ea69db05e5470"],["/categories/docker/index.html","8b2fd6bfb2af7c2b8f5384a9d79c4e12"],["/categories/index.html","7578689afb91e1d4655748511a723406"],["/categories/java/index.html","969e9c9fcd10ee998dc17b208622c2e6"],["/categories/linux/index.html","c0e2c01b9921760e32512b17361eec05"],["/categories/mysql/index.html","87e550817d89067675036cf93112b877"],["/categories/nginx/index.html","d955f2446969bbea256fc77f7ce265d7"],["/categories/rabbitmq/index.html","928dff65bb315120620b26f610650e94"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","90639908380ff25478edbbbef60dbc5c"],["/css/style.css","aff75c4b93543f6adba319e7d83484af"],["/friends/index.html","9362cc64b715ce68a07b3611e0e9dae4"],["/index.html","e436c9e6569345ecfd0fb9aa953fa6be"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/click-word/click-word.js","ea48cc040c8828bd1cc07be103b0f71e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/title/funnyTitle.js","f268216ec84defda248af83f8a9c9073"],["/messages/index.html","a04232a10616fa9baa2258d9d6ab7f2d"],["/movies/index.html","c619f7c7d9b2c90b20dbdf86ad0cff88"],["/mylist/index.html","e8228d951b35c084d1fc21d96509c237"],["/navigate/index.html","552fc3e11f13b827b0d3b9da7af8881e"],["/page/2/index.html","580bbb779765d5e4325930dcf6d4a312"],["/sw-register.js","17147a7e0bd7d7a01d01e4cac6954843"],["/tags/docker/index.html","64c022be37f12898bb051c742426bdbb"],["/tags/index.html","6a9cee8542dc16248e23c5be986745e0"],["/tags/java/index.html","f7b58520ada4d1470d9154f2279554a9"],["/tags/linux/index.html","d73381cbe150d9c7377ffadf15a5cd29"],["/tags/mysql/index.html","a828b5d3356fba3e8245fc68b749b5fd"],["/tags/nginx/index.html","b1cc528c67b8f440ebc24b8bfd624641"],["/tags/中间件/index.html","358591c58725565abf45b139f3233910"]];
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
