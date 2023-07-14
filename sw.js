/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b7438b2a2e43da796fb852a6156537b4"],["/about/index.html","17bbb440a0badbc88bc97a444ea18a71"],["/archives/2023/04/index.html","1a1722b3ea0579b46763040cad9d7c2c"],["/archives/2023/05/index.html","82417f88103f187231fb3afb09c25884"],["/archives/2023/07/index.html","2d1009a2a1639a7323cbd56bb051e334"],["/archives/2023/index.html","1450d08a9a415760dc162e268a9ebeec"],["/archives/2023/page/2/index.html","ef9ae1cd5e120c70876bb8d7980ce603"],["/archives/index.html","38dea6a2899877f4f059fb60f80c9619"],["/archives/page/2/index.html","efad382638459241408ff43d1c88cf4c"],["/bookmark/index.html","273a41c64f55f4ad79d76aad8bbc8443"],["/categories/ChatGPT/index.html","68ebe410732439cafbd3556faa25f961"],["/categories/docker/index.html","7518ed50a0861fcaf20638da071436b5"],["/categories/index.html","ffc7856a5aa8cb1099fa227fa9030aed"],["/categories/java/index.html","6d91bebaf69c0cb79df2ed7890a597fd"],["/categories/linux/index.html","13ef7ae584002cd72bdade150a1e6527"],["/categories/mysql/index.html","805e8fadccc1fe83e40481b3cba95124"],["/categories/nginx/index.html","3b88ad41dabb7093c0a5643793b99360"],["/categories/rabbitmq/index.html","934b3d3d1323bf8c7911a056a641792c"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","90639908380ff25478edbbbef60dbc5c"],["/css/style.css","aff75c4b93543f6adba319e7d83484af"],["/fcircle/index.html","7de56b707cfdb7d96ffd729ad1eae07e"],["/friends/index.html","2664c1d79dec16662eb7ad0e2136e467"],["/index.html","177da609a32401f2cf135fbf8f3310f7"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/click-word/click-word.js","ea48cc040c8828bd1cc07be103b0f71e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/title/funnyTitle.js","f268216ec84defda248af83f8a9c9073"],["/messages/index.html","80cf280d4dc57f30b1ddd4aa05015990"],["/movies/index.html","7990c2ee55929e40df37031488a5aef1"],["/mylist/index.html","66c87daa8ea45d303cd376800ea381cc"],["/navigate/index.html","4b7b0e7d9d8768098f3ac04bfe344149"],["/p/10862679c3fa/index.html","efa0d979a723fc2bfb1fc61b2f8a11d5"],["/p/223a80ba41d6/index.html","e0696d1a77b62da0c7a4a4bda43f9ecf"],["/p/3582a0555ae1/index.html","ae25d36701351e452538fe84111075df"],["/p/368c8b7cab21/index.html","bd1ef7b3886ee1dde67d6cc7b8ed7387"],["/p/3ee606c7fabf/index.html","413e4886575eb31654de66a5836db839"],["/p/4132844b2efe/index.html","f6b9d4d670aa9366bfe6a3f69f38cace"],["/p/5134766ba3d1/index.html","23e23863dddec4c7f62bce3680cda8a1"],["/p/52870188c2ad/index.html","c9b0857aa9656df7a84d821bf9f88cc3"],["/p/66d2dc06dddc/index.html","24e704867dde49643cfca1dbd560e5c4"],["/p/7c4c0b8793a3/index.html","81c294cad7059c4cd1528eeaff6c8c2b"],["/p/820530ad7203/index.html","01599e487cd4dd899b2a8f957195d840"],["/p/a3dc247d52a5/index.html","1605fd0341e8978b0d804aa272c6ae33"],["/p/b2937a13eef6/index.html","6c2dcb7cb916cb9a8def430038c3a4f5"],["/p/c11a99d2c881/index.html","91c81c392ee56f497290036c5908401d"],["/p/c1a24517aa76/index.html","0fbf3fffc1e44b3684f78e672c0cfba0"],["/p/db216b4516c5/index.html","aecd426c228a5fa18487fdd287d018a5"],["/p/e4a7b2375fef/index.html","51fffd8f5d2d3b12b9405fe58966ee3c"],["/p/f45df1cd3575/index.html","9866e7cad5aa80e613bac332028cf8b6"],["/page/2/index.html","77437a37d19954d4da76dfbaba145bb7"],["/sw-register.js","19933c172e5ec05135e2b671e0a2d0f1"],["/tags/ChatGPT/index.html","ed6d2178e52a280bca8bbd146d9b99ac"],["/tags/docker/index.html","45f5cd5ac1d100d8d921e5e0556fc9fb"],["/tags/index.html","d8e1f006b1bc3797324a62d94c460b43"],["/tags/java/index.html","96df5e741a605b22ed4f4047fe30cfad"],["/tags/linux/index.html","4f61571f2a740be3e7f4502a6244d05e"],["/tags/mysql/index.html","bec6b99fb56765033a554e14ae72dd3b"],["/tags/nginx/index.html","dec8082d3e3a34ae84fdc9302ad4a07e"],["/tags/中间件/index.html","3fc755ed4a4c55d4979154d933329e79"]];
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
