import React from 'react';
// import { Helmet } from 'react-helmet';

export default (props) => (
    <div className='App'>
    	// <Helmet>
    	// 	<meta charSet="utf-8" />
    	// 	<title>
    	// 		{props.PageTitle}
    	// 	</title>
    	// 	<link rel="canonical" href=`http://mysite.com/{props.PageLink}` />
    	// </Helmet>
        {props.children}
    </div>
)