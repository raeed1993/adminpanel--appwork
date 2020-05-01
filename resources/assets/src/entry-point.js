// Polyfills
require('core-js/modules/es6.array.fill')
require('core-js/modules/es6.array.iterator')
require('core-js/modules/es6.array.find')
require('core-js/modules/es6.array.from')
require('core-js/modules/es6.object.assign')
require('core-js/modules/es6.object.keys')
require('core-js/modules/es6.promise')
require('core-js/modules/es6.string.includes')
require('core-js/modules/es6.string.starts-with')
require('core-js/modules/es6.symbol')
require('core-js/modules/es6.set')
require('core-js/modules/es7.array.includes')
require('core-js/modules/es7.object.entries')
require('core-js/modules/es7.promise.finally')
require('core-js/modules/es7.symbol.async-iterator')

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/**
 * Load Vue.js app
 */

require('./main.js');
