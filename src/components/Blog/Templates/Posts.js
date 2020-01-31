import React from 'react';
import Styles from '../Styles/Posts.module.scss';

import Post from './Post';
import formatBlogDate from '../../../functions/dateFormatter';
import { Link } from 'gatsby';
import Layout from '../../../containers/Layout/Layout';

export default ({pageContext}) => {
  const { pageCount }  = pageContext
  const { index: pageIndex } = pageContext
  const isFirst = pageContext.index === 1
  const isLast = pageContext.last
  const prevPage = !isFirst && pageIndex - 1 === 1 ? '/' : pageIndex - 1
  const nextPage = !isLast && pageContext.index + 1

  
  return (
    <Layout
      SecondSection = {
        <>
          <section className={Styles.Posts}>
            {
              pageContext.group.map(({ node }, index) => {
                  return (
                      <Post
                          key={node.id}
                          PostPosition={index}
                          
                          // FirstPostSpecialStyle is applied conditionally 
                          // FirstPostSpecialStyle={props.FirstPostSpecialStyle}

                          href={node.fields.slug}

                          title={node.frontmatter.title}

                          CoverSource={node.frontmatter.cover}
                          CoverAlt=''

                          excerpt={node.frontmatter.pageDescription}
                          extraInfo={`${formatBlogDate(node.frontmatter.date)} | ${node.timeToRead} min${node.timeToRead > 1 ? 's' : ''} read`}
                      />
                  )
              })
            }
          </section>
          <div className={Styles.Pagination}>
            {!isFirst && (
              <Link to={`/${prevPage}`} rel="prev">
                ← Previous  
              </Link>
            )}
            {
              Array.from({ length: pageCount }, (_, i) => (
                  <Link activeClassName={Styles.ActiveLink} key={`pagination-number${i + 1}`} to={`/${i === 0 ? "" : i + 1}`}>
                      {i + 1}
                  </Link>
              ))
            }
            {!isLast && (
              <Link to={`/${nextPage}`} rel="next">
                Next →
              </Link>
            )}
          </div>
        </>
      }
    />
  )
}