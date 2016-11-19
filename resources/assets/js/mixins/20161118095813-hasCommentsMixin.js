window.hasCommentsMixin = {
    mixins: [hasLinksMixin],

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
            // Set vm to this so we do need to bind the 'this' instance on every anonymous functions
            var vm = this;

            // Toggle comments box view every time user clicked the comments button
            vm.toggleCommentsDisplay();
            
            // Return if no more comments need to fetch from server
            if(commentable.comment_count == vm.comments.data.length) {
                return;
            }

            // Fetch comments from server and append the received comments into vm comments collection
            axios.get(vm.getUrl('comments', commentable), vm.commentsPathParams)
                .then(function (response) {
                    response.data.data.forEach(function(comment) {
                        vm.comments.data.push(comment);
                    });

                    vm.commentsPathParams.params.page += 1;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        toggleCommentsDisplay() {
            this.show = !this.show;
        }
    }
}