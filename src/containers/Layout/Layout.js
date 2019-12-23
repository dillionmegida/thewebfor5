import React from 'react';
import Styles from './Layout.module.scss';

import PageTheme from '../Theme/Theme';
import { Link } from 'gatsby';
import Helmet from '../../components/Helmet';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Drawer from '../../components/Nav/Drawer/Drawer';


// let savedTheme = window.localStorage.getItem(`${Brand.name}_12345`);
// if(savedTheme === null) {
//     savedTheme = 'default';
//     window.localStorage.setItem(`${Brand.name}_12345`, savedTheme);
// }

export default class Layout extends React.Component {
    state = {
        showTheme: false
    }

    componentDidMount(){
        setTimeOut(() => {
            this.setState({
                showTheme: true
            })
        }, 500)
    }
    
    render() {

        return (
            <div
                style={{
                    transition: 'color 0.2s ease-out, background 0.2s ease-out',
                }}
                className={Styles.Layout}
            >

                <Helmet
                    PageTitle = {this.props.PageTitle}
                    PageLink = {this.props.PageLink}
                    PageDescription = {this.props.PageDescription}
                    PageKeywords = {this.props.PageKeywords}
                />

                <Header DrawerBtnClicked={this.OpenDrawer}/>
                
                {
                    this.state.drawerStatus === 'opened' ?
                        <Drawer CloseDrawerBtnClicked={this.CloseDrawer}/>
                    : null

                }

                <div className={Styles.OtherMenus}>
                    <Link to='/saved' title='Saved Articles' className={Styles.Saved} activeClassName={Styles.SavedActive}>
                        <i className='fa fa-bookmark'></i>
                    </Link>
                    {/* The theme handler is always checked before transiting to uncheck when light theme is chosen
                     so I chose to show it when the component mounts - few seconds later, so the transition doesn't show */}
                    <span style={{visibility: this.state.showTheme ? 'visible' : 'hidden'}}>
                        <PageTheme />
                    </span>
                </div>

                <main className={Styles.BodyContent}>
                    {this.props.children}

                    {
                        /* This checks if first section is stated so it doesn't add to the DOM */
                        this.props.FirstSection ?
                            <section className={Styles.FirstSection}>
                                {this.props.FirstSection}
                            </section>
                        : null
                    }

                    {
                        /* This checks if second section is stated so it doesn't add to the DOM */
                        this.props.SecondSection ?
                            <section  className={Styles.SecondSection}>
                                {this.props.SecondSection}
                            </section>
                        : null
                    }

                </main>
                <Footer />
            </div>
            
        )
    }
}
