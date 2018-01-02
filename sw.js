"use strict";
(function() {
    var cacheVersion = "201801021457";
    var staticImageCacheName = "image" + cacheVersion;
    var staticAssetsCacheName = "assets" + cacheVersion;
    var contentCacheName = "content" + cacheVersion;
    var vendorCacheName = "vendor" + cacheVersion;
    var maxEntries = 100;
    self.importScripts("https://cdnjs.cat.net/ajax/libs/sw-toolbox/3.6.1/sw-toolbox.js");
    self.toolbox.options.debug = false;
    self.toolbox.options.networkTimeoutSeconds = 5;
    self.toolbox.precache([
        '/offline.html',
        '/offline.svg',
        '/Lucca-Regular.otf'
    ]);
    self.toolbox.router.get("/myfiles/music/(.*)", self.toolbox.networkOnly, {
        origin: /skyedge\.b0\.upaiyun\.com/,
    });
    self.toolbox.router.get("/myfiles/userjs/(.*)", self.toolbox.networkOnly, {
        origin: /skyedge\.b0\.upaiyun\.com/,
    });
    self.toolbox.router.get("/myfiles/javascriptbookmark/(.*)", self.toolbox.networkOnly, {
        origin: /skyedge\.b0\.upaiyun\.com/,
    });
    self.toolbox.router.get("/myfiles/js/(.*)", self.toolbox.networkOnly, {
        origin: /skyedge\.b0\.upaiyun\.com/,
    });
    self.toolbox.router.get("/", self.toolbox.networkFirst, {});
    self.toolbox.router.get("/451.php", self.toolbox.networkOnly, {});
    self.toolbox.router.get("/events.js", self.toolbox.networkOnly, {});
    self.toolbox.router.get("/myfiles/attachment/(.*)", self.toolbox.networkFirst, {
        origin: /skyedge\.b0\.upaiyun\.com/,
        cache: {
            name: staticAssetsCacheName,
            maxEntries: maxEntries,
            offlineFallbackimage: '/offline.svg'
        }
    });
    self.toolbox.router.get("/myfiles/css/(.*)", self.toolbox.networkFirst, {
        origin: /skyedge\.b0\.upaiyun\.com/,
        cache: {
            name: staticAssetsCacheName,
            maxEntries: maxEntries,
            offlineFallbackimage: '/offline.svg'
        }
    });
    self.toolbox.router.get("/myfiles/images/(.*)", self.toolbox.networkFirst, {
        origin: /skyedge\.b0\.upaiyun\.com/,
        cache: {
            name: staticAssetsCacheName,
            maxEntries: maxEntries,
            offlineFallbackimage: '/offline.svg'
        }
    });
    self.toolbox.router.get("/myfiles/links/(.*)", self.toolbox.networkFirst, {
        origin: /skyedge\.b0\.upaiyun\.com/,
        cache: {
            name: staticAssetsCacheName,
            maxEntries: maxEntries,
            offlineFallbackimage: '/offline.svg'
        }
    });
    self.toolbox.router.get("/myfiles/thumbnail/(.*)", self.toolbox.networkFirst, {
        origin: /skyedge\.b0\.upaiyun\.com/,
        cache: {
            name: staticAssetsCacheName,
            maxEntries: maxEntries,
            offlineFallbackimage: '/offline.svg'
        }
    });
    self.toolbox.router.get("/Git/Deploy/(.*)", self.toolbox.networkOnly, {
    });
    self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
        origin: /cdnjs\.cat\.net/,
        cache: {
            name: staticAssetsCacheName,
            maxEntries: maxEntries,
            offlineFallbackimage: '/offline.svg'
        }
    });
    self.toolbox.router.get("/archives/(.*).html(.*)", self.toolbox.networkFirst, {
        cache: {
            name: contentCacheName,
            maxEntries: maxEntries,
            offlineFallbackimage: '/offline.svg'
        }
    });
    self.toolbox.router.get("/(tags|about|gallery|archives|links|timeline)(.*)", self.toolbox.networkFirst, {
        cache: {
            name: contentCacheName,
            maxEntries: maxEntries,
            offlineFallbackimage: '/offline.svg'
        }
    });
    self.toolbox.router.get("/$", self.toolbox.networkFirst, {
        cache: {
            name: contentCacheName,
            maxEntries: maxEntries,
            offlineFallbackimage: '/offline.svg'
        }
    });
    self.toolbox.router.get("/\?(.*)$", self.toolbox.networkFirst, {
        cache: {
            name: contentCacheName,
            maxEntries: maxEntries,
            offlineFallbackimage: '/offline.svg'
        }
    });
    self.toolbox.router.get("/", self.toolbox.networkFirst, {
        cache: {
            name: contentCacheName,
            maxEntries: maxEntries,
            offlineFallbackimage: '/offline.svg'
        }
    });
    self.toolbox.router.get("/css/(.*)", self.toolbox.networkFirst, {
        origin: /skyedge\.b0\.upaiyun\.com/
    });
    self.toolbox.router.get("/js/(.*)", self.toolbox.networkFirst, {
        origin: /skyedge\.b0\.upaiyun\.com/
    });
    self.toolbox.router.get("/next/config.json", self.toolbox.networkOnly, {
        origin: /disqus\.com/
    });
    self.toolbox.router.get("/api/(.*)", self.toolbox.networkOnly, {
        origin: /disqus\.com/
    });
    self.toolbox.router.get("/(.*)", self.toolbox.networkOnly, {
        origin: /skyedge\.disquscdn\.com/,
        cache: {
            name: vendorCacheName,
            maxEntries: maxEntries
        }
    });
    self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
        origin: /a\.disquscdn\.com/,
        cache: {
            name: vendorCacheName,
            maxEntries: maxEntries
        }
    });
    self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
        origin: /c\.disquscdn\.com/,
        cache: {
            name: vendorCacheName,
            maxEntries: maxEntries
        }
    });
    self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
        origin: /uploads\.disquscdn\.com/,
        cache: {
            name: vendorCacheName,
            maxEntries: maxEntries
        }
    });
    self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
        origin: /media\.disquscdn\.com/,
        cache: {
            name: vendorCacheName,
            maxEntries: maxEntries
        }
    });
    self.toolbox.router.get("/(.*)", self.toolbox.cacheFirst, {
        origin: /referrer\.disqus\.com/,
        cache: {
            name: vendorCacheName,
            maxEntries: maxEntries
        }
    });
    self.toolbox.router.get("/(.*)", self.toolbox.networkOnly, {
        origin: /(www\.google-analytics\.com|ssl\.google-analytics\.com)/,
        cache: {
            name: vendorCacheName,
            maxEntries: maxEntries
        }
    });
    self.toolbox.router.get('/(.*)', function(req, vals, opts) {
      return toolbox.networkFirst(req, vals, opts)
        .catch(function(error) {
          if (req.method === 'GET' && req.headers.get('accept').includes('text/html')) {
            return toolbox.cacheOnly(new Request('/offline.html'), vals, opts);
          }
          throw error;
        });
    });
    self.toolbox.router.get("/(.*).php(.*)", self.toolbox.networkOnly);
    self.toolbox.router.get("/sw.js", self.toolbox.networkFirst), self.toolbox.router.get("/(.*).php(.*)", self.toolbox.networkOnly), self.addEventListener("install", function(event) {
        return event.waitUntil(self.skipWaiting())
    });
    self.addEventListener("activate", function(event) {
        return event.waitUntil(self.clients.claim())
    })
})();