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
    'compiled': 'public/assets/',
    'mdbootstrap': 'node_modules/mdbootstrap/'
}

elixir((mix) => {
    mix.sass('app.scss')
       .webpack('app.js')
       .scripts([
            paths.compiled + 'js/app.js',
            paths.mdbootstrap + 'js/mdb.js'
        ], 'public/js/app.js', '.')
       .version(['public/css/app.css', 'public/js/app.js'])
       .copy(paths.mdbootstrap + 'font', 'public/font')
       .copy(paths.mdbootstrap + 'img', 'public/img');
});