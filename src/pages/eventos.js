import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Card from '../components/Card';
import '../styles/events.css';

const Events = () => (
  <Layout>
    <SEO title="Eventos" />
    <h1>Eventos</h1>
    <div className="events__cards">
      <Card
        title="Dojo - Aprenda a criar seus sites usando Gatsby"
        link="https://www.meetup.com/campinas-frontend/events/262413777/"
        image={(
          <img
            height="200px"
            width="300px"
            src="https://snag.gy/wXNtu5.jpg"
            alt="Logo do Gatsby"
          />
        )}
      />
      <Card
        title="Dojo - Testando com Cypress"
        link="https://www.meetup.com/campinas-frontend/events/262662805/"
        image={(
          <img
            height="200px"
            width="300px"
            src="https://snag.gy/ym0PSv.jpg"
            alt="Logo do Cypress"
          />
        )}
      />
      <Card
        title="Front in Campinas 2019"
        link="https://frontincampinas.com.br/"
        image={(
          <img
            height="200px"
            width="300px"
            src="https://snag.gy/86uOhH.jpg"
            alt="Logo do Front in Campinas"
          />
        )}
      />
    </div>
  </Layout>
);

export default Events;
