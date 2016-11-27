<template id="answer-template">

<div class="card card-block">
    <div class="card-content">
        <div class="card-block-header row">
            <!-- Answer's Question -->
            <div class="title row" v-if="showQuestion">
                <h4 class="card-title"><a target="_blank" :href="'/' + answer.question.slug">{{ answer.question.title }}</a></h4>
            </div>

            <div class="user-info row">
                <!-- Avatar -->
                <div class="avatar col-sm-2">
                    <img :src="getUrl('avatar', answer.owner)" alt="" class="img-fluid rounded-circle z-depth-2">
                </div>
                
                <!-- Answerer Bio -->
                <div class="author-bio col-sm-10">
                    <p class=""><strong>{{ answer.owner.name }}</strong>, Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>

        <div class="card-block-body">
            <p class="card-text" v-if="!showMoreClicked">{{ answer.body.substring(0, 195) }}... <a style="color: #0275d8;" @click="showMore">(more)</a></p>
            <p class="card-text" v-else>{{ answer.body }}</p>
        </div>

        <div class="card-block-footer">
            <a class="btn btn-upvote waves-effect waves-light" @click="upvote(answer)">Upvote | <strong> {{ answer.upvote_count }} </strong></a>
            <a class="card-link">Downvote</a>
            <a class="card-link" v-on:click="fetchComments(answer)">Comments | {{ answer.comment_count }}</a>
            <a class="card-link" style="float: right;">...</a>
            <a>{{ ayam }}</a>
        </div>
    </div>
    
    <div v-show="show">
        <div class="comment-form">
            <autosize-textarea :text="commentTextArea"></autosize-textarea>
            <button type="button" class="btn btn-primary" @click="postComment(answer, body)">Submit</button>
        </div>

        <comment-list :comments="comments"></comment-list>
    </div>
</div>


</template>

<script>
    export default {
        template: "#answer-template",

        mixins: [hasCommentsMixin, upvotableMixin, commentableMixin],

        props: {
            answer: {
              type: Object,
              required: true
            },
            showQuestion: {
              type: Boolean,
              default: true
            },
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
            showMore() {
                this.showMoreClicked = true;
            }
        }
    }
</script>