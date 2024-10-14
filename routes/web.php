<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('auth')->group(function (){
    Route::prefix('time_logs')->controller(\App\Http\Controllers\TimeLogController::class)->group(function () {
        Route::get('/archive', 'archive')->name('time_logs.archive');
        Route::get('/get_excel', 'getExcel');
        Route::get('/get_archive_excel', 'getArchiveExcel');
        Route::post('/summarize', 'summarize');
        Route::put('/current_logs/dates/', 'updateCurrentLogsDates');
    });

    Route::resource('time_logs', \App\Http\Controllers\TimeLogController::class);


    Route::prefix('users/{user}/roles')->controller(\App\Http\Controllers\RoleController::class)->group(function () {
        Route::get('/', 'index');
        Route::post('/', 'update');
    });
    Route::resource('users', \App\Http\Controllers\UserController::class);

    Route::prefix('payments')
        ->controller(\App\Http\Controllers\PaymentController::class)
        ->middleware('has_role:payer')
        ->group(function () {
        Route::get('/', 'index')->name('payments.index');
        Route::get('/get_excel', 'getExcel');
        Route::post('/pay_for_the_time/{user}', 'payForTheTime');
    });
});

Auth::routes();

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index']);


