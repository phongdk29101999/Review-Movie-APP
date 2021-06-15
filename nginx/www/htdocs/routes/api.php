<?php
//phpcs:disable

use App\Http\Controllers\MovieController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ReviewController;
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
    Route::post('/', [MovieController::class, 'store'])->name('create');
    Route::delete('/{id}', [MovieController::class,'delete'])->name('delete');
    Route::get('/{id}/reviews', [ReviewController::class, 'getReviewByMovie']);
});

Route::prefix('users')->name('users.')->group(function () {
    Route::get('/', [UserController::class, 'index'])->name('all');
    Route::get('/total', [UserController::class, 'getTotalUsers'])->name('total');
    Route::put('/{id}', [UserController::class, 'update'])->name('update');
    Route::get('/{id}/reviews', [ReviewController::class, 'getReviewByUser']);
});

Route::prefix('auth')->name('auth.')->group(function () {
    Route::post('/signup', [AuthController::class, 'register'])->name('signup');
    Route::post('/login', [AuthController::class, 'login'])->name('login');
});

Route::prefix('reviews')->name('reviews.')->group(function () {
    Route::post('/',[ReviewController::class,'createReview']);
    Route::get('/', [ReviewController::class, 'index'])->name('all');
    Route::get('/{id}', [ReviewController::class, 'show'])->name('show');
    Route::put('/{id}', [ReviewController::class, 'update'])->name('update');
    Route::delete('/{id}', [ReviewController::class,'delete'])->name('delete');
});

// Route::apiResource('/admin/users', 'UserController');
// Route::apiResource('/admin/movie', 'MovieController');
// Route::get('/admin/user/total','UserController@getTotalUser')->name('user.total');
// Route::get('/movie/total','MovieController@TotalMovie')->name('movie.total');
