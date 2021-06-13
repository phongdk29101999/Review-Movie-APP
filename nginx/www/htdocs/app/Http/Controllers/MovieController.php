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
        $movie = Movie::create([
            'title' => $request->title,
            'overview' => $request->overview,
            'runtime' => $request->runtime,
            'poster_path' => $request->poster_path,
            'backdrop_path' => $request->backdrop_path,
            'release_date' => $request->release_date,
            'vote_average' => $request->vote_average,
        ]);
       
        return response()->json($movie);
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
        $movie->overview = $request->get('overview');
        $movie->runtime = $request->get('runtime');
        $movie->poster_path = $request->get('poster_path');
        $movie->backdrop_path = $request->get('backdrop_path');
        $movie->release_date = $request->get('release_date');
        $movie->vote_average = $request->get('vote_average');
        $movie->save();
        return response()->json($movie);
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  AppExpense  $expense
     * @return IlluminateHttpResponse
     */
    public function delete($id) {
        $movie = Movie::find($id);
        $movie->delete();
        return response()->json($movie);
        
    }
}
