<template id="navigation-template">
    <div class="navbar-desktop row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            <div class="col-md-1">
                <!--Navbar Brand-->
                <a class="navbar-brand" href="#">Viender</a>
            </div>
            <div class="col-md-6">
                <!--Search Form-->
                <ask-form></ask-form>
            </div>

            <div class="col-md-5">
                <!--Navbar Items-->
                <ul slot="nav-items" class="nav navbar-nav" style="float: right;">
                    <li class="nav-item waves-effect waves-light">
                        <a class="nav-link" href="/">Read <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item waves-effect waves-light">
                        <a class="nav-link" href="/answer">Answer</a>
                    </li>
                <ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        template: "#navigation-template",
    }
</script>