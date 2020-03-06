import React, { Component } from "react";
export default class extends Component {
  render() {
    return (
      <section className="events">
        <h3 className="events__title">Events</h3>
        <section className="events__container">
          <div className="events__container--flex margin-right">
            <div className="left">
              <h5 className="left__title">DJ Night Ft. Kelvin & Sahil</h5>
              <p className="left__description">
                Groove to the beats of DJ Kelvin and Sahil and have the zest day
                of your life.
              </p>

              <button className="">
                <p className="left__button--text">Book Now</p>
              </button>
            </div>
            <div className="right">
              <h5 className="right__calendar">MAR 6th</h5>
            </div>
          </div>
          <div className="events__container--flex margin-left">
            <div className="left">
              <h5 className="left__title">Sindhu Darshan Festival</h5>
              <p className="left__description">
                2 day festival. Come celebrate our diverse culture with a whole
                new feature menu.
              </p>

              <button className="">
                <p className="left__button--text">Book Now</p>
              </button>
            </div>
            <div className="right">
              <h5 className="right__calendar">MAR 6th</h5>
            </div>
          </div>
        </section>
      </section>
    );
  }
}
