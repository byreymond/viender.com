window.canControlBodyElementMixin = {
	created() {
		canControlBodyElementMixin._scrollPos = 0;
	},

    data() {
        return {
            body_: {
    	        disableScrolling() {
		            canControlBodyElementMixin._scrollPos = $('body').scrollTop();

		            $('body').css({
		                overflow: 'hidden',
		                position: 'fixed',
		                width: '100%',
		                top : -canControlBodyElementMixin._scrollPos
		            });
		        },

		        enableScrolling() {
		            $('body').css({
		                overflow: '',
		                position: '',
		                top: ''
		            }).scrollTop(canControlBodyElementMixin._scrollPos);
		        }
            }
        }
    },
}