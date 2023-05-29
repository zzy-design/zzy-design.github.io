/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/10862679c3fa/index.html","bb6350c94bf24e4b97919e7d4dd427ea"],["/2023/223a80ba41d6/index.html","d7c9c992491176aab89f39e4adf50376"],["/2023/3582a0555ae1/index.html","cd944f392800eb02e62a1acfbafe9b1b"],["/2023/368c8b7cab21/index.html","06e52aa71858733842dba5d3eec6f1f0"],["/2023/3ee606c7fabf/index.html","03b952ae7580bed475a81d19747b50ff"],["/2023/4132844b2efe/index.html","49da4a109f04bb9d5382a8ca1f80ac73"],["/2023/5134766ba3d1/index.html","3b9399e5359b5efe8acd58630620bc41"],["/2023/66d2dc06dddc/index.html","811220fc57b93c9183fb62709203b06b"],["/2023/7c4c0b8793a3/index.html","90aa6581e1cfb5355c94f0da6952d6eb"],["/2023/820530ad7203/index.html","71c7a6010a495980c0f6888b01665230"],["/2023/a3dc247d52a5/index.html","f9d78b62a8884c1c98ba2986207acfeb"],["/2023/b2937a13eef6/index.html","4bc98d7ff3f67ca2f4afafa4dfaeca7e"],["/2023/c11a99d2c881/index.html","5e3eab19a28c94284f3efd76ee6b30f0"],["/2023/c1a24517aa76/index.html","b4836cd9cd8b6c39f2fd678b4c925e75"],["/2023/db216b4516c5/index.html","0dd8b200bf71ba70c0df2f0f7a432cba"],["/2023/e4a7b2375fef/index.html","e6064fd878fede897a79f49ad1bfdf44"],["/2023/f45df1cd3575/index.html","effcfbe7808ab8b4a09954bf4d4aa4f8"],["/404.html","aa7a1eab7d8708db340a37f91d8dabd3"],["/about/index.html","3bcc9794feae2623b56698b865538660"],["/archives/2023/04/index.html","cb30c3ac757d945c4f9a44074a63724c"],["/archives/2023/05/index.html","fe9251cac3f05706a4bfbf84987b7f80"],["/archives/2023/index.html","f8b432da79a561fc60a1fede190cc82a"],["/archives/2023/page/2/index.html","df720442d0f6a3afc078626ec7b22637"],["/archives/index.html","fe1f7ed0c7041a8cc50dbdd98556df01"],["/archives/page/2/index.html","b384bded84bc55dafdb6d4a546033e71"],["/bookmark/index.html","adbe50ba2833177665c5c58170423d07"],["/categories/ChatGPT/index.html","51496b9053d40d2df95f4f995abdc6cb"],["/categories/docker/index.html","2244481f87bc95fee3a8f1e44cac9da6"],["/categories/index.html","f5684f94256fbe0adab51d2d6bf63770"],["/categories/java/index.html","feb642a5698fcc22aa0b0ea72a8107e4"],["/categories/linux/index.html","673fa3b8f8106b6d783132da10794686"],["/categories/mysql/index.html","9e84b3c739897a8037b4374133e98025"],["/categories/nginx/index.html","39c22d7d36e27ce755486ac1b2eec439"],["/categories/rabbitmq/index.html","c216498cac989d4f18c77df74c2505a8"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","90639908380ff25478edbbbef60dbc5c"],["/css/style.css","aff75c4b93543f6adba319e7d83484af"],["/fcircle/index.html","b714a2f9187ad3c070e4a0adfd0ec584"],["/friends/index.html","675b11391fc071ea92e9b1bdb46ce3eb"],["/index.html","be41615329968e982d6593f9336f1da7"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/click-word/click-word.js","ea48cc040c8828bd1cc07be103b0f71e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/title/funnyTitle.js","f268216ec84defda248af83f8a9c9073"],["/messages/index.html","d0d68bc72243709c9b672f967aefdf9b"],["/movies/index.html","f27878739a8f83a865e32f5b0c73198f"],["/mylist/index.html","8e61078a5cdee5118abe0453bd1cff8b"],["/navigate/index.html","30d512807293c8b3e8c32beac8bb7f16"],["/page/2/index.html","18b370c2d7abf1a2ba991142fc224476"],["/sw-register.js","06af5bdd9eb89e2f8fe67df54b144a9b"],["/tags/ChatGPT/index.html","ddb06c524e733976dea99bbb3f3bcf31"],["/tags/docker/index.html","629b1a0b25b3b11f415a6da3ef28f455"],["/tags/index.html","3638edbfe9959f420b2be4144eee84e5"],["/tags/java/index.html","21a4e4e0dc922fbd940b0a514fe0b104"],["/tags/linux/index.html","9f4c7695e1be2cc2f15720ce4f8aae5c"],["/tags/mysql/index.html","e8213e61f7de4789fa8e2c5dca9fdd31"],["/tags/nginx/index.html","a42a83b35555d56193f52be0b9c08e70"],["/tags/中间件/index.html","8e765b97f3e1ee1889442dc471948a2b"]];
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
