<template id="Comment-template">

<div class="card card-block">
    <div class="card-block-header row">
        <div class="user-info row">
            <!-- Avatar -->
            <div class="avatar col-sm-2">
                <img :src="getUrl('avatar', comment.owner)" alt="" class="img-fluid rounded-circle z-depth-2">
            </div>
            
            <!-- Co Bio -->
            <div class="author-bio col-sm-10">
                <p class=""><strong>{{ comment.owner.name }}</strong></p>
            </div>
        </div>
    </div>

    <div class="card-block-body">
        <p class="card-text">{{ comment.body }}</p>
    </div>

    <div class="card-block-footer">
        <a class="card-link" @click="upvote(comment)">Upvote | {{ comment.upvote_count }}</a>
        <a class="card-link">Downvote</a>
        <a class="card-link comment" v-on:click="fetchComments(comment)">Comments | {{ comment.comment_count }}</a>
        <a class="card-link" style="float: right;">...</a>
    </div>

    <div v-show="show">
        <div class="comment-form">
            <autosize-textarea :text="commentTextArea"></autosize-textarea>
            <button type="button" class="btn btn-primary" @click="postComment(comment, body)">Submit</button>
        </div>
        <comment-list :comments="comments"></comment-list>
    </div>
</div>


</template>

<script>
    export default {
        template: "#Comment-template",

        mixins: [hasCommentsMixin, upvotableMixin, commentableMixin],

        props: ['comment'],

        data() {
            return {
                comments: {},
                
                commentsPathParams: {
                    params: {
                        with: "owner",
                        page: 1
                    }
                }
            }
        }
    }
</script>