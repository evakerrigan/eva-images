import React, { Component, RefObject } from 'react';

type typeRefLink = RefObject<HTMLInputElement>;

export class InputLink extends Component<{ refLink: typeRefLink; er: boolean }> {
  render() {
    return (
      <>
        <input
          type="text"
          ref={this.props.refLink}
          placeholder="Stock Link"
          className="input input-text link"
        />
        {this.props.er ? <p>Нет ссылки на фотографию на фотостоке</p> : null}
      </>
    );
  }
}
