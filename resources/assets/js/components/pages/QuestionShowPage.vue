<template id="question-show-page-template">
    <app class="read-page">
        <navigation slot="header"></navigation>
        <answer-list url="/answers"></answer-list>
    </app>
</template>

<script>
    export default {
        template: "#question-show-page-template",

        created() {
        }
    }
</script>
