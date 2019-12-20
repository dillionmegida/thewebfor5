import React from 'react';

import NavLink from './NavLink';
import Brand from '../Brand/Details';

const NavLists = [
    {
        // name: 'Home',
        name: 'fa fa-home',
        href: '/',
        title: `${Brand.name} - ${Brand.motto}`
    },
    {
        // name: 'Sections',
        name: 'fa fa-th-large',
        href: '/categories',
        title: `Web Development Categories`
    },
    {
        // name: 'About',
        name: 'fa fa-copyright',
        href: '/about',
        title: `About ${Brand.name}`
    }
        // ,
        // {
        //     // name: 'Contact',
        //     name: 'fa fa-comments',
        //     href: '/contact',
        //     title: `Contact us at ${Brand.name}`
        // }
];

export default props => (
    <ul>
        {
            NavLists.map((nav, index) =>
                <NavLink
                    key={`${nav.name}_${index}`}
                    Nav={<i className={nav.name}/>}
                    Link={nav.href}
                    Title={nav.title}
                    ActiveClassName={props.ActiveClassName}
                />   
            )
        }
    </ul>
);