module.exports = {

    siteMetadata: {
        siteUrl: `https://thewebfor5.com`,
    },

    plugins: [

        // Theming
        // 'gatsby-plugin-dark-mode',

        // Sass
        `gatsby-plugin-sass`,

        // For NetlifyCMS
        `gatsby-plugin-netlify-cms`,
        
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
    ]
}
