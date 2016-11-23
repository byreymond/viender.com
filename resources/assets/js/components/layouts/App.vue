<template id="app-template">
    <div class="app">
        <header>
            <slot name="header"></slot>
        </header>

        <main>
            <slot></slot>
        </main>

        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
    export default {
        template: "#app-template",
    }
</script>