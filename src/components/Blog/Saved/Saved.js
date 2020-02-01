import React from 'react';
import Styles from '../Styles/Posts.module.scss';

import Layout from '../../../containers/Layout/Layout';
import Brand from '../../Brand/Details.js';
import { StaticQuery, graphql } from 'gatsby';
import Post from '../Templates/Post.js';
import formatBlogDate from '../../../functions/dateFormatter';

const storageKey = `${Brand.name}_123456`;

// necessary to check because server side rendering does not have global objects
// if not checked, global objects like 'window' will be undefined
const checkGlobal = () => (
    typeof window !== `undefined`
)

if(checkGlobal()) {
	// this was the initial key, had to remove it for users who visited the site before final launch
	window.localStorage.removeItem('TheWebFor5_12345');
}

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

const isSavedMoreThan = (arr, max) => {
    if(arr.length === max) {
        return true;
    }
}

const savedArticlesLimit = 20;

const saveArticle = id => {
	let prevArr = savedArticlesArray;
    if(isSavedMoreThan(prevArr, savedArticlesLimit)) {
		// Remove the alert for now
        // alert(`You can't save more than ${savedArticlesLimit} articles. Kindly unsave some to add more.`);
        return false;
    }
	let newArr = prevArr;
	if(!newArr.includes(id))
		newArr.push(id);
	if(checkGlobal()) {
		window.localStorage.setItem(storageKey, JSON.stringify(newArr));
	}
}

const unSaveArticle = id => {
	let prevArr = savedArticlesArray;
	let IDindex = prevArr.indexOf(id);
	prevArr.splice(IDindex, 1);
	let newArr = prevArr;
	if(checkGlobal()) {
		window.localStorage.setItem(storageKey, JSON.stringify(newArr));
	}
}

const isArticleSaved = id => {
	let savedArr = savedArticlesArray;
	return savedArr.includes(id);
}

const SaveMsg = () => (
	<p style={{fontSize: '15px', margin: '5px 0'}}>
		<i>Maximum of {savedArticlesLimit} articles can be saved!</i>
	</p>
)

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

				let savedArticlesArray_Filtered = [];

				// This method isn't too performant friendly But I had to opt for this because the saved article array,
				// in local storage only stores the keys. I have to ensure that the order in which it is stored is maintained.
				// Something I may do in the future is save the whole article object in storage rather than the keys alone.
				savedArticlesArray.forEach(id => {
					allPosts.forEach(({ node }) => {
						if(node.id === id) {
							savedArticlesArray_Filtered.push(node);
						}
					})
				})

				const savedPostsHeader = (
					<React.Fragment>
						<h2>
							Saved Posts
						</h2>
						<p className={Styles.HeaderExtraDetails}>
							{savedArticlesArray.length} post{savedArticlesArray.length === 1 ? "": "s"} saved
						</p>
						<SaveMsg />
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
										savedArticlesArray_Filtered.reverse().map(post =>
											<Post
												key={post.id}
												PostID={post.id}
												dontShowSaveButtons

												href={post.fields.slug}

												title={post.frontmatter.title}

												CoverSource={post.frontmatter.cover}
												CoverAlt=''

												excerpt={post.excerpt}
												extraInfo={`${formatBlogDate(post.frontmatter.date)} | ${post.timeToRead} min${post.timeToRead > 1 ? 's' : ''} read`}

											/>
										)
									: <h2 style={{textAlign: 'center', color: 'var(--color3)'}}>Oops : ( ... You have no saved articles</h2>
								}
							</React.Fragment>
						}

					/>
				)
			}
		}

	/>
)

export { saveArticle, isArticleSaved, unSaveArticle, SaveMsg, checkGlobal };