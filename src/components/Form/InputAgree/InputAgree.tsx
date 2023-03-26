import React, { Component, RefObject } from 'react';

type typeRefAgree = RefObject<HTMLInputElement>;

export class InputAgree extends Component<{ refAgree: typeRefAgree; er: boolean }> {
  render() {
    return (
      <div>
        <legend className="input-legend">
          I agree to send my beautiful authors photo for sale and give all rights to it to Eva
          Images:
        </legend>
        <div className="input-wrapper">
          <input
            ref={this.props.refAgree}
            type="checkbox"
            id="2"
            name="agree"
            className="input input-checkbox agree"
          />
          <label htmlFor="agree">I agree</label>
        </div>
        {this.props.er ? <p>Не дано согласие на продажу фото</p> : null}
      </div>
    );
  }
}
