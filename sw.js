/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/25/7c4c0b8793a3/index.html","5bc5c8013e5ff965fbfe73be7fd254b0"],["/2023/04/26/f45df1cd3575/index.html","5d4fb188bd3b179501669d63da7d57c2"],["/2023/04/27/10862679c3fa/index.html","b94b2e479bb014b0c262563bb5c7673a"],["/2023/04/27/3ee606c7fabf/index.html","295337a3688937d24178d4c33ae59a27"],["/2023/04/29/3582a0555ae1/index.html","1d04cc61780f7ee13c948764aa6700d9"],["/2023/04/29/820530ad7203/index.html","360d45ec05fe351741ed4bad282d0391"],["/2023/04/30/223a80ba41d6/index.html","a1cd683648d0d8814d347c2ab77c00bf"],["/2023/05/01/b2937a13eef6/index.html","98840dfa10b93dd6f1d80f9299b65538"],["/2023/05/01/e4a7b2375fef/index.html","4afbdd8d8ad53a644a1e9abb25502971"],["/2023/05/04/c1a24517aa76/index.html","19dff02687391240df4c5813d180e9d7"],["/2023/05/12/a3dc247d52a5/index.html","b64bedf861d649dbfcd2b8170ad605ff"],["/2023/05/13/368c8b7cab21/index.html","0418427b1148e351aec2a9acec1cc2a1"],["/2023/05/13/5134766ba3d1/index.html","c452c4f5ebb148786ecc2dd3c5a4880c"],["/2023/05/14/66d2dc06dddc/index.html","b4b20b652a39ae39ac94438bf5394aba"],["/2023/05/14/c11a99d2c881/index.html","8d12c3c85c59f8a6b2972bdd222976fc"],["/404.html","6ad5b8f438c0495f6e30568fa881cbc3"],["/about/index.html","a01eb4d552564978f0892852dfb90b20"],["/archives/2023/04/index.html","79d1f76263e825f790c59863613ac873"],["/archives/2023/05/index.html","767b49b4ecd5bae1894c87a70fdd326d"],["/archives/2023/index.html","4a9b5637edf8a6745985c4f2f3aaf601"],["/archives/2023/page/2/index.html","19c6eb3e4fe9d64a56255bb1e4373d7e"],["/archives/index.html","59d19b88c0e7a44987af2c60d561ac01"],["/archives/page/2/index.html","33ab82a68a0aba262c1b6d4549028679"],["/bookmark/index.html","a3787e02f1fe41ac6ad9b3f667599e7c"],["/categories/docker/index.html","81bcc77d03b8c413d90c9ecac54ce8f2"],["/categories/index.html","fccb864fee3c7dcfb12e677eb761e695"],["/categories/java/index.html","bf233c6fbeb5a289a2c88e5271010fd1"],["/categories/linux/index.html","3e290422a8be1f3a79829d6c01c5d6cf"],["/categories/mysql/index.html","fcb37160852f22259c881fccc62cf9ea"],["/categories/nginx/index.html","be0c96c77306e570a40773c0fb0878e0"],["/categories/rabbitmq/index.html","0bdf2fbba4466d86a63bc04028a30876"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","90639908380ff25478edbbbef60dbc5c"],["/css/style.css","d86e48484db5c41ff696b5c4d2693ece"],["/friends/index.html","89ffab3611efa94933c587635c8350db"],["/index.html","67415dbde2e7247d07e1c0e7cfa6a70f"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/click-word/click-word.js","7502a1688e895ad069524554e424428d"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/title/funnyTitle.js","f268216ec84defda248af83f8a9c9073"],["/messages/index.html","e37b338189b9b0509b3c94cfd7eda95d"],["/movies/index.html","d96b4a54ee6bd467cdfcc5e2de23c177"],["/mylist/index.html","a4caeb2f0f82dec082094be949cc3dc4"],["/navigate/index.html","0487e2b386df28b9a7b76f7c847b5074"],["/page/2/index.html","52020c157215d8d222eda8cd5f23dfb8"],["/sw-register.js","81843c7188c190d0a0612e8296736138"],["/tags/docker/index.html","b2ea260a4ca73c37a829412f13c240ef"],["/tags/index.html","aef19a1ffd062e23cbd8448a9a88de1e"],["/tags/java/index.html","56450c0ae62c137d267e26a165085df5"],["/tags/linux/index.html","0fcaf0f7e510e6d1cf6ac6637dbe35a0"],["/tags/mysql/index.html","80fbd3d6653251b4a71357cbec11b220"],["/tags/nginx/index.html","6f0b3df09bd74006c3b97d5583f6e4ed"],["/tags/中间件/index.html","3c973722c639a15687355014462cc65d"]];
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
