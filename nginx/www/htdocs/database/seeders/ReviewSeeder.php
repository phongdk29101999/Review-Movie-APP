<?php
//phpcs:disable
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('reviews')->insert([
            [
                'id' => 000000,
                'review_text' => "",
                'rating' => 0,
                'user_id' => 0,
                'movie_id' => 0,
            ],
        ]);
    }
}
