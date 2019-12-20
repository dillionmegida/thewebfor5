import React from 'react';
import { Link } from 'gatsby';

export default props => (
    <li>
        <Link to={props.Link} title={props.Title} activeClassName={props.ActiveClassName}>
            {props.Nav}
        </Link>
    </li>
)