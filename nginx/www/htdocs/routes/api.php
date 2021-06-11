<?php
//phpcs:disable

use App\Http\Controllers\MovieController;
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
    Route::get('/', [MovieController::class, 'getAllMovies'])->name('all');
});

Route::apiResource('/admin/users', 'UserController');
Route::apiResource('/admin/movie', 'MovieController');
Route::get('/admin/user/total','UserController@getTotalUser')->name('user.total');
// Route::get('/user/total/{id}','UserController@test')->name('user.total1');
Route::get('/movie/total','MovieController@TotalMovie')->name('movie.total');
