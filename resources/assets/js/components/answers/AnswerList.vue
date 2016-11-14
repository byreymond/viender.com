<template  id="AnswerList-template">
    <div>
        <upvote-button url="/users" @requestSent="dump(response)"></upvote-button>
    </div>
</template>

<script>
    export default {
        template: "#AnswerList-template",

        mixins: [ajaxableMixin],

        methods: {
            dump(response) {
                console.log(response)
            }
        }
    }
</script>