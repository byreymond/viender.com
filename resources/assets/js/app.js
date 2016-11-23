
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.component('app', require('./components/layouts/App.vue'));
Vue.component('navbar-desktop', require('./components/layouts/navigation/NavbarDesktop.vue'));
Vue.component('navbar-mobile', require('./components/layouts/navigation/NavbarMobile.vue'));
Vue.component('Navigation', require('./components/layouts/navigation/Navigation.vue'));

Vue.component('viender-read', require('./components/VienderRead.vue'));
Vue.component('upvote-button', require('./components/commons/buttons/UpvoteButton.vue'));
Vue.component('answer', require('./components/answers/Answer.vue'));
Vue.component('answer-list', require('./components/answers/AnswerList.vue'));
Vue.component('comment', require('./components/comments/Comment.vue'));
Vue.component('comment-list', require('./components/comments/CommentList.vue'));

Vue.component('answer-page', require('./components/pages/AnswerPage.vue'));
Vue.component('auction-page', require('./components/pages/AuctionPage.vue'));
Vue.component('welcome-page', require('./components/pages/WelcomePage.vue'));
Vue.component('read-page', require('./components/pages/ReadPage.vue'));

const app = new Vue({
    el: '#app',

    mixins: [authMixin],

});
