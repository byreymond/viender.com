const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */
var paths = {
    'assets': 'resources/assets/',
    'mdbootstrap': 'node_modules/mdbootstrap/',
    'summernote': 'node_modules/summernote/',
}

elixir((mix) => {
    mix.sass('app.scss')
       .webpack('bootstrap.js')
       .webpack('app.js', paths.assets + 'js/build')
       .scripts([
            paths.assets + 'js/build/app.js',
            paths.assets + 'js/vendor/mdb.min.js'
        ], 'public/js/app.js', '.')
       .version(['public/css/app.css', 'public/js/bootstrap.js', 'public/js/app.js'])
       .copy(paths.summernote + 'dist/summernote.min.js', 'public/js/summernote.min.js')
       .copy(paths.summernote + 'dist/summernote.css', 'public/css/summernote.css')
       .copy(paths.summernote + 'dist/font', 'public/css/font')
       .copy(paths.mdbootstrap + 'font', 'public/build/font')
       .copy(paths.mdbootstrap + 'img', 'public/img');
});