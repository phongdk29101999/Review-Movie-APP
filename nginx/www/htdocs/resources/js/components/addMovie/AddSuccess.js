import React from 'react';
import './AddMovie.css';
import okImg from './ok.svg';

const FormSuccess = () => {
  return (
    <div className='form-content-left'>
      <h1 className='form-success'>Add new movie succesfully!</h1>
      <img className='form-img-2' src={okImg} alt='success-image' />
    </div>
  );
};

export default FormSuccess;
