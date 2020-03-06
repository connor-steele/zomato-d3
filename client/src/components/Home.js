import React, { Component } from "react";
import Header from "./Header";
import Events from "./Events";
<<<<<<< HEAD
=======
import Offers from "./Offers";
>>>>>>> 87802ac40ef0c874323ea456d2281747161c0ca2
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
