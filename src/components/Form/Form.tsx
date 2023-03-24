import React, { Component, createRef, RefObject } from 'react';
import './Form.scss';
import { InputTitle } from './InputTitle/InputTitle';

export type typePropsElseBimbo = {
  [key: string]: never;
};

export class Form extends Component<typePropsElseBimbo> {
  private refImage: RefObject<HTMLInputElement>;
  private refTitle: RefObject<HTMLInputElement>;

  constructor(props: typePropsElseBimbo) {
    super(props);
    this.refImage = createRef();
    this.refTitle = createRef();
  }

  // showInput(): void {
  //   console.log(this.refTitle.current.value);
  // }

  render() {
    return (
      <div className="wrapper">
        <h1>Form</h1>
        <div className="input-form">
          <fieldset className="input-fieldset">
            <legend className="input-legend-title">Form for your:</legend>
            <input type="file" ref={this.refImage} className="input input-image file" />
            <InputTitle refTitle={this.refTitle} />
            <input type="text" className="input input-text description" />
            <input type="text" className="input input-text tag" />
            <input type="select" className="input input-select stock" />
            <input type="text" className="input input-text link" />
            <input type="date" className="input input-date date" />
            <div>
              <legend className="input-legend">Choose your:</legend>
              <div className="input-wrapper">
                <input
                  type="radio"
                  id="one"
                  name="drone"
                  value="one"
                  className="input input-radio choice"
                />
                <label htmlFor="one">One</label>
              </div>
              <div className="input-wrapper">
                <input
                  type="radio"
                  id="two"
                  name="drone"
                  value="two"
                  className="input input-radio choice"
                />
                <label htmlFor="two">Two</label>
              </div>
            </div>
            <div>
              <legend className="input-legend">
                I agree to send my beautiful authors photo for sale and give all rights to it to Eva
                Images:
              </legend>
              <div className="input-wrapper">
                <input type="checkbox" id="2" name="agree" className="input input-checkbox agree" />
                <label htmlFor="agree">I agree</label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    );
  }
}
