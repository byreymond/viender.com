<template  id="viender-modal-template">
    <div class="viender-modal">
        <div class="modal-container">
            <slot></slot>
        </div>
        <overlay :trigger="trigger" :color="overlayColor" :z-index="zIndex" @close="closeModal()"></overlay>
    </div>
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
        },

        data() {
            return {
                zIndex: 9000
            }
        },

        mounted() {
            if( ! window.vienderModalHighestZIndex) {
                window.vienderModalHighestZIndex = 9000;
            }
            this.callbacks();
        },

        methods: {
            callbacks() {
                var vm = this;

                bus.$on(vm.trigger, function() {
                    vm.showModal();
                })
            },

            showModal() {
                var vm = this;

                $(vm.$el).find('.main-overlay').css('zIndex', ++window.vienderModalHighestZIndex);

                $(vm.$el).find('.modal-container').css('zIndex', vm.zIndex + 1000);

                $(vm.$el).css('display', 'block');

                this.$emit('show');
            },

            closeModal() {
                var vm = this;

                $(vm.$el).find('.main-overlay').css('zIndex', --window.vienderModalHighestZIndex);
                
                $(vm.$el).find('.modal-container').css('zIndex', vm.zIndex + 1000);

                $(vm.$el).css('display', '');

                this.$emit('close');
            }
        }
    }
</script>

<style>
    .modal-container {
        position: fixed;
        z-index: 10000;
        top: 30px;
        width: 100%;
    }

    .viender-modal {
        display: none;
    }    
</style>