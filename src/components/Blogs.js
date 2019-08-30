    import React from 'react';
    import { StaticQuery, graphql } from 'gatsby';

    let Blog = (props) => (
        <a title={props.title} href={props.href} style={{
            textAlign: 'left',
            fontFamily: 'roboto',
            fontWeight: 'bold',
            margin: '0'
            }}
        >
            <h2 style={{color: '#319ac1'}}>{props.title}</h2>
            <p style={{color: '#5c6061'}}>{props.date} | {props.readTime} read</p>
            <p style={{color: '#5c6061', lineHeight: '25px'}}>
                {props.next}
                {props.content}
            </p>
        </a>
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
                            excerpt(pruneLength: 50)
                        }
                    }
                    }
                }           
            `
        }
        render={data => {
            console.log(data.allMarkdownRemark.edges);
            return (
                <section className='Blogs'>
                    <p style={{textDecoration: 'underline', marginLeft: '20px'}}>{data.allMarkdownRemark.totalCount} Posts</p>
                    {
                        data.allMarkdownRemark.edges.map(({ node }) => (
                            <div key={node.id} className='Blog'>
                                <Blog
                                    href={node.fields.slug}
                                    title={node.frontmatter.title} 
                                    readTime={node.frontmatter.readTime}
                                    date={node.frontmatter.date}
                                    content={node.excerpt}
                                    // next={node.next.frontmatter.title}
                                />
                                <hr width='100%' color='var(--mainColor1)'/>
                            </div>
                    ))}
                </section>
            )
            }
        }
    />
)