import React, { Component, RefObject } from 'react';

type typeRefStyle = RefObject<HTMLInputElement>;

export class InputStyle extends Component<{
  refStyleLifestyle: typeRefStyle;
  refStyleStudio: typeRefStyle;
  er: boolean;
}> {
  render() {
    return (
      <div>
        <legend className="input-legend">Choose the style of your photo:</legend>
        <div className="input-wrapper">
          <input
            ref={this.props.refStyleLifestyle}
            type="radio"
            id="one"
            name="style"
            value="lifestyle"
            className="input input-radio choice"
          />
          <label htmlFor="one">Lifestyle</label>
        </div>
        <div className="input-wrapper">
          <input
            ref={this.props.refStyleStudio}
            type="radio"
            id="two"
            name="style"
            value="studio"
            className="input input-radio choice"
          />
          <label htmlFor="two">Studio style</label>
        </div>
        {this.props.er ? <p>Не выбран стиль фотографии</p> : null}
      </div>
    );
  }
}
