import React, { useState } from 'react';
import FormSuccess from './AddSuccess';
import newMovie from './newMovie.svg';
import './AddMovie.css';
import axios from 'axios';
import 'date-fns';

const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      resolve(fileReader.result);
    }
    fileReader.onerror = (error) => {
      reject(error);
    }
  })
}

export default function AddMovie () {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [values, setValues] = useState({
    title: '',
    overview: '',
    length: '',
    date: '',
    score: '',
    // poster_path: null,
    // backdrop_path: null,
    poster_path: '',
    backdrop_path: '',
  });

  const handleUploadImage = async(e) => {
    if (e.target.files && e.target.files[0]) {
        let img = e.target.files[0];
        // const base64 = await convertBase64(img);
        setValues({
            ...values,
            [e.target.name]: img,
        });
    }
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const isFormValid = () => {
    return values.title && values.overview && values.length && values.date && values.score && values.poster_path && values.backdrop_path
  }

  const handleFormSubmit = e => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log(values)
  };

  function submitForm() {
    axios.post('http://localhost/api/movies', {
      "title": values.title, 
      "overview": values.overview,
      "runtime": values.length,
      "poster_path": values.poster_path,
      "backdrop_path": values.backdrop_path,
      "release_date": values.date,
      "vote_average": values.score,
    })
    .then( response =>
      console.log(response)
    )
    .catch(err => console.log(err))
  }

  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        {!isSubmitted ? (
          <div className='form-content-left'>
            <form onSubmit={handleFormSubmit} className='form' noValidate>
              <h1>
                新しい映画を登録する
              </h1>
              <div className='form-inputs'>
                <label className='form-label'>タイトル　/　Title</label>
                <input
                  className='form-input'
                  type='title'
                  name='title'
                  placeholder='テキスト'
                  value={values.title}
                  onChange={handleChange}
                />
              </div>
              <div className='form-inputs'>
                <label className='form-label'>概要の内容　/　Overview</label>
                <input
                  className='form-input'
                  type='overview'
                  name='overview'
                  placeholder='テキスト'
                  value={values.overview}
                  onChange={handleChange}
                />
              </div>
              <div className='form-inputs'>
                <label className='form-label'>長さ　/　Length</label>
                <input
                  className='form-input'
                  type='length'
                  name='length'
                  placeholder='数字'
                  value={values.length}
                  onChange={handleChange}
                />
              </div>
              <div className='form-inputs'>
                <label className='form-label'>製作年　/　Release Date</label>
                <input
                  className='form-input'
                  type='date'
                  name='date'
                  placeholder='デート'
                  value={values.date}
                  onChange={handleChange}
                />
              </div>
              <div className='form-inputs'>
                <label className='form-label'>平均評価スコア　/　Vote Average</label>
                <input
                  className='form-input'
                  type='score'
                  name='score'
                  placeholder='数字（0−10）'
                  value={values.score}
                  onChange={handleChange}
                />
              </div>
              {/* <div className='form-inputs'>
                <label className='form-label'>映画ポスター　/　Poster</label>
                <input
                  className='form-input'
                  type='file'
                  name='poster_path'
                  placeholder='映画ポスター'
                  // value={values.poster_path}
                  onChange={handleUploadImage}
                />
              </div>
              <div className='form-inputs'>
                <label className='form-label'>背景写真　/　Background Image</label>
                <input
                  className='form-input'
                  type='file'
                  name='backdrop_path'
                  placeholder='映画ポスター'
                  // value={values.backdrop_path}
                  onChange={handleUploadImage}
                />
              </div> */}
              <div className='form-inputs'>
                <label className='form-label'>映画ポスター　/　Poster</label>
                <input
                  className='form-input'
                  type='poster_path'
                  name='poster_path'
                  placeholder='URL：http://...'
                  value={values.poster_path}
                  // onChange={handleUploadImage}
                  onChange={handleChange}
                />
              </div>
              <div className='form-inputs'>
                <label className='form-label'>背景写真　/　Background Image</label>
                <input
                  className='form-input'
                  type='backdrop_path'
                  name='backdrop_path'
                  placeholder='URL：http://...'
                  value={values.backdrop_path}
                  // onChange={handleUploadImage}
                  onChange={handleChange}
                />
              </div>
              <button className='form-input-btn' type='submit' disabled={!isFormValid}
                onClick={submitForm}
              >
                OK
              </button>
            </form>
          </div>
        ) : (
          <FormSuccess />
        )}
        <div className='form-content-right'>
          <img className='form-img' src={newMovie} alt='newMovie' />
        </div>
      </div>
    </>
  );
};
