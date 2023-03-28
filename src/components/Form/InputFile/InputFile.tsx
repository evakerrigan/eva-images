import React, { Component, RefObject } from 'react';

type typeRefFile = RefObject<HTMLInputElement>;

export class InputFile extends Component<{ refFile: typeRefFile; er: boolean }> {
  render() {
    return (
      <>
        <input
          type="file"
          ref={this.props.refFile}
          accept="image/png, image/jpeg"
          className="input input-image file"
        />
        {this.props.er ? <p className="input-error">Нет картинки</p> : null}
      </>
    );
  }
}
