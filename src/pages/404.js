import React from "react"
import Styles from "../styles/404.module.scss"

import Layout from "../containers/Layout/Layout"
import { Link } from "gatsby"
import ErrorImg from "../assets/img/404.png"
import { BackArrow } from "../components/UI/Icons"

export default () => {
  const Header = () => (
    <>
      <h1>404!</h1>
      <p>Page Not Found!!</p>
    </>
  )

  const HomepageLink = () => (
    <Link className={Styles.HomeLink} to="/" title="Go to Homepage">
      <BackArrow /> Go To Homepage
    </Link>
  )

  return (
    <Layout
      FirstSection={
        <div className={Styles.LeftContents}>
          <Header />
          <HomepageLink />
        </div>
      }
      SecondSection={
        <section className={Styles.Contents}>
          <div className={Styles.MobileHeader}>
            <Header />
          </div>
          <div className={Styles.ErrorImg}>
            <img src={ErrorImg} alt="A boy with a map looking for his way" />
          </div>
          <HomepageLink />
        </section>
      }
    />
  )
}
