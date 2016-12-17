<template id="app-template">
    <div class="app">
        <div class="v-header">
            <slot name="header"></slot>
        </div>

        <main>
            <slot></slot>
        </main>

        <div class="v-footer">
            <slot name="footer"></slot>
        </div>

        <viender-modal trigger="askForm.click" @show="hideHintModal()"></viender-modal>

        <viender-modal ref="hintModal" trigger="whatsyourquestion.click" overlay-color="white">
            <div class="content-container">
                Write your question up here ^
            </div>
        </viender-modal>
    </div>
</template>

<script>
    export default {
        template: "#app-template",

        mounted() {
            console.log(this);
        },

        methods: {
            hideHintModal() {
                this.$refs.hintModal.hide(false);
            }
        }
    }
</script>