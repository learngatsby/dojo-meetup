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
        ©
        {' '}
        {new Date().getFullYear()}
        , Built with
        {' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
