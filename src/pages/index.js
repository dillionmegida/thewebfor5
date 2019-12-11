import React from 'react';
import Layout from '../containers/Layout/Layout'
import Blogs from  '../components/Blogs'
import Newsletter from '../components/common/Newsletter';
import { Link } from 'gatsby';


let Index = () => (
    <Layout
        PageTitle='Dillion Megida &#128640; - Technical Writer and Front End Developer'
        PageLink='/'
        PageDescription="Dillion is a front end developer, a technical writer and a graphics designer."
        PageKeywords='branding, design, dillion megida, dillion, megida, web developer, web development, frontend'
        TwitterCardTtitle='Dillion Megida'

        //The copyright only shows on the blog page and on each blog for mobile
        // ...But it always shows for large screens
        ShowMobileCopyright
    >
        <div className='SearchSection'>
            <Link to='/search' title='Search articles'>
                <i className='fa fa-search'></i> <span>Search Articles</span>
            </Link>
        </div>
        <Blogs/>
        <Newsletter/>
    </Layout>
);

export default Index;
