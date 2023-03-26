import React, { Component, RefObject } from 'react';

type typeRefDate = RefObject<HTMLInputElement>;

export class InputDate extends Component<{ refDate: typeRefDate; er: boolean }> {
  render() {
    return (
      <>
        <input type="date" ref={this.props.refDate} className="input input-date date" />
        {this.props.er ? <p>Нет даты съемки</p> : null}
      </>
    );
  }
}
