import React, { Component } from "react";

export default class Offers extends Component {
  render() {
    return (
      <div className="offers">
        <div className="offers__header events__title">
          <h3>Offers</h3>
        </div>
        <div className="offer">
          <div className="offer__body">
            <div className="offer__header">
              <div className="offer__header--text">BOGO Lassi</div>
            </div>
            <div className="offer__description">
              <div className="offer__description--text">
                Buy one, get one lassi.
              </div>
            </div>
            <div className="offer__price">
              <div className="offer__price--text">$6 Value</div>
            </div>
          </div>
        </div>

        <div className="offer">
          <div className="offer__body">
            <div className="offer__header">
              <div className="offer__header--text">Nann Nann Na Naaaann</div>
            </div>
            <div className="offer__description">
              <div className="offer__description--text">
                Get a free nann with your meal.
              </div>
            </div>
            <div className="offer__price">
              <div className="offer__price--text">$3 Value</div>
            </div>
          </div>
        </div>

        {/* <div className="offer">
          <div className="offer__body">
            <div className="offer__header">
              <div className="offer__header--text">Offer</div>
            </div>
            <div className="offer__description">
              <div className="offer__description--text">Description</div>
            </div>
            <div className="offer__price">
              <div className="offer__price--text">Price</div>
            </div>
          </div>
        </div>

        <div className="offer">
          <div className="offer__body">
            <div className="offer__header">
              <div className="offer__header--text">Offer</div>
            </div>
            <div className="offer__description">
              <div className="offer__description--text">Description</div>
            </div>
            <div className="offer__price">
              <div className="offer__price--text">Price</div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}
