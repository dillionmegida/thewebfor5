import React from 'react';
import Styles from '../Styles/Post.module.scss';

import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Post = props => {
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
                <p>{props.extraInfo}</p>
            </div>
        </article>
    )
}

Post.propTypes = {
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