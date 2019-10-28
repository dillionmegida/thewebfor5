import React, { Fragment } from 'react';
import Styles from '../../styles/Copyright.module.css';
let Copyright = props => {
    return(
        <Fragment>
            <p style={{color: props.color}}>
                <span style={{display: 'flex', justifyContent: 'space-between', width: '100px', fontSize: '20px', margin: '30px auto 0'}}>
                    <a className={Styles.sm} style={{color: props.color}} href='https://twitter.com/iamdillion' title='Twitter Profile'>
                        <i className='fa fa-twitter'></i>
                    </a>
                    <a className={Styles.sm} style={{color: props.color}} href='https://github.com/dillionmegida' title='Github Profile'>
                        <i className='fa fa-github'></i>
                    </a>
                    <a className={Styles.sm} style={{color: props.color}} href='https://www.facebook.com/dillion.megida' title='Facebook Profile'>
                        <i className='fa fa-facebook'></i>
                    </a>
                    <a className={Styles.sm} style={{color: props.color}} href='https://www.linkedin.com/in/dillionmegida/' title='LinkedIn Profile'>
                        <i className='fa fa-linkedin'></i>
                    </a>
                </span>
                <br/>
                <span style={{fontSize: '18px'}}>
                    Copyright {new Date().getFullYear()}
                </span>
                <br/><br/>
                Articles written with <span role='img' style={{fontSize: '20px', color: 'red'}}> &#10084; </span>
                by<br/>
                <a href='http://twitter.com/iamdillion' style={{color: props.color, fontWeight: 'bold', letterSpacing: '1px'}} title='Dillion Megida'>
                    Dillion Megida
                </a>
            </p>
        </Fragment>
    )
}

export default Copyright;