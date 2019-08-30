import React, { Fragment } from 'react';

let Copyright = props => {
    return(
        <p style={{color: props.color}}>
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
    )
}

export default Copyright;