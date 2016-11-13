<template  id="UpvoteButton-template">
    <button @click="sendRequest">
        <slot name="text">
            Upvote
        </slot>
    </button>
</template>

<script>
    export default {
        template: "#UpvoteButton-template",

        mixins: [ajaxableMixin]
    }
</script>
