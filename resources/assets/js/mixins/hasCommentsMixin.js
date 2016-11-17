window.hasCommentsMixin = {
    data() {
        return {
            comments: {}
        }
    },

    methods: {
        fetchComments(commentable) {
            var commentsUrl = commentable.links.filter(function( url ) {
                return url.rel == 'comments';
            })[0].url;

            console.log(commentsUrl);

            axios.get(commentsUrl, this.commentsPathParams)
                .then(function (response) {
                    this.comments = response.data;
                    this.commentsPathParams.params.page += 1;
                }.bind(this))
                .catch(function (error) {
                    console.log(error);
                });

        }
    }
}