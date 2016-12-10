<template  id="AskForm-template">
    <div class="content-container">
        <div  class="answer-box" v-for="answer in answers.data">
            <answer :answer="answer" :show-question="showQuestion"></answer>
        </div>
        <button type="button" class="btn btn-outline-primary waves-effect" style="width: 90%; margin: auto; display: block;" @click="fetchAnswers()">Load More Answers</button>
    </div>
</template>

<script>
    export default {
        template: "#AskForm-template",
    }
</script>