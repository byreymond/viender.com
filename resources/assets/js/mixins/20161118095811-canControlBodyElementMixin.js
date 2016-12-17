window.canControlBodyElementMixin = {
    data() {
        return {
            body_: {
            	scrollPos: 0,

    	        disableScrolling() {
    	        	var me = this;

		            me.scrollPos = $('body').scrollTop();

		            $('body').css({
		                overflow: 'hidden',
		                position: 'fixed',
		                width: '100%',
		                top : -me.scrollPos
		            });
		        },

		        enableScrolling() {
    	        	var me = this;

		            $('body').css({
		                overflow: '',
		                position: '',
		                top: ''
		            }).scrollTop(me.scrollPos);
		        }
            }
        }
    },
}