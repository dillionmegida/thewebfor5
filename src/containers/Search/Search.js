import React from 'react';
import Styles from './Search.module.scss';

import { StaticQuery, graphql } from 'gatsby';
import Post from '../../components/Blog/Templates/Post';
import formatBlogDate from '../../functions/dateFormatter';

export default class Search extends React.Component {

    state = {
        filteredArr: []
    }

    handleInput = (wholeArr, event) => {
        const query = event.target.value.toLowerCase();

        // check if the query is blank because the every post will pass the filter test for an empty input
        if(query === '') {
            this.setState({
                filteredArr: []
            });
            return;
        }
        const posts = wholeArr.edges
        const filteredArr = posts.filter(post => {
            const { pageDescription, title, tags } = post.node.frontmatter;

            return (
                pageDescription.toLowerCase().includes(query)
                ||
                title.toLowerCase().includes(query)
                ||
                tags.join("").toLowerCase().includes(query)
            )
        })
        this.setState({
            filteredArr: filteredArr
        })
    }

    render() {
        return (
            <StaticQuery
                query={
                    graphql`
                        query {
                            allPosts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
                                totalCount
                                edges {
                                    node {
                                        id
                                        frontmatter {
                                            title
                                            date
                                            pageDescription
                                            tags
                                        }
                                        fields {
                                            slug
                                        }
                                        timeToRead
                                    }
                                }
                            }
                        }           
                    `
                }
                render={data => {

                    const { allPosts } = data;
                    const { totalCount: noOfArticles } = allPosts;
                    const arrLength = this.state.filteredArr.length;

                    return (
                        <React.Fragment>
                            <p style={{textAlign: 'center', color: 'var(--color3)'}}><b>{noOfArticles}</b> articles published</p>
                            <div className={Styles.Search}>
                                <input autoFocus type='text' placeholder='Search articles by keywords or phrase...' onChange={(event) => {this.handleInput(allPosts, event)}}/>
                                <p>{arrLength}</p>
                            </div>
                            {
                                arrLength !== 0 ?
                                    <section>
                                        {
                                            this.state.filteredArr.map(({ node }) => (
                                                    <article key={node.id}>
                                                        <Post
                                                            href={node.fields.slug}
                                                            title={node.frontmatter.title} 
                                                            tags={node.frontmatter.tags}
                                                            excerpt={node.frontmatter.pageDescription}
                                                            extraInfo={`${formatBlogDate(node.frontmatter.date)} | ${node.timeToRead} min${node.timeToRead > 1 ? 's' : ''} read`}
                                                        />
                                                    </article>
                                                
                                            ))
                                        }
                                    </section>
                                : null
                            }
                            
                        </React.Fragment>
                    )
                }}
            />
        )
    }
}
