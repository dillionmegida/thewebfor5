import React from 'react';

import { StaticQuery, graphql } from 'gatsby';
import { Blog } from '../../components/Blogs';

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
        }, () => console.log(this.state.filteredArr))
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
                                            readTime
                                            pageDescription
                                            tags
                                        }

                                        fields {
                                            slug
                                        }
                                    }
                                }
                            }
                        }           
                    `
                }
                render={data => {

                    const { allPosts } = data; 

                    return (
                        <React.Fragment>
                            <div className='Search'>
                                <input type='text' placeholder='Search articles...' onChange={(event) => {this.handleInput(allPosts, event)}}/>
                            </div>
                            {
                                this.state.filteredArr.length !== 0 ?
                                    <section className='Blogs'>
                                        {
                                            this.state.filteredArr.map(({ node }) => (
                                                    <article key={node.id} className='Blog'>
                                                        <Blog
                                                            href={node.fields.slug}
                                                            title={node.frontmatter.title} 
                                                            readTime={node.frontmatter.readTime}
                                                            date={node.frontmatter.date}
                                                            tags={node.frontmatter.tags}
                                                            content={
                                                                node.frontmatter.pageDescription.length > 150 ? `${node.frontmatter.pageDescription.substr(0,150)}...` : node.frontmatter.pageDescription
                                                            }
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