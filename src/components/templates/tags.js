import React from 'react';

import { graphql } from 'gatsby';

import { Blog } from '../Blogs';

import Layout from '../Layout/Layout';

const Tags = ({ pageContext, data }) => {
    const { tag } =  pageContext;
    const { edges, totalCount } = data.allMarkdownRemark;
    const tagHeader = `#${tag} - ${totalCount} post${totalCount === 1 ? "": "s"}`;

    return (
        // <div>
        //     <h1>{tagHeader}</h1>
        //     <ul>
        //         {edges.map(({ node }) => {
        //             const { slug } = node.fields;
        //             const { title } = node.frontmatter;
        //             return (
        //                 <li key={slug}>
        //                     <Link to={slug}>
        //                         {title}
        //                     </Link>
        //                 </li>
        //             )
        //         })}
        //     </ul>
        // </div>

        <Layout
            PageTitle='Dillion Megida &#128640; - Technical Writer and Front End Developer'
            PageLink='/'
            PageDescription="Dillion is a front end developer, a technical writer and a graphics designer."
            PageKeywords='branding, design, dillion megida, dillion, megida, web developer, web development, frontend'
            TwitterCardTtitle='Dillion Megida'

            //The copyright only shows on the blog page and on each blog for mobile
            // ...But it always shows for large screens
            ShowMobileCopyright
        >
            <h2 className='TagHeader'>{tagHeader}</h2>
            {/* {
                edges.map(({ node }) => {
                    const { slug } = node.fields;
                    const { title, date, readTime } = node.frontmatter;
                    return (
                        <Blog
                            href={slug}
                            title={title}
                            date={date}
                            readTime={readTime}
                            content={node.excerpt}
                        />
                    )
                })
            } */}

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