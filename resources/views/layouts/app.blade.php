
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Material Design Bootstrap Template</title>

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css">

    <!-- Bootstrap core CSS -->
    <link href={{ elixir("css/app.css") }} rel="stylesheet">

</head>

<body>

    <main id="app">
        <!--Navbar-->
        <nav class="navbar navbar-dark bg-primary">
            <!--Collapse button-->
            <a href="#" data-activates="mobile-menu" class="button-collapse"><i class="fa fa-bars white-text"></i></a>

            <!--Content for large and medium screens-->
            <div class="navbar-desktop">
                <!--Navbar Brand-->
                <a class="navbar-brand" href="#">Navbar</a>
                <!--Links-->
                <ul class="nav navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                </ul>
                <!--Search form-->
                <form class="form-inline float-xs-right">
                    <input class="form-control" type="text" placeholder="Search">
                </form>
            </div>

            <!-- Content for mobile devices-->
            <div class="navbar-mobile">
                <ul class="side-nav" id="mobile-menu">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                </ul>
            </div>
        </nav>
        <!--/.Navbar-->
    </main>



    <!-- SCRIPTS -->

    <!-- JQuery -->
    <script type="text/javascript" src={{ elixir("js/app.js") }}></script>

    <script>
        $(".button-collapse").sideNav();
    </script>

</body>

</html>