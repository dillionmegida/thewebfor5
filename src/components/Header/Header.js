import React from 'react';
import Styles from './Header.module.scss';

import { Link } from 'gatsby';
import Brand from '../Brand/Details';
import NavLinks from '../Nav/NavLinks';

export default props => {
    return (
        <header className={Styles.Header}>
            <div className={Styles.Brand}>
                <Link to='/' title={Brand.name}>
                    <div className={Styles.Logo}>
                        <img src={Brand.logo} alt={`${Brand.name} logo`}/>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className={Styles.Name}>{Brand.name}</span>
                </Link>
            </div>
            <nav className={Styles.NavLinks}>
                <NavLinks LinkTitleClass={Styles.LinkTitleClass} ActiveClassName={Styles.ActiveLink}/>
            </nav>
            <button onClick={props.DrawerBtnClicked} className={Styles.DrawerBtn}>
                Draw
            </button>
        </header>
    )
}