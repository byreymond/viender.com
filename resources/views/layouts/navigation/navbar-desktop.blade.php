<div class="navbar-desktop">
    <!--Navbar Brand-->
    <div class="row">
        <div class="col-md-1">
            <a class="navbar-brand" href="#">Viender</a>
        </div>
        <div class="col-md-11">
            <div class="row">
                <!--Search form-->
                <form class="form-inline float-xs-right" style="width: 100%;">
                    <input class="form-control" type="text" placeholder="Ask Viender" style="border-bottom: none; width: 100%;">
                </form>
            </div>
            <div class="row">    
                <!--Links-->
                <ul class="nav nav-tabs tabs-3 bg-primary">
                    @include('layouts.navigation.navbar-items')
                </ul>
            </div>
        </div>
    </div>
</div>