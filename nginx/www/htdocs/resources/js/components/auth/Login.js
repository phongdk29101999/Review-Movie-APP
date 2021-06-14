import React, {useState} from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import FormSuccess from './FormSuccess';
import authImg from './auth.svg';
import './Form.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

export default function Login ({ submitForm }) {
  const history = useHistory();
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    axios.post('http://localhost/api/auth/login', {"email":values.email, "password":values.password})
    .then( response =>{
      localStorage.setItem('user',JSON.stringify({...response.data.user}));
      history.push("/");
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src={authImg} alt='welcome' />
        </div>
        {!isSubmitted ? (
          <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='form' noValidate>
              <h1>
                Login
              </h1>
              <div className='form-inputs'>
                <label className='form-label'>Email</label>
                <input
                  className='form-input'
                  type='email'
                  name='email'
                  placeholder='Enter your email. Hint: test@test.com'
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
              </div>
              <div className='form-inputs'>
                <label className='form-label'>Password</label>
                <input
                  className='form-input'
                  type='password'
                  name='password'
                  placeholder='Enter your password. Hint: test1234'
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
              </div>
              <button className='form-input-btn' type='submit' onClick={submitForm}>
                Login
              </button>
              <span className='form-input-login'>
                Don't have account yet? Sign Up <a href='/sign-up'>here</a>
              </span>
            </form>
          </div>
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};
