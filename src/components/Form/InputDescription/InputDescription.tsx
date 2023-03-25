import React, { Component, RefObject } from 'react';

type typeRefDescription = RefObject<HTMLInputElement>;

export class InputDescription extends Component<{ refDescription: typeRefDescription }> {
  render() {
    return (
      <input
        type="text"
        ref={this.props.refDescription}
        placeholder="Photo Description"
        className="input input-text description"
      />
    );
  }
}
