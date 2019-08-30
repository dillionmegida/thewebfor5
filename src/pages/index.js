import React from 'react';
import Layout from '../components/Layout/Layout'
import Blogs from  '../components/Blogs'
import Helmet from 'react-helmet';


let Index = () => (
    <Layout>
        <Helmet title='Dillion Megida' />
        <Blogs/>
    </Layout>
);

export default Index;
