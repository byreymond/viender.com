window.answerableMixin = {
    mixins: [hasLinksMixin],

    methods: {
        postAnswer(obj, text) {
            vm = this;

            console.log(obj);
            console.log(text);

            if(text.body === '') {
                return;
            }

            var commentsUrl = vm.getUrl('answers', obj) + "?with=owner";

            axios.post(commentsUrl, {
                body: text.body
            })
            .then(function (response) {
                if(response.status == 200) {
                    text.body = '';
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