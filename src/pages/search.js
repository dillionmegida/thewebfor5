import React from 'react';

import Layout from '../containers/Layout/Layout';
import Search from '../containers/Search/Search';

export default () => (
    <Layout
        PageTitle="Search Articles - Dillion's Blog"
        PageLink='/search'
        PageDescription="Search articles in Dillion's Blog"
        PageKeywords='search'
        TwitterCardTtitle='DILLION MEGIDA'
    >
        <Search />
    </Layout>
)
