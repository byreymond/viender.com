class Auth {
    constructor() {
        this.user = {};
        this.isLoading = false;
        this.isAuthenticated = false;
        this.authenticate();
    }

    get user() {
        if( ! this.isLoading) {
            this.authenticate();
        }

        return this._user;
    }

    url(rel) {
        return this.user().links.filter(function( url ) {
            return url.rel == rel;
        })[0].url;
    }

    authenticate() {
        var pathParams = {
            params: {
                with: "owner,question",
            }
        };

        this.isLoading = true;

        axios.get(api('users/authenticate'), pathParams)
            .then(function (response) {
                if(response.status == 200) {
                    this._user = response.data;
                    this.isAuthenticated = true;
                } else if(response.status == 401) {
                    _user = undefined;
                    bus.$emit('unauthenticated');
                    this.isAuthenticated = false;
                }
                this.isLoading = false;
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    }
}

module.exports = Auth;