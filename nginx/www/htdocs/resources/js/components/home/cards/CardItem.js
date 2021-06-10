import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

function CardItem({ title, poster_path, overview, vote_average, release_date }) {

  const convertRateScale = (rate) => {
    return ((rate/10) * 5).toFixed(1);
  }

  const setRateColor = (rate) => {
    if (rate >= 8) {
      return 'green';
    } else if (rate >= 6) {
      return 'orange';
    } else {
      return 'red';
    }
  }

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={'/'}>
          <figure className='cards__item__pic-wrap' data-category={release_date}>
            <img
              className='cards__item__img'
              alt='Movie Poster'
              src={IMAGE_API + poster_path}
            />
          </figure>
          <div className='cards__item__info'>
            <h3>{title}</h3>
            <span className={`cards__item__tag ${setRateColor(vote_average)}`}>{convertRateScale(vote_average)}</span>
          </div>
          <div className="cards__item__overview">
            <h2>Overview:</h2>
            <p className='cards__item__text'>{overview}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;