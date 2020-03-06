import React, { Component } from "react";
import Header from "./Header";
import Events from "./Events";
import Offers from "./Offers";
import Influencers from "./Influencers";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Influencers />
        <Events />
        <Offers />
      </div>
    );
  }
}
