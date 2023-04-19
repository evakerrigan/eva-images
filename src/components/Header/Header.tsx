import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search } from '../Search/Search';
import './Header.scss';

interface HeaderProps {
  title: string;
}
export function Header({ title }: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="header-overlay">
        <div className="header-dark-overlay">
          <div className="header-dark-top">
            <div className="wrapper header-wrapper">
              <h1>
                <NavLink to={'/'} className="header-logo-link">
                  Eva&nbsp; Images
                </NavLink>
              </h1>
              <nav className="header-nav">
                <ul className="header-list">
                  <li className="header-item">
                    <NavLink to={'/'} className="header-link">
                      Home
                    </NavLink>
                  </li>
                  <li className="header-item">
                    <NavLink to={'/about-me'} className="header-link">
                      About me
                    </NavLink>
                  </li>
                  <li className="header-item">
                    <NavLink to={'/form'} className="header-link">
                      Form
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <div className="header-description">{title}</div>
            </div>
          </div>
          <div className="wrapper">{title === 'Home' ? <Search /> : ' '}</div>
          <div className="wrapper header-logo-wrapper">
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
