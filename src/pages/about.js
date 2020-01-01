import React from 'react';
import Styles from '../styles/about.module.scss';

import { graphql } from 'gatsby';
import Layout from '../containers/Layout/Layout';
import Brand from '../components/Brand/Details';
import Founder from '../assets/img/dillion.jpg';
import { TwitterMedia, WebsiteMedia } from '../components/SocialMedia/Media';
import SuggestArticles from '../components/Blog/SuggestArticles/SuggestArticles';

export default ({ data }) => {

    const { totalCount: noOfArticles } = data.allMarkdownRemark;

    return (
        <Layout
            PageTitle={`About ${Brand.name}`}
            PageLink = '/about'
            PageDescription = {`${Brand.name} founded by ${Brand.founder.name} is a blog platform for demystifying web topics as assumed to be teaching a five year old. This platform hopes to be different from other platforms such that the topics aren't entirely explained in technical terms but simpler ones which a five year old would understand.`}
            PageKeywords='about'
        >
            <section className={Styles.AboutSection}>
                <div className={Styles.Brand}>
                    <h1>{Brand.name}</h1>
                    <p>{Brand.motto}</p>
                </div>
                <div className={Styles.About}>
                    <h2>About</h2>
                    <p>{Brand.name} is a blog platform for demystifying web topics as assumed to be teaching a five year old. It was launched by {Brand.founder.name} on January 1st, 2020 (more details on him below).</p>
                    <p>So far, there are <b>{noOfArticles}</b> articles already written.</p>
                    <p>There are undeniably numerous platforms already built for teaching web topics but this hopes to be different such that the topics aren't entirely explained in technical terms but simpler ones which a five year old would understand. Also note that despite the means used in explanation, the technicalities involved in such topics would not be left behind.</p>
                    <p>The little requirement for five year olds (lol) hoping to learn from this platform is that they should have the appetite for reading. This is stated because literally, five year olds wouldn't actually like reading. Right? </p>
                    <p>We hope to give you the best in this platform : ). Kindly reach us on twitter - <a href={`https://twitter.com/${Brand.twitter}`}>@{Brand.name}</a> for any contributions or questions.</p>
                </div>

                <div className={Styles.Founder}>
                    <div className={Styles.Image}>
                        <img src={Founder} alt={`${Brand.founder.name}, founder of ${Brand.name}`} />
                    </div>
                    <div className={Styles.Details}>
                        <p><b>{Brand.founder.name}</b></p>
                        <p>
                            A front-end developer, graphics designer and technical writer. He founded this site with the purpose of breaking down topics in web development into its simplest pieces.
                        </p>
                        <div className={Styles.Links}>
                            <WebsiteMedia
                                href={Brand.founder.website}
                                title={`${Brand.founder.name}'s Website`}
                            /> &nbsp;
                            <TwitterMedia
                                href={Brand.founder.twitter}
                                title={`${Brand.founder.name}'s Twitter handle`}
                            />
                        </div>
                    </div>
                </div>

                <SuggestArticles />

                <div className={Styles.OtherDetails}>
                    <h2>About This Site</h2>
                    <p>This site is built with <a href='https://gatsbyjs.org' title='GatsbyJS website'>GatsbyJS</a> and hosted on <a href='https://netlify.com' title='Netlify website'>Netlify</a>. With this <a href='https://gatsbyjs.org' title='GatsbyJS Tutorial documentation'>tutorial on GatsbyJS</a>, you would get to understand how to work with the framework if you have no prior understanding.</p>
                    <p>It is also open sourced on GitHub and contributions are welcome.</p>
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
