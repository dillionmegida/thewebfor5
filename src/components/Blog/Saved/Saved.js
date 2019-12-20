import React from 'react';
import Styles from '../Styles/Posts.module.scss';

import Layout from '../../../containers/Layout/Layout';
import Brand from '../../Brand/Details.js';
import { StaticQuery, graphql } from 'gatsby';
import Post from '../Templates/Post.js';
import formatBlogDate from '../../../functions/dateFormatter';

const storageKey = `${Brand.name}_12345`;

// necessary to check because server side rendering does not have global objects
// if not checked, global objects like 'window' will be undefined
const checkGlobal = () => (
    typeof window !== `undefined`
)

let savedArticlesArray_Prev;

if(checkGlobal()) {
	savedArticlesArray_Prev = JSON.parse(window.localStorage.getItem(storageKey));
}


// if an array exists, use it, else set an empty array
let savedArticlesArray;
savedArticlesArray = savedArticlesArray_Prev ? savedArticlesArray_Prev : [];

if(checkGlobal()) {	
	window.localStorage.setItem(storageKey, JSON.stringify(savedArticlesArray));
}

// const isSavedMoreThan = (arr, max) => {
//     if(arr.length > max) {
//         return true;
//     }
// }

const saveArticle = id => {
    let prevArr = savedArticlesArray;
    // if(isSavedMoreThan(prevArr, 2)) {
    //     alert(`Saved Articles are more than 2. Kindly unsave some to add more.`);
    //     return;
    // }
	let newArr = prevArr;
	if(!newArr.includes(id))
		newArr.push(id);
	if(checkGlobal()) {
		window.localStorage.setItem(storageKey, JSON.stringify(newArr));
	}
	// setItem(storageKey, JSON.stringify(newArr));
}

const unSaveArticle = id => {
	let prevArr = savedArticlesArray;
	let IDindex = prevArr.indexOf(id);
	prevArr.splice(IDindex, 1);
	let newArr = prevArr;
	if(checkGlobal()) {
		window.localStorage.setItem(storageKey, JSON.stringify(newArr));
	}
	// setItem(storageKey, JSON.stringify(newArr));
}

const isArticleSaved = id => {
	let savedArr = savedArticlesArray;
	return savedArr.includes(id);
}

export default () => (
	<StaticQuery
		query = {
			graphql`
				query {
					allPosts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
						edges {
							node {
								id
								frontmatter {
									title
									cover
									date
								}
								timeToRead
								fields {
									slug
								}
								excerpt(pruneLength: 150)
							}
						}
					}
				}
			`
		}

		render = {
			data => {
				const { edges: allPosts } = data.allPosts;

				let savedArticlesArray_Filtered = allPosts.filter(({ node }) =>
					savedArticlesArray.includes(node.id)
				)

				const savedPostsHeader = (
					<React.Fragment>
						<h2>
							Saved Posts
						</h2>
						<p className={Styles.HeaderExtraDetails}>
							{savedArticlesArray.length} post{savedArticlesArray.length === 1 ? "": "s"} saved
						</p>
					</React.Fragment>
				)

				return (
					<Layout

						PageTitle={`Your Saved Articles - ${Brand.name}`}
						PageLink = '/saved'
						PageDescription = {`Saved articles in ${Brand.name}`}
						PageKeywords='saved'

						FirstSection = {
							<div className={Styles.LeftContents}>
								{savedPostsHeader}
							</div>
						}

						SecondSection = {
							<React.Fragment>
								<div className={Styles.PageHeader}>
									{savedPostsHeader}
								</div>
								{
									savedArticlesArray_Filtered.length !== 0 ?
										savedArticlesArray_Filtered.reverse().map(({ node }) =>
											<Post
												key={node.id}

												href={node.fields.slug}

												title={node.frontmatter.title}

												CoverSource={node.frontmatter.cover}
												CoverAlt=''

												excerpt={node.excerpt}
												extraInfo={`${formatBlogDate(node.frontmatter.date)} | ${node.timeToRead} min${node.timeToRead > 1 ? 's' : ''} read`}

											/>
										)
									: <h2 align='center'>Oops : ( ... You have no saved articles</h2>
								}
							</React.Fragment>
						}

					/>
				)
			}
		}

	/>
)

export { saveArticle, isArticleSaved, unSaveArticle };