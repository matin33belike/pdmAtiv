const CACHE_NAME = "minha-pwa-v1";


const ARQUIVOS = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "./icons/launchericon-192x192.png",
    "./icons/launchericon-512x512.png"
];

self.addEventListener("install", event => {
    console.log("Instalando Service Worker...");

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log("Armazenando arquivos...");
                return cache.addAll(ARQUIVOS);
            })
    );
});

self.addEventListener("activate", event => {
    console.log("Service Worker ativado");
});

self.addEventListener("fetch", event => {
    if (event.request.url.endsWith("/teste-sw")) {
        event.respondWith(new Response("Resposta criada pelo Service Worker!"));
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(resposta => {
                if (resposta) {
                    console.log("Cache:", event.request.url);
                    return resposta;
                }

                console.log("Rede:", event.request.url);
                return fetch(event.request);
            })
    );
});