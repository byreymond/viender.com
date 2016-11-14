window.axioMixin = {
    methods: {
        get(url, pathParams={}) {
            var data = {};

            axios.get(url, {
                    params: pathParams
                })
                .then(function (response) {
                    data['data'] = JSON.stringify(response.data);
                    this.$emit('requestSuccess', data);
                }.bind([this, data]))
                .catch(function (error) {
                    console.log(error);
                });

            console.log(data);
        },

        post(url, methodOverride = "post", data = {}) {
            this.data['_method'] = methodOverride;

            axios.post(url, data)
                .then(function (response) {
                    this.$emit('requestSuccess', response.data);
                }.bind(this))
                .catch(function (error) {
                    console.log(error);
                });
        },
    }
}