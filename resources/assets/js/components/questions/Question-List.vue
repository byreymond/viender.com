<template  id="QuestionList-template">
    <div class="content-container">
        <div  class="question-box" v-for="question in questions.data">
            <question :question="question" :show-question-detail="false"></question>
        </div>
        <button type="button" class="btn btn-outline-primary waves-effect" style="width: 90%; margin: auto; display: block;" @click="fetchquestions()">Load More Questions</button>

        <answer-create-modal id="answerCreateModal" ref="answer-form"></answer-create-modal>

    </div>
</template>

<script>
    export default {
        template: "#QuestionList-template",

        mixins: [answerableMixin],

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
                questions: {
                    data: []
                },

                questionsPathParams: {
                    params: {
                        with: "owner",
                        page: 1
                    }
                }
            }
        },

        mounted() {
            var vm = this;
            vm.fetchquestions();
            vm.callbacks();
        },

        methods: {
            callbacks() {
                var vm = this;

                bus.$on('answerCreateModal.post.click', function(question, text) {
                    console.log(question);
                    vm.postAnswer(question, text)
                })
            },

            fetchquestions() {
                var vm = this;
                axios.get(vm.url, vm.questionsPathParams)
                    .then(function (response) {
                        response.data.data.forEach(function(question) {
                            vm.questions.data.push(question);
                        });

                        vm.questionsPathParams.params.page += 1;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
        }
    }
</script>