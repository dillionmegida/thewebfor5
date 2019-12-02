import React from 'react';
import NavLink from './NavLink';

const navLinks = () => (
    <React.Fragment>
        <NavLink href='/' title="Dillion Megida's Blog" nav='blog'/>
        <NavLink href='/about' title="About Me" nav='about'/>
        <NavLink href='/contact' title="Contact Me" nav='contact'/>
    </React.Fragment>
);

export default navLinks;