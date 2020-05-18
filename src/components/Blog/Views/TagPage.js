import React from 'react';
import Styles from '../Styles/Posts.module.scss';

import { graphql } from 'gatsby';
import Layout from '../../../containers/Layout/Layout';
import Brand from '../../Brand/Details';
import Post from '../Templates/Post';
import formatBlogDate from '../../../functions/dateFormatter';

export default ({ pageContext, data }) => {
    const { tag } =  pageContext;
    const { edges, totalCount } = data.allMarkdownRemark;
    const tagHeader = (
        <React.Fragment>
            <h2>
                #{tag}
            </h2>
            <p className={Styles.HeaderExtraDetails}>
                {totalCount} post{totalCount === 1 ? "": "s"} published
            </p>
        </React.Fragment>
    )

    return (
        <Layout

            PageTitle = {`Articles tagged with #${tag} - ${Brand.name}`}
            PageLink = {`/tag/${tag}`}
            PageDescription = {`Group of topics tagged with #${tag} in ${Brand.name}`}
            PageKeywords = {tag}

            FirstSection = {
                <div className={Styles.LeftContents}>
                    {tagHeader}
                </div>
            }

            SecondSection={
                <React.Fragment>
                    <div className={`${Styles.PageHeader}`}>
                        {tagHeader}
                    </div>
                    <section className={Styles.Posts}>
                        {
                            edges.map(({ node }) => {
                                const { excerpt, fields, frontmatter } = node;
                                const { slug } = fields;
                                const { title } = frontmatter;

                                return (
                                    <Post
                                        key={node.id}
                                        PostID={node.id}
                                        href={slug}
                                        title={title}

                                        CoverSource=''
                                        CoverAlt=''

                                        excerpt={excerpt}
                                        
                                        extraInfo={`${formatBlogDate(node.frontmatter.date)} | ${node.timeToRead} min${node.timeToRead > 1 ? 's' : ''} read`}
                                    />
                                )
                            })
                        }
                    </section>
                </React.Fragment>
            }
        />
    )
}

export const pageQuery = graphql`
    query($tag: String) {
        allMarkdownRemark(
            limit: 2000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            totalCount
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        date
                    }
                    timeToRead
                    excerpt
                }
            }
        }
    }
`