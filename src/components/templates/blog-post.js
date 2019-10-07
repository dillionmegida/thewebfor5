import React from "react";
import { graphql } from "gatsby";
import Layout from '../Layout/Layout';
import Disqus from './disqus';

import Styles from '../../styles/BlogTemplate.module.css';

export default ({ data }) => {
  const post = data.markdownRemark
  return (
      <Layout
        PageTitle={`${post.frontmatter.title} - Dillion's Blog`}
        PageLink={post.fields.slug}
        PageDescription={post.frontmatter.pageDescription}
        PageKeywords={post.frontmatter.pageKeywords}
        TwitterBlogImage={post.frontmatter.cover ? post.frontmatter.cover : 'https://res.cloudinary.com/dillionmegida/image/upload/v1567211530/images/website/favicon.png'}
        LargeTwitterCard = {post.frontmatter.cover ? true : false}
      >
        <main className={Styles.BlogPost}>
          <section className={Styles.BlogInfo}>
            <h1 className={Styles.BlogTitle}>{post.frontmatter.title}</h1>
            <p className={Styles.BlogDate}>{post.frontmatter.date} | {post.frontmatter.readTime} read</p>
          </section>
          {
            post.frontmatter.cover && post.frontmatter.cover !== '' ?
            <img src={post.frontmatter.cover} alt='Blog Cover' width='100%' /> : 
            null
          }
          <div className={Styles.BlogContent}>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
          <p style={{fontSize: '25px', fontWeight: 'bold', margin: '0'}}>Share this article</p>
          <p style={{fontSize: '30px', margin: '0'}}>
            <a href={`https://twitter.com/intent/tweet?text=${post.frontmatter.title} by @iamdillion - https://dillionmegida.com${post.fields.slug}`} target='_blank' rel="noopener noreferrer">
              <i style={{color: '#1DA1F2'}} className='fa fa-twitter'></i>
            </a>
            </p>
          <hr/>
          <Disqus Url={post.fileAbsolutePath} PostId={post.id} PostTitle={post.frontmatter.title}/>
        </main>
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
        cover
      }
    }
  }
`