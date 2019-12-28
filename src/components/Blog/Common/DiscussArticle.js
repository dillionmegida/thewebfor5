import React from 'react';
import Brand from '../../Brand/Details';

export default props => (
    <a target='_blank' rel='noopener noreferrer' href={`https://twitter.com/search?q=${encodeURIComponent(Brand.domain)}${encodeURIComponent(props.href)}`}>
        Discuss on Twitter
    </a>
)