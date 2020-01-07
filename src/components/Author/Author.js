import React from 'react';
import Styles from './Author.module.scss';

import AllAuthors from './AuthorList';
import Layout from '../../containers/Layout/Layout';
import Brand from '../Brand/Details';
import { Twitter, Web } from '../UI/Icons';
import { StaticQuery, graphql } from 'gatsby';

export default props => {
    
    const authorID = props.authorID;
    const filteredAuthor = AllAuthors.filter(author => (
        author.authorID === authorID
    ))

    const [ author ] = filteredAuthor;

    return (
        <Layout

            PageTitle = {`${author.name}, Author at ${Brand.name}`}
            PageLink = {`/author/${author.slug}`}
            PageDescription = {`${author.name} is an author at ${Brand.name} who writes on web development topics`}
            PageKeywords= {`${author.name}, ${author.slug}, ${author.name} ${Brand.name}`}
            TwitterImage={author.img}
            SummaryCard
        
            SecondSection = {
                <StaticQuery
                    query={
                        graphql`
                            query {
                                allPosts: allMarkdownRemark {
                                    edges {
                                        node {
                                            frontmatter {
                                                authorID
                                            }
                                        }
                                    }
                                }
                            }
                        `
                    }

                    render = {
                        data => {
                            const authorArticles = data.allPosts.edges.filter(({ node }) => (
                                node.frontmatter.authorID === author.authorID
                            ))  
                            const noOfArticles = authorArticles.length;

                            return (
                                <section className={Styles.Author}>
                                    <h1>{author.name}</h1>
                                    <p>Author at {Brand.name}</p>
                                    <div className={Styles.Img}>
                                        <img src={author.img} alt={author.name}/>
                                    </div>
                                    <div className={Styles.Details}>
                                        <p>
                                            <b>Stack:</b> <br/>
                                            {
                                                author.skills.map((skill, index) => `${skill}${index !== author.skills.length - 1 ? ", " : ""}`)
                                            }
                                        </p>
                                        <p>
                                            {
                                                author.twitter ?
                                                    (
                                                        <a href={`https://twitter.com/${author.twitter}`} title={`${author.name} on Twitter`}>
                                                            <Twitter />
                                                        </a>
                                                    )
                                                : null
                                            }
                                            {
                                                author.website ?
                                                    (
                                                        <a href={author.website} title={`${author.name}'s Website`}>
                                                            <Web />
                                                        </a>
                                                    )
                                                : null
                                            }
                                        </p>
                                        <p>
                                            <b>{noOfArticles}</b> article{noOfArticles === 1 ? "" : "s"} written.
                                        </p>
                                        <p>
                                            <b>Bio:</b> <br/>
                                            {author.bio}
                                        </p>
                                    </div>
                                </section>
                            )
                        }
                    }
                />
            }

        />
    )
}