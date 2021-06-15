import React, { useState, useEffect } from 'react';
import { Button } from '../utils/button/Button';
import { Link, useHistory } from 'react-router-dom';
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from 'axios';
import './NavBar.css';
import avatar from './avatar.svg';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { userCheck } from 'react-admin';

const StyledBadge = withStyles((theme) => ({
  badge: {
    // '& .MuiBadge-anchorOriginBottomRightCircle': {
    //   right: '26%',
    //   bottom: '26%',
    // },
    // '& .MuiBadge-root': {
    //   padding: '1rem 1rem',
    // },
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
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

const FEATURED_API = "https://de137c7ae962.ngrok.io/api/movies/";

function Navbar() {
  let history = useHistory();
  const classes = useStyles();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [search, setSearch] = useState(false);
  const [data, setData] = useState([]);
  const [auth, setAuth] = useState(false);

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
      setData(res.data);
    }).catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    showButton();
    const user_id = JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')).id:null;
    if (user_id) setAuth(true)
    fetchMoviesData(FEATURED_API);
  }, []);

  window.addEventListener('resize', showButton);

  const handleSearchClick = () => {
    setSearch(!search);
  }

  const handleSignOut = () => {
    setClick(false);
    setAuth(false);
    window.localStorage.clear();
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
                  style={{ width: 450, textAlign: 'center', padding: '1rem', textEmphasisColor: 'white' }}
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
              <Link
                to='/add-movie'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i className="fas fa-plus"></i>
              </Link>
            </li>
            {auth && <li className='nav-item'>
            <Link
                to='/'
                className='nav-links'
                onClick={handleSignOut}
              >
                Sign Out
              </Link>
            </li>}
            <li>
              {auth ? (
                <Link 
                  to='/profile'
                  className='nav-links'
                >
                  <StyledBadge
                    className='nav-links-badge'
                    overlap="circle"
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    variant="dot"
                  >
                    <Avatar alt="avatar" src={avatar} />
                  </StyledBadge>
                </Link>
              ) : (
                <Link
                  to='/sign-up'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              )}
              {button && !auth && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;