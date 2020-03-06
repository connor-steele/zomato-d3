import React, { Component } from "react";
export default class extends Component {
  render() {
    return (
      <section className="events">
        <h3 className="events__title">Events</h3>
        <section className="events__container">
          <div className="events__container--flex margin-right">
            <div className="left">
              <h5 className="left__title">Event Name</h5>
              <p className="left__description">Event Description</p>
              <p className="left__description">Time</p>
              <button className="left__button">
                <p className="left__button--text">Book Now</p>
              </button>
            </div>
            <div className="right">
              <h5 className="right__calendar">Mar 6th</h5>
            </div>
          </div>
          <div className="events__container--flex margin-left">
            <div className="left">
              <h5 className="left__title">Event Name</h5>
              <p className="left__description">Event Description</p>
              <p className="left__description">Time</p>

              <button className="left__button">
                <p className="left__button--text">Book Now</p>
              </button>
            </div>
            <div className="right">
              <h5 className="right__calendar">Mar 6th</h5>
            </div>
          </div>
        </section>
      </section>
    );
  }
}
