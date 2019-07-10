import React from 'react';
import PropTypes from 'prop-types';
import BaseBlockContent from '@sanity/block-content-to-react';

const serializers = {
  types: {
    block({ node, children }) {
      switch (node.style) {
        case 'h1':
          return <h1>{children}</h1>;

        case 'h2':
          return <h2>{children}</h2>;

        case 'h3':
          return <h3>{children}</h3>;

        case 'h4':
          return <h4>{children}</h4>;

        default:
          return <p>{children}</p>;
      }
    },
  },
};

const BlockContent = ({ blocks }) => (
  <BaseBlockContent
    blocks={blocks}
    serializers={serializers}
  />
);

BlockContent.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BlockContent;
