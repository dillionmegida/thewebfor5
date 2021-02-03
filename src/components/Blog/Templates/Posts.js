import React from "react"
import Styles from "../Styles/Posts.module.scss"

import Post from "./Post"
import formatBlogDate from "../../../functions/dateFormatter"
import { Link } from "gatsby"
import Layout from "../../../containers/Layout/Layout"
import Brand from "../../Brand/Details"
import Tags from "../Tags/Tags"
import Newsletter from "../../Newsletter/Newsletter"
import SuggestArticles from "../SuggestArticles/SuggestArticles"

export default ({ pageContext }) => {
  const { pageCount } = pageContext
  const { index: pageIndex } = pageContext
  const isFirst = pageContext.index === 1
  const isLast = pageContext.last
  const prevPage = !isFirst && pageIndex - 1 === 1 ? "/" : pageIndex - 1
  const nextPage = !isLast && pageContext.index + 1

  return (
    <Layout
      PageTitle={`${Brand.nameWithSpace} - Simplifying web development topics.`}
      PageLink="/"
      PageDescription={`${Brand.name} is a blog platform for demystifying web topics and practices.`}
      PageKeywords="home, The Web For Five, The Web For 5, simplified web topics, javascript"
      FirstSection={
        <div className={Styles.TagsSection}>
          <h3>#tags</h3>
          <Tags />
        </div>
      }
      SecondSection={
        <>
          <section className={Styles.Posts}>
            {pageContext.group.map(({ node }, index) => {
              return (
                <Post
                  key={node.id}
                  PostID={node.id}
                  PostPosition={index}
                  // FirstPostSpecialStyle is applied conditionally
                  // FirstPostSpecialStyle={props.FirstPostSpecialStyle}

                  href={node.fields.slug}
                  title={node.frontmatter.title}
                  CoverSource={node.frontmatter.cover}
                  CoverAlt=""
                  excerpt={node.frontmatter.pageDescription}
                  extraInfo={`${formatBlogDate(node.frontmatter.date)} | ${
                    node.timeToRead
                  } min${node.timeToRead > 1 ? "s" : ""} read`}
                />
              )
            })}
          </section>

          {/* Pagination */}
          <div className={Styles.Pagination}>
            {!isFirst && (
              <Link to={`/${prevPage}`} rel="prev">
                ← Previous
              </Link>
            )}
            {Array.from({ length: pageCount }, (_, i) => (
              <Link
                activeClassName={Styles.ActiveLink}
                key={`pagination-number${i + 1}`}
                to={`/${i === 0 ? "" : i + 1}`}
              >
                {i + 1}
              </Link>
            ))}
            {!isLast && (
              <Link to={`/${nextPage}`} rel="next">
                Next →
              </Link>
            )}
          </div>
          <Newsletter />
          <SuggestArticles />
        </>
      }
    />
  )
}
