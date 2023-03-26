import React, { Component, RefObject } from 'react';

type typeRefTag = RefObject<HTMLInputElement>;

export class InputTag extends Component<{ refTag: typeRefTag }> {
  render() {
    return (
      <input
        type="text"
        ref={this.props.refTag}
        placeholder="Photo Tags"
        className="input input-text tag"
      />
    );
  }
}
