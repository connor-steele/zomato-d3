import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import ingestLogo from "../assets/logos/ingest-logo.svg";
import profPic from "../assets/icons/missthang.png";
import greenStar from "../assets/icons/star-active.svg";
import grayStar from "../assets/icons/star-inactive.svg";
import oomaPixM from "../assets/images/omma-herocard.jpg";
import verified from "../assets/icons/flag-trust.svg";
import reallyVerified from "../assets/icons/flag-high-trust.svg";
export default class MissThang extends Component {
  render() {
    return (
      <>
        <header className="prof-header">
          <Link to="/">
            <img
              src={ingestLogo}
              alt="ingest-logo"
              className="prof-header__img"
            />
          </Link>
          <div className="prof-header__container">
            <h1 className="prof-header__container--title">Miss Thang</h1>
            <img
              src={profPic}
              alt="prof-pic"
              className="prof-header__container--img"
            />
          </div>
        </header>
        <main className="main">
          <div className="main__rating">
            <h5 className="main__rating--title">Taste Rating</h5>
            <div className="main__rating--stars">
              <img src={greenStar} alt="stars" className="size" />
              <img src={greenStar} alt="stars" className="size" />
              <img src={greenStar} alt="stars" className="size" />
              <img src={greenStar} alt="stars" className="size" />
              <img src={grayStar} alt="stars" className="size" />
            </div>
          </div>
          <div className="main__content">
            <h5 className="main__content--title">Who am I?</h5>
            <p className="main__content--para">
              Wanting to combine her love for the culinary industry and digital
              marketing further, Jackie took a role as the Senior Digital Media
              Executive + Photographer at lifestyle and social marketing agency,
              Becca PR.
            </p>
          </div>
        </main>
        <section className="quote">
          <h3 className="quote__text">
            Influencer quote about whatever things.
          </h3>
        </section>
        <section className="heading">
          <h5 className="heading__txt">Places I love</h5>
          <div className="holder">
            <card className="holder__card">
              <img src={reallyVerified} alt="verified" className="absolute" />

              <img
                src={oomaPixM}
                alt="card-img"
                className="holder__card--img"
              />
              <h3 className="holder__card--subheader">Ooma</h3>
              <p className="holder__card--text">Japanese, Sushi</p>
              <p className="holder__card--text">Mandaluyong City</p>
              <footer className="holder__card--footer">
                <button className="button">
                  <h5 className="subheader">VISIT</h5>
                </button>
              </footer>
            </card>
            <card className="holder__card">
              <img src={reallyVerified} alt="verified" className="absolute" />

              <img
                src={oomaPixM}
                alt="card-img"
                className="holder__card--img"
              />
              <h3 className="holder__card--subheader">Izakaya Kikufuji</h3>
              <p className="holder__card--text">Japanese</p>
              <p className="holder__card--text">Makati City</p>
              <footer className="holder__card--footer">
                <button className="button">
                  <h5 className="subheader">VISIT</h5>
                </button>
              </footer>
            </card>
            <card className="holder__card">
              <img src={verified} alt="verified" className="absolute" />

              <img
                src={oomaPixM}
                alt="card-img"
                className="holder__card--img"
              />
              <h3 className="holder__card--subheader">Le Petit Souffle</h3>
              <p className="holder__card--text">French, Japanese, Desserts</p>
              <p className="holder__card--text">Makati City</p>
              <footer className="holder__card--footer">
                <button className="button">
                  <h5 className="subheader">VISIT</h5>
                </button>
              </footer>
            </card>
            <card className="holder__card">
              <img src={verified} alt="verified" className="absolute" />
              <img
                src={oomaPixM}
                alt="card-img"
                className="holder__card--img"
              />
              <h3 className="holder__card--subheader">
                Heat - Edsa Shangri-La
              </h3>
              <p className="holder__card--text">
                Seafood, Asian, Filipino, Indian
              </p>
              <p className="holder__card--text">Mandaluyong City</p>
              <footer className="holder__card--footer">
                <button className="button">
                  <h5 className="subheader">VISIT</h5>
                </button>
              </footer>
            </card>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
