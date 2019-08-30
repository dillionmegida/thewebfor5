import React from 'react';

let Copyright = (props) => (
    <p style={{color: props.color}}>
        Copyright {new Date().getFullYear()}
        <br/><br/>
        Articles written with &nbsp;
        <span style={{color: 'red', fontSize: '20px'}}>&hearts;</span> &nbsp;
        by &nbsp;
        <a href='http://twitter.com/iamdillion' style={{color: props.color, fontWeight: 'bold', letterSpacing: '1px'}} title='Dillion Megida'>
            Dillion Megida
        </a>
    </p>
)

export default Copyright;