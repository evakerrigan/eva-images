import React, { Component, RefObject } from 'react';

type typeRefDate = RefObject<HTMLInputElement>;

export class InputDate extends Component<{ refDate: typeRefDate }> {
  render() {
    return <input type="date" ref={this.props.refDate} className="input input-date date" />;
  }
}
