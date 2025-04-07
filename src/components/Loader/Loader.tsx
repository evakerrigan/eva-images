import React from 'react';
import './Loader.scss';

export const Loader: React.FC = () => {
  return (
    <div className="wrapper-box">
      <div className="box">
        <div className="thing"></div>
        <div className="thing"></div>
        <div className="thing"></div>
        <div className="thing"></div>
      </div>
    </div>
  );
};
