// app.js - basic PWA setup and service worker registration

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./service-worker.js')
      .then((reg) => console.log('Service Worker registered ✅', reg.scope))
      .catch((err) => console.error('Service Worker failed ⛔', err));
  }
});