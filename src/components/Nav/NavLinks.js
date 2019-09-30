import React from 'react';
import NavLink from './NavLink';
import Styles from '../../styles/NavLink.module.css';

const navLinks = () => (
    <React.Fragment>
        <NavLink href='/' title="Dillion Megida's Blog" nav='blog'/>
        <NavLink href='/about' title="About Me" nav='about'/>
        <NavLink href='/portfolio' title="My Portfolio" nav='portfolio'/>
        <NavLink href='/contact' title="Contact Me" nav='contact'/>
        <a className={Styles.A} href='https://tinyletter.com/dillionmegida' title="Newsletter - Dillion's Blog">
            NEWSLETTER
        </a>
    </React.Fragment>
);

export default navLinks;