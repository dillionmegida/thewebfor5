import React from 'react'
import Styles from '../../styles/Mainright.module.css';

let Mainright = (props) => (
    <div className={Styles.Mainright}>
        {props.children}
    </div>
)
export default Mainright