import React from "react";      
import Styles from '../styles/index.module.scss';

import Layout from '../containers/Layout/Layout';
import Tags from '../components/Blog/Tags/Tags';
import AllPosts from '../components/Blog/Categories/All';
import Brand from '../components/Brand/Details';

export default () => {

    return (
        <React.Fragment>
            <Layout

                PageTitle = {`${Brand.name} - Simplifying web topics like teaching a five year old.`}
                PageLink = '/'
                PageDescription = {`${Brand.name} is a blog platform for demystifying web topics as assumed to be teaching a five year old.`}
                PageKeywords= 'home'

                FirstSection={
                    <div className={Styles.TagsSection}>
                        <h3>#tags</h3>
                        <Tags />
                    </div>
                }
                SecondSection={
                    <AllPosts FirstPostSpecialStyle/>
                }
                ThirdSection={
                    <p>Hi</p>
                }
            />
        </React.Fragment>
    )
}