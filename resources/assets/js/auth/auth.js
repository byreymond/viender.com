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
        if(Vue.cookie.get('secret')) {
            return true;
        }

        return false;
    }

    url(rel) {
        return this.user().links.filter(function( url ) {
            return url.rel == rel;
        })[0].url;
    }

    logout() {
        Vue.cookie.delete('secret', {domain: config.app.domain});
        window.location = url('/welcome');
    }
}

module.exports = Auth;