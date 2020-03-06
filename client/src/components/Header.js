import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/" className="header__home-link">
          <img className="header__home-link--logo" src="" alt="logo" />
        </Link>
        <h1 className="header__name">Restaurant Name</h1>
        <div className="header__name--container">
          <h5 className="subheader">Cuisine Type</h5>
          <div className="img">trust</div>
        </div>
      </header>
    );
  }
}
