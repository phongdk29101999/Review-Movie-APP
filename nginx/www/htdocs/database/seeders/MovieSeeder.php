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
                'title' => 'クルエラ',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/rTh4K5uw9HypmpGslcKd4QfHl93.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg',
                'release_date' => '2021-05-26',
                'vote_average' => 8.6,
                'overview' => 'ディズニーの名作アニメ「１０１匹わんちゃん」に登場するヴィラン（悪役）“クルエラ”の誕生秘話を「ラ・ラ・ランド」のエマ・ストーン主演で実写映画化したエンタテインメント大作。70年代のロンドンを舞台に、ファッション・デザイナーを夢見て都会にやって来た少女が、いかにして冷酷非道な悪女“クルエラ”へと変貌していったかをパンクかつスタイリッシュに描き出す。共演はエマ・トンプソン、マーク・ストロング。監督は「ラースと、その彼女」「アイ,トーニャ　史上最大のスキャンダル」のクレイグ・ギレスピー。

                　親を亡くした少女エステラは、ファッション・デザイナーを目指してパンクムーブメント吹き荒れるロンドンへとやって来る。そしてロンドンで最も有名な百貨店リバティに潜り込んだ彼女は、やがて伝説的なカリスマ・デザイナーのバロネスに出会うと、その斬新な発想力と度胸の良さを買われ、彼女の下で働き始めるのだったが…。'
            ],
            [
                'id' => 423108,
                'title' => '死霊館 悪魔のせいなら、無罪。',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/xbSuFiJbbBWCkyCCKIMfuDCA4yV.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/qi6Edc1OPcyENecGtz8TF0DUr9e.jpg',
                'release_date' => '2021-05-25',
                'vote_average' => 8.3,
                'overview' => "「IT／イット」「アナベル」の製作スタジオ × ジェームズ・ワン
                全世界メガヒットシリーズ興収18億ドル超え 「死霊館」ユニバース待望の最新作にして最恐作！
                全米震撼した前代未聞の殺人事件＜実話＞ ウォーレン夫妻絶体絶命！？ 彼らが最も衝撃を受けたヤバイ事件の真相とは？"
            ],
            [
                'id' => 637649,
                'title' => 'ラース・オブ・マン',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/M7SUK85sKjaStg4TKhlAVyGlz3.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/70AV2Xx5FQYj20labp0EGdbjI6E.jpg',
                'release_date' => '2021-04-22',
                'vote_average' => 7.9,
                'overview' => "ロサンゼルスの現金トラック会社のための冷たく神秘的な新しい警備員は、彼が強盗の間に精密なスキルを解き放つときに彼の同僚を驚かせます。乗組員は、彼が誰で、どこから来たのか疑問に思っています。まもなく、マークマンの究極の動機は、彼がスコアを解決するために劇的で取り返しのつかないステップを取るにつれて明らかになります。"
            ],
            [
                'id' => 632357,
                'title' => '不浄',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/bShgiEQoPnWdw4LBrYT5u18JF34.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/jw6ASGRT2gi8EjCImpGtbiJ9NQ9.jpg',
                'release_date' => '2021-03-31',
                'vote_average' => 7.1,
                'overview' => "アリスは、聖母マリアからの訪問の後、不可解に聞き、話し、病気を癒すことができる若い聴覚障害の女の子です。言葉が広がり、近くや遠くから人々が彼女の奇跡を目撃するために群がるにつれて、彼のキャリアを復活させることを望む不名誉なジャーナリストが調査するために小さなニューイングランドの町を訪れます。恐ろしい出来事が起こり始めると、彼はこれらの現象が聖母マリアの作品なのか、それとももっと不吉なものなのか疑問を持ち始めます。"
            ],
            [
                'id' => 602734,
                'title' => 'スパイラル:ソウ オールリセット',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/lcyKve7nXRFgRyms9M1bndNkKOx.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/7JENyUT8ABxcvrcijDBVpdjgCY9.jpg',
                'release_date' => '2021-05-12',
                'vote_average' => 6.5,
                'overview' => "ベテランの警官マーカスが尊敬を集める一方で、目立たぬも勇敢な刑事エゼキエル・’ジーク’・バンクスと彼の新人パートナーであるウィリアム・シェンクが街の陰惨な過去を不気味に思い出させる恐ろしい殺人事件の調査を担当することになる。知らず知らずのうちに深まる謎に閉じ込められたジークは、自らが殺人鬼の病的なゲームの中心にいることに気づき始める"
            ],
            [
                'id' => 520763,
                'title' => 'クワイエット・プレイス　破られた沈黙',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/z2UtGA1WggESspi6KOXeo66lvLx.jpg',
                'release_date' => '2021-05-21',
                'vote_average' => 7.3,
                'overview' => "エミリー・ブラント主演で、音に反応して人類を襲う“何か”によって文明社会が荒廃した世界を舞台に、過酷なサバイバルを繰り広げる一家の姿を描き、全米でスマッシュヒットを記録したサスペンスホラー「クワイエット・プレイス」の続編。生まれたばかりの赤ん坊と耳の不自由な娘のリーガン、息子のマーカスを連れ、燃えてしまった家に代わる新たな避難場所を探して旅に出たエヴリン。一同は、新たな謎と脅威にあふれた外の世界で、いつ泣き出すかわからない赤ん坊を抱えてさまようが……。"
            ],
            [
                'id' => 503736,
                'title' => 'アーミー・オブ・ザ・デッド',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/z8CExJekGrEThbpMXAmCFvvgoJR.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/9WlJFhOSCPnaaSmsrv0B4zA8iUb.jpg',
                'release_date' => '2021-05-14',
                'vote_average' => 6.5,
                'overview' => "ある日突然、ゾンビが大量発生し、人類は多くの犠牲を払いながらもラスベガスにゾンビを隔離することに成功した。ゾンビとの死闘の後、静かに暮らしていたスコットは、謎の男タナカの依頼により、ラスベガス地下の巨大金庫に残された2億ドルの現金を回収するという計画に加担することに。同じく招集されたクセ者だらけの傭兵たちとともに、大量のゾンビで埋め尽くされた危険エリアに侵入し、屈強で俊敏なゾンビたちと激しい戦いを繰り広げる。"
            ],
            [
                'id' => 460465,
                'title' => 'モータルコンバット',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg',
                'release_date' => '2021-04-07',
                'vote_average' => 7.5,
                'overview' => "胸にドラゴンの形をしたアザを持つ総合格闘技選手コール・ヤングは、自身の生い立ちを知らないまま、金を稼ぐために戦う日々を送っていた。そんなある日、魔界の皇帝シャン・ツンがコールを倒すため、最強の刺客サブ・ゼロを送り込む。コールは特殊部隊少佐ジャックスに言われるがまま女戦士ソニア・ブレイドと合流し、地球の守護者ライデンの寺院へ向かう。そこでコールは、太古より繰り広げられてきた格闘トーナメント「モータルコンバット」の存在と、自分が魔界の敵と戦うために選ばれた戦士であることを知る。"
            ],
            [
                'id' => 399566,
                'title' => 'ゴジラVSコング',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg',
                'release_date' => '2021-03-24',
                'vote_average' => 8,
                'overview' => "モンスターの戦いで壊滅的な被害を受けた地球。人類は各地で再建を計り、特務機関モナークは未知の土地で危険な任務にあたりながら、巨大怪獣のルーツの手がかりを掴もうとしていた。そんななか、ゴジラが深海の暗闇から再び姿を現し、世界を危機へ陥れる。人類は対抗措置として、コングを髑髏島（スカルアイランド）から連れ出す。人類の生き残りをかけた戦いは、やがてゴジラ対コングという未曽有の対決を引き起こす。"
            ],
            [
                'id' => 817451,
                'title' => '絶滅危惧種',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/ccsSqbpEqr2KK9eMvoeF8ERFCd5.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/A0xW7GgeFQoQmPOn7HcHkBQ5nlb.jpg',
                'release_date' => '2021-05-27',
                'vote_average' => 7.5,
                'overview' => "ジャック・ハルシーは妻、大人の子供たち、そして友人をケニアでの夢の休暇に連れて行きます。しかし、彼らが荒野の公園に一人で冒険すると、彼らのサファリバンは怒っているサイによってひっくり返され、彼らは負傷し、絶望的なままにします。その後、そのうちの2人が救助を求めて行くと、ヒョウとハイエナの一族との血まみれの悪質な出会いは、生存のための絶望的な戦いを扇動します。"
            ],
            [
                'id' => 567189,
                'title' => 'ウィズアウト・リモース ',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/rEm96ib0sPiZBADNKBHKBv5bve9.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/fPGeS6jgdLovQAKunNHX8l0avCy.jpg',
                'release_date' => '2021-04-29',
                'vote_average' => 7.2,
                'overview' => "『ウィズアウト・リモース』は、2021年公開のアメリカ合衆国のアクションスリラー映画。監督はステファノ・ソリマ、出演はマイケル・B・ジョーダンとジェイミー・ベルなど。原作はトム・クランシーの「容赦なく」。Amazonプライム・ビデオの独占配信であり、劇場公開は見送られた。"
            ],
            [
                'id' => 527774,
                'title' => 'ラーヤと龍の王国',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/hJuDvwzS0SPlsE6MNFOpznQltDZ.jpg',
                'release_date' => '2021-03-03',
                'vote_average' => 8.2,
                'overview' => "龍の王国を舞台に少女の戦いと成長を描くディズニーの長編アニメーション。聖なる龍たちに守られた王国。人びとが平和に暮らすその王国を邪悪な悪魔が襲った。龍たちは自らを犠牲に王国を守ったが、残された人びとは信じる心を失っていった。500年の時が経ち、王国をふたたび魔物が襲う。聖なる龍の力が宿るという「龍の石」の守護者一族の娘ラーヤは、王国に平和を取り戻すため、姿を消した最後の龍の力をよみがえらせる旅に出る。"
            ],
            [
                'id' => 578701,
                'title' => '死んで欲しい人たち',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/xCEg6KowNISWvMh8GvPSxtdf9TO.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/ouOojiypBE6CD1aqcHPVq7cJf2R.jpg',
                'release_date' => '2021-05-05',
                'vote_average' => 7,
                'overview' => "若い男の子は、彼を保護することを決意した生存の専門家とモンタナの荒野で2人の暗殺者によって追求自分自身を見つける - とそれらすべてを消費すると脅す森林火災。"
            ],
            [
                'id' => 635302,
                'title' => "劇場版「鬼滅の刃」無限列車編",
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/xPpXYnCWfjkt3zzE0dpCNME1pXF.jpg',
                'release_date' => '2020-10-16',
                'vote_average' => 8.4,
                'overview' => "蝶屋敷での修業を終えた炭治郎たちは、次なる任務の地、《無限列車》に到着する。 そこでは、短期間のうちに四十人以上もの人が行方不明になっているという。 禰豆子を連れた炭治郎と善逸、伊之助の一行は、 鬼殺隊最強の剣士である《柱》のひとり、炎柱の煉獄杏寿郎と合流し、 闇を往く《無限列車》の中で、鬼と立ち向かうのだった。"
            ],
            [
                'id' => 791373,
                'title' => 'ジャスティス・リーグ：ザック・スナイダーカット',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg',
                'release_date' => '2021-03-18',
                'vote_average' => 8.5,
                'overview' => "スーパーマンの犠牲を無駄にしてはいけないと考えたブルース・ウェインはダイアナ・プリンスと組み、迫りくる脅威から世界を守るため超人たちのチームを作ることを決意。一筋縄ではいかない個性的なヒーローたちは、それぞれに過去を抱えながらも、チームとしてひとつにまとまっていくが……。2017年公開版には出番のなかったジャレッド・レト演じるジョーカーや、同じく初登場となる悪役マーシャン・マンハンターなど、新たなキャラクターも多数参戦。アクアマン、フラッシュ、サイボーグらヒーローたちのサイドストーリーも多く盛り込まれる。"
            ],
            [
                'id' => 808023,
                'title' => 'ザ・ヴィルトゥオーソ',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/vXHzO26mJaOt4VO7ZFiM6No5ScT.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/efrdAWS63s8TTWdrI2uNdIhn1dj.jpg',
                'release_date' => '2021-04-30',
                'vote_average' => 6.3,
                'overview' => "凄腕の暗殺者、ヴィルトゥオーソは師匠に借りを返すべく、ある極秘任務を遂行することになった。その任務とは「午後5時にダイナーにいるターゲットを暗殺せよ」というものであった。それ以外に情報を得られぬまま現地へ赴いたヴィルトゥオーソだったが、運の悪いことに、ダイナーには複数人の客とウェイトレスがおり、誰がターゲットなのか容易に特定できない状況に陥った。しかも、ヴィルトゥオーソはウェイトレスの怪しげな誘惑に魅了されてしまい、一気に歯車が狂っていくのだった。"
            ],
            [
                'id' => 615457,
                'title' => 'Mr.ノーバディ ',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg',
                'release_date' => '2021-03-26',
                'vote_average' => 8.4,
                'overview' => 'ハッチ・マンセルは、同じ日々をくり返す平凡な男だった。家族ひとすじの生活をしている。

                ある夜、2人の泥棒がハッチの家に侵入した。彼はゴルフのクラブを持っていたが、それで泥棒を殴ることはしなかった。そのため息子のブレイクと妻のベッカはハッチに失望し、彼から離れ始めてしまう。娘のネコのブレスレットがなくなったことに気づき、憤慨して泥棒の家を探り出そうとする。この事件がきっかけとなり、彼の暗い秘密を明らかになってしまう '
            ],
            [
                'id' => 726684,
                'title' => "ミラキュラス・ワールド／上海　レジェンド・オブ・レディドラゴン",
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/msI5a9TPnepx47JUb2vl88hb80R.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/rlNnwObbMu5G2FaOUlacnUIdIIA.jpg',
                'release_date' => '2021-04-04',
                'vote_average' => 7.9,
                'overview' => "学校の休憩中、マリネットはエイドリアンに会うために上海に向かいます。しかし、到着後、マリネットは、彼女がてんとう虫に変身することを可能にする奇跡を含む、彼女のすべてのものを失います!"
            ],
            [
                'id' => 823855,
                'title' => 'アイ・アム・オール・ガールズ',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/m6bUeV4mczG3z2YXXr5XDKPsQzv.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yyWNPhP1HR4BTLErHcZwIUsMBvA.jpg',
                'release_date' => '2021-05-14',
                'vote_average' => 6.7,
                'overview' => "特別犯罪捜査官は、世界的な児童性的人身売買シンジケートを倒すために連続殺人犯とのありそうもない絆を形成します。"
            ],
            [
                'id' => 813258,
                'title' => 'モンスターペット:ホテルトランシルバニアショート',
                'runtime' =>134,
                'poster_path' => 'https://image.tmdb.org/t/p/w1280/dkokENeY5Ka30BFgWAqk14mbnGs.jpg',
                'backdrop_path' => 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/qqkpwhiB1BQcSvegL10uHKMzKKl.jpg',
                'release_date' => '2021-04-02',
                'vote_average' => 7.6,
                'overview' => "Dracは遊び時間のためにティンクルを占有するのを助けるためにいくつかの新しいモンスターのペットを試してみる。"
            ],
        ]);
    }
}
