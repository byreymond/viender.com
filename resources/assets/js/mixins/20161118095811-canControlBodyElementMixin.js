window.canControlBodyElementMixin = {
    data() {
        return {
            body_: {
            	scrollPos: 0,

    	        disableScrolling() {
		            window.scrollPos = $('body').scrollTop();

		            $('body').css({
		                overflow: 'hidden',
		                position: 'fixed',
		                width: '100%',
		                top : -window.scrollPos
		            });
		        },

		        enableScrolling() {
		            $('body').css({
		                overflow: '',
		                position: '',
		                top: ''
		            }).scrollTop(window.scrollPos);
		        }
            }
        }
    },
}