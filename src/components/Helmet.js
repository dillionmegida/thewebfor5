import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Logo from '../assets/img/logo.png';

const AppHelmet = props => (
    <Helmet>
        <title>
            {props.PageTitle}
        </title>

        <link rel="canonical" href={`https://thewebfor5.com${props.PageLink}`} /> {/* edit */}

        <meta name='description' content={props.PageDescription} /> {/* edit */}
        <meta name="keywords" content={`thewebfor5, web, explain like I'm five, ELI5, beginners, ${props.PageKeywords}`} /> {/* edit */}
        <meta name='author' content='Dillion Megida' />

        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#262625" />
        
        <link rel='icon' href={Logo} />

        {/* Font awesome */}
        <script src="https://use.fontawesome.com/ec33c661f9.js"></script>
    </Helmet>
)

AppHelmet.propTypes = {
    PageTitle: PropTypes.string.isRequired,
    PageLink: PropTypes.string.isRequired,
    PageDescription: PropTypes.string.isRequired,
    PageKeywords: PropTypes.string.isRequired
}

export default AppHelmet;