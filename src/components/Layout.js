import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import './Layout.css';

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <main className="layout__main">{children}</main>
    <footer className="layout__footer">
      <div className="layout__footer-container">
        <p>
          Site feito com
          {' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          {' '}
          para um
          {' '}
          <a href="https://www.meetup.com/campinas-frontend/events/262413777/">meetup no Campinas Front-end</a>
        </p>
        <p>Veja o código fonte no Github:</p>
        <a href="https://github.com/learngatsby/dojo-meetup">https://github.com/learngatsby/dojo-meetup</a>
        <noscript>
          <p>Este site funciona melhor com JavaScript habilitado</p>
        </noscript>
      </div>
    </footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
