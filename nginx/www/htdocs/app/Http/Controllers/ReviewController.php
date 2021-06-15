<?php
//phpcs:disable
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Review;
use App\Models\User;
use App\Models\Movie;

/**
 * This will suppress all the PMD warnings in
 * this class.
 *
 * @SuppressWarnings(PHPMD)
 */
class ReviewController extends Controller
{

    public function index() {
        $reviews = Review::all();
        foreach ($reviews as $review){
            $user = User::find($review->user_id);
            $movie = Movie::find($review->movie_id);
            $review->setAttribute('user_name', $user->name);
            $review->setAttribute('user_avatar', $user->avatar);
            $review->setAttribute('movie_title', $movie->title);
            $review->setAttribute('movie_poster', $movie->poster_path);
        }
        return response()->json($reviews)->withHeaders([
            'Content-Range' => 'movies 0-4/27',
        ]);
    }

    public function getReviewByMovie($id) {
        $reviews = Review::where('movie_id', $id)->get();
        foreach ($reviews as $review){
            $user = User::find($review->user_id);
            $review->setAttribute('user_name', $user->name);
            $review->setAttribute('user_avatar', $user->avatar);
        }
        return response()->json($reviews);
    }

    public function getReviewByUser($id) {
        $reviews = Review::where('user_id', $id)->get();
        foreach ($reviews as $review){
            $movie = Movie::find($review->movie_id);
            $review->setAttribute('movie_title', $movie->title);
        }
        return response()->json($reviews);
    }

    public function createReview(Request $request){
        $review = Review::create([
            'user_id' => $request->user_id,
            'movie_id' => $request->movie_id,
            'rating' => $request->rating,
            'review_text' => $request->review_text
        ]);
        $user = User::find($request->user_id);
        $movie = Movie::find($request->movie_id);
        $review_list = Review::where('movie_id', '==', $request->movie_id)->get();
        $count = $review_list->count();
        $movie->vote_average = ($movie->vote_average + $request->rating) / ($count+2);
        $review->setAttribute('user_name', $user->name);
        $review->setAttribute('user_avatar', $user->avatar);
        return response()->json($review);
    }

    public function show($id) {
        $review = Review::find($id);
        $user = User::find($review->user_id);
        $movie = Movie::find($review->movie_id);
        $review->setAttribute('user_name', $user->name);
        $review->setAttribute('user_avatar', $user->avatar);
        $review->setAttribute('movie_title', $movie->title);
        $review->setAttribute('movie_poster', $movie->poster_path);
        return response()->json($review);
    }

    public function update(Request $request, $id)
    {
        $review = Review::find($id);
        $review->user_id = $request->get('user_id');
        $review->movie_id = $request->get('movie_id');
        $review->rating = $request->get('rating');
        $review->review_text = $request->get('review_text');
        $review->save();
        return response()->json($review);
    }

    public function delete($id) {
        $review = Review::find($id);
        $review->delete();
        return response()->json($review);
        
    }
}
