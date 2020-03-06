import React, { Component } from "react";
import { Link } from "react-router-dom";

import InfluencerLogo from "../assets/icons/Influencer-Profile-Icon.svg";
import MapPlaceholder from "../assets/icons/Map-Placeholder.svg";

export default class Influencers extends Component {
  render() {
    return (
      <div className="influencers__container">
        {/* <div className="influencers__form"> */}
        {/* INFLUENCER BLOCK */}
        <div className="influencers__block">
          <div className="influencers__block--right">
            <div className="influencers__influencers">
              <h3 className="influencers__block--text">Influencers</h3>
              <div className="influencers__block--desktop">
                <Link to="/missthang">
                  <img
                    src={InfluencerLogo}
                    alt="influencer"
                    className="influencer__photo"
                  />
                </Link>
                <img
                  src={InfluencerLogo}
                  alt="influencer"
                  className="influencer__photo"
                />
                <img
                  src={InfluencerLogo}
                  alt="influencer"
                  className="influencer__photo"
                />
              </div>
            </div>

            {/* MENU BUTTON BLOCK */}
            <div className="menu__block--desktop">
              <button className="menu__button">MENU</button>
            </div>
            {/* MENU BUTTON BLOCK */}
          </div>

          <div className="influencers__block--left">
            <img
              src={InfluencerLogo}
              alt="influencer"
              className="influencer__photo"
            />
            <img
              src={InfluencerLogo}
              alt="influencer"
              className="influencer__photo"
            />
            <img
              src={InfluencerLogo}
              alt="influencer"
              className="influencer__photo"
            />
          </div>

          {/* INFLUENCER BLOCK */}
        </div>
        {/* </div> */}
        {/* LOCATION BLOCK */}
        <div className="location__block">
          <div className="location__block--left">
            <div className="location__block--address">
              <div className="location__block--streetName">123 Street Name</div>
              <div className="location__block--city">Vancouver, CA</div>
              <div className="location__block--areaCode">v7h123</div>
              <div className="location__block--directions">directions</div>
            </div>
          </div>
          <div className="location__block--right">
            <div className="google__maps">
              <img alt="test" src={MapPlaceholder} />
            </div>
          </div>
        </div>
        {/* LOCATION BLOCK */}
        {/* MENU BUTTON BLOCK */}
        <div className="menu__block--mobile">
          <button className="menu__button">MENU</button>
        </div>
        {/* MENU BUTTON BLOCK */}
      </div>
    );
  }
}
