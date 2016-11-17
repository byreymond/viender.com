<template  id="CommentList-template">
    <div>
        <div  class="answer-box" v-for="comment in comments.data">
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