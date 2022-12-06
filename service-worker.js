/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["css/event.css","6418f798afcf5ee71a0cdd1bfc76880e"],["css/login.css","545b64ba33eef674df40bc3aa6ae2c4b"],["css/main.css","59363e80f516d6c53d99e83a53bb75de"],["css/menu.css","e49946a4c7133fa49a77b702ebe11eb0"],["css/popcorn.css","954678d361d74eab40274ebec3058773"],["css/reserve.css","1a24d32622a70fdd7ec19de8dce401e4"],["css/reset.css","64ee61eb2193628bf58f3b0a9a2e9e48"],["images/maskable_icon_x128.png","b0aba71cfce79347082292fa53f8b3af"],["images/maskable_icon_x48(1).png","c930e66d3145a4d392b2c621f9f2fd37"],["images/maskable_icon_x512.png","90eec5c2bcded2e6a63e3f2f4597f6e9"],["images/screenshot1.PNG","1317d32123fe7cdd0a6e63b96b0f394a"],["images/screenshot2.PNG","b85ee4a717b55e577dd4c4e8ee07b250"],["images/screenshot3.PNG","912b19eeefbcb5b64b6e93c697bd078d"],["images/ticket.png","641042934769827599539ef3b4b3df14"],["img/ad.jpg","d2af61c1a22b764de980b09a8afe9ae0"],["img/ad02.jpg","52b089e6ce8789edcf001ff489ca19f3"],["img/arrow-left.svg","982c756120c785716045e75e2758a42a"],["img/baro.png","86541e96d00f99f5e4c2d204373c1c31"],["img/cart.svg","56d44476e7af4d4e5827633a04c31621"],["img/cash.svg","f88c0e673965ad3d82bd4682f20eedd7"],["img/event01.jpg","c2f7fb0eaedbbf6af73c30a4f6663d8e"],["img/event010.jpg","67273fc86849996ea108ab711c6ffdd1"],["img/event02.jpg","c16d037f28e11aa402ae4db943fc0ee7"],["img/event03.jpg","b011053d9f131397aa6ea6c5f62a4458"],["img/event04.jpg","a4cfca688e0305d92aaba5f1d5b3fd1a"],["img/event05.jpg","a481b4eeb948d32b7db150c945f1fd0d"],["img/event06.jpg","4ecb2eb8551f0b5c503852d68b503cfa"],["img/event07.jpg","aef811340b1321b43709c9a64fccea88"],["img/event08.jpg","92a75b9bd81a10610c754415f3c7fc9b"],["img/event09.jpg","5c0c584e296ca6a16c67dbefa7b70636"],["img/event11.jpg","9d6b07e8f0078e4628077c1c272bc079"],["img/event12.jpg","610ea4e09cab0ddd36b14889b4b7c29e"],["img/event13.jpg","23cf6319204bda9fa3de5f5224aa2a4b"],["img/event14.jpg","dcfcd9b465efe695845107fb38be650d"],["img/event15.jpg","8ab94b1f8a6185e62c3b85cbf96b1c83"],["img/event16.jpg","c109a913a4a835dba160bc37aff4435e"],["img/event17.jpg","74b0b19282832da3c7f515bee435836f"],["img/event18.jpg","0b88a74ef0c32e67af14a8dda0367e04"],["img/event19.jpg","598cf97255c18668c6dfb84821729e81"],["img/facebook.svg","1e80416aa91f53526b9135b7fbcb8474"],["img/feedunder01.jpg","da59951e6ce050f15a164229e7af71be"],["img/feedunder03.jpg","e2f17a73c5cda9297e9e883efb566ede"],["img/feedunder04.jpg","dd871a4c9ab32d47068117369b0478a3"],["img/feedunder05.jpg","e38318627634afa0135601846849b85e"],["img/footerab.jpg","fcb57c1443345016944597059b2ada35"],["img/fotter01.PNG","cf219395fbd9ae94bd953db3fecf6850"],["img/fotter02.png","cd239a2f3180e6ebf7339619a0b37e46"],["img/fotter03.png","ad5132c4a30aa94a7bc64d2bfe845b2b"],["img/fotter04.png","172b1c879a92de2c3199bc5e44a24dad"],["img/fotter05.png","0e5a4671a7378b8df8a561efd486b4ca"],["img/fotter06.png","e1ff6d4c0b27d9f3a08b6b159249dca0"],["img/fotter07.png","ec7b03b71321fba62c07b6322c8a823b"],["img/fotter08.png","76141dc87bf4ab37cf468003077f40b1"],["img/gear.svg","f142545c2a66146ecedbd18c7fce0aeb"],["img/gnb_facebook.png","8a638caef62815768c1a0e0a61ffae89"],["img/gnb_follow_wht.png","55cae081be16645a40e91e620977febf"],["img/gnb_youtube_wht.png","59633cc9d2160b561922cbaca50fea90"],["img/header_logo.png","d485a5fff124cacca5ce1d27a2631c82"],["img/heart.svg","54800422b40fd652b28aff3b5b32ac21"],["img/heart_wite.svg","d58a13151fce25419d99920e2c427806"],["img/house.svg","a543e9d934cab3a817503be38a34b3b5"],["img/ic_floating_03.svg","65200638cd23442420205f4eba2ceefe"],["img/ic_floating_04.svg","427ae3ee9408d3e1953c31cec4d9af4d"],["img/ic_floating_05.svg","f2000574cb67b334279a1ed8c2637bef"],["img/ic_gnb_alarm.svg","4ea72abbc68be5d11e38e46816cd87d5"],["img/ic_gnb_ticket.svg","73e5f3abbf866338659a5f97fbfc3296"],["img/icon_event.svg","7b36eaf918f86c6a27bd5763a743b6e1"],["img/icon_screentimetbl.svg","101f2ced8b43a98cc7e1310598792492"],["img/insta.svg","a20162f7123cb0302b10cd45852f50ae"],["img/kakao.png","7c06d246088cfad8d7fbe2c7b2ce7f37"],["img/king.jpg","03d4aa25b7d031187b229c5ceebdbc0d"],["img/login.png","91d00f06a651129343ed428a3a8d097f"],["img/logo_footer.gif","c08fffede148526d3e22fe18127750fe"],["img/mainimg01.jpg","10430d00fc17b209b4e00fd39d014c2f"],["img/mainimg02.jpg","1fce077bac52f49df55186a7d3eed440"],["img/mainimg03.jpg","c6586f320cfbba40cf2b0cb16e8d21ba"],["img/mainimg04.jpg","04746056528fbab91d48075c4842874f"],["img/mainimg05.png","3c47c4f48b0f7fc8c5ea7988bbdb7767"],["img/mainimg05_1.jpg","a4ac7a2bb50d1daffc085b8bb758828f"],["img/mainimg06.jpg","5e04436c346244d3d8a4719534ca359f"],["img/mainimg07.jpg","a02ed4d4ba06648ae2046bec7114e973"],["img/mainimg08.jpg","fb5ada74ca0685c7b82c6917d49c21f5"],["img/mainimg09.jpg","84c4f79f04995fd5e8151237329bf797"],["img/mainimg10.jpg","da4a5187b8eac60f21f0a80fdbeda585"],["img/mainimg11.jpg","d33b465d81f7522664d1c1d8f2e4f333"],["img/mainimg12.jpg","fce8b1c81cdec6e7491a1a15e123bdf0"],["img/mainimg13.jpg","5ed3df5cc9fe4283c3de9da67b5a29ee"],["img/mainimg14.jpg","e2fe839224f17f3152e0e7c7cf85c2f5"],["img/mainimg15.jpg","2a01f20246602e9da176e025a0588702"],["img/mainimg16.jpg","55c744ff4df563bf8c42dc17f2c959fb"],["img/mainimg17.jpg","536563c0754b1fe391007483cf4b33eb"],["img/mainimg18.jpg","8982d704a8ed2ceb52ed77385ab90361"],["img/mainimg19.jpg","ce5d9fd7e6e122697270fc567a192401"],["img/mainimg20.jpg","790b197c43e7f39f3835fc08f1084a2f"],["img/menu01.png","1309b387e20095f94bb42808a1221ef5"],["img/menu02.png","91d00f06a651129343ed428a3a8d097f"],["img/menu03.png","ef1a9d64e5f63f411b31d5e8f5603bff"],["img/menu04.png","e6185927a69dcdc094dce84f0534b5fa"],["img/menu05.png","2d8df5e5829a2940629d78e6b044d07c"],["img/menu06.png","c21e4d814aa3155d3da1c8752e8e12a7"],["img/menu07.png","25003246a510e8e11ae87bcb53aa3149"],["img/menu08.png","8c3b0fef57bef0361031a16351ed8f7a"],["img/menu09.png","c8c4a8524c54e288f67dd11a4c23d810"],["img/menu10.png","8306b7e1949dc0daf2771c92690c9f1f"],["img/menu11.png","fb2777761633d7dddaefc7254c36c1ed"],["img/menu12.png","623e9157707fdefb6e58392c73dc016a"],["img/menu13.jpg","491650f3131658d667f525bbfd27ae5b"],["img/menu14.png","a8b00442dc2dc08f63e290b44f6abeca"],["img/moviefeed01.png","34e03942ff00fd450b44cb1df56980f1"],["img/moviefeed02.png","f484e6d63f3f04389463a8e09785caa8"],["img/moviefeed03.png","cb1c30e763e6eef639d350f73a1f3286"],["img/mpoint.jpg","5c00bf9d0aa1ebf4b9b11d378b9a11ab"],["img/nav_side_my_wht.png","12a4433531662bcd85d20492a1b53a9b"],["img/nav_side_reserve_wht.png","c1c712f5ff2761333270b86ca7c16026"],["img/naver.png","51eb1f423a400ff132d9d6a79d4e7279"],["img/phone.jpg","d2af61c1a22b764de980b09a8afe9ae0"],["img/popcorn.png","f994a576d3c0f7c47d2edf228a4c8505"],["img/preview01.jpg","103540a61023bfca2ae3db57328fd52c"],["img/preview02.jpg","637ca2bb49aa4d7a5e8b90537299438c"],["img/preview03.jpg","4e9d4b58b293f063d7132a2e803e6724"],["img/preview04.png","fbb80fcb8dc10a82394b69331ec23d4c"],["img/preview05.png","a218d736c543ca24e3766236934db015"],["img/preview06.png","969bd97b6334431df443d936c9970f0a"],["img/preview07.png","bd0923ae465276c597e8af6bd859c2d2"],["img/preview08.png","92cf6d03dd3c0d554a82f71b38f53791"],["img/receipt.svg","0bab1d9e04b917193e2a9fbc39daa1ee"],["img/receipt_white.svg","9f7894f07c3395c4797a9d071dca2f81"],["img/reserve01.jpg","0ad1d081ba0929e803727b165eadca8c"],["img/search-heart.svg","66dcea28f034678d70fee4d26a92d82d"],["img/special01.png","2d3f10faaef11ebbad4b5674fbfee384"],["img/special02.png","4e939bca4c8cbca88ec17f18fcc1bc95"],["img/special03.png","e3b78e7db1888c088189e7b806f9e7bf"],["img/special04.png","467bc1ef3143eee6b50bb2c514ef550d"],["img/special05.png","128e8a68d9958b605a6cf12a9644ee48"],["img/special06.PNG","58c2a8c4f9fc8b23b984b93e86f79a94"],["img/special07.png","effd84fb3abbcfd7b453fa05214c4596"],["img/special08.PNG","e5e6d09f7e48b8ebe7eaf79effd7e763"],["img/title01.jpg","81820701d208775e40781ae7da505cd6"],["img/title02.jpg","cbe6912f5428cf47fe6839ef67de2700"],["img/title03.jpg","2d1d60db67cca78ad91f31765266fb23"],["img/title04.jpg","d45888cfd78f56572ca733828a359861"],["img/watch.png","3f98f38063cc34019ac1302eb54ad3b1"],["img/x-lg.svg","6a06956b1db023ca717993b2f012e239"],["img/youtube.svg","06c249b293ebdf961bdc8b89e705baed"],["index.html","d5eb27e215b068249d716ef2e55b749c"],["index_event.html","9808e78535a2a80e9d098339905ce00c"],["index_login.html","b7c50332f747e890812218ce76085168"],["index_popcorn.html","a6930604e886cda14ea719757876d511"],["js/main.js","b5b1729bfc30798ef857d7128a79bf81"],["js/menu.js","a8f94635496ab29eea3b8f28e099b089"],["js/movie.js","c9efa0c67f859bfc043e81636b7800b7"],["js/reserve.js","c9724826fbc3dbb0e6b777b4398c5bb4"],["reser.html","4b9fa2490dcec260ee386ab249d8fc30"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get(/this\\.is\\.a\\.regex/, toolbox.networkFirst, {});




