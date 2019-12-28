import React from 'react';
import Styles from './Footer.module.scss';

import { Link } from 'gatsby';
import Brand from '../Brand/Details';
import { TwitterMedia } from '../SocialMedia/Media';

export default () => {
    return (
        <footer className={Styles.Footer}>
            <p className={Styles.Copyright}>
                &copy; {new Date().getFullYear()}
            </p>
            | <span className={Styles.SocialMedia}>
                <TwitterMedia
                    href={`https://twitter.com/${Brand.twitter}`}
                    title={`${Brand.name} Titter Handle`}
                />
            </span>
            | <a className={Styles.Repo} href={Brand.repo} title={`GitHub repository for ${Brand.name}`}>Contribute <i className='fa fa-github'></i></a>
        </footer>
    )
}