import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Logo from '../assets/img/logo.png';
import MainImg from '../assets/img/main.jpg';

const AppHelmet = props => (
    <Helmet>
        <html lang="en" />
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

        <meta property="og:image" content={props.ImageCard} />
        <meta property="og:url" content="https://thewebfor5.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={props.PageTitle} />
        <meta property="og:description" content={props.PageDescription} />
        
        <meta name="twitter:card" content={props.SummaryCard ? "summary" : "summary_large_image"} />
        <meta name="twitter:site" content="@thewebfor5" />
        <meta name="twitter:title" content={props.PageTitle} /> {/* edit */}
        <meta name="twitter:description" content={props.PageDescription} /> {/* edit */}
        <meta name="twitter:image" content={props.ImageCard ? props.ImageCard : `https://thewebfor5.com${MainImg}`} /> {/* edit */}
        <meta name="twitter:creator" content="iamdillion" />

        <meta name="referrer" content="origin-when-crossorigin" />

        {/* Font awesome */}
        <script src="https://use.fontawesome.com/ec33c661f9.js"></script>
    </Helmet>
)

AppHelmet.propTypes = {
    PageTitle: PropTypes.string.isRequired,
    PageLink: PropTypes.string.isRequired,
    PageDescription: PropTypes.string.isRequired,
    PageKeywords: PropTypes.string.isRequired,
    SummaryCard: PropTypes.bool
}

export default AppHelmet;