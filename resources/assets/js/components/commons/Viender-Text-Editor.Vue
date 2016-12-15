<template  id="Viender-Text-Editor-template">
    <div class="viender-text-editor"></div>
</template>

<script>
    export default {
        template: "#Viender-Text-Editor-template",

        data() {
            return {
                text: {
                    body: '',
                    cols: 30,
                    rows: 3,
                }
                
            }
        },

        mounted() {
            var vm = this;

            $(vm.$el).summernote({
              callbacks: {
                onChange: function(contents, $editable) {
                    vm.text.body = contents;
                    vm.$emit('change', vm.text);
                }
              }
            });

            this.callbacks();
        },

        methods: {
            callbacks() {
                var vm = this;

                bus.$on('question.answerButton.click', function(question, text) {
                    vm.text = text;
                    $(vm.$el).summernote('code', text.body);
                })
            }
        }
    }
</script>