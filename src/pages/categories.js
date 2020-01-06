import React from "react"; 
import Styles from '../styles/categories.module.scss';
import Styles2 from '../styles/index.module.scss';

import { Link, graphql } from 'gatsby';
import Layout from '../containers/Layout/Layout';
import Tags from '../components/Blog/Tags/Tags';
import Brand from '../components/Brand/Details';

export default ({ data }) => {
    
    const { edges } = data.AllPosts
    
    // To get Post Counts

    let GeneralArr, HTMLArr, CSSArr, JavascriptArr, GitArr;
                
    GeneralArr = edges.filter(({ node }) =>
        node.frontmatter.category === 'general'
    )

    HTMLArr = edges.filter(({ node }) =>
        node.frontmatter.category === 'html'
    )

    CSSArr = edges.filter(({ node }) =>
        node.frontmatter.category === 'css'
    )

    JavascriptArr = edges.filter(({ node }) =>
        node.frontmatter.category === 'javascript'
    )

    GitArr = edges.filter(({ node }) => (
        node.frontmatter.category === 'git'
    ))

    const NumOfPosts = {
        General: GeneralArr.length,
        HTML: HTMLArr.length,
        CSS: CSSArr.length,
        Javascript: JavascriptArr.length,
        Git: GitArr.length
    }

    const categoryLists = [
        {
            name: 'CSS',
            excerpt: 'Cascading Stylesheet',
            link: '/css',
            numOfPosts: NumOfPosts.CSS
        },
        {
            name: 'General',
            excerpt: 'General web topics',
            link: '/general',
            numOfPosts: NumOfPosts.General
        },
        {
            name: 'Git',
            excerpt: 'Distributed version control',
            link: '/git',
            numOfPosts: NumOfPosts.Git
        },
        {
            name: 'HTML',
            excerpt: 'HyperText Markup Language',
            link: '/html',
            numOfPosts: NumOfPosts.HTML
        },
        {
            name: 'Javascript',
            excerpt: 'Scripting language for the web',
            link: '/javascript',
            numOfPosts: NumOfPosts.Javascript
        }
    ]
    

    return (
        <React.Fragment>
            <Layout
                PageTitle={`Topic Categories - ${Brand.name}`}
                PageLink = '/categories'
                PageDescription = {`This page contains topic categories which have been written about in ${Brand.name}.`}
                PageKeywords={`categories, ${categoryLists.map(category =>
                    category.name
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
                            {
                                categoryLists.map((category, index) =>
                                    <Link key={`${category.link}_${index}`} to={`/category${category.link}`} className={Styles.Category}>
                                        <h2>{category.name}</h2>
                                        <div className={Styles.Excerpt}>
                                            <p>{category.excerpt}</p>
                                            <p>{category.numOfPosts} post{category.numOfPosts === 1 ? '' : 's'}</p>
                                        </div>
                                    </Link>
                                )
                            }
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