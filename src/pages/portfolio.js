import React from 'react';
import Layout from '../components/Layout/Layout';
import Styles from '../styles/Portfolio.module.css';

const PortfolioList = [
    {
        title: 'CSS Flex Generator',
        desc: 'A playground built with React for helping web developers understand how flex containers work.',
        link: 'https://cssflex-generator.netlify.com'
    },
    {
        title: 'Burger Builder App',
        desc: 'First application built with React. It was inspired by a course on Udemy on React and most parts of the application were directed by the course. I also added personal features, built it from scratch again and hosted on Heroku.',
        link: 'https://deee-burger-app.herokuapp.com/'
    }
    
];

let Portfolio = () => {
    return(
        <Layout 
            PageTitle='Portfolio - Dillion Megida'
            PageDescription="Dillion Megida's Portfolio"
            PageKeywords="Dillion Megida's Portfolio"
            TwitterCardTtitle='Dillion Megida'
        >
            <main className={Styles.PortfolioSection}>
                <h1>Projects I've Worked On</h1>
                <section className={Styles.Projects}>
                {
                    PortfolioList.map(p => (
                        <div className={Styles.Project}>
                            <p className={Styles.PTitle}>{p.title}</p>
                            <div className={Styles.Desc}>
                                <p className={Styles.PDesc}>{p.desc}</p>
                            </div>
                            <a className={Styles.CheckOut} href={p.link} target='_blank' rel="noopener noreferrer" title={`${p.title} Link`}>Check Out</a>
                        </div>
                    ))
                }
                </section>
                <p>
                    <a className={Styles.CheckGitHub} href='https://github.com/dillionmegida' title='Check More Projects on GitHub'>Check More Projects on GitHub</a>
                </p>
            </main>
        </Layout>
 )
}

export default Portfolio;