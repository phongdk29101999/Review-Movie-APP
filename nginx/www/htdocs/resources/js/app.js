import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import AddMovie from './components/AddMovie';
import AboutUs from './components/AboutUs';
import Search from './components/Search.js';
import SignUp from './components/SignUp';
import EditUser from "./components/admin/user/edit-user.component";
import ListUser from "./components/admin/user/list-user.component";
import CreateUser from "./components/admin/user/create-user.component";
import Admin from './components/admin/admin';
import CreateMovie from './components/admin/movie/create-movie';
import ListMovie from './components/admin/movie/list-movie';
import EditMovie from './components/admin/movie/edit-movie';

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
      {/* Admin */}
          <Route path="/admin" component={Admin} />
        <Route path="/admin/create-user" component={CreateUser} />
             <Route path="/admin/edit-user/:id" component={EditUser} />
          <Route path="/admin/list-user" component={ListUser} />
          <Route path="/admin/create-movie" component={CreateMovie} />
          <Route path="/admin/edit-movie/:id" component={EditMovie} />
        <Route path="/admin/list-movie" component={ListMovie} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
