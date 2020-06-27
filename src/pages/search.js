import React from "react"

import Search from "../containers/Search/Search"
import Layout from "../containers/Layout/Layout"
import Brand from "../components/Brand/Details"

export default () => (
  <Layout
    PageTitle={`Search articles on ${Brand.name}`}
    PageLink="/search"
    PageDescription={`Search articles on ${Brand.name}`}
    PageKeywords="search"
    SecondSection={<Search />}
  />
)
