import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import appName from './app-name.png';
import './styles/main.css';
import Movie from './components/Movie'

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7d6c5edae738317365e3235566d4c72d&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=7d6c5edae738317365e3235566d4c72d&query=";

function App() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  // const [showSearchBar, setShowSearchBar] = useState(false);

  const fetchMovies = (url) => {
    axios.get(url).then(response => {
      setMovies(response.data.results);
    }).catch(e => {
      console.log(e);
    })
  }

  useEffect(() => {
    fetchMovies(FEATURED_API);
    if (movies) setLoading(false);
  }, [FEATURED_API]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchInput) {
      fetchMovies(SEARCH_API + searchInput);
      setSearchInput('');
    }
  }

  const handleOnChange = (e) => {
    setSearchInput(e.target.value);
  }

  // const handleSearchButtonClick = (e) => {
  //   setShowSearchBar(!showSearchBar);
  // }

  return (
    <div className="root">
      <header>
        <img src={appName} className="app-name" alt="TheReviewer" />
        <img src={logo} className="logo" alt="logo" />
        <form onSubmit={handleOnSubmit}>
          <input className="search" placeholder="&#xf002; Search..." type="text" value={searchInput} onChange={handleOnChange} />
        </form>
      </header>
      <div className="about-us"> </div>
      <div className="movie-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          movies.map((movie) => <Movie key={movie.id} {...movie} />)
        )}
      </div>
    </div>
  );
}

export default App;


// API
// Featured: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key={}&page=1"
// Images: "https://image.tmdb.org/t/p/w1280"
// Search: "https://api.themoviedb.org/3/search/movie?&api_key={}&query="
