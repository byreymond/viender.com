class Auth {
    constructor() {
        if(me !== null) {
            me.logout = this.logout;
        }
    }

    user() {
        return me;
    }

    hasAccessToken() {

    }

    url(rel) {
        return this.user().links.filter(function( url ) {
            return url.rel == rel;
        })[0].url;
    }

    logout() {
        Vue.cookie.delete('pt', {domain: config.app.domain});
        window.location = url('/welcome');
    }
}

module.exports = Auth;