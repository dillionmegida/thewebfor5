/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: `https://dillionmegida.com`,
  },
  plugins: [

    // For NetlifyCMS
    `gatsby-plugin-netlify-cms`,

    // Automatic sitemaps when built
    `gatsby-plugin-sitemap`,

    // React Helmet for populating thehead tag
    `gatsby-plugin-react-helmet`,

    // For handling file sources
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    // For disque - Interaction with users on posts
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `dillionmegida-com`
      }
    },

    // For transforming markdowns
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHightlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ]
            }
          }
        ]
      }
    },

    // For google analytics
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: "UA-148541646-2",
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    },

    // For gatsby manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dillion Megida`,
        short_name: `Dillion Megida`,
        start_url: `/`,
        background_color: `#130327`,
        theme_color: `#130327`,
        display: `standalone`,
        icon: `src/img/icon.png`,
      },
    },


    // Gatsby offline
    `gatsby-plugin-offline`
  ]
}
