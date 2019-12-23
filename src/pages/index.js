import React from "react";      
import Styles from '../styles/index.module.scss';

import Layout from '../containers/Layout/Layout';
import Tags from '../components/Blog/Tags/Tags';
import AllPosts from '../components/Blog/Categories/All';
import Brand from '../components/Brand/Details';
import Newsletter from '../components/Newsletter/Newsletter';
import SuggestArticles from '../components/Blog/SuggestArticles/SuggestArticles';

export default () => {

    return (
        <React.Fragment>
            <Layout

                PageTitle = {`${Brand.nameWithSpace} - Simplifying web topics like teaching a five year old.`}
                PageLink = '/'
                PageDescription = {`${Brand.name} is a blog platform for demystifying web topics as assumed to be teaching a five year old.`}
                PageKeywords= 'home, The Web For Five, The Web For 5, simplified web topics, javascript'

                FirstSection={
                    <div className={Styles.TagsSection}>
                        <h3>#tags</h3>
                        <Tags />
                    </div>
                }
                SecondSection={
                    <React.Fragment>
                        <AllPosts FirstPostSpecialStyle/>
                        <Newsletter />
                        <SuggestArticles />
                    </React.Fragment>
                }
                ThirdSection={
                    <p>Hi</p>
                }
            />
        </React.Fragment>
    )
}
