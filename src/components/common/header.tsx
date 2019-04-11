import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

export class Header extends Component {
  render() {
    return (
        <nav>
        <NavLink to="/" activeClassName="active" exact={true}>
          Home
        </NavLink>
        {' | '}
        <NavLink to="/courses" activeClassName="active">
          Courses
        </NavLink>
        {' | '}
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </nav>
    );
  }
}
