import React from "react"
import Styles from "../styles/categories.module.scss"
import Styles2 from "../styles/index.module.scss"

import { Link, graphql } from "gatsby"
import Layout from "../containers/Layout/Layout"
import Tags from "../components/Blog/Tags/Tags"
import Brand from "../components/Brand/Details"
import allCategories from "../hooks/allCategories"

export default ({ data }) => {
  const categories = allCategories()

  return (
    <React.Fragment>
      <Layout
        PageTitle={`Topic Categories - ${Brand.name}`}
        PageLink="/categories"
        PageDescription={`This page contains topic categories which have been written about in ${Brand.name}.`}
        PageKeywords={`categories, ${categories.map(
          (category) => category.name
        )}`}
        FirstSection={
          <div className={Styles2.TagsSection}>
            <h3>#tags</h3>
            <Tags />
          </div>
        }
        SecondSection={
          <section className={Styles.CategoriesContainer}>
            <h1>TOPIC CATEGORIES</h1>
            <div className={Styles.Categories}>
              {categories.map((category, index) => (
                <Link
                  key={`${category.link}_${index}`}
                  to={`/category${category.link}`}
                  className={Styles.Category}
                >
                  <h2>{category.name}</h2>
                  <div className={Styles.Excerpt}>
                    <p>{category.excerpt}</p>
                    <p>
                      {category.numOfPosts} post
                      {category.numOfPosts === 1 ? "" : "s"}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        }
      />
    </React.Fragment>
  )
}

export const query = graphql`
  query {
    AllPosts: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            category
          }
        }
      }
    }
  }
`
