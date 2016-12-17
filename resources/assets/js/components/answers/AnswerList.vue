<template  id="AnswerList-template">
    <div class="content-container">
        <div  class="answer-box" v-for="answer in answers.data">
            <answer :answer="answer" :show-question="showQuestion"></answer>
        </div>
        <button type="button" class="btn btn-outline-primary waves-effect" style="width: 90%; margin: auto; display: block;" @click="fetchAnswers()">Load More Answers</button>
    </div>
</template>

<script>
    export default {
        template: "#AnswerList-template",

        props: {
            url: {
              type: String,
              required: true
            },
            showQuestion: {
              type: Boolean,
              default: true
            },
        },

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

        mounted() {
            var vm = this;
            this.fetchAnswers();
            bus.$on('answerPostSuccess', function(answer) {
                vm.answers.data.unshift(answer);
            });
        },

        methods: {
            fetchAnswers() {
                var vm = this;

                axios.get(vm.url, vm.answersPathParams)
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