window.upvotableMixin = {
    mixins: [hasLinksMixin],

    methods: {
        upvote(obj) {
            var upvoteUrl = this.getUrl('self', obj) + "/upvotes";

            axios.post(upvoteUrl, {})
            .then(function (response) {
                if(response.status == 201) {
                    obj.upvote_count += 1;
                }
                if(response.status == 204) {
                    obj.upvote_count -= 1;
                }
            })
            .catch(function (error) {
            });
        }
    }
}