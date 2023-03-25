import React, { Component, createRef, RefObject } from 'react';
import './Form.scss';
import { InputFile } from './InputFile/InputFile';
import { InputTitle } from './InputTitle/InputTitle';

export type typePropsElseBimbo = {
  [key: string]: never;
};

export class Form extends Component<typePropsElseBimbo> {
  private refFile: RefObject<HTMLInputElement>;
  private refTitle: RefObject<HTMLInputElement>;

  constructor(props: typePropsElseBimbo) {
    super(props);
    this.refFile = createRef();
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
            <InputFile refFile={this.refFile} />
            <InputTitle refTitle={this.refTitle} />
            <input
              type="text"
              placeholder="Photo Description"
              className="input input-text description"
            />
            <input type="text" placeholder="Photo Tags" className="input input-text tag" />
            <select name="select" className="input input-select stock">
              <option value="0">Select</option>
              <option value="adobe">Adobe</option>
              <option value="getty">Getty</option>
              <option value="offset">Offset</option>
            </select>
            <input type="text" placeholder="Stock Link" className="input input-text link" />
            <input type="date" className="input input-date date" />
            <div>
              <legend className="input-legend">Choose the style of your photo:</legend>
              <div className="input-wrapper">
                <input
                  type="radio"
                  id="one"
                  name="drone"
                  value="one"
                  className="input input-radio choice"
                />
                <label htmlFor="one">Lifestyle</label>
              </div>
              <div className="input-wrapper">
                <input
                  type="radio"
                  id="two"
                  name="drone"
                  value="two"
                  className="input input-radio choice"
                />
                <label htmlFor="two">Studio</label>
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
            <button className="form-button">Отправить</button>
          </fieldset>
        </div>
      </div>
    );
  }
}
