import React from 'react';
import { Twitter, Link } from '../UI/Icons';

const TwitterMedia = props => (
    <a href={props.href} title={props.title}>
        <Twitter />
    </a>
)

const WebsiteMedia = props => (
    <a href={props.href} title={props.title}>
        <Link />
    </a>
)

export { TwitterMedia, WebsiteMedia }