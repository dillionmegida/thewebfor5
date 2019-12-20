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
            return (         
                <React.Fragment>      
                    { 
                        edges.map(({ node }) => (
                            // check if the tags array is not empty, because articles may not have them
                            node.frontmatter.tags !== null && node.frontmatter.tags.map((tag, index) => (
                                <React.Fragment key={`${tag}_${index}`}>
                                    <Link to={`/tags/${tag}`} title={`Posts tagged with ${tag}`}>
                                        {tag}
                                    </Link>
                                </React.Fragment>
                            ))
                        ))
                    }
                </React.Fragment> 
            )
        }}
    />
)