/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/25/7c4c0b8793a3/index.html","c18a6a3a2e1a61af165570bc9d6ac0c4"],["/2023/04/26/f45df1cd3575/index.html","4f88d3ce4fec317296906dbe9c75a4c0"],["/2023/04/27/10862679c3fa/index.html","8b16e75db1b15a996297b3b394907f61"],["/2023/04/27/3ee606c7fabf/index.html","6d28aee428e05ee1e2b3452b0ab32324"],["/2023/04/29/3582a0555ae1/index.html","b29f3e0189dfa2eabde57b9ae223a30f"],["/2023/04/29/820530ad7203/index.html","9812216b485161e8409e5855f32552ca"],["/2023/04/30/223a80ba41d6/index.html","85ab6d34a0b3d3b53058fc93da82d7b8"],["/2023/05/01/b2937a13eef6/index.html","1f8e234323e268fbad6f21052d7e6605"],["/2023/05/01/e4a7b2375fef/index.html","6f787167bd4dd1e10e3309054f5586c9"],["/2023/05/04/c1a24517aa76/index.html","afb6eb965305a92ac6ce78a2512474b3"],["/2023/05/12/a3dc247d52a5/index.html","bdd545bd2d2a3f74b65dd09c2f4c33bb"],["/2023/05/13/368c8b7cab21/index.html","d7cbea92a385617c5d06a7fca7ab6033"],["/2023/05/13/5134766ba3d1/index.html","b01f8024467105ef28989c9e58a08bab"],["/2023/05/14/66d2dc06dddc/index.html","6d56a1f4e5d565db40a8747cf7d7d119"],["/2023/05/14/c11a99d2c881/index.html","ba7b00358445e6510a88e056a5c2a84f"],["/404.html","cf38f579fb1bcf4f62cacda7647fe3d5"],["/about/index.html","48a3cafb67188179dbb6373c16056eb8"],["/archives/2023/04/index.html","3b3cb17979eb0a92a7983b3e2efe1b22"],["/archives/2023/05/index.html","18acb01990d6bcaa61f445edb07ad231"],["/archives/2023/index.html","3995c03d1ab06fee746d92a478264091"],["/archives/2023/page/2/index.html","51e3c54a50a27ddee701e817a5ccc8ac"],["/archives/index.html","3436094e901c1b9fa41d96c40348987e"],["/archives/page/2/index.html","f8850d08d5e0bdb87644d782088daf86"],["/bookmark/index.html","eff706f2f0f143df26425bf0d9f01308"],["/categories/docker/index.html","12481537193c888cdb69674773ed3000"],["/categories/index.html","4634063d1640db2ad4e56d060bc8cc83"],["/categories/java/index.html","c2b44d47d37742cf41e3c3fc6d8cc0d9"],["/categories/linux/index.html","1d34275c10776caac0e8e796683b0637"],["/categories/mysql/index.html","edd0b416165aa3cc6ddca2d65aea79e1"],["/categories/nginx/index.html","00990b599be5ba81dd923b9921c78f77"],["/categories/rabbitmq/index.html","9f21c6c2acda049c85dfb5d29fa7f31a"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","90639908380ff25478edbbbef60dbc5c"],["/css/style.css","d86e48484db5c41ff696b5c4d2693ece"],["/friends/index.html","9724ab50ee5d76db0c0b2618a37beb8b"],["/index.html","7cdbb7eaaf396573286fd4cdc0e06f2f"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/title/funnyTitle.js","f268216ec84defda248af83f8a9c9073"],["/messages/index.html","518a763904bc03433338a9e086312eec"],["/movies/index.html","f22562f9f9c60f542ffa52518bb3fa41"],["/mylist/index.html","9a0ca47fd76489086da0e87a9e9ed8da"],["/navigate/index.html","fd967501dfded9f63422dead84d88f71"],["/page/2/index.html","4f964898c23f0011ea94522a92817181"],["/sw-register.js","b62add3111db2961fee417814e48384e"],["/tags/docker/index.html","cf037fa0cc3e7073ed2b2adb6f338c0c"],["/tags/index.html","19e7fe4334a1486dffbfb92d3a869441"],["/tags/java/index.html","622e5d0dabb6e3c75b4e8ba1c085f64a"],["/tags/linux/index.html","50c1c8f592728a4fffeae46d918e289c"],["/tags/mysql/index.html","97a7ffb0d17f75a00740e4af10b2dbab"],["/tags/nginx/index.html","2b5e47de6637cdc72e8b6d1b934c5249"],["/tags/中间件/index.html","fc2d2783a9d2a059291b2551cdf9a941"]];
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
