<template  id="Answer-Create-Modal-template">
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
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
                        <label for="message-text" class="form-control-label">Your answer:</label>
                        <autosize-textarea class="md-textarea" :text="text"></autosize-textarea>
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

        props: ['text'],

        methods: {
            emitPostClicked() {
                $(this.$el).modal('hide');
                this.$emit('postAnswerClicked');
            }
        }
    }
</script>