import React from 'react';

let Copyright = (props) => (
    <p style={{color: props.color}}>
        <span style={{fontSize: '18px'}}>
            Copyright {new Date().getFullYear()}
        </span>
        <br/><br/>
        Articles written with ❤️
        by<br/>
        <a href='http://twitter.com/iamdillion' style={{color: props.color, fontWeight: 'bold', letterSpacing: '1px'}} title='Dillion Megida'>
            Dillion Megida
        </a>
    </p>
)

export default Copyright;