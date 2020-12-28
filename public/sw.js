//Minimal Precaching & Runtime Caching ServiceWorker

//https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
//https://developers.google.com/web/ilt/pwa/lab-caching-files-with-service-worker
//https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/respondWith
//https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent/waitUntil

const filesToCache = [
          'robots.txt',
          '/style.css',
          '/script.js',
          '/manifest.json',
          '/icon_512.png',
          '/maskable_ion.png',
          '/index.html',
          '/offline.html',
          '/404.html',
          '/router.js',
          '/route-config.js',
          '/gallery.html',
          '/search.html',
          '/materialize.min.js',
          '/dataService.js',
          '/favicon.ico',
          '/gallery.js',
          '/search.js'
        ];

const staticCacheName = 'store-cache-v85';

importScripts('./route-config.js');

//Setting up precaching
self.addEventListener('install', async event => {
  // console.log('Attempting to install service worker and cache static assets');
  
  self.skipWaiting();

  //create preCache
  const precache = async()=>{
    const cache = await caches.open(staticCacheName);
    return cache.addAll(filesToCache);
  }
  
  //do not finish install until precaching is complete
  event.waitUntil(precache());
});


self.addEventListener('activate', event => {

  const clearCaches = async ()=>{
    const keys = await caches.keys();
    const oldKeys = keys.filter(key => key !== staticCacheName);
    const promises = oldKeys.map(key=>caches.delete(key));
    return Promise.all(promises);
  }

  event.waitUntil(clearCaches());

});

//returns a cached response or undefined
async function checkCache(request){
  return caches.match(request);
}

//stores a response in cache
async function cacheResponse(url, response){
  const cache = await caches.open(staticCacheName);
  cache.put(url, response);
}

function getPathName(url){
  const res = url.split('/');
  const [first, second, third, ...path] = res;
  return `/${path}`;
}

//makes a fetch request but checks the cache first
async function cacheFirstRequest(request){

  try{
      //requesting a page that is cached or app is online
    const cachedResponse = await checkCache(request);
    // const pathname = getPathName(request.url);
    // const routes = routeConfig.routes.map(route=>route.url);
    // console.log(routes, pathname, routes.includes(pathname));
    
    if(cachedResponse){
      // console.log('Returning cached response');
      return cachedResponse;
    }else{
      const newResponse = await fetch(request);      
      if(newResponse.status === 404){
        // console.log('Returning index')
        return caches.match(`index.html`);
      }else{
        const clone = await newResponse.clone();
        cacheResponse(request.url, clone);
        // console.log('Returning new response');
        return newResponse;
      }
    }

  }catch(e){
    console.error(e);
    //requesting a page offline and is not cached
    return caches.match('/offline.html');
  }

}

//Setting up runtime caching, resources not precached would be cached when requested
self.addEventListener('fetch', event => {
  // console.log('Fetch event for ', event.request.url);
  // Prevent the default, and handle the request ourselves.
  //console.log(event.request.url);
  event.respondWith(cacheFirstRequest(event.request));
});
