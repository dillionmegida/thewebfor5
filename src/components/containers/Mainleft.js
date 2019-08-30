import React from 'react'
import Dp from '../common/Dp';
import NavLinks from '../Nav/NavLinks';
import Copyright from '../common/Copyright';
import Styles from '../../styles/Mainleft.module.css';

let imgDivStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    overflow: 'hidden',
    margin: '0 auto'
}

let Mainleft = (props) => (
    <div className={Styles.Mainleft}>
        <section>
            <Dp imgDivStyle={imgDivStyle}/>
            <h1>Dillion Megida <span role='img' aria-label='true'>&#128640;</span></h1>
            <p>Front End Developer and <br/>Technical Writer</p>
        </section>
        <nav className={Styles.navSection}>
            <NavLinks/>
        </nav>
        <Copyright color='white'/>
    </div>
)

export default Mainleft;