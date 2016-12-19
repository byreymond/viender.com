<template id="question-show-page-template">
    <app class="read-page">
        <navigation slot="header"></navigation>

		<div class="content-container">
		    <div class="question-box">
		        <answer-create-modal id="answerCreateModal" ref="answer-form"></answer-create-modal>
		        <question :question="question" :show-question-detail="true" :single="true"></question>
		        <h5 style="padding-top: 30px;">Answers: </h5>
		    </div>
		    <answer-list :url="getUrl('answers', question)" :show-question="false" :answers="answers"></answer-list>
		</div>
    </app>
</template>

<script>
    export default {
        template: "#question-show-page-template",

        mixins: [hasCommentsMixin, upvotableMixin, commentableMixin, answerableMixin],

        props: {
			question: {
				type: Object,
				required: true
			},
			answers: {
				type: Object,
				default: {
					data: []
				}
			},
        },

        mounted() {
            this.callbacks();
        },

        data() {
            return {
                showMoreClicked: false,

                commentsPathParams: {
                    params: {
                        with: "owner",
                        page: 1
                    }
                },
            }
        },

        methods: {
            callbacks() {
                var vm = this;

                bus.$on('answerCreateModal.post.click', function(question, text) {
                    console.log(question);
                    vm.postAnswer(question, text)
                })
            },

            showMore() {
                this.showMoreClicked = true;
            }
        }
    }
</script>