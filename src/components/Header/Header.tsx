import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Search } from '../Search/Search';
import './Header.scss';

export class Header extends Component<{ title: string }> {
  render() {
    return (
      <header className="header">
        <div className="header-overlay">
          <div className="header-dark-overlay">
            <div className="header-dark-top">
              <div className="wrapper header-wrapper">
                <h1>
                  <a className="header-logo-link" href="">
                    Eva&nbsp; Images
                  </a>
                </h1>
                <nav className="header-nav">
                  <ul className="header-list">
                    <li className="header-item">
                      <NavLink
                        to={'/'}
                        className="header-link"
                        onClick={() =>
                          console.log('                   \n --------нажали на ссылку Home--------')
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="header-item">
                      <NavLink
                        to={'/about-us'}
                        className="header-link"
                        onClick={() =>
                          console.log(
                            '                   \n --------нажали на ссылку About me--------'
                          )
                        }
                      >
                        About me
                      </NavLink>
                    </li>
                  </ul>
                </nav>
                <div className="header-description">{this.props.title}</div>
              </div>
            </div>
            <div className="wrapper">{this.props.title === 'Home' ? <Search /> : ' '}</div>
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
