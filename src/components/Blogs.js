    import React from 'react';
    import { StaticQuery, graphql, Link } from 'gatsby';

    let Blog = (props) => (
        <Link
            to={props.href}
            title={props.title}
            style={{
                fontFamily: 'Antic'
            }}
        >
            <h2>{props.title}</h2>
            <p style={{color: 'purple'}}>{props.date} | {props.readTime} read</p>
            <p style={{lineHeight: '25px'}}>
                {props.content}
            </p>

        </Link>
    )


export default () => (
    <StaticQuery
        query={
            graphql`
                query {
                    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
                    totalCount
                    edges {
                        node {
                            id
                            frontmatter {
                                title
                                date
                                readTime
                            }

                            fields {
                                slug
                            }
                            excerpt(pruneLength: 100)
                        }
                    }
                    }
                }           
            `
        }
        render={data => {
            return (
                <section className='Blogs'>
                    {/* Number of articles written
                        <p className='numArticles'>{data.allMarkdownRemark.totalCount} Articles Written</p>
                    */}
                    {
                        data.allMarkdownRemark.edges.map(({ node }) => (
                            <div key={node.id} className='Blog'>
                                <Blog
                                    href={node.fields.slug}
                                    title={node.frontmatter.title} 
                                    readTime={node.frontmatter.readTime}
                                    date={node.frontmatter.date}
                                    content={node.excerpt}
                                />
                            </div>
                    ))}
                </section>
            )
            }
        }
    />
)