<template id="home-page-template">
    <welcome-page v-if="false"></welcome-page>
    <read-page v-else></read-page>
</template>

<script>
    export default {
        template: "#home-page-template",
    }
</script>
