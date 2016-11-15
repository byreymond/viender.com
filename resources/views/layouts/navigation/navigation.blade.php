<nav class="navbar navbar-dark bg-primary">
    <!--Collapse button-->
    <a href="#" data-activates="mobile-menu" class="button-collapse"><i class="fa fa-bars white-text"></i></a>

    <!--Content for large and medium screens-->
    @include('layouts.navigation.navbar-desktop')

    <!-- Content for mobile devices-->
    @include('layouts.navigation.navbar-mobile')
</nav>