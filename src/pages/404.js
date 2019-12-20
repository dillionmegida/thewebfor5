import React from 'react';
import Styles from '../styles/404.module.scss';

import Layout from '../containers/Layout/Layout';
import { Link } from 'gatsby';

export default () => (
    <Layout
        SecondSection = {
            <React.Fragment>
                <div className={Styles.ErrorSection}>
                    <h1>404!!! Page Not Found</h1>
                    <Link to='/' title='Go to Homepage'>
                        Go To Homepage
                    </Link>
                </div>
            </React.Fragment>
        }

    />
)