import React, { Component, RefObject } from 'react';

type typeRefTitle = RefObject<HTMLInputElement>;

export class InputTitle extends Component<{ refTitle: typeRefTitle; er: boolean }> {
  render() {
    return (
      <>
        <input
          type="text"
          ref={this.props.refTitle}
          placeholder="Photo Title"
          className="input input-text title"
        />
        {this.props.er ? <p className="input-error">Нет названия фото</p> : null}
      </>
    );
  }
}
