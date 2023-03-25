import React, { Component, RefObject } from 'react';

type typeRefSelect = RefObject<HTMLSelectElement>;

export class InputSelect extends Component<{ refSelect: typeRefSelect }> {
  render() {
    return (
      <select name="select" ref={this.props.refSelect} className="input input-select stock">
        <option value="0">Select</option>
        <option value="adobe">Adobe</option>
        <option value="getty">Getty</option>
        <option value="offset">Offset</option>
      </select>
    );
  }
}
