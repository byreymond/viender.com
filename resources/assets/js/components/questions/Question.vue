<template id="question-template">

<div class="card card-block">
    <div class="card-content">
        <div class="card-block-header row">
            <!-- question's Question -->
            <div class="title row">
                <h4 class="card-title"><a :href="getUrl('self', question)">{{ question.title }}</a></h4>
            </div>
        </div>

        <div class="card-block-body">
            <p class="card-text" v-if="!showMoreClicked">{{ question.body.substring(0, 195) }}... <a style="color: #0275d8;" @click="showMore">(more)</a></p>
            <p class="card-text" v-else>{{ question.body }}</p>
        </div>

        <div class="card-block-footer">
            <a class="btn btn-primary btn-upvote waves-effect waves-light" data-toggle="modal" data-target=".bd-example-modal-lg"><strong>Answer</strong></a>
            <a class="card-link">Downvote</a>
            <a class="card-link" v-on:click="fetchComments(question)">Comments | {{ question.comment_count }}</a>
            <a class="card-link" style="float: right;">...</a>
        </div>
    </div>
    
    <div v-show="show">
        <div class="comment-form">
            <autosize-textarea :text="commentTextArea"></autosize-textarea>
            <button type="button" class="btn btn-primary" @click="postComment(question, body)">Submit</button>
        </div>

        <comment-list :comments="comments"></comment-list>
    </div>
    <answer-create-modal :text="answerTextArea" @postAnswerClicked="postAnswer(question)"></answer-create-modal>
</div>

</template>

<script>
    export default {
        template: "#question-template",

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
            },
        }
    }
</script>