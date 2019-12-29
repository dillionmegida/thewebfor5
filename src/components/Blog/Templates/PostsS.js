import React from 'react';
import Styles from '../Styles/Posts.module.scss';

import { StaticQuery, graphql } from 'gatsby';
import Post from './Post';
import formatBlogDate from '../../../functions/dateFormatter';

export default props => { 
        console.log(props);
    return (
    <StaticQuery

        query={
            graphql`
                query {
                    allPosts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
                }
            `
        }
        
        render={
            data => {
                const { edges: AllPosts } = data.allPosts;

                const category = props.CategoryName;

                let Posts;

                if(category === 'all') {
                    // If category is all, display all posts
                    Posts = AllPosts;  

                } else {    
                    // else only the selected category should be chosen
                    Posts = AllPosts.filter(({ node }) =>
                        node.frontmatter.category === category
                    );

                }

                return (
                    <section className={Styles.Posts}>
                        {
                            Posts.map(({ node }, index) =>
                                <Post
                                    key={node.id}
                                    PostPosition={index}
                                    
                                    // FirstPostSpecialStyle is applied conditionally 
                                    FirstPostSpecialStyle={props.FirstPostSpecialStyle}

                                    href={node.fields.slug}

                                    title={node.frontmatter.title}

                                    CoverSource={node.frontmatter.cover}
                                    CoverAlt=''

                                    excerpt={node.frontmatter.pageDescription}
                                    extraInfo={`${formatBlogDate(node.frontmatter.date)} | ${node.timeToRead} min${node.timeToRead > 1 ? 's' : ''} read`}
                                />
                            )    
                        }
                    </section>
                )
            }
        }
    />
)}