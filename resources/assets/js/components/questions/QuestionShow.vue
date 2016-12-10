<template id="question-show-template">

<div class="content-container">
    <div class="question-box">
        <question :question="question" :show-question-detail="true"></question>
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
            showMore() {
                this.showMoreClicked = true;
            }
        }
    }
</script>