import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/home/Home';
import AddMovie from './components/AddMovie';
import AboutUs from './components/AboutUs';
import Search from './components/Search.js';
import SignUp from './components/SignUp';
import Detail from './components/detail/Detail';

import Admin from './components/admin/admin';
import EditUser from './components/admin/user/edit-user';
import ListUser from './components/admin/user/list-user';
import CreateUser from './components/admin/user/create-user';
import CreateMovie from './components/admin/movie/create-movie';
import ListMovie from './components/admin/movie/list-movie';
import EditMovie from './components/admin/movie/edit-movie';

import PublicRoute from './components/utils/router/PublicRoute';
import AdminRoute from './components/utils/router/AdminRoute';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

export default function App() {

  return (
    <>
      <Router>
        <Switch>
          <PublicRoute path='/' exact component={Home} />
          <PublicRoute path='/about-us' component={AboutUs} />
          <PublicRoute path='/add-movie' component={AddMovie} />
          <PublicRoute path='/search' component={Search} />
          <PublicRoute path='/sign-up' component={SignUp} />
          <PublicRoute path='/movie/:id' component={Detail} />

          <AdminRoute path='/admin' exact component={Admin} />
          <AdminRoute path='/admin/create-user' component={CreateUser} />
          <AdminRoute path='/admin/edit-user/:id' component={EditUser} />
          <AdminRoute path='/admin/list-user' component={ListUser} />
          <AdminRoute path='/admin/create-movie' component={CreateMovie} />
          <AdminRoute path='/admin/edit-movie/:id' component={EditMovie} />
          <AdminRoute path='/admin/list-movie' component={ListMovie} />
        </Switch>
      </Router>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
