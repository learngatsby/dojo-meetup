import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BlockContent from '../components/BlockContent';

export const query = graphql`
  query Post ($slug: String) {
    sanityPost(slug: {current: {eq: $slug}}) {
      title
      _rawBody
    }
  }
`;

const Post = ({ data }) => {
  const {
    title,
    _rawBody,
  } = data.sanityPost;

  return (
    <Layout>
      <SEO
        title={title}
        meta={[{ property: 'og:type', content: 'article' }]}
      />
      <article className="post">
        <h1 className="post__title">{title}</h1>
        {_rawBody && (
          <BlockContent blocks={_rawBody} />
        )}
      </article>
    </Layout>
  );
};

Post.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
