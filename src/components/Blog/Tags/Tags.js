import React from "react"

import { StaticQuery, graphql, Link } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={(data) => {
      const { edges } = data.allMarkdownRemark

      const tagsArr = []
      const limit = 15

      edges.forEach((post) => {
        post.node.frontmatter.tags &&
          post.node.frontmatter.tags.forEach((tag) => {
            if (tagsArr.length < limit && !tagsArr.includes(tag)) {
              tagsArr.push(tag)
            }
          })
      })

      return (
        <React.Fragment>
          {tagsArr.map((tag, index) => (
            <Link
              key={`${tag}_${index}`}
              to={`/tags/${tag}`}
              title={`Posts tagged with ${tag}`}
            >
              {tag}
            </Link>
          ))}
        </React.Fragment>
      )
    }}
  />
)
