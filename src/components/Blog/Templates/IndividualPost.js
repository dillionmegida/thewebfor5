import React, { useState } from 'react';
import Styles from '../Styles/IndividualPost.module.scss';

import AllAuthors from '../../Author/AuthorList';
import RelatedArticles from '../RelatedArticles/RelatedArticles';
import { graphql, Link } from 'gatsby'; 
import Layout from '../../../containers/Layout/Layout';
import Brand from '../../Brand/Details';
import formatBlogDate from '../../../functions/dateFormatter';
import { saveArticle, isArticleSaved, unSaveArticle, SaveMsg } from '../Saved/Saved';
import NativeShare, { ShareTwitter } from '../../SocialMedia/ShareArticle';
import Newsletter from '../../Newsletter/Newsletter';
import SuggestArticles from '../SuggestArticles/SuggestArticles';
import EditArticle from '../Common/EditArticle';
import DiscussArticle from '../Common/DiscussArticle';

export default ({ data }, props) => {
  
    const post = data.markdownRemark;

    const [ isSaved, saveState ] = useState(isArticleSaved(post.id));
    const { frontmatter } = post;
    const { fields } = post;

    const unSave = id => {
      unSaveArticle(id);
      saveState(false);
    }

    const save = id => {
      if(saveArticle(id) === false) {
        saveState(false);
      } else {
        saveArticle(id);
        saveState(true);
      }
    }

    const authorFilter = AllAuthors.filter(author => (
      author.authorID === frontmatter.authorID
    ))

    // If the filter is more than one, use dillion megida
    let author;
    if(authorFilter.length > 1) {
      author = {...AllAuthors[0]}
    } else {
      author = authorFilter[0];
    }

    const Header = props => (
      <div className={`${Styles.Header} ${props.OtherClasses}`}>
        <h1>{frontmatter.title}</h1>
        <p>{formatBlogDate(frontmatter.date)}<br/>
          <em>{post.timeToRead} min{post.timeToRead > 1 ? 's' : null} read</em>
        </p>
        {
          frontmatter.authorID ? (
              <p className={Styles.Author}>
                by&nbsp;
                <Link
                  to={`/author/${author.slug}`}
                  title={`${author.name}, Author at ${Brand.name}`}
                >
                  {author.name}
                </Link>
              </p>
            )
          : (
            <p>Dillion Megida</p>
          )
        }
        <p>Category: {frontmatter.category.toUpperCase()}</p>
        <span>
          {
            frontmatter.tags.map((tag, index) =>
              <Link
                key={`${tag}_${index}`}
                to={`/tags/${tag}`}
                title={`Articles tagged with '${tag}'`}
              >
                #{tag}
              </Link>  
            )
          }
        </span>
        {
          isSaved ?
            <button id='UnsaveButton' className={Styles.Unsave} onClick={() => {unSave(post.id)}}>
              <i className='fa fa-bookmark'></i> Unsave
            </button>
          :
            <button className={Styles.Save} onClick={() => {save(post.id)}}>
              <i className='fa fa-bookmark'></i> Save
            </button>
        }
        <SaveMsg />
      </div>
    )

    return (
        <Layout
            PageTitle = {`${frontmatter.title} - ${Brand.name}`}
            PageLink = {fields.slug}
            PageDescription = {frontmatter.pageDescription}
            PageKeywords={frontmatter.pageKeywords}
            ImageCard={frontmatter.cover}

            FirstSection = {
              <Header OtherClasses={Styles.LeftContents}/>
            }


            SecondSection = {
              <React.Fragment>
                <article className={Styles.PostSection}>
                    <Header OtherClasses={Styles.PageHeader}/>
                    {
                      // Display post cover if available
                      frontmatter.cover ?
                        <div className={Styles.PostCover}>
                          <img src={frontmatter.cover} alt={Styles.PostCover} />
                        </div>
                      : null
                    }
                    <div style={{borderTop: frontmatter.cover ? '0' : '1px solid var(--color5)'}} className={Styles.PostContent}>
                        <div dangerouslySetInnerHTML={{ __html: post.html }} />
                        <p>If you have any questions or contributions regarding this article, kindly reach us on twitter - <a href={`https://twitter.com/${Brand.twitter}`}>@{Brand.name.toLowerCase()}</a></p>
                    </div>
                </article>
                <div className={Styles.EditDiscuss}>
                  <EditArticle
                    href={post.fields.slug}
                  />
                  <DiscussArticle
                    href={post.fields.slug}
                  />
                </div>
                <div className={Styles.ShareArticle}>
                  <p>Kindly share this article <span role='img' aria-label='Happy Emoji'>😃</span></p>
                  <div className={Styles.Methods}>
                    <NativeShare
                      url = {post.fields.slug}
                      title = {frontmatter.title}
                      text = {frontmatter.title}
                      author = {author.name}
                    />
                    <ShareTwitter
                      articleTitle={frontmatter.title}
                      href={post.fields.slug}
                      author = {author.name}
                    />
                  </div>
                </div>
                <Newsletter />
                <SuggestArticles />
                <RelatedArticles
                  tags={frontmatter.tags}
                  articleID={post.id}
                  sectionClassName={Styles.RelatedArticles}
                />
              </React.Fragment>
              
            }
        >
        </Layout>

    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      fields {
        slug
      }
      html
      timeToRead
      frontmatter {
        title
        date
        authorID
        cover
        tags
        category
        pageDescription
        pageKeywords
      }
    }
  }
`
