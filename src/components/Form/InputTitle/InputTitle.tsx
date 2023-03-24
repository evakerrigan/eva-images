import React, { Component, RefObject } from 'react';

type typeRefTitle = RefObject<HTMLInputElement>;

export class InputTitle extends Component<{ refTitle: typeRefTitle }> {
  render() {
    return <input type="text" ref={this.props.refTitle} className="input input-text title" />;
  }
}
