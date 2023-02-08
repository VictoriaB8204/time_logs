const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js('resources/js/app.js', 'public/js')
    .js('resources/js/home.js', 'public/js')
    .js('resources/js/time_logs/payment.js', 'public/js/time_logs')
    .js('resources/js/users/index.js', 'public/js/users')
    .sass('resources/sass/app.scss', 'public/css');
