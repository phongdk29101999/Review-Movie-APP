import React, {useState, useEffect} from 'react';
import './Cards.css';
import axios from 'axios';
import CardItem from './CardItem';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7d6c5edae738317365e3235566d4c72d&page=1";

function Cards() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async(url) => {
    await axios.get(url).then(response => {
      setMovies(response.data.results);
    }).catch(e => {
      console.log(e);
    })
  }

  useEffect(() => {
    fetchMovies(FEATURED_API);
    if (movies && loading) setLoading(false);
  }, [FEATURED_API]);

  return (
    <div className='cards'>
      <h1>Check out these EPIC Movies!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {loading ? (
              <p>Loading...</p>
            ) : (
              movies ? movies.map((movie) => <CardItem key={movie.id} {...movie} />) : null
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;