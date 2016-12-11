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
                    <li class="nav-item ">
                        <a class="nav-link waves-effect waves-light" href="#">1 <i class="fa fa-envelope"></i> </a>
                    </li>
                    <li class="nav-item avatar active dropdown">
                        <a class="nav-link dropdown-toggle waves-effect waves-light" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <img :src="me().avatar_url" class="img-fluid rounded-circle">
                        </a>
                        <div class="dropdown-menu dropdown-warning" aria-labelledby="dropdownMenu1" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                            <a class="dropdown-item waves-effect waves-light" :href="'/profile/' + me().username">Profile</a>
                            <a class="dropdown-item waves-effect waves-light" href="#" @click="logout()">Logout</a>
                        </div>
                    </li>

                </ul>                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        template: "#navigation-template",

        methods: {
            me() {
                return me;
            },

            logout() {
                Vue.cookie.delete('secret', {domain: '.viender.dev'});
                window.location = config.app.url;
            }
        }
    }
</script>