if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let r={};const t=e=>s(e,n),o={module:{uri:n},exports:r,require:t};a[n]=Promise.all(i.map((e=>o[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/16.png",revision:"bc083a5eedeb872a95d9383528956338"},{url:"/192.png",revision:"706bd4d56107bafa8614bc3e9b925e4d"},{url:"/32.png",revision:"91803e623439eec6862c31ce392a6161"},{url:"/384.png",revision:"cf48f901b4e5a7433232a4efc3657b59"},{url:"/512.png",revision:"2752d8b9b61e66a8aa387667441bda21"},{url:"/_next/static/chunks/468-e127329b45e15a1e.js",revision:"xpvJUrri14l9HJlGWd7e8"},{url:"/_next/static/chunks/476-ac21bdd6f5accf1d.js",revision:"xpvJUrri14l9HJlGWd7e8"},{url:"/_next/static/chunks/53c13509-43cca965728846d5.js",revision:"xpvJUrri14l9HJlGWd7e8"},{url:"/_next/static/chunks/607-3e09e1ff3420c751.js",revision:"xpvJUrri14l9HJlGWd7e8"},{url:"/_next/static/chunks/795d4814-1340feb4414423fb.js",revision:"xpvJUrri14l9HJlGWd7e8"},{url:"/_next/static/chunks/8e1d74a4-67f7e12490f1625b.js",revision:"xpvJUrri14l9HJlGWd7e8"},{url:"/_next/static/chunks/app/_not-found-1d4d2b93b58c23a7.js",revision:"xpvJUrri14l9HJlGWd7e8"},{url:"/_next/static/chunks/app/about/page-bff4bb475d8638a7.js",revision:"xpvJUrri14l9HJlGWd7e8"},{url:"/_next/static/chunks/app/contact/page-9ecde567ac0bcf14.js",revision:"xpvJUrri14l9HJlGWd7e8"},{url:"/_next/static/chunks/app/layout-ae1b157cb7bbf445.js",revision:"xpvJUrri14l9HJlGWd7e8"},{url:"/_next/static/chunks/app/page-3322cc7837ac094a.js",revision:"xpvJUrri14l9HJlGWd7e8"},{url:"/_next/static/chunks/app/projects/mpa/page-dbfccfd0fd9b5c42.js",revision:"xpvJUrri14l9HJlGWd7e8"},{url:"/_next/static/chunks/app/projects/olivia/page-84f585857793959e.js",revision:"xpvJUrri14l9HJlGWd7e8"},{url:"/_next/static/chunks/app/projects/page-6fbaa14d6f154e5b.js",revision:"xpvJUrri14l9HJlGWd7e8"},{url:"/_next/static/chunks/app/projects/russia/page-6b0e737f5d8fa617.js",revision:"xpvJUrri14l9HJlGWd7e8"},{url:"/_next/static/chunks/fd9d1056-05dc8861795ddd9c.js",revision:"xpvJUrri14l9HJlGWd7e8"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"xpvJUrri14l9HJlGWd7e8"},{url:"/_next/static/chunks/main-32d2dc0608c081e9.js",revision:"xpvJUrri14l9HJlGWd7e8"},{url:"/_next/static/chunks/main-app-866ceda141d4d442.js",revision:"xpvJUrri14l9HJlGWd7e8"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"xpvJUrri14l9HJlGWd7e8"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"xpvJUrri14l9HJlGWd7e8"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-877113585959f9d5.js",revision:"xpvJUrri14l9HJlGWd7e8"},{url:"/_next/static/css/25d92dc59a9af799.css",revision:"25d92dc59a9af799"},{url:"/_next/static/css/3b8843a077eec7b5.css",revision:"3b8843a077eec7b5"},{url:"/_next/static/css/5de004c91eb6a0a0.css",revision:"5de004c91eb6a0a0"},{url:"/_next/static/css/668b233856b1dec9.css",revision:"668b233856b1dec9"},{url:"/_next/static/css/7068401deda59236.css",revision:"7068401deda59236"},{url:"/_next/static/css/894e469938c0de4e.css",revision:"894e469938c0de4e"},{url:"/_next/static/css/9c678d85bd8f36ea.css",revision:"9c678d85bd8f36ea"},{url:"/_next/static/css/ed589ee1506ec3ba.css",revision:"ed589ee1506ec3ba"},{url:"/_next/static/media/about-1.df52c2cd.jpg",revision:"73ba979b3d14cd1488a51148f6f945c7"},{url:"/_next/static/media/about-2.207b52c6.jpg",revision:"17a798c4aa1485da732d17524483589e"},{url:"/_next/static/media/bathroom_3.ae92237a.jpg",revision:"dbe1d17bcc8bd3342a4dc222555cdb7a"},{url:"/_next/static/media/bedroom_1.207b52c6.jpg",revision:"17a798c4aa1485da732d17524483589e"},{url:"/_next/static/media/bedroom_2.f4a60c0e.jpg",revision:"72d8066871658c3a3e3d79e4e5f4ac0d"},{url:"/_next/static/media/dark-logo.e124f695.svg",revision:"8a338dee2af104f175ea687e77ee4bb6"},{url:"/_next/static/media/inco.e372d684.ico",revision:"4cfcac471cbea8ca393fedfe22c57560"},{url:"/_next/static/media/light-logo.a19c1227.svg",revision:"1e8ad739c16ec2ea8df21ebdb80d5deb"},{url:"/_next/static/media/mpa_4.df52c2cd.jpg",revision:"73ba979b3d14cd1488a51148f6f945c7"},{url:"/_next/static/media/olivia_plan.e4466598.png",revision:"5a31899a4bf540f1682240eb951b0fe5"},{url:"/_next/static/media/plan.c2d54ee9.png",revision:"efd59259bd781620e0c6e65b78ab9abd"},{url:"/_next/static/xpvJUrri14l9HJlGWd7e8/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/xpvJUrri14l9HJlGWd7e8/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/images/about/about-1.jpg",revision:"73ba979b3d14cd1488a51148f6f945c7"},{url:"/images/about/about-2.jpg",revision:"17a798c4aa1485da732d17524483589e"},{url:"/images/about/about-3.jpg",revision:"0805420afde41dfb1bdc64ef97c40e73"},{url:"/images/dark-logo.svg",revision:"8a338dee2af104f175ea687e77ee4bb6"},{url:"/images/home/home.mp4",revision:"0e6a4bc35eb78ad18190954e5e34d1f7"},{url:"/images/home/home.mp4.json",revision:"970ca047a9d6103a14b651eb7872b2c6"},{url:"/images/light-logo.svg",revision:"1e8ad739c16ec2ea8df21ebdb80d5deb"},{url:"/images/projects/mpa.png",revision:"bb174b7c32048a26ef059abdfda376b0"},{url:"/images/projects/mpa/mpa_1.png",revision:"a23372d19536b7aa3a15b185c980277a"},{url:"/images/projects/mpa/mpa_2.png",revision:"f3df9b45f762798f1d070573fc06d62c"},{url:"/images/projects/mpa/mpa_3.png",revision:"6337773df5c3c94e1037b9ac1e3a1bfa"},{url:"/images/projects/mpa/mpa_4.jpg",revision:"73ba979b3d14cd1488a51148f6f945c7"},{url:"/images/projects/olivia.png",revision:"bfda66a844c6bbe10a8b3f11b50ebaac"},{url:"/images/projects/olivia/olivia_1.png",revision:"7c1af55b1aafb520eedf7e68c34270cb"},{url:"/images/projects/olivia/olivia_2.png",revision:"42409871ff77fa07f18642f71f016ee2"},{url:"/images/projects/olivia/olivia_3.png",revision:"a45be1f8308f0361fa12b2c1416cf144"},{url:"/images/projects/olivia/olivia_4.png",revision:"fa71ed6615b5e15c68cf8101f7cffb41"},{url:"/images/projects/olivia/olivia_5.png",revision:"8e99a8b4371fadc9fe2cea25641b1b42"},{url:"/images/projects/olivia/olivia_6.png",revision:"830bd0311f817940a3397b25c459eab9"},{url:"/images/projects/olivia/olivia_plan.png",revision:"5a31899a4bf540f1682240eb951b0fe5"},{url:"/images/projects/russia.png",revision:"9b6cc5419cfbec68e7055e6132cb6911"},{url:"/images/projects/russia/bathroom_1-2.png",revision:"7cc322ed6ac0e2a2ea2fbbe34b69c64f"},{url:"/images/projects/russia/bathroom_3.jpg",revision:"dbe1d17bcc8bd3342a4dc222555cdb7a"},{url:"/images/projects/russia/bedroom_1.jpg",revision:"17a798c4aa1485da732d17524483589e"},{url:"/images/projects/russia/bedroom_2.jpg",revision:"72d8066871658c3a3e3d79e4e5f4ac0d"},{url:"/images/projects/russia/dressing_1-2.png",revision:"f23c7ff22bd5d141a1f3370cf2099b10"},{url:"/images/projects/russia/kitchen.jpg",revision:"0805420afde41dfb1bdc64ef97c40e73"},{url:"/images/projects/russia/plan.png",revision:"efd59259bd781620e0c6e65b78ab9abd"},{url:"/inco.ico",revision:"4cfcac471cbea8ca393fedfe22c57560"},{url:"/manifest.json",revision:"52a90b1c7d224846d78fa44dc81a29fd"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));