<template id="question-template">

    <div class="card card-block">
        <div class="card-content">
            <div class="card-block-header row">
                <!-- question's Question -->
                <div class="title row">
                    <h4 class="card-title"><a target="_blank" :href="'/' + question.slug">{{ question.title }}</a></h4>
                </div>
            </div>

            <div class="card-block-body" v-if="showQuestionDetail">
                <p class="card-text" v-if="!showMoreClicked">{{ question.body.substring(0, 195) }}... <a style="color: #0275d8;" @click="showMore">(more)</a></p>
                <p class="card-text" v-else>{{ question.body }}</p>
            </div>

            <div class="card-block-footer">
                <a class="btn btn-primary btn-upvote waves-effect waves-light" data-toggle="modal" data-target="#answerCreateModal" @click="answerClicked()"><strong>Answer</strong></a>
                <a class="card-link">Downvote</a>
                <a class="card-link" v-on:click="fetchComments(question)">Comments | {{ question.comment_count }}</a>
                <a class="card-link" style="float: right;">...</a>
            </div>
        </div>
        
        <div v-show="show">
            <comment-form :text="commentTextArea" @postCommentClicked="postComment(question)"></comment-form>
            <comment-list :comments="comments"></comment-list>
        </div>
    </div>

</template>

<script>
    export default {
        template: "#question-template",

        mixins: [hasCommentsMixin, upvotableMixin, commentableMixin, answerableMixin],

        props: ['question', 'showQuestionDetail', 'single'],

        data() {
            return {
                answerText: {
                    body: '',
                    cols: 30,
                    rows: 3,
                },

                answerButtonDataTarget: null,

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
            },

            answerClicked() {
                var vm = this;

                bus.$emit('question.answerButton.click', vm.question, vm.answerText);
            }
        }
    }
</script>