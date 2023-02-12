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

// mix.setPublicPath('public_html/');
mix
    .js('resources/js/app.js', 'public/js')
    .js('resources/js/time_logs/index.js', 'public/js/time_logs')
    .js('resources/js/payments/index.js', 'public/js/payments')
    .js('resources/js/users/index.js', 'public/js/users')
    .sass('resources/sass/app.scss', 'public/css')
    .version()
    .sourceMaps();
