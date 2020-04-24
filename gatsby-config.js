module.exports = {
    siteMetadata: {
        siteUrl: `https://thewebfor5.com`,
    },

    plugins: [
        // Sass
        `gatsby-plugin-sass`,

        // For NetlifyCMS
        `gatsby-plugin-netlify-cms`,

        // Automatic sitemaps when built
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                exclude: ["/tags/*", "/search", "/categories"],
            },
        },

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

        // For transforming markdowns
        `gatsby-plugin-sharp`,
        `gatsby-remark-images`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 800,
                        },
                    },
                    `gatsby-remark-liquid-tags`,
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
                            ],
                        },
                    },
                ],
            },
        },

        // For google analytics
        {
            resolve: `gatsby-plugin-gtag`,
            options: {
                // your google analytics tracking id
                trackingId: "UA-148541646-4",
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
                name: `TheWebFor5`,
                short_name: `TheWebFor5`,
                start_url: `/`,
                background_color: `#262625`,
                theme_color: `#262625`,
                display: `standalone`,
                icon: `src/assets/img/logo.png`,
            },
        },

        // Gatsby offline
        `gatsby-plugin-offline`,
    ],
}
