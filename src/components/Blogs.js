    import React from 'react';
    import { StaticQuery, graphql, Link } from 'gatsby';

    import { formatBlogDate } from '../components/common/functions';

    let Blog = (props) => (
        <Link
            to={props.href}
            title={props.title}
            style={{
                fontFamily: 'Antic, helvetica'
            }}
        >
            <h2>{props.title}</h2>
            <p style={{color: 'purple'}}>{formatBlogDate(props.date)} | {props.readTime} read</p>
            <p style={{lineHeight: '25px'}}>
                {props.content}
            </p>
            {
                props.tags ?
                
                <p className="TagsSection">
                    {
                       props.tags.map((tag, index) =>
                            <Link key={`${tag}_${index}`} to={`/tags/${tag}`} title={`Posts tagged with ${tag}`} className="Tag">
                                #{tag}
                            </Link>
                       )
                    }
                </p>

                : null
            }
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
                                tags
                            }

                            fields {
                                slug
                            }
                            excerpt(pruneLength: 150)
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
                            <article key={node.id} className='Blog'>
                                <Blog
                                    href={node.fields.slug}
                                    title={node.frontmatter.title} 
                                    readTime={node.frontmatter.readTime}
                                    date={node.frontmatter.date}
                                    tags={node.frontmatter.tags}
                                    content={node.excerpt}
                                />
                            </article>
                    ))}
                </section>
            )
            }
        }
    />
)

// I made use of this component in the tag template
export { Blog };