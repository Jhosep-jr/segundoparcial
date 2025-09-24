import { precaching } from 'workbox-precaching';

precaching.precacheAndRoute([
    { url: '/', revision: '1' }, // HTML
    { url: '/styles.css', revision: '1' }, // CSS
    { url: '/script.js', revision: '1' }, // JS
    { url: '/image.png', revision: '1' } // Imágenes clave
]);