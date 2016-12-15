<template id="side-nav-template">
    <nav>
        <ul class="side-nav blue-grey lighten-5" id="mobile-menu" width="280px">
            <li>
                <div class="logo-wrapper sn-ad-avatar-wrapper">
                    <img :src="Auth.user().avatar_url" class="img-fluid rounded-circle">
                    <div class="rgba-stylish-strong">
                        <p class="user white-text">{{ Auth.user().name }}<br> {{ Auth.user().email }}
                        </p>
                    </div>
                </div>
            </li>
            <li class="nav-item waves-effect waves-light">
                <a class="nav-link" href="/">Read <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item waves-effect waves-light">
                <a class="nav-link" href="/answer">Answer</a>
            </li>
            <hr>
            <li class="nav-item waves-effect waves-light">
                <a class="nav-link" :href="'/profile/' + Auth.user().username">Profile</a>
            </li>
            <li class="nav-item waves-effect waves-light">
                <a class="nav-link" href="#" @click="Auth.user().logout()">Logout</a>
            </li>                         
        </ul>
    </nav>
</template>

<script>
    export default {
        template: "#side-nav-template",

        mixins: [authMixin],

        mounted() {
            var scrollPos = 0;
            $('#mobile-menu')
                .on('show.bs.modal', function (){
                    scrollPos = $('body').scrollTop();
                    $('body').css({
                        overflow: 'hidden',
                        position: 'fixed',
                        width: '100%',
                        top : -scrollPos
                    });
                })
                .on('hide.bs.modal', function (){
                    $('body').css({
                        overflow: '',
                        position: '',
                        top: ''
                    }).scrollTop(scrollPos);
                });            
        },
    }
</script>