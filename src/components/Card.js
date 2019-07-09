import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import './Card.css';

const Card = ({ title, link, image }) => {
  if (!link) {
    return (
      <div className="card" href={link}>
        <div className="card__image">{image}</div>
        <div className="card__title">{title}</div>
      </div>
    );
  }

  if (link.includes('http')) {
    return (
      <a className="card" href={link}>
        <div className="card__image">{image}</div>
        <div className="card__title">{title}</div>
      </a>
    );
  }

  return (
    <Link to={link} className="card" href={link}>
      <div className="card__image">{image}</div>
      <div className="card__title">{title}</div>
    </Link>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  image: PropTypes.node,
};

export default Card;
