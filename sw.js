/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/10862679c3fa/index.html","2052e907524b95de62413bc9774603bc"],["/223a80ba41d6/index.html","3b46d8fc1a408240b4e7e04472bf2c87"],["/3582a0555ae1/index.html","48b45279643c50c8ed6ab3d63f33d1f4"],["/368c8b7cab21/index.html","848c186f1223ef3143024f114ad728e3"],["/3ee606c7fabf/index.html","a09c9bd7dba333c801faabf22df37273"],["/404.html","64cb54b6679150e6c5e3babab7e8eebf"],["/4132844b2efe/index.html","a8151ac0a20d5e19fa47d96ea7170c36"],["/5134766ba3d1/index.html","5791a5d98e4f9c6f2647311972003e22"],["/66d2dc06dddc/index.html","7c0c7e086441990a1b36d47084693ce1"],["/7c4c0b8793a3/index.html","d8990981256b841b2d3594e00e1f53f9"],["/820530ad7203/index.html","f6b0334b1fb4be72e3cc55bb6d536026"],["/a3dc247d52a5/index.html","0cc677f8ec3fd060d296b92ae68f018e"],["/about/index.html","f33cf886aecad3a28480ad25de72f26e"],["/archives/2023/04/index.html","ba4b2508e32946a01e546b38c257aa8c"],["/archives/2023/05/index.html","cd83f590c8a382061d69ab51f3052542"],["/archives/2023/index.html","549592f74e9a1b39106694e66a0e3fc1"],["/archives/2023/page/2/index.html","e3b3118d750612472e6b73a73e3e31ea"],["/archives/index.html","be610b92335472249f382bb8b1d3c200"],["/archives/page/2/index.html","eca90846d2f889747b089d6fb77518d2"],["/b2937a13eef6/index.html","11bb4e6210e74e4f3cce7f1c85ff5e6f"],["/bookmark/index.html","c05ae359c00a67fe79bc587ceb28ecc5"],["/c11a99d2c881/index.html","64266bd2e602ce88f13dddff7d3dcc9a"],["/c1a24517aa76/index.html","3404ecba6756114498ada514ce5369ef"],["/categories/ChatGPT/index.html","b1530b205422587c7ddb03a2020e6a1d"],["/categories/docker/index.html","bb57acb88f39bbed44eaeaa9442de60b"],["/categories/index.html","cf761b19d0cdd10de6758d3b196a7a62"],["/categories/java/index.html","8f4b2f6f93a7b57ab3d1f3960cc6b94d"],["/categories/linux/index.html","65f174a5906dd69256e15356ef158f6f"],["/categories/mysql/index.html","ad3019011d244dfd134f5286ff220db3"],["/categories/nginx/index.html","fc561a44da26dd85922541bf554bcb3e"],["/categories/rabbitmq/index.html","a024eb570e32611d4b54f73a19ba05fe"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","90639908380ff25478edbbbef60dbc5c"],["/css/style.css","aff75c4b93543f6adba319e7d83484af"],["/db216b4516c5/index.html","047723afb4ad71ead6877907f7d6e5b6"],["/e4a7b2375fef/index.html","e4d4dbd1c1b82d9e6c55f1610e222629"],["/f45df1cd3575/index.html","28b503f39807712f79689c416131aab2"],["/fcircle/index.html","8ae2e2956096fab3e09fd17ca6f49563"],["/friends/index.html","54abc514b2bd4e95ce06c860508159bc"],["/index.html","35278508f3aa3e65189ebbb2cbdbdaf0"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/click-word/click-word.js","ea48cc040c8828bd1cc07be103b0f71e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/title/funnyTitle.js","f268216ec84defda248af83f8a9c9073"],["/messages/index.html","6e122abb64c510058a78a677b28028fe"],["/movies/index.html","76eb3f46df89a9320381dc4979ea3f62"],["/mylist/index.html","4912507ce1c93fbece48a023b93cdf06"],["/navigate/index.html","1ae3d246660611feb26781ead4ef0ff1"],["/page/2/index.html","da824bfb6195d94c84699eb54f7733bd"],["/sw-register.js","39f7dea555519237e0c8d6b7c9e10199"],["/tags/ChatGPT/index.html","514b201060f3e9ae9c52229ece48d540"],["/tags/docker/index.html","1913afe34bb64dc6c90eea021b74cbd5"],["/tags/index.html","221e55c99e7d36d1f1c076f8be8169c7"],["/tags/java/index.html","df3cdea50ffd449c12aeb29e9196e341"],["/tags/linux/index.html","e67aac4c8394157c35938746ea344d14"],["/tags/mysql/index.html","e5fd6f9d49ffa8436bc30cb2a2571e3f"],["/tags/nginx/index.html","a3c5e3b04c2649eed3b215c2e62d21d8"],["/tags/中间件/index.html","ce3961279eac4647b97af5cc98c0ae11"]];
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
