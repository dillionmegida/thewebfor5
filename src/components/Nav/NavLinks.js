import React from 'react';

import NavLink from './NavLink';
import Brand from '../Brand/Details';

const NavLists = [
    {
        name: 'Home',
        icon: 'fa fa-home',
        href: '/',
        title: `${Brand.name} - Homepage`
    },
    {
        name: 'Search',
        icon: 'fa fa-search',
        href: '/search',
        title: `Search Topics`
    },
    {
        name: 'Categories',
        icon: 'fa fa-th-large',
        href: '/categories',
        title: `Web Development Categories`
    },
    {
        name: 'About',
        icon: 'fa fa-copyright',
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
                    Nav={nav.name}
                    Icon={<i className={nav.icon}/>}
                    Link={nav.href}
                    Title={nav.title}
                    LinkTitle={props.LinkTitleClass}
                    ActiveClassName={props.ActiveClassName}
                />   
            )
        }
    </ul>
);