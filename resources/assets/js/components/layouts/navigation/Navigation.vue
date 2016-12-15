<template id="navigation-template">
    <div class="navigation">
        <nav class="navbar navbar-fixed-top navbar-dark bg-primary">
            <div class="row">    
               
            </div>

            <!--Content for large and medium screens-->
            <navbar-desktop></navbar-desktop>

            <!-- Content for mobile devices-->
            <navbar-mobile></navbar-mobile>
        </nav>
        <side-nav slot="header"></side-nav>
    </div>
</template>

<script>
    export default {
        template: "#navigation-template",
    }
</script>