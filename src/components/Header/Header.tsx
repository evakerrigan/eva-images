import React from 'react';
import './Header.scss';

export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header-overlay">
          <div className="header-dark-overlay">
            <div className="header-dark-top">
              <div className="wrapper header-wrapper">
                <h1>
                  <a className="header-logo-link" href="">
                    Eva Images
                  </a>
                </h1>
                <nav className="header-nav">
                  <ul className="header-list">
                    <li className="header-item">
                      <a className="header-link">Home</a>
                    </li>
                    <li className="header-item">
                      <a className="header-link">About me</a>
                    </li>
                  </ul>
                </nav>
                <div className="header-description">Your at this page</div>
              </div>
            </div>
            <div className="wrapper">
              <input className="header-input" placeholder="Search for ..."></input>
            </div>
            <div className="wrapper">
              <div className="header-logo">
                <h2 className="career">Photographer</h2>
                <h2 className="name">
                  <em>Kseniia Liubasova</em>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
