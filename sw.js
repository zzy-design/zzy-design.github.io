/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/10862679c3fa/index.html","b1217ac2bef830067d9a0baba3b0662b"],["/223a80ba41d6/index.html","b9f61567d2f77cf25ba4bc815902452d"],["/3582a0555ae1/index.html","bf31aa2f860f5a2d9a66a9d14589b161"],["/368c8b7cab21/index.html","bd045742937e1040eb4232646c94adae"],["/3ee606c7fabf/index.html","da1118ff2fcfa7e57d0ce631a9b35f3f"],["/404.html","1097ccfba02de15bfc048bff43baf23d"],["/4132844b2efe/index.html","45de724151c9976251d05e433c70bee6"],["/5134766ba3d1/index.html","634205ce4edd86a648e8665db7d8d135"],["/66d2dc06dddc/index.html","05acec9376c775bf583bf1ad1539c607"],["/7c4c0b8793a3/index.html","af822d285214f5ab1b24b21caf829fd4"],["/820530ad7203/index.html","bac0385fcd809d32e361a273d3758676"],["/a3dc247d52a5/index.html","6dea51ecbaf0cb817e1b515dd4907240"],["/about/index.html","63c3a0f99a257859b288387a0db04f30"],["/archives/2023/04/index.html","1c18099a2aca9cc97209b3d017fd8add"],["/archives/2023/05/index.html","7b23516a72cb285123ebce295ee499b9"],["/archives/2023/index.html","bfabc55d5def63bb8e72c70f0b40ce12"],["/archives/2023/page/2/index.html","1ce92801208e7bf6e2477b9cb8ddc8e1"],["/archives/index.html","879f733f3c73393d06f2d9cd86f0bb4b"],["/archives/page/2/index.html","16271f3b225e9940bb30ab5b9ebd1107"],["/b2937a13eef6/index.html","266ef94c314cb476bdced249aa9ae30b"],["/bookmark/index.html","87f2316a5facabba516f9759d6702d63"],["/c11a99d2c881/index.html","1f1f173ad2f31e9500d996c470c4ed90"],["/c1a24517aa76/index.html","72be621b05242c7c046f45bbca4a5a52"],["/categories/ChatGPT/index.html","90b1a8a96448c6b93463f698b07f19b6"],["/categories/docker/index.html","23f53253b79ae4aae1a5f121afbe6d80"],["/categories/index.html","5f1fc21fb777c349ef15544dfda5f4ca"],["/categories/java/index.html","caeec5709810f72ac0adc52c3fbb387e"],["/categories/linux/index.html","6f9c0d6985b7ee122eceb98aafcb6696"],["/categories/mysql/index.html","aad247aa9ecab0564cb4f9acef1e4002"],["/categories/nginx/index.html","c4f0516dbccadefdaa306148561ad94f"],["/categories/rabbitmq/index.html","869ba517a88763ebced4e0eb8bcd3bc9"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","90639908380ff25478edbbbef60dbc5c"],["/css/style.css","aff75c4b93543f6adba319e7d83484af"],["/db216b4516c5/index.html","bb6e7cda4227e640c91fef063cc524f0"],["/e4a7b2375fef/index.html","e0f6a7d80d9ead9f7ebbe67e2a7ca4c0"],["/f45df1cd3575/index.html","5899f0e3fb3412f8c856b00645016abc"],["/fcircle/index.html","f91f0ed16712e5c4633c99c67111c47e"],["/friends/index.html","539a538930379aa3f6b839fba59ba115"],["/index.html","71fede8b50ddc2b4454df16c6b6617ef"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/click-word/click-word.js","ea48cc040c8828bd1cc07be103b0f71e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/title/funnyTitle.js","f268216ec84defda248af83f8a9c9073"],["/messages/index.html","f48baf7c5afea1396d18a5ff5486f33f"],["/movies/index.html","018101a379a912d3a42307887396398c"],["/mylist/index.html","039f5aa32d50aea574abe7d615329e8f"],["/navigate/index.html","3cfc17b45ea85c7dcf4b235015ada638"],["/page/2/index.html","551555e5e08ad6cbab890c8e9b4f92ef"],["/sw-register.js","73dc7b0fe5dae85cbbaafaaac9458d12"],["/tags/ChatGPT/index.html","8a173814f7e1c7e2df9f11d239b7ae31"],["/tags/docker/index.html","bcec6ac7b34a4d732de590c200ca071b"],["/tags/index.html","f42108e5ce682102330777033f778b6e"],["/tags/java/index.html","711dda9a82b5822c644784b7fddc2527"],["/tags/linux/index.html","fc28214e16b4ec8699be8d444277788a"],["/tags/mysql/index.html","72286079262d583b5c54d732125de30d"],["/tags/nginx/index.html","46c7a6edfeee24b4fcd60ebebf646e20"],["/tags/中间件/index.html","a80cee84f81181cf537bc0e05c8a1516"]];
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
