<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Requiblue meta tags always come first -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Viender</title>

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css">

    <!-- Custom head -->
    @yield('head')  
      
    <!-- App CSS -->
    <link href={{ elixir("css/app.css") }} rel="stylesheet">

    <!-- Summernote CSS -->
    <link href={{ url('/css/summernote.css') }} rel="stylesheet">

    <!-- Configs -->
    @include('global')

    <!-- App Bootstrap JS -->
    <script type="text/javascript" src={{ elixir("js/bootstrap.js") }}></script>
</head>

<body>
    <div id="app">
        @yield('content')
    </div>

    <!-- SCRIPTS -->
    <section>
        <!-- Recaptcha JS -->
        {{-- <script src='https://www.google.com/recaptcha/api.js'></script> --}}
        
        <!-- Summernote JS -->
        <script type="text/javascript" src={{ url('/js/summernote.min.js') }}></script>

        <!-- App JS -->
        <script type="text/javascript" src={{ elixir("js/app.js") }}></script>

        <!-- Custom script -->
        @yield('script')

        <!-- Initialization -->
        <script>
            new WOW().init();
            $(".button-collapse").sideNav();
        </script>
    </section>
</body>

</html>