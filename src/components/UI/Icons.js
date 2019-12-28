import React, { Fragment } from 'react';

const Icon = props => (
    <Fragment>
        <i className={props.class}></i>
    </Fragment>
)

const BackArrow = props => (
    <Icon class='fa fa-chevron-left' />
)

const Link = props => (
    <Icon class='fa fa-link' />
)

// Social Media Icons
const Twitter = props => (
    <Icon class='fa fa-twitter' />
)

export { BackArrow, Link, Twitter };