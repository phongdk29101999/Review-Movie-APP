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
                'poster' => 'https://image.tmdb.org/t/p/w500/A0knvX7rlwTyZSKj8H5NiARb45.jpg',
                'movie_lenght' => 134,
                'director' => 'Craig Gillespie',
                'production_year' => 2021,
                'expert_evaluation' => 8.7,
                'watched_evaluation' => 0.0,
                'description' => 'In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.',
            ],
            [
                'id' => '19404',
                'title' => 'Dilwale Dulhania Le Jayenge',
                'poster' => 'https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg',
                'movie_lenght' => 190,
                'director' => 'Aditya Chopra',
                'production_year' => 1995,
                'expert_evaluation' => 8.7,
                'watched_evaluation' => 0.0,
                'description' => 'Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.',
            ],
            [
                'id' => 724089,
                'title' => "Gabriel's Inferno Part II",
                'poster' => 'https://image.tmdb.org/t/p/w500/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg',
                'movie_lenght' => 105,
                'director' => 'Tosca Musk',
                'production_year' => 2020,
                'expert_evaluation' => 8.7,
                'watched_evaluation' => 0.0,
                'description' => "Professor Gabriel Emerson finally learns the truth about Julia Mitchell's identity, but his realization comes a moment too late. Julia is done waiting for the well-respected Dante specialist to remember her and wants nothing more to do with him. Can Gabriel win back her heart before she finds love in another's arms?",
            ],
            [
                'id' => 278,
                'title' => 'The Shawshank Redemption',
                'poster' => 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
                'movie_lenght' => 142,
                'director' => 'Frank Darabont',
                'production_year' => 1994,
                'expert_evaluation' => 8.7,
                'watched_evaluation' => 0.0,
                'description' => 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
            ],
            [
                'id' => 238,
                'title' => 'The Godfather',
                'poster' => 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
                'movie_lenght' => 175,
                'director' => 'Francis Ford Coppola',
                'production_year' => 1972,
                'expert_evaluation' => 8.7,
                'watched_evaluation' => 0.0,
                'description' => 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
            ],
            [
                'id' => 761053,
                'title' => "Gabriel's Inferno Part III",
                'poster' => 'https://image.tmdb.org/t/p/w500/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg',
                'movie_lenght' => 105,
                'director' => 'Tosca Musk',
                'production_year' => 2020,
                'expert_evaluation' => 8.7,
                'watched_evaluation' => 0.0,
                'description' => "The final part of the film adaption of the erotic romance novel Gabriel's Inferno written by an anonymous Canadian author under the pen name Sylvain Reynard.",
            ],
            [
                'id' => 696374,
                'title' => "Gabriel's Inferno",
                'poster' => 'https://image.tmdb.org/t/p/w500/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg',
                'movie_lenght' => 122,
                'director' => 'Tosca Musk',
                'production_year' => 2020,
                'expert_evaluation' => 8.7,
                'watched_evaluation' => 0.0,
                'description' => "An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel's Inferno is a captivating and wildly passionate tale of one man's escape from his own personal hell as he tries to earn the impossible--forgiveness and love.",
            ],
            [
                'id' => 424,
                'title' => "Schindler's List",
                'poster' => 'https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg',
                'movie_lenght' => 195,
                'director' => 'Steven Spielberg',
                'production_year' => 1993,
                'expert_evaluation' => 8.6,
                'watched_evaluation' => 0.0,
                'description' => "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
            ],
            [
                'id' => 240,
                'title' => "The Godfather: Part II",
                'poster' => 'https://image.tmdb.org/t/p/w500/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg',
                'movie_lenght' => 202,
                'director' => 'Francis Ford Coppola',
                'production_year' => 1974,
                'expert_evaluation' => 8.6,
                'watched_evaluation' => 0.0,
                'description' => "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
            ],
            [
                'id' => 372058,
                'title' => "Your Name.",
                'poster' => 'https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg',
                'movie_lenght' => 106,
                'director' => 'Makoto Shinkai',
                'production_year' => 2016,
                'expert_evaluation' => 8.6,
                'watched_evaluation' => 0.0,
                'description' => "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
            ],
            [
                'id' => 423108,
                'title' => "The Conjuring: The Devil Made Me Do It",
                'poster' => 'https://image.tmdb.org/t/p/w500/xbSuFiJbbBWCkyCCKIMfuDCA4yV.jpg',
                'movie_lenght' => 111,
                'director' => 'Michael Chaves',
                'production_year' => 2021,
                'expert_evaluation' => 8.5,
                'watched_evaluation' => 0.0,
                'description' => "Paranormal investigators Ed and Lorraine Warren encounter what would become one of the most sensational cases from their files. The fight for the soul of a young boy takes them beyond anything they'd ever seen before, to mark the first time in U.S. history that a murder suspect would claim demonic possession as a defense.",
            ],
            [
                'id' => 129,
                'title' => "Spirited Away",
                'poster' => 'https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
                'movie_lenght' => 125,
                'director' => 'Hayao Miyazaki',
                'production_year' => 2001,
                'expert_evaluation' => 8.5,
                'watched_evaluation' => 0.0,
                'description' => "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
            ],
            [
                'id' => 496243,
                'title' => "Parasite",
                'poster' => 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
                'movie_lenght' => 133,
                'director' => 'Bong Joon-ho',
                'production_year' => 2019,
                'expert_evaluation' => 8.5,
                'watched_evaluation' => 0.0,
                'description' => "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
            ],
            [
                'id' => 447362,
                'title' => "Life in a Year",
                'poster' => 'https://image.tmdb.org/t/p/w500/7EuZIYEHLTu1G69maFLwg13u5iB.jpg',
                'movie_lenght' => 107,
                'director' => 'Mitja Okorn',
                'production_year' => 2020,
                'expert_evaluation' => 8.5,
                'watched_evaluation' => 0.0,
                'description' => "A 17 year old finds out that his girlfriend is dying, so he sets out to give her an entire life, in the last year she has left.",
            ],
            [
                'id' => 497,
                'title' => "The Green Mile",
                'poster' => 'https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg',
                'movie_lenght' => 189,
                'director' => 'Frank Darabont',
                'production_year' => 1999,
                'expert_evaluation' => 8.5,
                'watched_evaluation' => 0.0,
                'description' => "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
            ],
            [
                'id' => 441130,
                'title' => "Wolfwalkers",
                'poster' => 'https://image.tmdb.org/t/p/w500/uRkDrsKwCCZC9zdHZs2CFTt1ATZ.jpg',
                'movie_lenght' => 103,
                'director' => 'Tomm Moore',
                'production_year' => 2020,
                'expert_evaluation' => 8.5,
                'watched_evaluation' => 0.0,
                'description' => "In a time of superstition and magic, when wolves are seen as demonic and nature an evil to be tamed, a young apprentice hunter comes to Ireland with her father to wipe out the last pack. But when she saves a wild native girl, their friendship leads her to discover the world of the Wolfwalkers and transform her into the very thing her father is tasked to destroy.",
            ],
            [
                'id' => 592350,
                'title' => "My Hero Academia: Heroes Rising",
                'poster' => 'https://image.tmdb.org/t/p/w500/zGVbrulkupqpbwgiNedkJPyQum4.jpg',
                'movie_lenght' => 104,
                'director' => 'Kenji Nagasaki',
                'production_year' => 2019,
                'expert_evaluation' => 8.5,
                'watched_evaluation' => 0.0,
                'description' => "Class 1-A visits Nabu Island where they finally get to do some real hero work. The place is so peaceful that it's more like a vacation … until they're attacked by a villain with an unfathomable Quirk! His power is eerily familiar, and it looks like Shigaraki had a hand in the plan. But with All Might retired and citizens' lives on the line, there's no time for questions. Deku and his friends are the next generation of heroes, and they're the island's only hope.",
            ],
            [
                'id' => 680,
                'title' => "Pulp Fiction",
                'poster' => 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
                'movie_lenght' => 154,
                'director' => 'Quentin Tarantino',
                'production_year' => 1994,
                'expert_evaluation' => 8.5,
                'watched_evaluation' => 0.0,
                'description' => "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
            ],
            [
                'id' => 632357,
                'title' => "The Unholy",
                'poster' => 'https://image.tmdb.org/t/p/w500/bShgiEQoPnWdw4LBrYT5u18JF34.jpg',
                'movie_lenght' => 99,
                'director' => 'Evan Spiliotopoulos',
                'production_year' => 2021,
                'expert_evaluation' => 7.1,
                'watched_evaluation' => 0.0,
                'description' => "Alice, a young hearing-impaired girl who, after a supposed visitation from the Virgin Mary, is inexplicably able to hear, speak and heal the sick. As word spreads and people from near and far flock to witness her miracles, a disgraced journalist hoping to revive his career visits the small New England town to investigate. When terrifying events begin to happen all around, he starts to question if these phenomena are the works of the Virgin Mary or something much more sinister.",
            ],
            [
                'id' => 389,
                'title' => "12 Angry Men",
                'poster' => 'https://image.tmdb.org/t/p/w500/ppd84D2i9W8jXmsyInGyihiSyqz.jpg',
                'movie_lenght' => 97,
                'director' => 'Sidney Lumet',
                'production_year' => 1957,
                'expert_evaluation' => 8.5,
                'watched_evaluation' => 0.0,
                'description' => "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
            ],
            [
                'id' => 122,
                'title' => "The Lord of the Rings: The Return of the King",
                'poster' => 'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
                'movie_lenght' => 201,
                'director' => 'Peter Jackson',
                'production_year' => 2003,
                'expert_evaluation' => 8.5,
                'watched_evaluation' => 0.0,
                'description' => "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
            ],
        ]);
    }
}
