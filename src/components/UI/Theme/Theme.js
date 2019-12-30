import React from 'react';
import Styles from './Theme.module.scss';

import Brand from '../../Brand/Details';
import { checkGlobal } from '../../Blog/Saved/Saved';
import { Sun, Moon } from '../Icons'; 

const storageKey = `${Brand.name}_Theme`;

// initialize theme
if(checkGlobal()) {
    let prevTheme = window.localStorage.getItem(storageKey);
    if(prevTheme === null) {
        window.localStorage.setItem(storageKey, 'light');
    }
}

const saveDark = () => {
    if(checkGlobal()) {
        window.localStorage.setItem(storageKey, 'dark');
    }
}

const saveLight = () => {
    if(checkGlobal()) {
        window.localStorage.setItem(storageKey, 'light');
    }
}

const isThemeLight = () => {
    if(checkGlobal()) {
        let currentTheme = window.localStorage.getItem(storageKey);
        return currentTheme === 'light'
    }
}

export default props => {

    return (
        <React.Fragment>
            {
                isThemeLight() ?
                    <button className={Styles.DarkBtn} onClick={props.changeTheme}>
                        <Moon />
                    </button>
                :
                    <button className={Styles.LightBtn} onClick={props.changeTheme}>
                        <Sun />
                    </button>
            }
        </React.Fragment>
    )
}

export { saveDark, saveLight, isThemeLight };