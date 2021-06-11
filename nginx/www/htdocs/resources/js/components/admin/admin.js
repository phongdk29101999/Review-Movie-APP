
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import ReactDOM from 'react-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";
import EditUser from "./user/edit-user.component";
import ListUser from "./user/list-user.component";
import CreateUser from "./user/create-user.component";
import Header from "./header";
import Dashboard from "./Dashboard";
import Menu from "./Menu";
import logo from './logo.svg';

function Admin() {
  return (
    <div class="wrapper">
    <Header/>
    <Menu/>
    <Dashboard/>
  </div>
     
 );
}

export default Admin;

