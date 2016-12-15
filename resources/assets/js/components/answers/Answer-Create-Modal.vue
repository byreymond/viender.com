<template  id="Answer-Create-Modal-template">
    <div class="answer-create-modal modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <!--Content-->
            <div class="modal-content">
                <!--Header-->
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel">Create your answer</h4>
                </div>
                <!--Body-->
                <div class="modal-body">
                    <div class="md-form">
                        <!-- <label for="message-text" class="form-control-label">Your answer:</label> -->
                        <!-- <autosize-textarea class="md-textarea" :text="text"></autosize-textarea> -->
                        <viender-text-editor @change="updateText(text)"></viender-text-editor>
                    </div>
                </div>
                <!--Footer-->
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="emitPostClicked()">Post</button>
                </div>
            </div>
            <!--/.Content-->
        </div>
    </div>
</template>

<script>
    export default {
        template: "#Answer-Create-Modal-template",

        data() {
            return {
                question: {},
                text: {
                    body: '',
                    cols: 30,
                    rows: 3,
                }
            }
        },

        mounted() {
            var scrollPos = 0;
            $(this.$el)
                .on('show.bs.modal', function (){
                    scrollPos = $('body').scrollTop();
                    $('body').css({
                        overflow: 'hidden',
                        position: 'fixed',
                        width: '100%',
                        top : -scrollPos
                    });
                })
                .on('hide.bs.modal', function (){
                    $('body').css({
                        overflow: '',
                        position: '',
                        top: ''
                    }).scrollTop(scrollPos);
            });

            this.callbacks();
        },

        methods: {
            updateText(text) {
                this.text = text;
            },

            emitPostClicked() {
                var vm = this;
                $(vm.$el).modal('hide');
                bus.$emit('answerCreateModal.post.click', vm.question, vm.text);
            },

            callbacks() {
                var vm = this;

                bus.$on('question.answerButton.click', function(question, text) {
                    vm.question = question;
                    vm.text = text;
                })
            }
        }
    }
</script>

<style>
    .answer-create-modal .md-form .btn-default {
        padding: .25rem .5rem;
        background-color: #fff;
    }

    .answer-create-modal .md-form, .md-form .btn-default {
        margin-bottom: 0;
    }

    .answer-create-modal .note-popover .popover-content .note-color .dropdown-toggle, .panel-heading.note-toolbar .note-color .dropdown-toggle {
        width: 30px;
        padding-left: 5px;
    }

    .answer-create-modal ul {
        padding: 0;
        padding-left: 17px;
    }

    .answer-create-modal ol, 
    .answer-create-modal ul, 
    .answer-create-modal ul li {
        list-style-type: disc;
    }

    .answer-create-modal .btn-default {
        color: #333 !important;
        background-color: #fff;
        border-color: #ccc;
    }

    .answer-create-modal .panel-heading.note-toolbar .note-color .dropdown-menu {
        left: -234px;
    }
</style>