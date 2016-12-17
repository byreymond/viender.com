window.canControlBodyElementMixin = {
    data() {
        return {
            scrollPos: 0,

            body_: {
    	        disableScrolling() {
		            var vm = this;

		            vm.scrollPos = $('body').scrollTop();

		            $('body').css({
		                overflow: 'hidden',
		                position: 'fixed',
		                width: '100%',
		                top : -vm.scrollPos
		            });
		        },

		        enableScrolling() {
		            $('body').css({
		                overflow: '',
		                position: '',
		                top: ''
		            }).scrollTop(this.scrollPos);
		        }
            }
        }
    },
}