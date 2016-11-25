window.commentableMixin = {
    mixins: [hasLinksMixin],

    data() {
        return {
            commentTextArea: {
                body: '',
                cols: 30,
                rows: 1,
            }
        }
    },

    methods: {
        postComment(obj) {
            vm = this;

            if(vm.commentTextArea.body === '') {
                return;
            }

            var commentsUrl = vm.getUrl('self', obj) + "/comments?with=owner";

            axios.post(commentsUrl, {
                body: vm.commentTextArea.body
            })
            .then(function (response) {
                vm.commentTextArea.body = '';
                vm.comments.data.push(response.data);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}