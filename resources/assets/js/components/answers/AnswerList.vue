<template  id="AnswerList-template">
    <div>
        <div  class="answer-box" v-for="answer in answers.data">
            <answer :answer="answer"></answer>
        </div>
    </div>
</template>

<script>
    export default {
        template: "#AnswerList-template",

        data() {
            return {
                answers: {},
            }
        },

        created() {
            this.getData();
        },

        methods: {
            getData() {
                var pathParams = {
                    params: {
                        with: "owner,question",
                        page: 1
                    }
                };

                axios.get('/answers', pathParams)
                    .then(function (response) {
                        this.answers = response.data;
                    }.bind(this))
                    .catch(function (error) {
                        console.log(error);
                    });
            },        
        }
    }
</script>