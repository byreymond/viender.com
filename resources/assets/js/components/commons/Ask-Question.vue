<template  id="ask-question-template">
<div class="answer-box">
	<div class="card card-block">
		<div class="card-content">
			<a @click="emitCreateQuestionClick()">
				<i class="fa fa-comment-o" aria-hidden="true" style="font-size: 2rem;"></i>
	 			What is your question?
 			</a>
 		</div>
	 </div>
</div>
</template>

<script>
    export default {
        template: "#ask-question-template",

        props: ['text'],

        mounted() {
            autosize(this.$el);
        },

        methods: {
        	emitCreateQuestionClick() {
        		bus.$emit('whatsyourquestion.click');
        	}
        }
    }
</script>