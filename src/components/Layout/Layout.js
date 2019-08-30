import React, { Component } from 'react';
import App from '../App';
import MainLeft from '../containers/Mainleft';
import Mainright from '../containers/Mainright';
import NavLinks from '../Nav/NavLinks';
import Dp from '../common/Dp';
import Copyright from '../common/Copyright';

let imgDivStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    overflow: 'hidden'
}

class Layout extends Component {
    state = {
        drawerStatus: false,
        class: 'drawerClosed'
    }
    openNavDrawer = () => {
        this.setState({
            drawerStatus: true,
            class: 'NavDrawerOpened'
        })
    }
    closeNavDrawer = () => {
        this.setState({
            drawerStatus: false,
            class: 'NavDrawerClosed'
        })
    }
    render() {
        return (
            <App>
                <header className='TopSection'>
                    <Dp imgDivStyle={imgDivStyle}/>
                    <h3>Dillion Megida <span role='img' aria-label='true'>&#128640;</span></h3>
                    <div onClick={this.openNavDrawer} className='Harmburger'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </header>
                {this.state.drawerStatus ? 
                    <nav className={['NavSection', this.state.class].join(' ')}>
                        <p onClick={this.closeNavDrawer} className='CloseDrawer'>X</p>
                        <section style={{width: '150px'}}>
                            <NavLinks/>
                        </section>
                    </nav> :
                    null
                }
                <MainLeft />
                <Mainright>
                    {this.props.children}    
                    <footer className='mobile-copyright'>
                        <Copyright color='grey'/>
                    </footer>
                </Mainright>
            </App>  
        )
    }
};

export default Layout;