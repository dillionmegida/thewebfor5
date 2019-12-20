import React from 'react';

import { StaticQuery, graphql, Link } from 'gatsby';

export default () => (
    <StaticQuery
        query={
            graphql`
                query {
                    allMarkdownRemark(sort: { fields: [frontmatter___tags], order: ASC }) {
                        edges {
                            node {
                                id
                                frontmatter {
                                    tags
                                }
                            }
                        }
                    }
                }
            `
        }

        render={ data => {
            const { edges } = data.allMarkdownRemark
            console.log(edges);

            const tagsArr = [];
            const limit = 15;

            edges.forEach(post => {
                post.node.frontmatter.tags.forEach(tag => {
                    if(tagsArr.length < limit && !tagsArr.includes(tag)) {
                        tagsArr.push(tag);
                    }
                })
            })

            // console.log(tagArr);

            return (         
                <React.Fragment>      
                    {/* { 
                        limitedArr.map(post => (
                            // check if the tags array is not empty, because articles may not have them
                            post.frontmatter.tags !== null && post.frontmatter.tags.map((tag, index) => (
                                <React.Fragment key={`${tag}_${index}`}>
                                    <Link to={`/tags/${tag}`} title={`Posts tagged with ${tag}`}>
                                        {tag}
                                    </Link>
                                </React.Fragment>
                            ))
                        ))
                    } */}
                    {
                        tagsArr.map((tag, index) => (
                            <Link key={`${tag}_${index}`} to={`/tags/${tag}`} title={`Posts tagged with ${tag}`}>
                                {tag}
                            </Link>
                        ))
                    }
                </React.Fragment> 
            )
        }}
    />
)