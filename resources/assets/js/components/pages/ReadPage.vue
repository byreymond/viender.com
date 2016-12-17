<template id="read-page-template">
    <app class="read-page">
        <navigation slot="header"></navigation>
        <ask-question class="content-container"></ask-question>
        <answer-list url="/answers"></answer-list>
    </app>
</template>

<script>
    export default {
        template: "#read-page-template",

        created() {

        },
    }


</script>
