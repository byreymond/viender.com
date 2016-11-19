window.upvotableMixin = {
    mixins: [hasLinksMixin],

    methods: {
        upvote(obj) {
            var upvoteUrl = this.getUrl('self', this.answer) + "/upvotes";

            axios.post(upvoteUrl, {
                user_id: 1,
            })
            .then(function (response) {
                if(response.status == 200) {
                    obj.upvote_count += 1;
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}