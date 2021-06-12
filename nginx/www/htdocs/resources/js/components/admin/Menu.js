import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Menu extends Component {
  render() {
    const style_header={color:'white'}
    return (
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <h3 style={style_header}> Review Movie</h3>
            </div>
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library */}
                <li className="nav-item has-treeview menu-open">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p style={style_header}>
                    DashBoard
                    <i className="right fas fa-angle-left" />
                  </p>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to={"/admin/create-expense"} className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>User</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"/admin/create-movie"} className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Movie</p>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    );
  }
}