import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Ooma } from "../assets/images/omma-hero.jpg";
const oomaTwo = require("../assets/images/omma-hero-m.jpg");

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="header__name">Oooma</h1>
        <div className="header__name--container">
          <h5 className="subheader">Cuisine Type</h5>
          {/* <div className="img">trust</div> */}
        </div>
      </header>
    );
  }
}
