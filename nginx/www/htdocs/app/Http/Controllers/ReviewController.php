<?php
//phpcs:disable
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Review;
use App\Models\User;

/**
 * This will suppress all the PMD warnings in
 * this class.
 *
 * @SuppressWarnings(PHPMD)
 */
class ReviewController extends Controller
{
    public function getReviewByMovie($id) {
        $reviews = Review::where('movie_id', $id)->get();
        foreach ($reviews as $review){
            $user = User::find($review->user_id);
            $review->setAttribute('user_name', $user->name);
            $review->setAttribute('user_avatar', $user->avatar);
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
        $review->setAttribute('user_name', $user->name);
        $review->setAttribute('user_avatar', $user->avatar);
        return response()->json($review);
    }
}
