<?php
//phpcs:disable
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('movies')->insert([
            [
                'id' => 337404,
                'title' => 'Cruella',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/rTh4K5uw9HypmpGslcKd4QfHl93.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg',
                'release_date' => '2021-05-26',
                'vote_average' => 8.6,
                'overview' => 'In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.'
            ],
            [
                'id' => 423108,
                'title' => 'The Conjuring: The Devil Made Me Do It',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/xbSuFiJbbBWCkyCCKIMfuDCA4yV.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/qi6Edc1OPcyENecGtz8TF0DUr9e.jpg',
                'release_date' => '2021-05-25',
                'vote_average' => 8.3,
                'overview' => "Paranormal investigators Ed and Lorraine Warren encounter what would become one of the most sensational cases from their files. The fight for the soul of a young boy takes them beyond anything they'd ever seen before, to mark the first time in U.S. history that a murder suspect would claim demonic possession as a defense."
            ],
            [
                'id' => 637649,
                'title' => 'Wrath of Man',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/M7SUK85sKjaStg4TKhlAVyGlz3.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/70AV2Xx5FQYj20labp0EGdbjI6E.jpg',
                'release_date' => '2021-04-22',
                'vote_average' => 7.9,
                'overview' => "A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score."
            ],
            [
                'id' => 632357,
                'title' => 'The Unholy',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/bShgiEQoPnWdw4LBrYT5u18JF34.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/jw6ASGRT2gi8EjCImpGtbiJ9NQ9.jpg',
                'release_date' => '2021-03-31',
                'vote_average' => 7.1,
                'overview' => "Alice, a young hearing-impaired girl who, after a supposed visitation from the Virgin Mary, is inexplicably able to hear, speak and heal the sick. As word spreads and people from near and far flock to witness her miracles, a disgraced journalist hoping to revive his career visits the small New England town to investigate. When terrifying events begin to happen all around, he starts to question if these phenomena are the works of the Virgin Mary or something much more sinister."
            ],
            [
                'id' => 602734,
                'title' => 'Spiral: From the Book of Saw',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/lcyKve7nXRFgRyms9M1bndNkKOx.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/7JENyUT8ABxcvrcijDBVpdjgCY9.jpg',
                'release_date' => '2021-05-12',
                'vote_average' => 6.5,
                'overview' => "Working in the shadow of an esteemed police veteran, brash Detective Ezekiel “Zeke” Banks and his rookie partner take charge of a grisly investigation into murders that are eerily reminiscent of the city’s gruesome past.  Unwittingly entrapped in a deepening mystery, Zeke finds himself at the center of the killer’s morbid game."
            ],
            [
                'id' => 520763,
                'title' => 'A Quiet Place Part II',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/z2UtGA1WggESspi6KOXeo66lvLx.jpg',
                'release_date' => '2021-05-21',
                'vote_average' => 7.3,
                'overview' => "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path."
            ],
            [
                'id' => 503736,
                'title' => 'Army of the Dead',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/z8CExJekGrEThbpMXAmCFvvgoJR.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/9WlJFhOSCPnaaSmsrv0B4zA8iUb.jpg',
                'release_date' => '2021-05-14',
                'vote_average' => 6.5,
                'overview' => "Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble: venturing into the quarantine zone to pull off the greatest heist ever attempted."
            ],
            [
                'id' => 460465,
                'title' => 'Mortal Kombat',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg',
                'release_date' => '2021-04-07',
                'vote_average' => 7.5,
                'overview' => "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe."
            ],
            [
                'id' => 399566,
                'title' => 'Godzilla vs. Kong',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg',
                'release_date' => '2021-03-24',
                'vote_average' => 8,
                'overview' => "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages."
            ],
            [
                'id' => 817451,
                'title' => 'Endangered Species',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/ccsSqbpEqr2KK9eMvoeF8ERFCd5.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/A0xW7GgeFQoQmPOn7HcHkBQ5nlb.jpg',
                'release_date' => '2021-05-27',
                'vote_average' => 7.5,
                'overview' => "Jack Halsey takes his wife, their adult kids, and a friend for a dream vacation in Kenya. But as they venture off alone into a wilderness park, their safari van is flipped over by an angry rhino, leaving them injured and desperate. Then, as two of them go in search of rescue, a bloody, vicious encounter with a leopard and a clan of hyenas incites a desperate fight for survival."
            ],
            [
                'id' => 567189,
                'title' => 'Tom Clancy\'s Without Remorse',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/rEm96ib0sPiZBADNKBHKBv5bve9.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/fPGeS6jgdLovQAKunNHX8l0avCy.jpg',
                'release_date' => '2021-04-29',
                'vote_average' => 7.2,
                'overview' => "An elite Navy SEAL uncovers an international conspiracy while seeking justice for the murder of his pregnant wife."
            ],
            [
                'id' => 527774,
                'title' => 'Raya and the Last Dragon',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/hJuDvwzS0SPlsE6MNFOpznQltDZ.jpg',
                'release_date' => '2021-03-03',
                'vote_average' => 8.2,
                'overview' => "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people."
            ],
            [
                'id' => 578701,
                'title' => 'Those Who Wish Me Dead',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/xCEg6KowNISWvMh8GvPSxtdf9TO.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/ouOojiypBE6CD1aqcHPVq7cJf2R.jpg',
                'release_date' => '2021-05-05',
                'vote_average' => 7,
                'overview' => "A young boy finds himself pursued by two assassins in the Montana wilderness with a survival expert determined to protecting him - and a forest fire threatening to consume them all."
            ],
            [
                'id' => 635302,
                'title' => "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/xPpXYnCWfjkt3zzE0dpCNME1pXF.jpg',
                'release_date' => '2020-10-16',
                'vote_average' => 8.4,
                'overview' => "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!"
            ],
            [
                'id' => 791373,
                'title' => 'Zack Snyder\'s Justice League',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg',
                'release_date' => '2021-03-18',
                'vote_average' => 8.5,
                'overview' => "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions."
            ],
            [
                'id' => 808023,
                'title' => 'The Virtuoso',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/vXHzO26mJaOt4VO7ZFiM6No5ScT.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/efrdAWS63s8TTWdrI2uNdIhn1dj.jpg',
                'release_date' => '2021-04-30',
                'vote_average' => 6.3,
                'overview' => "A lonesome stranger with nerves of steel must track down and kill a rogue hitman to satisfy an outstanding debt. But the only information he's been given is a time and location where to find his quarry. No name. No description. Nothing."
            ],
            [
                'id' => 615457,
                'title' => 'Nobody',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg',
                'release_date' => '2021-03-26',
                'vote_average' => 8.4,
                'overview' => 'Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a "nobody." When two thieves break into his home one night, Hutch\'s unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.'
            ],
            [
                'id' => 726684,
                'title' => "Miraculous World: Shanghai – The Legend of Ladydragon",
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/msI5a9TPnepx47JUb2vl88hb80R.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/rlNnwObbMu5G2FaOUlacnUIdIIA.jpg',
                'release_date' => '2021-04-04',
                'vote_average' => 7.9,
                'overview' => "On school break, Marinette heads to Shanghai to meet Adrien. But after arriving, Marinette loses all her stuff, including the Miraculous that allows her to turn into Ladybug!"
            ],
            [
                'id' => 823855,
                'title' => 'I Am All Girls',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/m6bUeV4mczG3z2YXXr5XDKPsQzv.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yyWNPhP1HR4BTLErHcZwIUsMBvA.jpg',
                'release_date' => '2021-05-14',
                'vote_average' => 6.7,
                'overview' => "A special crimes investigator forms an unlikely bond with a serial killer to bring down a global child sex trafficking syndicate."
            ],
            [
                'id' => 813258,
                'title' => 'Monster Pets: A Hotel Transylvania Short',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/dkokENeY5Ka30BFgWAqk14mbnGs.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/qqkpwhiB1BQcSvegL10uHKMzKKl.jpg',
                'release_date' => '2021-04-02',
                'vote_average' => 7.6,
                'overview' => "Drac tries out some new monster pets to help occupy Tinkles for playtime."
            ],
        ]);
    }
}
