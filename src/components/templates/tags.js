import React from 'react';

import { graphql } from 'gatsby';

import { Blog } from '../Blogs';

import Layout from '../../containers/Layout/Layout';

const Tags = ({ pageContext, data }) => {
    const { tag } =  pageContext;
    const { edges, totalCount } = data.allMarkdownRemark;
    const tagHeader = `#${tag} - ${totalCount} post${totalCount === 1 ? "": "s"}`;

    return (
        <Layout
            PageTitle={`Blog Posts tagged with #${tag} - Dillion's Blog`}
            PageLink='/'
            PageDescription={`Blog Posts tagged with #${tag} in Dillion's Blog`}
            PageKeywords='branding, design, dillion megida, dillion, megida, web developer, web development, frontend, javascript'
            TwitterCardTtitle='Dillion Megida'

            //The copyright only shows on the blog page and on each blog for mobile
            // ...But it always shows for large screens
            ShowMobileCopyright
        >
            <h2 className='TagHeader'>{tagHeader}</h2>
            <section className='Blogs'>
                {
                    edges.map(({ node }) => {
                        const { slug } = node.fields;
                        const { title, date, readTime } = node.frontmatter;
                        return (
                            <article key={node.id} className='Blog'>
                                <Blog
                                    href={slug}
                                    title={title}
                                    date={date}
                                    readTime={readTime}
                                    content={node.excerpt}
                                />
                            </article>
                        )
                    })
                }
            </section>
        </Layout>
    )
}

export default Tags;
export const pageQuery = graphql`
    query($tag: String) {
        allMarkdownRemark(
            limit: 2000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        date
                        readTime
                    }
                    excerpt
                }
            }
        }
    }
`