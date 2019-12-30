import React, { Fragment } from 'react';

const Icon = props => (
    <Fragment>
        <i className={props.class}></i>
    </Fragment>
)

const BackArrow = () => (
    <Icon class='fa fa-chevron-left' />
)

const Link = () => (
    <Icon class='fa fa-link' />
)

const Share = () => (
    <Icon class='fa fa-share' />
)

// Theme
const Sun = () => (
    <Icon class='fa fa-sun-o' />
)
const Moon = () => (
    <Icon class='fa fa-moon-o' />
)

// Social Media Icons
const Twitter = () => (
    <Icon class='fa fa-twitter' />
)

export { Share, BackArrow, Link, Twitter, Sun, Moon };