<template id="read-page-template">
    <app class="read-page">
        <navigation slot="header"></navigation>
        <ask-question class="content-container"></ask-question>
        <answer-list :answers="feeds" url="/answers"></answer-list>
    </app>
</template>

<script>
    export default {
        template: "#read-page-template",

        props: {
            feeds: {
              type: Object,
              required: true
            },
        },

        created() {

        },
    }


</script>
