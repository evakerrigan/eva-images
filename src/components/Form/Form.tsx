import React, { Component, createRef, RefObject } from 'react';
import './Form.scss';
import { InputDate } from './InputDate/InputDate';
import { InputDescription } from './InputDescription/InputDescription';
import { InputFile } from './InputFile/InputFile';
import { InputLink } from './InputLink/InputLink';
import { InputSelect } from './InputSelect/InputSelect';
import { InputTag } from './InputTag/InputTag';
import { InputTitle } from './InputTitle/InputTitle';
import { InputStock } from './InputStock/InputStock';
import { InputAgree } from './InputAgree/InputAgree';

export type typePropsElseBimbo = {
  [key: string]: never;
};

export class Form extends Component<typePropsElseBimbo> {
  private refFile: RefObject<HTMLInputElement>;
  private refTitle: RefObject<HTMLInputElement>;
  private refDescription: RefObject<HTMLInputElement>;
  private refTag: RefObject<HTMLInputElement>;
  private refSelect: RefObject<HTMLSelectElement>;
  private refLink: RefObject<HTMLInputElement>;
  private refDate: RefObject<HTMLInputElement>;
  private refStock: RefObject<HTMLInputElement>;
  private refAgree: RefObject<HTMLInputElement>;

  constructor(props: typePropsElseBimbo) {
    super(props);
    this.refFile = createRef();
    this.refTitle = createRef();
    this.refDescription = createRef();
    this.refTag = createRef();
    this.refSelect = createRef();
    this.refLink = createRef();
    this.refDate = createRef();
    this.refStock = createRef();
    this.refAgree = createRef();
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
            <InputDescription refDescription={this.refDescription} />
            <InputTag refTag={this.refTag} />
            <InputSelect refSelect={this.refSelect} />
            <InputLink refLink={this.refLink} />
            <InputDate refDate={this.refDate} />
            <InputStock refStock={this.refStock} />
            <InputAgree refAgree={this.refAgree} />
            <button className="form-button">Отправить</button>
          </fieldset>
        </div>
      </div>
    );
  }
}
