import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/home/Home';
import AddMovie from './components/AddMovie';
import AboutUs from './components/AboutUs';
import Detail from './components/detail/Detail';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';

import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import MovieShow from './components/admin/MovieShow';
import MovieList from './components/admin/MovieList';
import MovieCreate from './components/admin/MovieCreate';
import MovieEdit from './components/admin/MovieEdit';
import UserList from './components/admin/UserList';
import UserCreate from './components/admin/UserCreate';
import UserEdit from './components/admin/UserEdit';

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
          <PublicRoute path='/movie/:id' component={Detail} />
          <PublicRoute path='/sign-up' component={SignUp} />
          <PublicRoute path='/login' component={Login} />

          <Admin dataProvider={restProvider('http://localhost/api')}>
            <Resource
              name='movies'
              show={MovieShow}
              list={MovieList}
              create={MovieCreate}
              edit={MovieEdit}
            />
            <Resource
              name='users'
              list={UserList}
              create={UserCreate}
              edit={UserEdit}
            />
          </Admin>

          {/* <AdminRoute path='/admin' exact component={Admin} />
          <AdminRoute path='/admin/create-user' component={CreateUser} />
          <AdminRoute path='/admin/edit-user/:id' component={EditUser} />
          <AdminRoute path='/admin/list-user' component={ListUser} />
          <AdminRoute path='/admin/create-movie' component={CreateMovie} />
          <AdminRoute path='/admin/edit-movie/:id' component={EditMovie} />
          <AdminRoute path='/admin/list-movie' component={ListMovie} /> */}
        </Switch>
      </Router>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
