window.answerableMixin = {
    mixins: [hasLinksMixin],

    data() {
        return {
            answerTextArea: {
                body: '',
                cols: 30,
                rows: 1,
            }
        }
    },

    methods: {
        postAnswer(obj) {
            vm = this;

            if(vm.answerTextArea.body === '') {
                return;
            }

            var commentsUrl = vm.getUrl('answers', obj) + "?with=owner";

            axios.post(commentsUrl, {
                body: vm.answerTextArea.body
            })
            .then(function (response) {
                if(response.status == 200) {
                    vm.answerTextArea.body = '';
                    bus.$emit('answerPostSuccess', response.data);
                }
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}