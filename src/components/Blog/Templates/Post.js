import React, { useState } from 'react';
import Styles from '../Styles/Post.module.scss';

import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { saveArticle, isArticleSaved, unSaveArticle } from '../Saved/Saved';

const Post = props => {

    const postID=  props.PostID;
    const dontShowSaveButtons = props.dontShowSaveButtons;

    const [ isSaved, saveState ] = useState(isArticleSaved(postID));

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

    let PostPosition = props.PostPosition
    let FirstPostSpecialStyle = props.FirstPostSpecialStyle;
    return (
        <article className={FirstPostSpecialStyle && props.CoverSource && PostPosition === 0 ? `${Styles.Post} ${Styles.FirstPost}` : `${Styles.Post}`}>
            {/* The first post has a different style 
            
            // FirstPostSpecialStyle is applied conditionally*/}

            {/* The blog cover is only show for the first */}
            {
                props.CoverSource && FirstPostSpecialStyle && PostPosition === 0 ?
                    <div className={Styles.PostCover}>
                        <img src={props.CoverSource} alt={props.CoverAlt} />
                    </div>
                : null
            }            
            <div className={Styles.PostDetails}>
                <Link
                    to={props.href}
                    title={props.title}
                >
                    <h2>{props.title}</h2>
                </Link>
                <p>
                    {
                        // This ensures that the characters are limited to 150 characters
                        props.excerpt.length > 150 ? `${props.excerpt.substr(0,150)}...` : props.excerpt
                    }
                </p>
                <div className={Styles.Extra}>
                    <p>{props.extraInfo}</p>
                    {!dontShowSaveButtons ?
                        isSaved ? (
                            <button title='Unsave article' id='UnsaveButton' className={Styles.Unsave} onClick={() => {unSave(postID)}}>
                                <i className='fa fa-bookmark'></i> Unsave
                            </button>
                        ) : (
                            <button title='Save article' className={Styles.Save} onClick={() => {save(postID)}}>
                                <i className='fa fa-bookmark'></i> Save
                            </button>
                        )
                        : null
                    }
                </div>
            </div>
        </article>
    )
}

Post.propTypes = {
    PostID: PropTypes.isRequired,
    PostPosition: PropTypes.number,
    FirstPostSpecialStyle: PropTypes.bool,
    CoverSource: PropTypes.string,
    CoverAlt: PropTypes.string,
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    extraInfo: PropTypes.string.isRequired
}

export default Post;