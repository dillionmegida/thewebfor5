import React from 'react';
import  { Link } from 'gatsby';
import Styles from '../../styles/NavLink.module.css';

const navLink = (props) => {
    return (
        <Link
            className={Styles.Link}
            to={`/${props.href}`}
            activeClassName={Styles.ActiveLink}
            title={props.title}
        >
            {props.nav.toUpperCase()}
        </Link>
       
    )
}

export default navLink;