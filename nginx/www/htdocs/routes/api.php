<?php
//phpcs:disable

use App\Http\Controllers\MovieController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::prefix('movies')->name('movies.')->group(function () {
    Route::get('/', [MovieController::class, 'index'])->name('all');
    Route::get('/total', [MovieController::class, 'getTotalMovies'])->name('total');
    Route::get('/{id}', [MovieController::class, 'show'])->name('show');
    Route::put('/{id}', [MovieController::class, 'update'])->name('update');
});

Route::prefix('users')->name('users.')->group(function () {
    Route::get('/', [UserController::class, 'index'])->name('all');
    Route::get('/total', [UserController::class, 'getTotalUsers'])->name('total');
});

// Route::apiResource('/admin/users', 'UserController');
// Route::apiResource('/admin/movie', 'MovieController');
// Route::get('/admin/user/total','UserController@getTotalUser')->name('user.total');
// Route::get('/movie/total','MovieController@TotalMovie')->name('movie.total');
