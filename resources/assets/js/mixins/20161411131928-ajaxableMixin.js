window.ajaxableMixin = {
    mixins: [axioMixin],

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
                this.get(this.url, this.params);
            } else {
                this.post(this.url, this.method, this.data);
            }
        }
    }
}