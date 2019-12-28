import React from 'react';
import Styles from './Layout.module.scss';

import { Link } from 'gatsby';
import Helmet from '../../components/Helmet';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Theme, { saveDark, saveLight, isThemeLight } from '../../components/UI/Theme/Theme';

export default class Layout extends React.Component {

    state = {
        lightTheme: isThemeLight()
    }

    changeTheme = () => {
        if(this.state.lightTheme === false) {
            saveLight();
            this.setState({
                lightTheme: true
            })
        } else {
            saveDark();
            this.setState({
                lightTheme: false
            })
        }
    }

    render() {

        return (
            <div
                className={this.state.lightTheme ? Styles.Layout : `${Styles.Layout} ${Styles.Dark}`}
            >

                <Helmet
                    PageTitle = {this.props.PageTitle}
                    PageLink = {this.props.PageLink}
                    PageDescription = {this.props.PageDescription}
                    PageKeywords = {this.props.PageKeywords}
                    TwitterImage = {this.props.TwitterImage}
                />

                <Header />

                <div className={Styles.OtherMenus}>
                    <Link to='/saved' title='Saved Articles' className={Styles.Saved} activeClassName={Styles.SavedActive}>
                        <i className='fa fa-bookmark'></i>
                    </Link>
                    {/* <PageTheme /> */}
                    <Theme changeTheme={this.changeTheme}/>
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
