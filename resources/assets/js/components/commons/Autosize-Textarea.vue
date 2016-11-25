<template  id="UpvoteButton-template">
    <textarea placeholder="Add a comment..." :cols="text.cols" :rows="text.rows" v-model="text.body"></textarea>
</template>

<script>
    export default {
        template: "#UpvoteButton-template",

        props: ['text'],

        mounted() {
            autosize(this.$el);
        }
    }
</script>
