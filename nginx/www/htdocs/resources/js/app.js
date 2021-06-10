import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import AddMovie from './components/AddMovie';
import AboutUs from './components/AboutUs';
import Search from './components/Search.js';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about-us' exact component={AboutUs} />
        <Route path='/add-movie' component={AddMovie} />
        <Route path='/search' component={Search} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
