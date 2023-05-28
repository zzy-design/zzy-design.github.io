/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/25/7c4c0b8793a3/index.html","1e329cd8f138f8ff66ba17c281348986"],["/2023/04/26/f45df1cd3575/index.html","0b9a6813361fde7344d8d39467cf832a"],["/2023/04/27/10862679c3fa/index.html","08806550011919fb64ae63f617d6bb3d"],["/2023/04/27/3ee606c7fabf/index.html","de1f71ad4b3a3ecb1196bb41ab996b5e"],["/2023/04/29/3582a0555ae1/index.html","0963657c47d1ee724f9d01676cebdb68"],["/2023/04/29/820530ad7203/index.html","4c8862e7b2a9e3d9b625e8f4b2e7476a"],["/2023/04/30/223a80ba41d6/index.html","f212602cdd54de5344af45555ef55436"],["/2023/05/01/b2937a13eef6/index.html","98d89f1b54855ab66cfa294a32db6108"],["/2023/05/01/e4a7b2375fef/index.html","4496f5b42f5bdecdd8bde77a8c8e876f"],["/2023/05/04/c1a24517aa76/index.html","c2f37f8bf4ec07373c7c190520514fc9"],["/2023/05/12/a3dc247d52a5/index.html","be543951895b88c168acf1abaa178052"],["/2023/05/13/368c8b7cab21/index.html","1c7e7cdb154e7fc3463fd6b0e637d837"],["/2023/05/13/5134766ba3d1/index.html","7f0c5398e09a9fe8e4984fedd110d619"],["/2023/05/14/66d2dc06dddc/index.html","1b874601643621766afb740f9e30a956"],["/2023/05/14/c11a99d2c881/index.html","4b1ba2d1ec8a0809f2e3e10fc8ed7696"],["/2023/05/23/db216b4516c5/index.html","9bfc409eb8771286c579a2b83558ae3a"],["/2023/05/28/4132844b2efe/index.html","8e90c3e5f21fdc7931e07bb26371e7e3"],["/404.html","b5553eaa24cfb582b2a2c299010862bf"],["/about/index.html","aa94b4a758b65e26c02ac80fab8a7c58"],["/archives/2023/04/index.html","30a36756504b11c18bd98c2e784621bf"],["/archives/2023/05/index.html","f122ce113803523c013945393a159fbd"],["/archives/2023/index.html","0475ae0c19b9803ebcc0d75cb9d0139c"],["/archives/2023/page/2/index.html","77c8ea96aa4128b1d8a6d28b45fce195"],["/archives/index.html","65fa503909bd70fab3bdb6357dce9e91"],["/archives/page/2/index.html","257dd8113923f7a55504980aea21ac11"],["/bookmark/index.html","2a20bc2868a8917036d641aed982df21"],["/categories/ChatGPT/index.html","ae0f6d25ce89c8bb2a6c6ee93f8d250e"],["/categories/docker/index.html","78c61ac87d4bd99c77bfb7a18917b8a2"],["/categories/index.html","85d97efe88fb3b24b1c0fbca9cc19885"],["/categories/java/index.html","62dbb71f64e20ce18cd86f0abd753251"],["/categories/linux/index.html","6433a154be2a8626d8e114bc312164e9"],["/categories/mysql/index.html","83f2ce0156a3d8f8c74115130a839095"],["/categories/nginx/index.html","f345590f7f1cc698de5faa6d2aed7abf"],["/categories/rabbitmq/index.html","49d3c6091c9c4842a371c47e2f000e5a"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","90639908380ff25478edbbbef60dbc5c"],["/css/style.css","aff75c4b93543f6adba319e7d83484af"],["/friends/index.html","a7bacfc6b10cbe71c0ded9f5d1eb2690"],["/index.html","02f8227ccf4ef650d0291924bd7e2c30"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/click-word/click-word.js","ea48cc040c8828bd1cc07be103b0f71e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/title/funnyTitle.js","f268216ec84defda248af83f8a9c9073"],["/messages/index.html","5461ee0181ebe023803d5f509a49a3ec"],["/movies/index.html","5d3b81e390fe9449bc6ff7e1f0078442"],["/mylist/index.html","700fc7c879e24fc2a942e403a887c478"],["/navigate/index.html","eff26cda98f13348c2c408dc8aefdec3"],["/page/2/index.html","4adfd43145627c624869287b64dbfbcb"],["/sw-register.js","fbcedea3b08612057c75727ce09e5629"],["/tags/ChatGPT/index.html","08e6214a692309feb73f1baee9da1237"],["/tags/docker/index.html","cbe6d783fb660eb79793fa92d2b3e3f7"],["/tags/index.html","94bb360ad3694d4dc89353a3148f2801"],["/tags/java/index.html","7361dfb676bc2807d332f902408fe2f8"],["/tags/linux/index.html","8e06e7d01d99ae28a62cdb27ae364aaf"],["/tags/mysql/index.html","b3157ec3da362b1f1c5aca5f7d28fe4e"],["/tags/nginx/index.html","127c35326b0373bc5d87216f3a8a115b"],["/tags/中间件/index.html","51ad5b5dd1f3ddcc86be90db5e380a9b"]];
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
