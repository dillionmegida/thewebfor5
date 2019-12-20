import React from 'react';
import Styles from './Footer.module.scss';

import { Link } from 'gatsby';
import Brand from '../Brand/Details';

export default () => {
    return (
        <footer className={Styles.Footer}>
            <p className={Styles.Copyright}>
                Copyright &copy;&nbsp;
                <Link to='/' title={Brand.name}>
                    {Brand.name}
                </Link>
            </p>
            | <a className={Styles.Repo} href={Brand.repo} title={`GitHub repository for ${Brand.name}`}>Contribute <i className='fa fa-github'></i></a>
        </footer>
    )
}