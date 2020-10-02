---
layout: null
sitemap: false
serviceworker: true
---

{% if site.serviceworker and jekyll.environment == 'production' %}
// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    // ServiceWorker registration successful
  }).catch(function(err) {
    // ServiceWorker registration failed
    console.log('ServiceWorker registration failed:', err);
  });
}
{% endif %}
