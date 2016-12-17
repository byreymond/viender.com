<template  id="overlay-template">
    <div class="main-overlay" @click="closeOverlay()" v-show="showMe">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        template: "#overlay-template",

        mixins: [canControlBodyElementMixin],

        props: {
            trigger: {
                type: String,
                required: true
            },
            color: {
                type: String,
                default: 'black'
            },
            zIndex: {
                type: Number,
                default: 9000
            },
        },

        data() {
            return {
                showMe: false,
            }
        },

        mounted() {
            var vm = this;
            vm.callbacks();
            $(vm.$el).css('background-color', vm.color);
            $(vm.$el).css('z-index', vm.zIndex);
        },

        methods: {
            callbacks() {
                var vm = this;

                bus.$on(vm.trigger, function() {
                    vm.showOverlay();
                })
            },

            showOverlay() {
                var vm = this;

                vm.$emit('show');

                vm.showMe = true;

                vm.body_.disableScrolling();
            },

            closeOverlay() {
                var vm = this;

                vm.$emit('close');
                
                vm.showMe = false;

                vm.body_.enableScrolling();
            },
        }
    }
</script>


<style>
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