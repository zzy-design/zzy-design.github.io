/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/10862679c3fa/index.html","81a1431196ace1a2c72a21c0e8937cff"],["/223a80ba41d6/index.html","d9d263f0f000758ebcd9f0c6b859fa48"],["/3582a0555ae1/index.html","d4a52bdb0d5dc071248f7239f4fb1ba7"],["/368c8b7cab21/index.html","08122c6b5a6a0e6254a12ae823a83a6c"],["/3ee606c7fabf/index.html","dd78bf9d6e8155b76b638b2ee5819ef1"],["/404.html","cc3207e91bd9f9b436f2eaec78e574c3"],["/4132844b2efe/index.html","1a1ae6199e18137d7059ea92633b1a81"],["/5134766ba3d1/index.html","96339f82543b7878d025e9746eaaa395"],["/52870188c2ad/index.html","5b36253f8525eca016f8285d49f72be0"],["/66d2dc06dddc/index.html","eb8ad52a783669a5ffba51744777f1f5"],["/7c4c0b8793a3/index.html","bde9e411536e0fe07c9f6b0bc944c846"],["/820530ad7203/index.html","9dc68562969a9ba9c349736a78285e3f"],["/a3dc247d52a5/index.html","c5134f65076dcfd90eb759b038d4bc83"],["/about/index.html","1a79c73362c79df0fce890645e96b12c"],["/archives/2023/04/index.html","4ff7654627c05114df75968edd34d2b7"],["/archives/2023/05/index.html","c234a163d540975fdf33e7c62e9f250f"],["/archives/2023/07/index.html","6feb5f8b5e68bf70126ddd2a5bb2367e"],["/archives/2023/index.html","1d9eb1f8a82e912085a825f305676943"],["/archives/2023/page/2/index.html","3e4a12794e2c0451a9a9c8194b17cfb7"],["/archives/index.html","1c9a489e9ea71455fc231153a6369fdb"],["/archives/page/2/index.html","cd279fd44bc0999d84c8e1b58c2f225b"],["/b2937a13eef6/index.html","a37b1d957f5b5e6bace476a8cf8eed09"],["/bookmark/index.html","75c6943742560064c883f96ed933e738"],["/c11a99d2c881/index.html","5b1c0b58b9eca219eb48d4180c110b2b"],["/c1a24517aa76/index.html","8e20a79d4d6392520866666c53f8dab4"],["/categories/ChatGPT/index.html","790701b6ae31489ac87bd980a93b526c"],["/categories/docker/index.html","de3214e9765c2fde4653ad8f921d8eee"],["/categories/index.html","dc97476a812d42c289bd77a67e92ac7a"],["/categories/java/index.html","5f89c6ee555bba09d25e2602cdd2a13e"],["/categories/linux/index.html","377962a23135e89a7cb124faebef6da8"],["/categories/mysql/index.html","d9646123e6db180e5948ed306d7e21eb"],["/categories/nginx/index.html","b65cc8f9aeeaf8634bbc421f7ce84971"],["/categories/rabbitmq/index.html","9e68fdc43a2a7b030c954376d30dd825"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","90639908380ff25478edbbbef60dbc5c"],["/css/style.css","aff75c4b93543f6adba319e7d83484af"],["/db216b4516c5/index.html","cfb3238565a015bfe2ea0a89a884d1de"],["/e4a7b2375fef/index.html","5a877cff16fe830637a99626b07aba99"],["/f45df1cd3575/index.html","9f7cf052dc3d6926dca49296a449ceef"],["/fcircle/index.html","941e8d6982c0c145d40d882a8eea6650"],["/friends/index.html","d5efde22598729bb40312421be1afabc"],["/index.html","bc205f199ce81c0c26df012d511b48d5"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/click-word/click-word.js","ea48cc040c8828bd1cc07be103b0f71e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/title/funnyTitle.js","f268216ec84defda248af83f8a9c9073"],["/messages/index.html","e7074638ed3aa372da7fd27c7fb0f917"],["/movies/index.html","c22194110df305d2ea2327d82055b63f"],["/mylist/index.html","124351c38edd2e39b9d19ba6baa2455e"],["/navigate/index.html","01e81904f5c1847b2cd36721473a7949"],["/page/2/index.html","8319caffec6fb44b9f45e008e2d39eac"],["/sw-register.js","eece931f3d17e469830e65bdedd4ef6f"],["/tags/ChatGPT/index.html","90f12377675e028543bb61848822e3a5"],["/tags/docker/index.html","d09371869c78e1a2ecf1ddf99d6fe755"],["/tags/index.html","85f9d644768c1613d5a5ff023d0b72f1"],["/tags/java/index.html","106117e92e18ad873900763ae8113a34"],["/tags/linux/index.html","4edcd8b98b48d9abd253c3e2363e3611"],["/tags/mysql/index.html","7c09c37c03f21ea68fac7f4ce5438cd1"],["/tags/nginx/index.html","635f3d404da0813c77e8d3ff37ac6483"],["/tags/中间件/index.html","9159a27226173b96095568910943b5e3"]];
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
