import React, {useState, useEffect} from 'react';
import './Cards.css';
import axios from 'axios';
import CardItem from './CardItem';

const FEATURED_API = "http://localhost/api/movies/";

function Cards() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async(url) => {
    await axios.get(url).then(response => {
      console.log(response)
      setMovies(response.data);
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