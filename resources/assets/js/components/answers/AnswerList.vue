<template  id="AnswerList-template">
    <div class="content-container">
        <div  class="answer-box" v-for="answer in answerList.data">
            <answer :answer="answer" :show-question="showQuestion"></answer>
        </div>
        <button v-if="loaded" type="button" class="btn btn-outline-primary waves-effect" style="width: 90%; margin: auto; display: block;" @click="fetchAnswers()">Load More Answers</button>
        <p style="text-align: center;" v-else>Loading...</p>
    </div>
</template>

<script>
    export default {
        template: "#AnswerList-template",

        props: {
            answers: {
              type: Object,
              required: true
            },            
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
                answerList: {
                    data: []
                },

                answersPathParams: {
                    params: {
                        with: "owner,question",
                        page: 2
                    }
                },

                loaded: true,
            }
        },

        mounted() {
            var vm = this;
            // this.fetchAnswers();
            vm.answerList = vm.answers;
            bus.$on('answerPostSuccess', function(answer) {
                vm.answers.data.unshift(answer);
            });
        },

        methods: {
            fetchAnswers() {
                var vm = this;

                vm.loaded = false;

                axios.get(vm.url, vm.answersPathParams)
                    .then(function (response) {
                        response.data.data.forEach(function(answer) {
                            vm.answerList.data.push(answer);
                        });

                        vm.answersPathParams.params.page += 1;

                        vm.loaded = true;
                    })
                    .catch(function (error) {
                        console.log(error);
                        vm.loaded = true;
                    });
            },        
        }
    }
</script>