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
    </div>
</template>

<script>
    export default {
        template: "#app-template",
    }
</script>