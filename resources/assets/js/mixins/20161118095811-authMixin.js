window.authMixin = {

    data() {
        return {
            auth: {
                user: {},
                isAuthenticated: false
            }
        }
    },

    created() {
        if(Vue.cookie.get('viender_access_token')) {
            this.auth.isAuthenticated = true;
        }
    }
}