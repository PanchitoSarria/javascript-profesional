const VERSION = 'v1'

self.addEventListener('install', event => {
    event.waitUntil(precache())
})
self.addEventListener('fetch', event => {
    const request = event.request

    if(request.method !== 'GET'){
        return
    }

    event.respondWith(cacheResponse(request))
    
})

async function precache(){
    const cache = await caches.open(VERSION)
    return cache.addAll([
        '/',
        '/sw.js',
        '/index.html',
        '/assets/BigBuckBunny.mp4',
        '/assets/index.css',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/plugins/Mute.js'
    ])
}

async function cacheResponse(request){
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)
    return response || fetch(request)
}