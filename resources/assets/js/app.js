
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
// answers
Vue.component('answer', require('./components/answers/Answer.vue'));
Vue.component('answer-list', require('./components/answers/AnswerList.vue'));
Vue.component('answer-create-modal', require('./components/answers/Answer-Create-Modal.vue'));

// auctions

// auth

// bids

// comments
Vue.component('comment-form', require('./components/comments/Comment-Form.vue'));
Vue.component('comment', require('./components/comments/Comment.vue'));
Vue.component('comment-list', require('./components/comments/CommentList.vue'));

// commons
Vue.component('autosize-textarea', require('./components/commons/Autosize-Textarea.vue'));
Vue.component('upvote-button', require('./components/commons/buttons/UpvoteButton.vue'));

// layouts
Vue.component('app', require('./components/layouts/App.vue'));
Vue.component('ask-form', require('./components/layouts/navigation/AskForm.vue'));
Vue.component('navbar-desktop', require('./components/layouts/navigation/NavbarDesktop.vue'));
Vue.component('navbar-mobile', require('./components/layouts/navigation/NavbarMobile.vue'));
Vue.component('Navigation', require('./components/layouts/navigation/Navigation.vue'));

// pages
Vue.component('answer-page', require('./components/pages/AnswerPage.vue'));
Vue.component('auction-page', require('./components/pages/AuctionPage.vue'));
Vue.component('welcome-page', require('./components/pages/WelcomePage.vue'));
Vue.component('read-page', require('./components/pages/ReadPage.vue'));
Vue.component('profile-page', require('./components/pages/ProfilePage.vue'));

// questions
Vue.component('question', require('./components/questions/Question.vue'));
Vue.component('question-list', require('./components/questions/Question-List.vue'));
Vue.component('question-show', require('./components/questions/QuestionShow.vue'));




const app = new Vue({
    el: '#app',

    mixins: [authMixin],


    created() {
        console.log(this);
    },

    methods: {
    	isAuthenticated() {
    		if(Vue.cookie.get('secret')) {
    			return true;
    		}
    	}
    }

});
