<?php

use App\Http\Controllers\HaditsController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\QuranController;
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

Route::get('/', HomeController::class);

//Hadits
Route::get('/hadits', [HaditsController::class, 'index']);
Route::get('/hadits/{kitab}/{number}', [HaditsController::class, 'single'] );
Route::get('/hadits/search', [HaditsController::class, 'index'] );

//Quran
Route::get('/quran/{surat}/{ayat}', [QuranController::class, 'single'] );
