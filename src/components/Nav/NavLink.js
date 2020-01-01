import React from 'react';
import { Link } from 'gatsby';

export default props => (
    <li>
        <Link to={props.Link} title={props.Title} activeClassName={props.ActiveClassName}>
            {/* The link title class is provided to remove the text (remaining the icon) on small screens */}
            {props.Icon} <span className={props.LinkTitle}>{props.Nav}</span>
        </Link>
    </li>
)