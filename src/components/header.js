import { Link, useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import './header.css';

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  return (
    <header className="header">
      <div className="header__items">
        <Link className="header__item" to="/">{title}</Link>
      </div>
      <div className="header__items">
        <Link className="header__item" to="/home">Home</Link>
        <Link className="header__item" to="/meetups">Meetups</Link>
        <Link className="header__item" to="/faq">FAQ</Link>
      </div>
    </header>
  );
};

export default Header;
