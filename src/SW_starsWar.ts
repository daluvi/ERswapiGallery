import {REGEX_MATCH_URL} from "./utils/constants";

const CACHE_NAME = "starsWarCache";
const PRE_CACHED_RESOURCES = ["/", "./static/styles.scss", "/offline"];

self.addEventListener("install", (event: ExtendableEvent) => {  
  async function preCacheResources() {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll(PRE_CACHED_RESOURCES);
  }
  event.waitUntil(preCacheResources());
});

self.addEventListener("activate", () => caches.delete(CACHE_NAME));
const fromNetwork = async(request: Request, matchURL: RequestInfo) => await fetch(request).then(async(networkResponse) => {
  const cache = await caches.open(CACHE_NAME);

  cache.put(matchURL, networkResponse.clone());
  return networkResponse;
}).catch(e => {
  console.log('network Error: ', e);
});

self.addEventListener("fetch", (event: FetchEvent) => {
  async function navigateOrDisplayOfflinePage() {
    const cache = await caches.open(CACHE_NAME);
    const matchURL: RequestInfo = event.request.url.match(REGEX_MATCH_URL) as unknown as RequestInfo;
    return await cache.match(matchURL).then(async (matched) => {
      return matched || await fromNetwork(event.request, matchURL) as unknown as Promise<Response>;
    });
  }
  event.respondWith(navigateOrDisplayOfflinePage());
});

