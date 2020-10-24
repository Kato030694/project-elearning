import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import classes from "./style.module.css";
export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className={["navbar-brand", "classes.color-full"]} href="#">
          Hello !
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/"
                activeStyle={{ color: "red" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/detail"
                activeStyle={{ color: "red" }}
              >
                Detail
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="sign-up"
                activeStyle={{ color: "red" }}
              >
                Sign Up
              </NavLink>
            </li>
            <NavLink
              className="nav-link"
              exact
              to="sign-in"
              activeStyle={{ color: "red" }}
            >
              Sign In
            </NavLink>
          </ul>
        </div>
      </nav>
    );
  }
}
