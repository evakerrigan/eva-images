import React, { Component, RefObject } from 'react';

type typeRefSelect = RefObject<HTMLSelectElement>;

export class InputSelect extends Component<{ refSelect: typeRefSelect; er: boolean }> {
  render() {
    return (
      <>
        <select name="select" ref={this.props.refSelect} className="input input-select stock">
          <option value="select">Select</option>
          <option value="adobe">Adobe</option>
          <option value="getty">Getty</option>
          <option value="offset">Offset</option>
        </select>
        {this.props.er ? <p className="input-error">Не выбран фотосток</p> : null}
      </>
    );
  }
}
