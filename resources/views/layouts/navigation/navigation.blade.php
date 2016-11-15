<nav class="navbar navbar-dark bg-primary">
    <div class="row">    
        <!--Collapse button-->
        <a href="#" data-activates="mobile-menu" class="button-collapse" id="mobile-menu-button"><i class="fa fa-bars white-text"></i></a>
    </div>

    <!--Content for large and medium screens-->
    @include('layouts.navigation.navbar-desktop')

    <!-- Content for mobile devices-->
    @include('layouts.navigation.navbar-mobile')  
</nav>