import React from 'react';
import '../app.css';

// const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=7d6c5edae738317365e3235566d4c72d&query=";

export default function Search() {
  // const [searchInput, setSearchInput] = useState('');
  // const [showSearchBar, setShowSearchBar] = useState(false);

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   if (searchInput) {
  //     fetchMovies(SEARCH_API + searchInput);
  //     setSearchInput('');
  //   }
  // }
    
  // const handleOnChange = (e) => {
  //   setSearchInput(e.target.value);
  // }

  // const handleSearchButtonClick = (e) => {
  //   setShowSearchBar(!showSearchBar);
  // }

  return (
    <>
      <h1 className='search'>SEARCH</h1>
      {/* <form onSubmit={handleOnSubmit}>
        <input className="search" placeholder="&#xf002; Search..." type="text" value={searchInput} onChange={handleOnChange} />
      </form> */}
    </>
  );
}