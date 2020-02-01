import React from 'react';
import Styles from './ShareArticle.module.scss';

import { Twitter, Share } from '../UI/Icons';
import Brand from '../Brand/Details';
import { checkGlobal } from '../Blog/Saved/Saved';

const checkNativeShare = () => (
    checkGlobal() && navigator.share
)

const sharedText = (url, title, author) => (
    `${title} by @${author} on @${Brand.twitter} - ${Brand.domain}${url} %23${Brand.name.toLowerCase()}`
)

const nativeShare = (url, title, author) => {
    navigator.share({
        title,
        url,
        text: `${title} by @${author} on @${Brand.twitter} #${Brand.name.toLowerCase()}`
    }).then(() => {
        console.log("Successful shared article.")
    }).catch(err => (
        console.log("Couldn't share articel because ", err)
    ))
}

const ShareTwitter = props => {
    const text = props.text;
    return (
        <a className={Styles.Link} target='_blank' rel='noopener noreferrer' href={`https://twitter.com/intent/tweet?text=${text}`} >
            <Twitter /> 
        </a>
    )
}

const OtherShare = props => {
    const url = props.url;
    const title = props.title;
    const author = props.author;
    return (
        <>
            <ShareTwitter
                text = {sharedText(url, title, author)}
            />
        </>
    )
}

const ShareArticle = props => {
    const url = props.url;
    const title = props.title;
    const author = props.author;

    return (
        <React.Fragment>
            <div className={Styles.ShareArticle}>
                <p>Kindly share this article <span role='img' aria-label='Happy Emoji'>😃</span></p>
                <div className={Styles.Methods}>
                    {
                        checkNativeShare() !== undefined ?
                            <button title='Share article via your applications' onClick={() => nativeShare(url, title, author)}>
                                <Share /> Share
                            </button>
                        : (
                            <OtherShare
                                url = {url}
                                title = {title}
                                author = {author}
                            />
                        )
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default ShareArticle;
