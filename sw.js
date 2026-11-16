// Onstand · Service Worker: startet ohne Netz und holt bei Netz immer die neueste Fassung.
// Nur eigene Dateien werden gespeichert; Anfragen an das Firmenkonto (Supabase) laufen unverändert durch.
const SPEICHER='onstand-app-48';
const DATEIEN=['./onstand.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(SPEICHER).then(c=>c.addAll(DATEIEN)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==SPEICHER).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);
 if(r.method!=='GET'||u.origin!==location.origin)return;
 const seite=r.mode==='navigate'||u.pathname.endsWith('/onstand.html');
 if(seite){// zuerst Netz (frische Fassung), ohne Netz die gespeicherte
  e.respondWith(fetch(r,{cache:'no-store'}).then(a=>{if(a.ok&&!u.search){const k=a.clone();caches.open(SPEICHER).then(c=>c.put('./onstand.html',k))}return a}).catch(()=>caches.match('./onstand.html')));return}
 e.respondWith(caches.match(r).then(g=>g||fetch(r).then(a=>{if(a.ok){const k=a.clone();caches.open(SPEICHER).then(c=>c.put(r,k))}return a})))});
