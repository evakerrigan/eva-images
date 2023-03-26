import React, { Component, createRef, FormEvent, RefObject } from 'react';
import './Form.scss';
import { InputDate } from './InputDate/InputDate';
import { InputFile } from './InputFile/InputFile';
import { InputSelect } from './InputSelect/InputSelect';
import { InputTitle } from './InputTitle/InputTitle';
import { InputStyle } from './InputStyle/InputStyle';
import { InputAgree } from './InputAgree/InputAgree';
import SalePhotoCard from '../SalePhotoCard/SalePhotoCard';
import { Modal } from '../Modal/Modal';

export type typePropsElseBimbo = {
  [key: string]: never;
};

interface myState {
  saleList: myCard[];
  modal: boolean;
  errors: {
    refFile: boolean;
    refTitle: boolean;
    refSelect: boolean;
    refDate: boolean;
    refStyle: boolean;
    refAgree: boolean;
  };
}

interface myCard {
  photo: string;
  title: string;
  select: string;
  date: string;
  style: string;
}

export class Form extends Component<typePropsElseBimbo, myState> {
  private refFile: RefObject<HTMLInputElement>;
  private refTitle: RefObject<HTMLInputElement>;
  private refSelect: RefObject<HTMLSelectElement>;
  private refDate: RefObject<HTMLInputElement>;
  private refStyleLifestyle: RefObject<HTMLInputElement>;
  private refStyleStudio: RefObject<HTMLInputElement>;
  private refAgree: RefObject<HTMLInputElement>;
  private refForm: RefObject<HTMLFormElement>;

  constructor(props: typePropsElseBimbo) {
    super(props);
    this.refFile = createRef();
    this.refTitle = createRef();
    this.refSelect = createRef();
    this.refDate = createRef();
    this.refStyleLifestyle = createRef();
    this.refStyleStudio = createRef();
    this.refAgree = createRef();
    this.refForm = createRef();
    this.state = {
      saleList: [],
      modal: false,
      errors: {
        refFile: false,
        refTitle: false,
        refSelect: false,
        refDate: false,
        refStyle: false,
        refAgree: false,
      },
    };
  }
  handleButton(e: FormEvent) {
    e.preventDefault();
    const photo = this.refFile.current as HTMLInputElement;
    const title = (this.refTitle.current as HTMLInputElement).value;
    const select = (this.refSelect.current as HTMLSelectElement).value;
    const date = (this.refDate.current as HTMLInputElement).value;
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
      refSelect: false,
      refDate: false,
      refStyle: false,
      refAgree: false,
    };

    photo.value.length > 0 ? null : (er.refFile = true);
    title.length > 0 ? null : (er.refTitle = true);
    select !== 'select' ? null : (er.refSelect = true);
    date.length > 0 ? null : (er.refDate = true);
    style ? null : (er.refStyle = true);
    agree ? null : (er.refAgree = true);

    this.setState({ errors: er });
    if (Object.values(er).every((item) => !item)) {
      const card = {
        photo: URL.createObjectURL(((photo as HTMLInputElement).files as FileList)[0]),
        title: title,
        select: select,
        date: date,
        style: style ? style : '',
      };
      this.setState({ saleList: [...this.state.saleList, card] });
      this.setState({ modal: true });
      setTimeout(() => {
        this.setState({ modal: false });
      }, 5000);
      this.refForm?.current ? this.refForm?.current.reset() : '';
    }
  }

  render() {
    return (
      <div className="wrapper">
        <form ref={this.refForm} className="input-form">
          <fieldset className="input-fieldset">
            <legend className="input-legend-title">Form for your:</legend>
            <InputFile refFile={this.refFile} er={this.state.errors.refFile} />
            <InputTitle refTitle={this.refTitle} er={this.state.errors.refTitle} />
            <InputSelect refSelect={this.refSelect} er={this.state.errors.refSelect} />
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
          {this.state.saleList.map((item, i) => (
            <SalePhotoCard key={i} item={item} />
          ))}
        </div>
        {this.state.modal === true ? <Modal /> : null}
      </div>
    );
  }
}
