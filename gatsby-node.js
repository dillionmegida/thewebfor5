const path = require('path');
const _ = require("lodash");
const { createFilePath } = require('gatsby-source-filesystem');
const createPaginatedPages = require('gatsby-paginate');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if(node.internal.type == 'MarkdownRemark') {
        const slug = createFilePath({ node, getNode, basePath: 'pages' });
        createNodeField({
            node,
            name: 'slug',
            value: slug,
        })
    }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;
    const result = await graphql(`
        query {
            allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
                edges {
                    node {
                      id
                      timeToRead
                      frontmatter {
                          title
                          category
                          cover
                          date
                          pageDescription
                      }
                      fields {
                          slug
                      }
                    }
                }
            }
            tagsGroup: allMarkdownRemark(limit: 2000) {
                group(field: frontmatter___tags) {
                    fieldValue
                }
            }
            categoriesGroup: allMarkdownRemark {
                group(field: frontmatter___category) {
                    fieldValue
                }
            }
        }
    `)

    if(result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        
        // let { title } = node.frontmatter;
        // imgPath = './images';
        // const imageSlug = createImage(title, imgPath);

        createPage({
            path: node.fields.slug,
            component: path.resolve('./src/components/Blog/Templates/IndividualPost.js'),
            context: {
                slug: node.fields.slug
            }
        })
    })

    createPaginatedPages({
        edges: result.data.allMarkdownRemark.edges,
        createPage: createPage,
        pageTemplate: './src/components/Blog/Templates/Posts.js',
        pageLength: 10, // This is optional and defaults to 10 if not used
        pathPrefix: '', // This is optional and defaults to an empty string if not used
        context: {}, // This is optional and defaults to an empty object if not used
    })

    result.data.tagsGroup.group.forEach(tag => {
        createPage({
            path: `tags/${_.kebabCase(tag.fieldValue)}/`,
            component: path.resolve(`./src/components/Blog/Views/TagPage.js`),
            context: {
                tag: tag.fieldValue,
            },
        })
    })

    result.data.categoriesGroup.group.forEach(category => {
        createPage({
            path: `category/${_.kebabCase(category.fieldValue)}/`,
            component: path.resolve(`./src/components/Blog/Views/CategoryPage.js`),
            context: {
                category: category.fieldValue,
            },
        })
    })
}