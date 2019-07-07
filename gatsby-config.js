module.exports = {
  siteMetadata: {
    title: 'Campinas Front-end',
    description: 'Projeto usado para fazer o meetup no Campinas Front-end',
    author: '@luanorlandi',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-mdx',
  ],
};
