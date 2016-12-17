<template id="answer-template">

<div class="card card-block">
    <div class="card-content">
        <div class="card-block-header row">
            <!-- Answer's Question -->
            <div class="title row" v-if="showQuestion">
                <h4 class="card-title"><a target="_blank" :href="'/' + answer.question.slug">{{ answer.question.title }}</a></h4>
            </div>

            <div class="user-info row">
                <!-- Avatar -->
                <div class="avatar col-sm-2">
                    <img :src="getUrl('avatar', answer.owner)" alt="" class="img-fluid rounded-circle z-depth-2">
                </div>
                
                <!-- Answerer Bio -->
                <div class="author-bio col-sm-10">
                    <p class=""><strong>{{ answer.owner.name }}</strong>, Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>

        <div class="card-block-body">
            <!-- <p class="card-text" v-if="!showMoreClicked && answer.body.length > 195">{{ answer.body.substring(0, 195) }}... <a style="color: #0275d8;" @click="showMore">(more)</a></p> -->
            <div :id="'answer' + answer.id" data-teaser-length="10" class="teaser card-text" v-html="answer.body"></div>
        </div>

        <div class="card-block-footer">
            <a class="btn btn-upvote waves-effect waves-light" @click="upvote(answer)">Upvote | <strong> {{ answer.upvote_count }} </strong></a>
            <a class="card-link">Downvote</a>
            <a class="card-link" v-on:click="fetchComments(answer)">Comments | {{ answer.comment_count }}</a>
            <a class="card-link" style="float: right;">...</a>
            <a>{{ ayam }}</a>
        </div>
    </div>
    
    <transition name="fade">
        <div v-show="show">
            <comment-form :text="commentTextArea" @postAnswerClicked="postComment(answer)"></comment-form>
            <comment-list :comments="comments"></comment-list>
        </div>
    </transition>
</div>


</template>

<script>
    export default {
        template: "#answer-template",

        mixins: [hasCommentsMixin, upvotableMixin, commentableMixin],

        props: {
            answer: {
              type: Object,
              required: true
            },
            showQuestion: {
              type: Boolean,
              default: true
            },
        },

        mounted() {
            $('#answer' + this.answer.id).each(function() {
                var el = $(this);
                var long_text = el.html()
                var n_sentences = el.attr("data-teaser-length") || 1;
                var short_text = el.html().split(/([\.\?\!])\s/, (n_sentences * 2) ).map(function(d, i) {return i % 2 == 0 ? d : d + " " }).join("")

                if (long_text != short_text) {
                    el.html('')
                    el.append(
                        "<span class='teaser-long'>" +
                        long_text +
                        "</span>" +
                        '<span class="teaser-short">' +
                        short_text +
                        "<span class='teaser-see-more text-info' style='cursor:pointer;margin-top:5px;display:block;' " +
                        "onclick='$(this).parent().hide();$(this).parent().siblings(\".teaser-long\").show();'> See more...</span>" +
                        "</span>"
                        )
                    el.children('.teaser-long').hide()
                }
            })

            $('.teaser-see-more')
                .mouseenter(function() {$(this).css("text-decoration", "underline")})
                .mouseleave(function() {$(this).css("text-decoration", "none")})
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
            showMore() {
                this.showMoreClicked = true;
            }
        }
    }
</script>