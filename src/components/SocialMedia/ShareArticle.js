import React from 'react';
import Styles from './ShareArticle.module.scss';

import { Twitter, Share } from '../UI/Icons';
import Brand from '../Brand/Details';
import { checkGlobal } from '../Blog/Saved/Saved';

const checkNativeShare = () => (
    checkGlobal() && navigator.share
)

const nativeShare = (url, title, text) => {
    navigator.share({
        title,
        url,
        text: `${title} on @${Brand.twitter} - ${Brand.domain}${url} #${Brand.name.toLowerCase()}`
    }).then(() => {
        console.log("Successful shared article.")
    }).catch(err => (
        console.log("Couldn't share articel because ", err)
    ))
}

const NativeShare = props => {
    const url = props.url;
    const title = props.title;
    const text = props.text;
    return (
        <React.Fragment>
            {
                checkNativeShare() !== undefined ?
                    <button title='Share article via your applications' onClick={() => nativeShare(url, title, text)}>
                        <Share /> Share
                    </button>
                :
                    null
            }
        </React.Fragment>
    )
}

const ShareTwitter = props => {
    const text = `${props.articleTitle} on @${Brand.twitter} - ${Brand.domain}${props.href} %23${Brand.name.toLowerCase()}`;
    return (
        <a className={Styles.Link} target='_blank' rel='noopener noreferrer' href={`https://twitter.com/intent/tweet?text=${text}`} >
            <Twitter />
        </a>
    )
}
export default NativeShare;
export { ShareTwitter };
