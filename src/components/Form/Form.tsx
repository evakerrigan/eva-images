import React, { Component, createRef, FormEvent, RefObject } from 'react';
import './Form.scss';
import { InputDate } from './InputDate/InputDate';
import { InputDescription } from './InputDescription/InputDescription';
import { InputFile } from './InputFile/InputFile';
import { InputLink } from './InputLink/InputLink';
import { InputSelect } from './InputSelect/InputSelect';
import { InputTitle } from './InputTitle/InputTitle';
import { InputStyle } from './InputStyle/InputStyle';
import { InputAgree } from './InputAgree/InputAgree';
import SalePhotoCard from '../SalePhotoCard/SalePhotoCard';

export type typePropsElseBimbo = {
  [key: string]: never;
};

interface myState {
  saleList: myCard[];
  errors: {
    refFile: boolean;
    refTitle: boolean;
    refDescription: boolean;
    refSelect: boolean;
    refDate: boolean;
    refLink: boolean;
    refStyle: boolean;
    refAgree: boolean;
  };
}

interface myCard {
  photo: string;
  title: string;
  description: string;
  select: string;
  date: string;
  link: string;
  style: string;
}

export class Form extends Component<typePropsElseBimbo, myState> {
  private refFile: RefObject<HTMLInputElement>;
  private refTitle: RefObject<HTMLInputElement>;
  private refDescription: RefObject<HTMLInputElement>;
  private refSelect: RefObject<HTMLSelectElement>;
  private refLink: RefObject<HTMLInputElement>;
  private refDate: RefObject<HTMLInputElement>;
  private refStyleLifestyle: RefObject<HTMLInputElement>;
  private refStyleStudio: RefObject<HTMLInputElement>;
  private refAgree: RefObject<HTMLInputElement>;
  private refForm: RefObject<HTMLFormElement>;

  constructor(props: typePropsElseBimbo) {
    super(props);
    this.refFile = createRef();
    this.refTitle = createRef();
    this.refDescription = createRef();
    this.refSelect = createRef();
    this.refLink = createRef();
    this.refDate = createRef();
    this.refStyleLifestyle = createRef();
    this.refStyleStudio = createRef();
    this.refAgree = createRef();
    this.refForm = createRef();
    this.state = {
      saleList: [],
      errors: {
        refFile: false,
        refTitle: false,
        refDescription: false,
        refSelect: false,
        refDate: false,
        refLink: false,
        refStyle: false,
        refAgree: false,
      },
    };
  }
  handleButton(e: FormEvent) {
    e.preventDefault();
    const photo = this.refFile.current as HTMLInputElement;
    const title = (this.refTitle.current as HTMLInputElement).value;
    const description = (this.refDescription.current as HTMLInputElement).value;
    const select = (this.refSelect.current as HTMLSelectElement).value;
    const date = (this.refDate.current as HTMLInputElement).value;
    const link = (this.refLink.current as HTMLInputElement).value;
    const styleLifestyle = this.refStyleLifestyle?.current?.checked;
    const styleStudio = this.refStyleStudio?.current?.checked;
    let style: string | undefined;
    if (styleLifestyle) {
      style = this.refStyleLifestyle?.current?.value;
    } else if (styleStudio) {
      style = this.refStyleStudio?.current?.value;
    }
    const agree = this.refAgree?.current?.checked;

    const er = {
      refFile: false,
      refTitle: false,
      refDescription: false,
      refSelect: false,
      refDate: false,
      refLink: false,
      refStyle: false,
      refAgree: false,
    };

    photo.value.length > 0 ? null : (er.refFile = true);
    title.length > 0 ? null : (er.refTitle = true);
    description.length > 0 ? null : (er.refDescription = true);
    select !== 'select' ? null : (er.refSelect = true);
    date.length > 0 ? null : (er.refDate = true);
    link.length > 0 ? null : (er.refLink = true);
    style ? null : (er.refStyle = true);
    agree ? null : (er.refAgree = true);

    this.setState({ errors: er });
    if (Object.values(er).every((item) => !item)) {
      const card = {
        photo: URL.createObjectURL(((photo as HTMLInputElement).files as FileList)[0]),
        title: title,
        description: description,
        select: select,
        date: date,
        link: link,
        style: style ? style : '',
      };
      this.setState({ saleList: [...this.state.saleList, card] });
      this.refForm?.current ? this.refForm?.current.reset() : '';
    }

    console.log(photo.value.length);
  }

  render() {
    return (
      <div className="wrapper">
        <form ref={this.refForm} className="input-form">
          <fieldset className="input-fieldset">
            <legend className="input-legend-title">Form for your:</legend>
            <InputFile refFile={this.refFile} er={this.state.errors.refFile} />
            <InputTitle refTitle={this.refTitle} er={this.state.errors.refTitle} />
            <InputDescription
              refDescription={this.refDescription}
              er={this.state.errors.refDescription}
            />
            <InputSelect refSelect={this.refSelect} er={this.state.errors.refSelect} />
            <InputLink refLink={this.refLink} er={this.state.errors.refLink} />
            <InputDate refDate={this.refDate} er={this.state.errors.refDate} />
            <InputStyle
              refStyleLifestyle={this.refStyleLifestyle}
              refStyleStudio={this.refStyleStudio}
              er={this.state.errors.refStyle}
            />
            <InputAgree refAgree={this.refAgree} er={this.state.errors.refAgree} />
            <button onClick={(e) => this.handleButton(e)} className="form-button">
              Отправить
            </button>
          </fieldset>
        </form>
        <div className="output">
          <p>output</p>
          {this.state.saleList.map((item, i) => (
            <SalePhotoCard key={i} item={item} />
          ))}
        </div>
      </div>
    );
  }
}
