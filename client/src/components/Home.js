import React, { Component } from "react";
import Header from "./Header";
import Events from "./Events";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Events />
      </div>
    );
  }
}
