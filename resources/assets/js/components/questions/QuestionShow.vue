<template id="question-show-template">

<div class="content-container">
    <div class="question-box">
        <answer-create-modal id="answerCreateModal" ref="answer-form"></answer-create-modal>
        <question :question="question" :show-question-detail="true" :single="true"></question>
        <h5 style="padding-top: 30px;">Answers: </h5>
    </div>
    <answer-list :url="getUrl('answers', question)" :show-question="false"></answer-list>
</div>

</template>

<script>
    export default {
        template: "#question-show-template",

        mixins: [hasCommentsMixin, upvotableMixin, commentableMixin, answerableMixin],

        props: ['question'],

        mounted() {
            this.callbacks();
        },

        data() {
            return {
                showMoreClicked: false,

                commentsPathParams: {
                    params: {
                        with: "owner",
                        page: 1
                    }
                },
            }
        },

        methods: {
            callbacks() {
                var vm = this;

                bus.$on('answerCreateModal.post.click', function(question, text) {
                    console.log(question);
                    vm.postAnswer(question, text)
                })
            },

            showMore() {
                this.showMoreClicked = true;
            }
        }
    }
</script>