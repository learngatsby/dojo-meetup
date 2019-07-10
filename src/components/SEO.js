import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import ogImage from '../assets/images/logo-2.jpg';

const HOST = process.env.NODE_ENV === 'production' ? 'https://dojo-gatsby.netlify.com' : '';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const SEO = ({
  description,
  lang,
  meta,
  keywords,
  title,
}) => (
  <StaticQuery
    query={detailsQuery}
    render={data => (
      <Helmet
        htmlAttributes={{ lang }}
        title={title || data.site.siteMetadata.title}
        titleTemplate={title && `%s | ${data.site.siteMetadata.title}`}
        meta={[
          { name: 'description', content: description || data.site.siteMetadata.description },
          { name: 'keywords', content: keywords },
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:creator', content: data.site.siteMetadata.author },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: description || data.site.siteMetadata.description },
          { property: 'og:title', content: title },
          { property: 'og:description', content: description || data.site.siteMetadata.description },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: 'https://dojo-gatsby.netlify.com/' },
          { property: 'og:image', content: `${HOST}${ogImage}` },
          { property: 'og:image:alt', content: description || data.site.siteMetadata.description },
          { property: 'og:image:type', content: 'image/jpg' },
          { property: 'og:image:width', content: '1828' },
          { property: 'og:image:height', content: '660' },
        ].concat(meta)}
      />
    )}
  />
);

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  keywords: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

SEO.defaultProps = {
  title: null,
  lang: 'en',
  meta: [],
  keywords: '',
};

export default SEO;
