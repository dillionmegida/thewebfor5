import React from 'react';
require('../../styles/NavLink.module.css');

const navLink = (props) => {
    return (
        <ul>
            <a key={props.title} href={props.href} title={props.title}>
                <li>
                    {props.nav.toUpperCase()}
                </li>
            </a>
        </ul>
    )
}

export default navLink;