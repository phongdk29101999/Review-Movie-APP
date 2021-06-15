import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

import './Profile.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Profile() {
  const classes = useStyles();
  const [reviews, setReviews] = useState([]);
  const [response, setResponse] = useState('');
  const user = JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')):null;
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [placeholder, setPlaceholder] = useState({
    name: '',
    email: '',
  });

  const isFormValid = () => {
    return (values.name.trim() == '') && (values.email.trim() == '') && (values.password.trim() == '');
  }

  const handleChange = e => {
    setResponse('');
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  function submitForm() {
    console.log(values);
    axios.post(`https://de137c7ae962.ngrok.io/api/users/${user.id}`, {
      "name": values.name, 
      "email": values.email,
      "password": values.password,
    })
    .then( response => {
      console.log(response);
      setResponse(response);
      setPlaceholder({
        'name': values.name,
        'email': values.email
      });
    })
    .catch(err => console.log(err))
  }

  const getReview = () =>{
    axios.get(`https://de137c7ae962.ngrok.io/api/users/${user.id}/reviews`)
    .then(response =>{
        setReviews([...response.data]);
    })
    .catch(e => {
      console.log(e);
    })
  }

  useEffect(() => {
    getReview();
    setPlaceholder({
      'name': user.name,
      'email': user.email
    });
  }, []);

  return (
    <div className="profile-container">
      <nav className="user-navbar">
          <a href="/"><i className="fa fa-fw fa-home"></i> Home</a>
          <a href="#info"><i className="fa fa-fw fa-user"></i> Info</a>
          <a href="#review-list"><i className="fas fa-comments"></i> Review</a>
      </nav>
      <br />
      <section className="info">
        <div className="info-left">
          <a href="#home"><img id="profilepic" src={'https://cdn.dribbble.com/users/1577045/screenshots/4914645/dribble_pic.png?compress=1&resize=400x300'}  width="170" height="170" alt="profilepic"/></a>
          <hr />
          <h1> Hi! I'm <b>{user.name}</b></h1>
          <a id="logo" href="/" ><img src={'https://umbala.tv/static/media/logo-top.9eda0e2b.png'} width="150" height="150" alt="logo" /></a> 
        </div>
        <div className="info-right">
          <form>
            <div className='form-inputs'>
              <label className='form-label'><b>名前</b></label>
              <input
                className='form-input'
                type='name'
                name='name'
                placeholder={placeholder.name}
                value={values.name}
                onChange={handleChange}
              />
            </div>
            <div className='form-inputs'>
              <label className='form-label'><b>メールアドレス</b></label>
              <input
                className='form-input'
                type='email'
                placeholder={placeholder.email}
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className='form-inputs'>
              <label className='form-label'><b>新しいパスワード</b></label>
              <input
                className='form-input'
                type='password'
                placeholder='****'
                value={values.password}
                onChange={handleChange}
              />
            </div>
            <button className='form-input-btn' type='submit' disabled={!isFormValid} onClick={submitForm} >
              Update
            </button>
          </form>
          {response ? <h2>{response}</h2> : null}
        </div>
      </section>
      <br />
      <section id="review-list" className="review-list">
        <h1>Review List</h1> 
        <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
              <TableCell><b>ID</b></TableCell>
                <TableCell><b>映画タイトル</b></TableCell>
                <TableCell><b>評価スコア</b></TableCell>
                <TableCell><b>コメント</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reviews.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.movie_title}</TableCell>
                  <TableCell>{row.rating}</TableCell>
                  <TableCell>{row.review_text}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </div>
  );
}
