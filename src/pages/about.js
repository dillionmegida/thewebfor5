import React from 'react';
import Styles from '../styles/about.module.scss';

import { graphql } from 'gatsby';
import Layout from '../containers/Layout/Layout';
import Brand from '../components/Brand/Details';
import Founder from '../assets/img/dillion.jpg';
import MainImg from '../assets/img/main.jpg';
import SuggestArticles from '../components/Blog/SuggestArticles/SuggestArticles';

export default ({ data }) => {

    const { totalCount: noOfArticles } = data.allMarkdownRemark;

    return (
        <Layout
            PageTitle={`About ${Brand.name}`}
            PageLink = '/about'
            PageDescription = {`${Brand.name} founded by ${Brand.founder} is a blog platform for demystifying web topics as assumed to be teaching a five year old. This platform hopes to be different from other platforms such that the topics aren't entirely explained in technical terms but simpler ones which a five year old would understand.`}
            PageKeywords='about'
        >
            <section className={Styles.AboutSection}>
                <div className={Styles.Brand}>
                    <h1>{Brand.name}</h1>
                    <p>{Brand.motto}</p>
                    <div className={Styles.Img}>
                        <img src={MainImg} alt='Illustrating the web' />
                    </div>
                </div>
                <div className={Styles.About}>
                    <h2>About</h2>
                    <p>{Brand.name} is a blog platform for demystifying web topics as assumed to be teaching a five year old. It was launched by {Brand.founder} on January 1st, 2020 (more details on him below).</p>
                    <p>So far, there are <b>{noOfArticles}</b> articles already written.</p>
                    <p>There are undeniably numerous platforms already built for teaching web topics but this hopes to be different such that the topics aren't entirely explained in technical terms but simpler ones which a five year old would understand. Also note that despite the means used in explanation, the technicalities involved in such topics would not be left behind.</p>
                    <p>The little requirement for five year olds (lol) hoping to learn from this platform is that they should have the appetite for reading. This is stated because literally, five year olds wouldn't actually like reading. Illustrations would be used. Stories would also be used.</p>
                    <p>We hope to give you the best in this platform : )</p>
                </div>

                <div className={Styles.Founder}>
                    <div className={Styles.Image}>
                        <img src={Founder} alt={`${Brand.founder}, founder of ${Brand.name}`} />
                    </div>
                    <div className={Styles.Details}>
                        <p><b>{Brand.founder}</b></p>
                        <p>
                            A front-end developer, graphics designer and technical writer. He founded this site with the purpose of breaking down topics in web development into its simplest pieces.
                        </p>
                        <div className={Styles.Links}>
                            <a href='https://dillionmegida.com' title={`${Brand.founder}'s Website`}>
                                <i className='fa fa-link'></i>
                            </a> &nbsp;
                            <a href='https://twitter.com/iamdillion' title={`${Brand.founder}'s Twitter handle`}>
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>
                    </div>
                </div>

                <SuggestArticles />

                <div className={Styles.OtherDetails}>
                    <h2>About This Site</h2>
                    <p>This site is built with <a href='https://gatsbyjs.org' title='GatsbyJS website'>GatsbyJS</a> and hosted on <a href='https://netlify.com' title='Netlify website'>Netlify</a>. With this <a href='https://gatsbyjs.org' title='GatsbyJS Tutorial documentation'>tutorial on GatsbyJS</a>, you would get to understand how to work with the framework if you have no prior understanding.</p>
                    <p>It is also open sourced on <a href='https://github.com' title='GitHub website'>GitHub</a> and contributions are welcome. You can also suggest articles to be written in the <a href='https://github.com'>ideas file of the repository</a>.</p>
                    <a className={Styles.GitHub} href={Brand.repo} title={`GitHub repository for ${Brand.name}`}>
                        Contribute on GitHub <i className='fa fa-github'></i>
                    </a>
                </div>
            </section>
            
        </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark {
            totalCount
        }
    }
`