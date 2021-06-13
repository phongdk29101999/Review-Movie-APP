<?php
//phpcs:disable
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Movie;

/**
 * This will suppress all the PMD warnings in
 * this class.
 *
 * @SuppressWarnings(PHPMD)
 */
class MovieController extends Controller {
    public function getAllMovies () {
        return response()->json(Movie::all());
    }

    public function index() {
        $movies = Movie::all();
        return response()->json($movies)->withHeaders([
            'Content-Range' => 'movies 0-4/27',
        ]);
    }

    public function getTotalMovies() {
        $movie = Movie::count();
        return response()->json($movie);
    }

    public function store(Request $request) {
        $expert_evaluation = 2;
        $movie_length = 2;
        $watched_evaluation = 2;
        
        $movieDataArray = array (
            "title" => $request->title,
            "poster" => $request->poster,
            "description" => $request->description,
            "watched_evaluation" => $watched_evaluation,
            "director" => $request->director,
            "production_year" => $request->production_year,
            "expert_evaluation" => $expert_evaluation, 
            "movie_length" => $movie_length,
        );

        $movie = Movie::create($movieDataArray);
        return response()->json(["Add Movie Successfully.", $movie]);
    }

    /**
     * Display the specified resource.
     *
     * @param  AppExpense  $expense
     * @return IlluminateHttpResponse
     */
    public function show($id) {
        $movie = Movie::find($id);
        return response()->json($movie);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  AppExpense  $expense
     * @return IlluminateHttpResponse
     */

    /**
     * Update the specified resource in storage.
     *
     * @param  IlluminateHttpRequest  $request
     * @param  AppExpense  $expense
     * @return IlluminateHttpResponse
     */

    public function update(Request $request, $id)
    {
        $movie = Movie::find($id);
        $movie->title = $request->get('title');
        $movie->description = $request->get('description');
        $movie->director = $request->get('director');
        $movie->poster = $request->get('poster');
        $movie->production_year = $request->get('production_year');
        $movie->save();
        return response()->json([
            'message' => 'Movie updated!',
            'movie' => $movie
        ]);
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  AppExpense  $expense
     * @return IlluminateHttpResponse
     */
    public function destroy($id) {
        $movie = Movie::find($id);
        $movie->delete();
        return response()->json([
            'message' => 'movie deleted'
        ]);
        
    }
}
