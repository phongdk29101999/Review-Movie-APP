import React, { useState, useEffect } from 'react';
import { Button } from '../utils/button/Button';
import { Link, useHistory } from 'react-router-dom';
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from 'axios';
import './NavBar.css';

const useStyles = makeStyles((theme) => ({
  desktop: {
    "& .MuiInputBase-input": {
      color: "#fff"
    }
  },
  mobile: {
    "& .MuiInputBase-root": {
      background: "#fff"
    }
  }
}));

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7d6c5edae738317365e3235566d4c72d&page=1";

function Navbar() {
  let history = useHistory();
  const classes = useStyles();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [search, setSearch] = useState(false);
  const [data, setData] = useState([]);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
      setSearch(false);
    } else {
      setButton(true);
    }
  };

  const fetchMoviesData = async(url) => {
    await axios.get(url).then((res) => {
      setData(res.data.results);
    }).catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    showButton();
    fetchMoviesData(FEATURED_API);
  }, []);

  window.addEventListener('resize', showButton);

  const handleSearchClick = () => {
    setSearch(!search);
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TheReviewer
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item' style={{ alignSelf: 'center' }}>
              {search ? (
                <Autocomplete
                  id="custom-autocomplete"
                  options={data}
                  style={{ width: 350, textAlign: 'center', padding: '1rem', textEmphasisColor: 'white' }}
                  freeSolo
                  autoComplete
                  autoHighlight
                  getOptionLabel={(option) => {
                    return option.title;
                  }}
                  renderInput={(params) => {
                    return (
                      <TextField
                        {...params}
                        className={button ? classes.desktop : classes.mobile}
                        variant="outlined"
                        label={<b>Search for a movie</b>}
                      />
                    );
                  }}
                  renderOption={(option) => {
                    return <h4>{option.title}</h4>
                  }}
                  onChange={(event, newValue) => {
                    if (newValue.id) history.push(`/movie/${newValue.id}`);
                  }}
                />
              ) : null }
            </li>
            <li className='nav-item'>
              <div
                className='nav-links'
                onClick={handleSearchClick}
              >
                <i className="fas fa-search"></i>
              </div>
            </li>
            <li className='nav-item'>
              <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/add-movie'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i className="fas fa-plus"></i>
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;