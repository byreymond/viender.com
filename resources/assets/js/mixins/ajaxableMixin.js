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
                this.sendGetRequest();
            } else {
                this.sendPostRequest();
            }
        },

        sendGetRequest() {
            axios.get(this.url, {
                    params: this.params
                })
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        sendPostRequest() {
            // this.data['_method'] = this.method;

            axios.post(this.url, this.data)
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    }
}