<template  id="viender-modal-template">
    <transition :name="transition">
        <div class="viender-modal" v-show="showMe">
            <div ref="container" class="modal-container">
                <slot></slot>
            </div>

            <!-- <overlay :trigger="trigger" :color="overlayColor" :z-index="zIndex" @hide="hide()"></overlay> -->

            <div ref="overlay" class="main-overlay" @click="hide()">
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        template: "#viender-modal-template",

        mixins: [canControlBodyElementMixin],

        props: {
            trigger: {
                type: String,
                required: true
            },
            overlayColor: {
                type: String,
                default: 'black'
            },
            transition: {
                type: String,
                default: "fade"
            },
        },

        data() {
            return {
                zIndex: 9000,
                showMe: false,
            }
        },

        mounted() {
            var vm = this;

            if( ! window.vienderModalHighestZIndex) {
                window.vienderModalHighestZIndex = 9000;
            }

            this.callbacks();

            $(vm.$refs.container).css({
                'position': 'fixed',
                'width': '100%',
                'z-index': vm.zIndex,
            });
                      
            $(vm.$refs.overlay).css({
                'background-color': vm.overlayColor,
                'z-index': vm.zIndex-1,
            });
        },

        methods: {
            callbacks() {
                var vm = this;

                bus.$on(vm.trigger, function() {
                    vm.show();
                })
            },

            show(disableScrolling = true) {
                var vm = this;

                vm.$emit('show');

                if(disableScrolling)
                    vm.body_.disableScrolling();

                vm.showMe = true;

                $(vm.$refs.overlay).css('z-index', ++window.vienderModalHighestZIndex);

                $(vm.$refs.overlay).css('z-index', vm.zIndex - 1);
            },

            hide(enableScrolling = true) {
                var vm = this;

                vm.$emit('hide');

                if(enableScrolling)
                    vm.body_.enableScrolling();

                vm.showMe = false;

                $(vm.$refs.overlay).css('z-index', --window.vienderModalHighestZIndex);
                
                $(vm.$refs.overlay).css('z-index', vm.zIndex - 1);
            }
        }
    }
</script>

<style>
    .viender-modal {
        position: fixed;
        z-index: 10000;
        top: 30px;
        width: 100%;
    }

    .main-overlay {
        position: fixed;
        top: 31px;
        width: 100%;
        height: 100%;
        opacity: 0.9;
    }

    @media screen and (min-width: 992px) {
        .main-overlay {
            top: 37px;
        }
    }
</style>