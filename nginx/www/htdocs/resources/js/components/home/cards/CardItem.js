import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Cards.css';



function CardItem({ title, poster_path, overview, vote_average, release_date, id }) {
  let history = useHistory();
  // const convertRateScale = (rate) => {
  //   return ((rate/10) * 5).toFixed(1);
  // }

  const setRateColor = (rate) => {
    if (rate >= 8) {
      return 'green';
    } else if (rate >= 6) {
      return 'orange';
    } else {
      return 'red';
    }
  }
  const handleClick = () =>{
    history.push(`/movie/${id}`);
  }


  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link' >
          <figure className='cards__item__pic-wrap' data-category={release_date}>
            <img
              className='cards__item__img'
              alt='Movie Poster'
              src={ poster_path}
              onClick={handleClick}
              loading = 'lazy'
            />
          </figure>
          <div className='cards__item__info'>
            <h3>{title}</h3>
            <span className={`cards__item__tag ${setRateColor(vote_average)}`}>{vote_average.toFixed(1)}</span>
          </div>
          <div className="cards__item__overview">
            <h2>Overview:</h2>
            <p className='cards__item__text'>{overview}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;