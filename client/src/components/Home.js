import React, { Component } from "react";
import Header from "./Header";
import Events from "./Events";

import Influencers from "./Influencers";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Influencers />
        <Events />
      </div>
    );
  }
}
