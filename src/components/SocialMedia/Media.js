import React from 'react';

const TwitterMedia = props => (
    <a href={props.href} title={props.title}>
        <i className='fa fa-twitter'></i>
    </a>
)

const WebsiteMedia = props => (
    <a href={props.href} title={props.title}>
        <i className='fa fa-link'></i>
    </a>
)

export { TwitterMedia, WebsiteMedia }
