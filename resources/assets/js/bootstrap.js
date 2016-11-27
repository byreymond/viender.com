
window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = require('mdbootstrap/js/jquery-3.1.1.js');
window.Tether = require('mdbootstrap/js/tether.js');
require('mdbootstrap/js/bootstrap.js');

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = require('vue');
require('vue-resource');
window.bus = new Vue();

/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */

Vue.http.interceptors.push((request, next) => {
    console.log(Laravel);
    request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);

    next();
});


/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from "laravel-echo"

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });


/**
 * Packages
 */
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./mixins', true, /\.js$/));

window.VueCookie = require('vue-cookie');
// Tell Vue to use the plugin 
Vue.use(VueCookie);

window.axios = require('axios');
axios.defaults.baseURL = 'https://api.viender.dev/v1';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
if(accessToken = Vue.cookie.get('viender_access_token')) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
}

window.autosize = require('autosize');