
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
 * App
 */
window.axios = require('axios');
window.axios.defaults.baseURL = 'http://api.viender.com/v1';
// window.axios.defaults.headers.post['Authorization'] = 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFhYmM2NmIyYTc5Y2ZlYzBhZGQ2ZDc2MTdlZTNhOTA0ZDllZDU3ZTBkNzI0NWUzYzk1NmMzMDVhYWQxZjMzYTI5OWI1MzkyOWIwNTk4ZmNjIn0.eyJhdWQiOiIxIiwianRpIjoiYWFiYzY2YjJhNzljZmVjMGFkZDZkNzYxN2VlM2E5MDRkOWVkNTdlMGQ3MjQ1ZTNjOTU2YzMwNWFhZDFmMzNhMjk5YjUzOTI5YjA1OThmY2MiLCJpYXQiOjE0Nzk0Mzg5ODMsIm5iZiI6MTQ3OTQzODk4MywiZXhwIjo0NjM1MTEyNTgzLCJzdWIiOiI1MSIsInNjb3BlcyI6W119.bG1GndOoWVAr2clgkUbZJQj3JNSJiiUJkJiQHlh4Un0Wvla3PYoI1az2HSMa_yFy5f0R_9KRYz4lLOockvtDrxXjgNqCbGh9tS8Dt2AS5Ei8dqnv3o2Ybx5gO-nB5RQaGXzC7CjH43RDyF1b924Z2hRjdoYuMc9o8gkfoif76wXe22eJ4YRXDQxPbeu-AQG9fDwDPC03DfmsN392cLSVruM8oh6h0-jNJ1XNAQPwRfGE_wFfQDl6-MN4AbQAttz7rTule8u7_EEY5yVhVbPwAmaO-bLSvRtoZ_wPrfMkfw1fpjUpGOa9ucbG8icmjuApVqz1XWsmeilOgoY7XuPuHlI5oDAy0EGKl4umacg5jaQ9d21DFF7R_2wzGAhbg2GTiOaFDfWSmv7UcGklC74WpqeATfgyrdjPc1zhACPNjM7N71cJXaUzFT2O7Y21qrgcnjBLIrQh7PICNp7v7xQSxhld4JRfA5dCBWcZnjX_M9wCzm4M14QXXiAiEE2si2YmRy_Z9RK9N6gB1e-NX7iyo05nUJxBPqf7UuiUFwUACbpJDYdpKeuSmjgWqRkyQ0SvTpYkhkkhpE_rm1qHY17cTSsy-i-y1pCJtltCtE8jSOMLkKGBrFIt5sP5KCZAfJP546JDwPpp-44Ys0QVE4PUB7VWRGBIfmhw2htwnqTOisw';
window.axios.defaults.headers.post['Content-Type'] = 'application/json';

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./mixins', true, /\.js$/));

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = require('vue');
require('vue-resource');

/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */

Vue.http.interceptors.push((request, next) => {
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
