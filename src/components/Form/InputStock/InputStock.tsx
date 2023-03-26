import React, { Component, RefObject } from 'react';

type typeRefStock = RefObject<HTMLInputElement>;

export class InputStock extends Component<{ refStock: typeRefStock }> {
  render() {
    return (
      <div>
        <legend className="input-legend">Choose the style of your photo:</legend>
        <div className="input-wrapper">
          <input
            ref={this.props.refStock}
            type="radio"
            id="one"
            name="stock"
            value="lifestyle"
            className="input input-radio choice"
          />
          <label htmlFor="one">Lifestyle</label>
        </div>
        <div className="input-wrapper">
          <input
            ref={this.props.refStock}
            type="radio"
            id="two"
            name="stock"
            value="studio"
            className="input input-radio choice"
          />
          <label htmlFor="two">Studio</label>
        </div>
      </div>
    );
  }
}
