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


Route::get('/time_logs/archive', [App\Http\Controllers\TimeLogController::class, 'archive'])->name('time_logs.archive');
Route::get('/time_logs/get_excel', [App\Http\Controllers\TimeLogController::class, 'getExcel']);
Route::post('/time_logs/summarize', [App\Http\Controllers\TimeLogController::class, 'summarize']);
Route::resource('time_logs', \App\Http\Controllers\TimeLogController::class);
Route::resource('users', \App\Http\Controllers\UserController::class);

Auth::routes();

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index']);


