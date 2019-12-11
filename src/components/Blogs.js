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
                        // <Link key={`${tag}_${index}`} to={`/tags/${tag}`} title={`Posts tagged with ${tag}`} className="Tag">
                        //     #{tag}
                        // </Link>
                        <span className='Tag' key={`${tag}_${index}`}>
                            #{tag}
                        </span>
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
                                    pageDescription
                                    tags
                                }
                                timeToRead
                                fields {
                                    slug
                                }
                            }
                        }
                    }
                }           
            `
        }
        render={data => {
            return (
                <section className='Blogs'>
                    {
                        data.allMarkdownRemark.edges.map(({ node }) => (
                            <article key={node.id} className='Blog'>
                                <Blog
                                    href={node.fields.slug}
                                    title={node.frontmatter.title} 
                                    readTime={`${node.timeToRead} min${node.timeToRead > 1 ? 's' : ''}`}
                                    date={node.frontmatter.date}
                                    tags={node.frontmatter.tags}
                                    content={
                                        node.frontmatter.pageDescription.length > 150 ? `${node.frontmatter.pageDescription.substr(0,150)}...` : node.frontmatter.pageDescription
                                    }
                                />
                            </article>
                    ))}
                </section>
            )
            }
        }
    />
)

// I made use of this component in the tag template and search page
export { Blog };