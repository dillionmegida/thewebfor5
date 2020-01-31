import React from 'react';
import Styles from '../Styles/Posts.module.scss';

import { graphql } from 'gatsby';
import Layout from '../../../containers/Layout/Layout';
import Brand from '../../Brand/Details';
import Post from '../Templates/Post';
import formatBlogDate from '../../../functions/dateFormatter';

export default ({ pageContext, data }) => {
    const { category } =  pageContext;
    const { edges, totalCount } = data.allMarkdownRemark;

    const CategoryHeader = (
        <React.Fragment>
            <h2>
                Category - {category}
            </h2>
            <p className={Styles.HeaderExtraDetails}>
                {totalCount} post{totalCount === 1 ? "": "s"}  published
            </p>
        </React.Fragment>
    )

    return (
        <Layout

        PageTitle={`${category} Category - ${Brand.name}`}
        PageDescription={`Group of topics under ${category} section in ${Brand.name}`}
        PageLink={`/category/${category}`}
        PageKeywords={`categories, ${category} category, ${category} topics`}

            FirstSection = {
                <div className={Styles.LeftContents}>
                    {CategoryHeader}
                </div>
            }

            SecondSection={
                <React.Fragment>
                    <div className={`${Styles.PageHeader}`}>
                        {CategoryHeader}
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

export const categoryQuery = graphql`
    query($category: String) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { category: { in: [$category] } } }
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