import React from 'react';

import { StaticQuery, graphql } from 'gatsby';
import Post from '../Templates/Post';
import formatBlogDate from '../../../functions/dateFormatter';

export default props => (
    <StaticQuery
        query = {
            graphql`
                query {
                    allPosts: allMarkdownRemark(
                        sort: { fields: [frontmatter___date], order: DESC }) {
                        edges {
                            node {
                                id
                                frontmatter {
                                    title
                                    tags
                                    date
                                    pageDescription
                                }
                                fields {
                                    slug
                                }
                                timeToRead
                            }
                        }
                    }
                }
            `
        }

        render={
            data => {
                const { edges: AllPosts } = data.allPosts;

                let RelatedArr = [];
                let tags = props.tags

                // ID is necessary to avoid using the same article in related articles
                let articleID = props.articleID
                
                // This provides a limit for the related articles
                let counter = 0;
                let limit = 3;

                AllPosts.forEach(post => {
                    tags.forEach(tag => {
                        if(post.node.frontmatter.tags !== null && post.node.frontmatter.tags.includes(tag) ) {
                            if(!RelatedArr.includes(post.node) && post.node.id !== articleID && counter < limit)
                                RelatedArr.push(post.node);
                        }
                    })
                })

                return (
                    <React.Fragment>
                        {
                            RelatedArr.length > 0 ? 
                                <section className={props.sectionClassName}>
                                    {
                                        RelatedArr.length > 0 && <h2>Related Articles</h2>
                                    }
                                    {
                                        RelatedArr.map(post =>
                                            <Post
                                                key={post.id}

                                                href={post.fields.slug}

                                                title={post.frontmatter.title}

                                                CoverSource={post.frontmatter.cover}
                                                CoverAlt=''

                                                excerpt={post.frontmatter.pageDescription}
                                                extraInfo={`${formatBlogDate(post.frontmatter.date)} | ${post.timeToRead} min${post.timeToRead > 1 ? 's' : ''} read`}
                                            />
                                        )
                                    
                                    }
                                </section>
                            : null
                        }
                    </React.Fragment>
                )

            }
        }

    />
)