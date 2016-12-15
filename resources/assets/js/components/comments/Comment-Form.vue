<template id="Comment-Form-template">
    <div class="comment-form">
        <img :src="getMeAvatar()" alt="profile" class="img-fluid rounded-circle z-depth-2">
        <autosize-textarea placeholder="Add your comment..." class="md-textarea" :text="text"></autosize-textarea>
        <button type="button" class="btn btn-primary" @click="emitPost()">Post</button>
    </div>
</template>

<script>
    export default {
        template: "#Comment-Form-template",

        props: ['text'],

        methods: {
            emitPost() {
                this.$emit('postCommentClicked');
            },

            getMeAvatar() {
                return me.avatar_url;
            }
        }
    }
</script>