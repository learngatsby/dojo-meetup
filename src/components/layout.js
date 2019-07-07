import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import 'reset-css/reset.css';
import './layout.css';

const Layout = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <footer className="footer">
      <div className="footer__container">
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
