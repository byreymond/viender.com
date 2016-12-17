<template id="answer-page-template">
    <app class="answer-page">
        <navigation slot="header"></navigation>
        <ask-question class="content-container"></ask-question>
        <question-list url="/questions"></question-list>
    </app>
</template>

<script>
    export default {
        template: "#answer-page-template",
    }
</script>
