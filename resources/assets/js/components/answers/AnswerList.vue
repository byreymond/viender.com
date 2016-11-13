<template  id="AnswerList-template">
    <div>
        <upvote-button url="/users" method="PUT" @requestSent="dump(response)"></upvote-button>
    </div>
</template>

<script>
    export default {
        template: "#AnswerList-template",

        methods: {
            dump(response) {
                console.log(response)
            }
        }
    }
</script>