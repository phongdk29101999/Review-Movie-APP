import React, {useState} from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import FormSuccess from './FormSuccess';
import './Form.css';
import authImg from './auth.svg';
import { FormControlLabel, Checkbox}  from '@material-ui/core';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  label: {
    '& .MuiTypography-body1': {
      color: 'aquamarine',
    }
  }
}));

export default function Signup ({ submitForm }) {
  const classes = useStyles();
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const [checked, setChecked] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOnChange = (event) => {
    setChecked(event.target.checked);
  };  

  function submitForm() {
    axios.post('http://localhost/api/auth/signup', {"name":values.username,"email":values.email, "password":values.password})
    .then( response =>{
      setIsSubmitted(true);
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
        {!isSubmitted || !checked ? (
          <div className='form-content-right'>
            <form onSubmit={handleSubmit} className='form' noValidate>
              <h1>
                Sign Up
              </h1>
              <div className='form-inputs'>
                <label className='form-label'>Username</label>
                <input
                  className='form-input'
                  type='text'
                  name='username'
                  placeholder='Enter your username'
                  value={values.username}
                  onChange={handleChange}
                />
                {errors.username && <p>{errors.username}</p>}
              </div>
              <div className='form-inputs'>
                <label className='form-label'>Email</label>
                <input
                  className='form-input'
                  type='email'
                  name='email'
                  placeholder='Enter your email'
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
                  placeholder='Enter your password'
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
              </div>
              <div className='form-inputs'>
                <label className='form-label'>Confirm Password</label>
                <input
                  className='form-input'
                  type='password'
                  name='password2'
                  placeholder='Confirm your password'
                  value={values.password2}
                  onChange={handleChange}
                />
                {errors.password2 && <p>{errors.password2}</p>}
              </div>
              <FormControlLabel
                className={classes.label}
                control={
                  <Checkbox
                    style={{color:'white'}}
                    checked={checked}
                    onChange={handleOnChange}
                  />
                }
                label="チーム６に満点を採点してくれる？"
              />
              <button className='form-input-btn' type='submit'>
                Sign up
              </button>
              <span className='form-input-login'>
                Already have an account? Login <a href='/login'>here</a>
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
