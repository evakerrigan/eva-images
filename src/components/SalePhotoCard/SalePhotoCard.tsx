import React, { Component } from 'react';
import './SalePhotoCard.scss';

interface ISalePhotoCard {
  item: {
    photo: string;
    title: string;
    select: string;
    date: string;
    style: string;
  };
}

export class SalePhotoCard extends Component<ISalePhotoCard> {
  render() {
    const { photo, title, select, date, style } = this.props.item;
    return (
      <div className="output-card">
        <h3 className="title">{title}</h3>
        <img src={photo} alt={title} />
        <div className="select">{select}</div>
        <div className="date">{date}</div>
        <div className="style">{style}</div>
      </div>
    );
  }
}
