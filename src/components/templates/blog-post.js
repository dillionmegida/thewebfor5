import React from "react";
import { graphql } from "gatsby";
import Layout from '../Layout/Layout';

export default ({ data }) => {
  const post = data.markdownRemark
  return (
      <Layout
        PageTitle={`${post.frontmatter.title} - Dillion's Blog`}
        PageLink={post.fields.slug}
        PageDescription={post.frontmatter.pageDescription}
        PageKeywords={post.frontmatter.pageKeywords}
      >
        <h1 style={{color: 'var(--lightBlue)'}}>{post.frontmatter.title}</h1>
        <p style={{color: 'var(--mainColor1)', fontWeight: 'bold'}}>{post.frontmatter.date} | {post.frontmatter.readTime} read</p>
        <hr/>
        <div style={{lineHeight: '30px', fontSize: '20px'}}>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <hr/>
        {console.log(data)}
      </Layout>
  )
}


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
        date
        readTime
        pageDescription
        pageKeywords
      }
    }
  }
`