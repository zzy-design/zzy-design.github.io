/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/10862679c3fa/index.html","3e5745cb60d700fb59f2a759ce266c21"],["/2023/223a80ba41d6/index.html","a8bce6dde5306db3b17e4dd75712202d"],["/2023/3582a0555ae1/index.html","9cf38cb37eead6dc4c223ed12385b689"],["/2023/368c8b7cab21/index.html","bf5fab91f7e72d7b225a7a7a66d17347"],["/2023/3ee606c7fabf/index.html","db0c5e6fa1cf5f6c4266d9fc51beb3ba"],["/2023/4132844b2efe/index.html","809ebd8cbecd01565be47e23f8532b4d"],["/2023/5134766ba3d1/index.html","7361121bd039e70b445691cd67980977"],["/2023/66d2dc06dddc/index.html","13f9198f19bd34668466a692d656a33b"],["/2023/7c4c0b8793a3/index.html","3100924a715fa07a924a1f1f324f773e"],["/2023/820530ad7203/index.html","9c0457505d058d33f6c6ccc5a771034a"],["/2023/a3dc247d52a5/index.html","1fd879b583cc01574b0037672b3d66fe"],["/2023/b2937a13eef6/index.html","649505cfce74eed728a34334e4daf547"],["/2023/c11a99d2c881/index.html","bb6efbca3841590c3d6328b965293eab"],["/2023/c1a24517aa76/index.html","cab2578e0c9dfdff3ab9882a2cc504ef"],["/2023/db216b4516c5/index.html","f6d20bb89f40d8f0f716620e91a5f7bb"],["/2023/e4a7b2375fef/index.html","496cba561d28b33bad521054d14cf56d"],["/2023/f45df1cd3575/index.html","7ae3ae6e07c5f5d9ec4104ba4b1f9d06"],["/404.html","e474f9e2d7b71e233fd0efefb17db933"],["/about/index.html","b973428cd76597c1ccf0a976d34e39a6"],["/archives/2023/04/index.html","49a0b750cd4acbf2c99e9ffdc5a84f96"],["/archives/2023/05/index.html","63c60658c8e9f3b0262a5f1c969e1f10"],["/archives/2023/index.html","a9989dadfa99b3dae8c6700bd51eeeae"],["/archives/2023/page/2/index.html","c8b2ec2650c27f1b2b411251d633089f"],["/archives/index.html","2c64f19535df6d4fab5d9d66a59e1b89"],["/archives/page/2/index.html","89e9f1d435d3c986bab5441d45d3ce87"],["/bookmark/index.html","1679b08871d4783a6ef8b3f6f9d68df2"],["/categories/ChatGPT/index.html","6990bc12412990faffb3a59a3222097f"],["/categories/docker/index.html","95e0c31d00de77ea89ac8ae401643904"],["/categories/index.html","a6c984c3ab50445e027051352da2f1bc"],["/categories/java/index.html","5dc63cb9aef219c9eb6d8e9300dc96ca"],["/categories/linux/index.html","441f27bc7adaea406f61c5df8116ce46"],["/categories/mysql/index.html","20ee89726429723da25040f6aac53c3d"],["/categories/nginx/index.html","195bcde2415ec76362989b694061246e"],["/categories/rabbitmq/index.html","5762a2504eab094b253a794ebc122b52"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","90639908380ff25478edbbbef60dbc5c"],["/css/style.css","aff75c4b93543f6adba319e7d83484af"],["/fcircle/index.html","9b5341563641251d34bee78a9961ed2a"],["/friends/index.html","3ba88867839cd3e7c5210bcf8cd5e1e2"],["/index.html","a4792c6de9be9391e6c9b652edba2b1e"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/click-word/click-word.js","ea48cc040c8828bd1cc07be103b0f71e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/title/funnyTitle.js","f268216ec84defda248af83f8a9c9073"],["/messages/index.html","3725631af11d6708b890d2d65a428dda"],["/movies/index.html","5a69e4991b24d18219e14abfe80904e6"],["/mylist/index.html","0d2e85f2d24ca8753786fdbde088b46e"],["/navigate/index.html","635faaec60292b7bf722386298d6c2b5"],["/page/2/index.html","f6bf21eacf833d78e48514584f2de947"],["/sw-register.js","25f5e253dee68d2d0a040e4ac0b18c05"],["/tags/ChatGPT/index.html","233894a1a1090eb399cfabcd23e303a8"],["/tags/docker/index.html","1b3561af2e2c54e1fa89b14888afc00b"],["/tags/index.html","a2cce6ae96f028ae4164d1100146e1c7"],["/tags/java/index.html","e266786000efb86cc4a1e80da8a3dd3d"],["/tags/linux/index.html","20bca1365a05928eaa81edb901ab103b"],["/tags/mysql/index.html","3a3adcde6e6d97cc282e12d86ae5ef30"],["/tags/nginx/index.html","92735df73506604b9a3db9f94c3e8144"],["/tags/中间件/index.html","f131b9a6265e9c495df71a94c054117a"]];
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
