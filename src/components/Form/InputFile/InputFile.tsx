import React, { Component, RefObject } from 'react';

type typeRefFile = RefObject<HTMLInputElement>;

export class InputFile extends Component<{ refFile: typeRefFile }> {
  render() {
    return (
      <input
        type="file"
        ref={this.props.refFile}
        onInput={() => {
          console.log(this.props.refFile.current?.value);
        }}
        className="input input-image file"
      />
    );
  }
}
