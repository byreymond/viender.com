<template id="Comment-template">

<div class="card card-block">
    <div class="card-block-header row">
        <div class="user-info row">
            <!-- Avatar -->
            <div class="avatar col-sm-2">
                <img src="/img/profile.jpg" alt="" class="img-fluid rounded-circle z-depth-2">
            </div>
            
            <!-- Co Bio -->
            <div class="author-bio col-sm-10">
                <p class="card-text"><strong>{{ comment.owner.name }}</strong></p>
            </div>
        </div>
    </div>

    <div class="card-block-body">
        <p class="card-text">{{ comment.body }}</p>
    </div>

    <div class="card-block-footer">
        <a class="card-link">Upvote | {{ comment.upvote_count }}</a>
        <a class="card-link">Downvote</a>
        <a class="card-link" v-on:click="fetchComments(comment)">Comments | {{ comment.comment_count }}</a>
        <a class="card-link" style="float: right;">...</a>
    </div>

    <comment-list :comments="comments"></comment-list>

</div>


</template>

<script>
    export default {
        template: "#Comment-template",

        mixins: [hasCommentsMixin],

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