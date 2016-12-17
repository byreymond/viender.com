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

        <viender-modal trigger="askForm.click" @show="hideHintOverlay()"></viender-modal>
        <overlay id="hintOverlay" trigger="whatsyourquestion.click" color="white">
            <div class="content-container">
                Write your question up here ^
            </div>
        </overlay>
    </div>
</template>

<script>
    export default {
        template: "#app-template",

        methods: {
            hideHintOverlay() {
                $('#hintOverlay').css('display', 'none');
            }
        }
    }
</script>