/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/10862679c3fa/index.html","59736a413bc613111d258010d8d9d580"],["/223a80ba41d6/index.html","ea13accddc276851f432fd5df182c4f4"],["/3582a0555ae1/index.html","5769f4accd2665e917aa0bdc2720cab3"],["/368c8b7cab21/index.html","b917dbd627e2c1834b27304b073a2ab7"],["/3ee606c7fabf/index.html","599a384410d097d79ab5ceab25633135"],["/404.html","ad1da2a45869da88e2f21ce7f9bacab6"],["/4132844b2efe/index.html","b8dfc4e163589cc9c4b413cff39669cb"],["/5134766ba3d1/index.html","42124d587d04e0c11b1edf18add55648"],["/66d2dc06dddc/index.html","0e237dc467124344bfbc7d81b2b1d121"],["/7c4c0b8793a3/index.html","ca6e699d691b5a328ae75d7a41d5d3f9"],["/820530ad7203/index.html","22a5968aac873eb47482c0505112fe88"],["/a3dc247d52a5/index.html","5da7d2a84d562b03054e08add2e1022e"],["/about/index.html","24a8230d63f9c6df4e0fd158a28b09b9"],["/archives/2023/04/index.html","57bca54e40e922a517a0008710916dab"],["/archives/2023/05/index.html","4b7dff1e506ab3f701fcedfa72a6eb56"],["/archives/2023/index.html","22c86f0960c80874fa67f0f03525efcb"],["/archives/2023/page/2/index.html","c11b223e809b1b5fd64598e55c6b9979"],["/archives/index.html","141695a4d2e6d653e938269944cc2d59"],["/archives/page/2/index.html","0ca60052710c3771ed560c22dc323ddf"],["/b2937a13eef6/index.html","83e9025512aaa03a5b331607bf386284"],["/bookmark/index.html","f28615b3980ec7c5a4f0403c9ef00b54"],["/c11a99d2c881/index.html","6a60e2bfc18c263844f66f48034cca48"],["/c1a24517aa76/index.html","1ba17e1ff7db77379811efb1accebc21"],["/categories/ChatGPT/index.html","4e8fe824103f52f23cf6fe73fa1387f2"],["/categories/docker/index.html","2450f216c369e40dc1211407eefc98b0"],["/categories/index.html","31aa4d3cf75f0dc9fad68d4a3f7015de"],["/categories/java/index.html","d79dd85fd10a54bfdd6c1670286cf5a5"],["/categories/linux/index.html","94a1c4aec8ecad10d13c1b867f8f3d9a"],["/categories/mysql/index.html","694c27bbc53b277523418b767769ce58"],["/categories/nginx/index.html","c1103931ba6ca72619112ba731a91221"],["/categories/rabbitmq/index.html","d359e1c0e383951fb3c633980698d445"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","90639908380ff25478edbbbef60dbc5c"],["/css/style.css","aff75c4b93543f6adba319e7d83484af"],["/db216b4516c5/index.html","6c544df3adb30b6bd794619368c8d644"],["/e4a7b2375fef/index.html","792f886422d799cfbaf52fc081ef38c5"],["/f45df1cd3575/index.html","4e93f996ba4d6cf77a17dcaf49bfe98a"],["/fcircle/index.html","c65df55d1e2b8607f2b5166c96b5526a"],["/friends/index.html","8999c28431063abc0d7aaa56e6b3e3b9"],["/index.html","7ad1ada10612d2373ca3d4fee01ea932"],["/js/app.js","73640783a3499d94a20ec862aa6b77d3"],["/js/click-word/click-word.js","ea48cc040c8828bd1cc07be103b0f71e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","88486ad37fb5c915bfb2264f6d973b7f"],["/js/plugins/tags/contributors.js","b70d3ea24c88f38b8390ce067f9bed08"],["/js/plugins/tags/friends.js","8f3b5da4522006725aa8476bbbd63784"],["/js/plugins/tags/sites.js","502da5f5613472f2f873c104f9d2db75"],["/js/search/algolia.js","cdfcea63869fe52c59b0456e0f1ec520"],["/js/search/hexo.js","cd9dceb05414dd24af5caecea45eb5ea"],["/js/search/meilisearch.js","742aba7d66d0e925f9b020629d70b16b"],["/js/title/funnyTitle.js","f268216ec84defda248af83f8a9c9073"],["/messages/index.html","0038d0cf9e7753e92379e8fd5517111b"],["/movies/index.html","9315d9fb4c26889d26f9b99cb4c6c64e"],["/mylist/index.html","ba1a4b4ba77d3133cf853967f77ec129"],["/navigate/index.html","9a7599e06ed1698995e20944031abcee"],["/page/2/index.html","5349e9351b4bb985e39797e14cc33d2a"],["/sw-register.js","ceee32b71cef6787e42f00b1e99476ea"],["/tags/ChatGPT/index.html","7d9cc0c3542e2825b16a40bb6e7e5856"],["/tags/docker/index.html","0f3cb541569d471999fbc3e69cc52734"],["/tags/index.html","90464f658b9afeca469679513a63e07f"],["/tags/java/index.html","a50d051f2081acb67961f9f8ab66bad1"],["/tags/linux/index.html","7468cc5d99feb931344620bda54d0340"],["/tags/mysql/index.html","58a3acbf76de262cbb2f510251973e33"],["/tags/nginx/index.html","fdc03420e88edc209c530a668a6cfffe"],["/tags/中间件/index.html","8841c5af059d76186d3a6c2edce71a0f"]];
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
