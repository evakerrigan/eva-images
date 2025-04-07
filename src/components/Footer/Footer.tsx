import React from 'react';
import './Footer.scss';

export function Footer() {
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
        </div>
      </div>
    </footer>
  );
}
