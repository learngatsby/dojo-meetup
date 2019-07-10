import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Card from '../components/Card';
import '../styles/events.css';

export const query = graphql`
  query {
    allSanityPost(sort: {order: ASC, fields: title}) {
      edges {
        node {
          slug {
            current
          }
          title
          mainImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

const Events = ({ data }) => (
  <Layout>
    <SEO title="Eventos" />
    <h1>Eventos</h1>
    <div className="events__cards">
      {data.allSanityPost.edges.map(post => (
        <Card
          title={post.node.title}
          link={post.node.slug.current}
          image={(
            <Image
              fluid={post.node.mainImage.asset.fluid}
              alt={post.node.tile}
            />
          )}
        />
      ))}
    </div>
  </Layout>
);

Events.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Events;
