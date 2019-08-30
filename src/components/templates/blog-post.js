import React from "react";
import { graphql } from "gatsby";
import Layout from '../Layout/Layout';

export default ({ data }) => {
  const post = data.markdownRemark
  return (
      <Layout>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date} | {post.frontmatter.readTime} read</p>
        <hr/>
        <div style={{lineHeight: '30px'}}>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        {console.log(data)}
      </Layout>
  )
}


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        readTime
      }
    }
  }
`