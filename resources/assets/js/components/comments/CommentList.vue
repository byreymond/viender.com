<template  id="CommentList-template">
    <div class="comment-container">
        <div  class="comment-box" v-for="comment in comments.data">
            <comment :comment="comment"></comment>
        </div>
    </div>
</template>

<script>
    export default {
        template: "#CommentList-template",

        props: ['comments'],

        methods: {
            
        }
    }
</script>