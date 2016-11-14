<template  id="AnswerList-template">
    <div class="container">
        <div class="row panel" v-for="answer in answers.data">
            <div class="row panel-heading">
                {{ answer.owner.name }}
            </div>
            <div class="row panel-body">
                
            </div>
            <div class="row panel-footer">
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        template: "#AnswerList-template",

        data() {
            return {
                answers: {},
                pathParams: {
                    params: {
                        with: "owner",
                        page: 1
                    }
                }
            }
        },

        created() {
            this.getData();
        },

        methods: {
            getData() {
                axios.get('/answers', this.pathParams)
                    .then(function (response) {
                        this.answers = response.data;
                    }.bind(this))
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>