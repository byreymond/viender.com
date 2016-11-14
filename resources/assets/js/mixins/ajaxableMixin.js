window.ajaxableMixin = {
    props: {
        url: {
            type: String,
            required: true
        },

        method: {
            type: String,
            default: function () {
                return "GET"
            }
        },

        params: {
            type: Object,
            default: function () {
                return {}
            }
        },

        data: {
            type: Object,
            default: function () {
                return {}
            }
        }
    },

    methods: {
        sendRequest() {
            if(this.method == "GET") {
                this.sendGetRequest(this.url, this.params);
            } else {
                this.sendPostRequest(this.url, this.data);
            }
        },

        sendGetRequest(url, pathParams = {}) {
            axios.get(url, {
                    params: pathParams
                })
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        sendPostRequest(url, data = {}) {
            // this.data['_method'] = this.method;

            axios.post(url, data)
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    }
}