<template id="navigation-template">
    <div class="navbar-mobile">
        <div id="mobile-menu-head">            
            <!--Search Form-->
            <ask-form></ask-form>

            <!--Collapse button-->
            <div class="nav-item waves-effect waves-light" style="display: inline-block;">
                <span><a href="#" data-activates="mobile-menu" class="button-collapse" id="mobile-menu-button" style="text-align: left;"><i class="fa fa-bars white-text"></i></a></span>
            </div>

            <ul class="nav nav-tabs tabs-2 bg-primary" style="display: inline-table; width: calc(100% - 42px)">
                <li class="nav-item waves-effect waves-light">
                    <a class="nav-link" href="/">Read <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item waves-effect waves-light">
                    <a class="nav-link" href="/answer">Answer</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        template: "#navigation-template",

        mixins: [authMixin],
    }
</script>