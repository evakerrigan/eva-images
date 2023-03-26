import React, { Component } from 'react';

interface ISalePhotoCard {
  item: {
    photo: string;
    title: string;
    description: string;
    select: string;
    date: string;
    link: string;
    style: string;
  };
}

export default class SalePhotoCard extends Component<ISalePhotoCard> {
  render() {
    const { photo, title, description, select, date, link, style } = this.props.item;
    return (
      <div>
        <h3 className="title">{title}</h3>
        <img src={photo} alt="" />
        <div className="description">{description}</div>
        <div className="select">{select}</div>
        <div className="link">{link}</div>
        <div className="date">{date}</div>
        <div className="style">{style}</div>
      </div>
    );
  }
}
