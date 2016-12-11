<template id="welcome-page-template">
        <!--Navigation & Intro-->
        <header class="welcome-page">
            <!--Mask-->
            <div class="view hm-white-strong">
                <div class="full-bg-img flex-center">
                    <div class="container">
                        <div class="row" id="home">
                                <div class="card wow fadeInRight">
                                    <div class="card-block">
                                        <!--Header-->
                                        <div class="text-xs-center">
                                            <div class="welcome-header center">
                                                <div class="logo-section">
                                                    <img src="/img/logo.png" alt="logo" class="logo"><h1 class="logo logo-text">Viender</h1>
                                                </div>
                                                <span class="text-muted">Lorem ipsum dolor sit amet.</span>
                                            </div>
                                            <div class="row">
                                                <a class="btn btn-gplus btn-small" href="/oauth/google">
                                                    <i class="fa fa-google-plus-square"></i>
                                                    <span class="social-text">Continue with Google</span>
                                                </a>
                                            </div>
<!--                                             <div class="row">
                                                <a class="btn btn-fb btn-small">
                                                    <i class="fa fa-facebook-official"></i>
                                                    <span class="social-text">Continue with Facebook</span>
                                                </a>
                                            </div> -->
                                            <div class="row auth-container">
                                                <!-- <a href="/login" class="text-muted" style="float: left;" data-toggle="modal" data-target="#modal-login">Login</a> -->
                                                <!-- <a href="/register" class="text-muted" style="float: right;" data-toggle="modal" data-target="#modal-register">Signup with Email</a> -->
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="center">
                                            <span class="small text-muted">By continuing you indicate that you have read and agree to the Terms of Service and Privacy Policy.</span>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--/.Mask-->

            <!-- Modal Login -->
            <div class="modal fade modal-ext" id="modal-login" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <!--Content-->
                    <div class="modal-content">
                       
                        <!--Header-->
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h3><i class="fa fa-user"></i> Login</h3>
                        </div>
                        
                        <!--Body-->
                        <div class="modal-body">
                            <div class="md-form">
                                <!-- <i class="fa fa-envelope prefix"></i> -->
                                <input type="text" id="form2" class="form-control">
                                <label for="form2">Your email</label>
                            </div>

                            <div class="md-form">
                                <!-- <i class="fa fa-lock prefix"></i> -->
                                <input type="password" id="form3" class="form-control">
                                <label for="form3">Your password</label>
                            </div>
                            <div class="text-xs-center">
                                <button class="btn btn-primary btn-lg">Login</button>
                            </div>
                        </div>
                        
                        <!--Footer-->
                        <div class="modal-footer">
                            <div class="options">
                                <!-- <p>Not a member? <a href="#">Sign Up</a></p> -->
                                <p>Forgot <a href="#">Password?</a></p>
                            </div>
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                    <!--/.Content-->
                </div>
            </div>

            <!-- Modal Register -->
            <div class="modal fade modal-ext" id="modal-register" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <!--Content-->
                    <div class="modal-content">
                        <!--Header-->
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h3><i class="fa fa-user"></i> Sign Up</h3>
                        </div>
                        <!--Body-->
                        <div class="modal-body">
                            <div class="md-form">
                                <!-- <i class="fa fa-envelope prefix"></i> -->
                                <input type="text" id="form2" class="form-control">
                                <label for="form2">Your email</label>
                            </div>

                            <div class="md-form">
                                <!-- <i class="fa fa-lock prefix"></i> -->
                                <input type="password" id="form3" class="form-control">
                                <label for="form3">Your password</label>
                            </div>

                            <div class="md-form">
                                <!-- <i class="fa fa-lock prefix"></i> -->
                                <input type="password" id="form4" class="form-control">
                                <label for="form4">Repeat password</label>
                            </div>

                            <div class="g-recaptcha" data-sitekey="6LcfZQwUAAAAALdjkOUVtLaq9Coiu45sjs_ziZH4" v-if="showCaptcha"></div>

                            <div class="text-xs-center">
                                <button class="btn btn-primary btn-lg">Sign up</button>

                                <fieldset class="form-group">
                                    <input type="checkbox" id="checkbox1">
                                    <label for="checkbox1">Subscribe me to the newsletter</label>
                                </fieldset>
                            </div>
                        </div>
                        <!--Footer-->
                        <div class="modal-footer">
                            <div class="options">
                                <p>Already have an account? <a href="#">Log in</a></p>
                            </div>
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                    <!--/.Content-->
                </div>
            </div>
        </header>
        <!--/Navigation & Intro-->
</template>

<script>    
    export default {
        template: "#welcome-page-template",

        data() {
            return {
                showCaptcha: false,
            }
        }
    }
</script>