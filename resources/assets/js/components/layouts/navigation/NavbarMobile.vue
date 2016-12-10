<template id="navigation-template">
    <div class="navbar-mobile">

        <ul class="nav nav-tabs tabs-4 bg-primary" id="mobile-menu-head">
            <!--Search Form-->
            <ask-form></ask-form>
            
            <!--Collapse button-->
            <li>
                <div  class="nav-item waves-effect waves-light">
                    <span><a href="#" data-activates="mobile-menu" class="button-collapse" id="mobile-menu-button" style="text-align: left;"><i class="fa fa-bars white-text"></i></a></span>
                </div>
            </li>
            <li class="nav-item waves-effect waves-light">
                <a class="nav-link" href="/">Read <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item waves-effect waves-light">
                <a class="nav-link" href="/answer">Answer</a>
            </li>
        </ul>
        <ul class="side-nav blue-grey lighten-5" id="mobile-menu">
            <h3 style="padding: 20px">Viender</h3>
            <li class="nav-item waves-effect waves-light active">
                <a class="nav-link" href="/tutor">Tutor</a>
            </li>
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
    }
</script>