<template  id="UpvoteButton-template">
    <button type="button" class="btn btn-outline-primary waves-effect">
        <slot name="text">
            Upvote
        </slot>
    </button>
</template>

<script>
    export default {
        template: "#UpvoteButton-template",
    }
</script>
