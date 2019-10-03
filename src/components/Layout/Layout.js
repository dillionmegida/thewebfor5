import React, { Component } from 'react';
import { Link } from 'gatsby';
import App from '../App';
import MainLeft from '../containers/Mainleft';
import Mainright from '../containers/Mainright';
import NavLinks from '../Nav/NavLinks';
import Dp from '../common/Dp';
import Copyright from '../common/Copyright';
import Styles from '../../styles/Mainleft.module.css';

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
            <App
                PageTitle={this.props.PageTitle}
                PageLink={this.props.PageLink}
                PageDescription={this.props.PageDescription}
                PageKeywords={this.props.PageKeywords}
                TwitterCardTtitle={this.props.TwitterCardTtitle ? this.props.TwitterCardTtitle : this.props.PageTitle}
                TwitterCardDescription={this.props.PageDescription}
                TwitterBlogImage={this.props.TwitterBlogImage ? this.props.TwitterBlogImage : 'https://res.cloudinary.com/dillionmegida/image/upload/v1567211823/images/website/deee.jpg'}
                LargeTwitterCard = {this.props.LargeTwitterCard}
            >
                <header className='TopSection'>
                    <Link
                        to='/'
                        title='Dillion Megida'
                    >
                        <Dp imgDivClass={Styles.ImgDivSmall}/>
                    </Link>
                    <h3>Dillion Megida <span role='img' aria-label='Rocket Emoji'>&#128640;</span></h3>
                    <div onClick={this.openNavDrawer} className='Harmburger'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </header>
                {this.state.drawerStatus ? 
                    <nav className={['NavSection', this.state.class].join(' ')}>
                        <p onClick={this.closeNavDrawer} className='CloseDrawer'>X</p>
                        <section style={{
                                height: '400px',
                                display: 'flex',
                                justifyContent: 'space-around',
                                flexDirection: 'column',
                                alignitems: 'center',
                                minWidth: '300px'
                            }}>
                            <NavLinks/>
                            <div style={{height: '1px', width: '100%', backgroundColor: '#eee'}}>

                            </div>
                            <Copyright color='white' />
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