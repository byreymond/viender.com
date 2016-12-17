var unAuthorizedHandlerMixin = {
    mixins: [hasLinksMixin],

    methods: {
        handleUnAuthorized(callback) {
            var vm = this;

            var refreshTokenUrl = url('oauth/token/refresh');

            axios.get(refreshTokenUrl, {
                    params: {}
                })
                .then(function (response) {
                    callback();
                })
                .catch(function (error) {
                    console.log(error);
                    document.location = url('/');
                });
        }
    }
};

export default unAuthorizedHandlerMixin;