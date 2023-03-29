import React from 'react';
import './Footer.scss';

export class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="wrapper">
          <div className="footer__inner">
            <div className="footer__inner-left">
              <a
                href="https://github.com/evakerrigan"
                className="footer__link link-e"
                target="_blank"
                rel="noreferrer"
              >
                evakerrigan
              </a>
            </div>
            <div className="footer__year">2023</div>
            <div className="footer__inner-right">
              <a
                href="https://rs.school/js/"
                className="footer__link-school"
                target="_blank"
                rel="noreferrer"
              ></a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
