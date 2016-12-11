<template id="question-show-page-template">
    <app class="read-page">
        <navigation slot="header"></navigation>

		<!--Section: Team v.4-->
		<section class="section">

		    <div class="row">
	            <div class="card-wrapper">
	                <div id="card-1" class="card-rotating effect__click">

	                    <!--Front Side-->
	                    <div class="face front">

	                        <!-- Image-->
	                        <div class="card-up">
	                            <img src="http://mdbootstrap.com/images/regular/nature/img%20(55).jpg">
	                        </div>
	                        <!--Avatar-->
	                        <div class="avatar"><img :src="getUrl('avatar', user)" class="rounded-circle img-responsive">
	                        </div>
	                        <!--Content-->
	                        <div class="card-block">
	                            <h4>{{ user.name }}</h4>
	                            <p>Lorem ipsum dolor sit amet.</p>
	                        </div>
	                    </div>
	                </div>
	            </div>
		    </div>

		</section>
		<!--/Section: Team v.4-->

    </app>
</template>

<script>
    export default {
        template: "#question-show-page-template",

        mixins: [hasLinksMixin],

        props: ['user'],
    }
</script>