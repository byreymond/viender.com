<template  id="AnswerList-template">
    <div class="content-container">
        <div  class="answer-box" v-for="answer in answers.data">
            <answer :answer="answer"></answer>
        </div>
        <button type="button" class="btn btn-outline-primary waves-effect" style="width: 90%; margin: auto; display: block;" @click="fetchAnswers()">Load More Answers</button>
    </div>
</template>

<script>
    export default {
        template: "#AnswerList-template",

        data() {
            return {
                answers: {
                    data: []
                },

                answersPathParams: {
                    params: {
                        with: "owner,question",
                        page: 1
                    }
                }
            }
        },

        created() {
            this.fetchAnswers();
        },

        methods: {
            fetchAnswers() {
                var vm = this;

                axios.get('/answers', vm.answersPathParams)
                    .then(function (response) {
                        response.data.data.forEach(function(answer) {
                            vm.answers.data.push(answer);
                        });

                        vm.answersPathParams.params.page += 1;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },        
        }
    }
</script>