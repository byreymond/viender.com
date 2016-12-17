<template  id="overlay-template">
    <div class="main-overlay" @click="closeOverlay()" transition="fade">
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

                $(vm.$el).css('display', 'block');

                vm.body_.disableScrolling();

                this.$emit('show');
            },

            closeOverlay() {
                var vm = this;

                $(vm.$el).css('display', '');

                vm.body_.enableScrolling();

                this.$emit('close');

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
        display: none;
        opacity: 0.9;
    }

    @media screen and (min-width: 992px) {
        .main-overlay {
            top: 37px;
        }
    }     
</style>