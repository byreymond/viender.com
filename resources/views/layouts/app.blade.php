
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Requiblue meta tags always come first -->
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
    <div id="app">
        @yield('content')
    </div>

    <!-- SCRIPTS -->
    <section>
        <script type="text/javascript" src={{ elixir("js/app.js") }}></script>
        {{-- <script src='https://www.google.com/recaptcha/api.js'></script> --}}
        <script>
            new WOW().init();

            $(".button-collapse").sideNav();
        </script>
    </section>
</body>

</html>