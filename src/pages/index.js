import React from 'react';
import Layout from '../components/Layout/Layout'
import Blogs from  '../components/Blogs'


let Index = () => (
    <Layout
        PageTitle='Dillion Megida &#128640; - Technical Writer and Front End Developer'
        PageLink='/'
        PageDescription="Dillion is a front end developer, a technical writer and a graphics designer."
        PageKeywords='branding, design, dillion megida, dillion, megida, web developer, web development, frontend'
        TwitterCardTtitle='Dillion Megida'
    >
        <Blogs/>
    </Layout>
);

export default Index;
