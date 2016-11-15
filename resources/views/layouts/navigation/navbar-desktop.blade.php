<div class="navbar-desktop row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <div class="col-md-1">
            <!--Navbar Brand-->
            <a class="navbar-brand" href="#">Viender</a>
        </div>
        <div class="col-md-6">
            <!--Search Form-->
            <form class="form-inline float-xs-right" style="width: 100%;">
                <input class="form-control" type="text" placeholder="Ask Viender" style="border-bottom: none; width: 100%;">
            </form>
        </div>

        <div class="col-md-5">
            <!--Navbar Items-->
            <ul class="nav navbar-nav" style="float: right;">
                @include('layouts.navigation.navbar-items')
            </ul>
        </div>
    </div>
</div>