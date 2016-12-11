window.upvotableMixin = {
    mixins: [hasLinksMixin],

    data() {
        return {
            _requesting: false,
        }
    },

    methods: {
        upvote(obj) {
            var vm = this;

            if(vm._requesting === true) {
                return;
            }

            var upvoteUrl = vm.getUrl('self', obj) + "/upvotes";

            vm._requesting = true;

            axios.post(upvoteUrl, {})
            .then(function (response) {
                if(response.status == 201) {
                    obj.upvote_count += 1;
                }
                if(response.status == 204) {
                    obj.upvote_count -= 1;
                }
                vm._requesting = false;
            })
            .catch(function (error) {
                vm._requesting = false;
            });
        }
    }
}