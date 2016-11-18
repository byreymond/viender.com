window.hasCommentsMixin = {
    data() {
        return {
            comments: {
                data: []
            },
            
            show: false
        }
    },

    methods: {
        fetchComments(commentable) {
            var vm = this;

            var commentsUrl = commentable.links.filter(function( url ) {
                return url.rel == 'comments';
            })[0].url;

            console.log(commentsUrl);

            axios.get(commentsUrl, vm.commentsPathParams)
                .then(function (response) {
                    response.data.data.forEach(function(comment) {
                        vm.comments.data.push(comment);
                    });

                    vm.show = !vm.show;

                    vm.commentsPathParams.params.page += 1;
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
    }
}