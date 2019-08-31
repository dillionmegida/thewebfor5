import React from 'react';
import Dp from '../components//common/Dp';
import Layout from '../components/Layout/Layout';
import Styles from '../styles/About.module.css';

let Porfolio = () => (
    <Layout
        PageTitle='About Me - Dillion Megida'
        PageLink='/about'
        PageDescription='Dillion is a Frontend Developer, a Tecnical Writer and a Graphics Designer. He founded Deeesigns Studios which deals in Web Development and Graphics Designing.'
        PageKeywords='Dillion Megida, Dillion, Megida, web accessibility, DevCommunity, Front-end Developer, Technical Writer, Freelancer, Web Developer, Web Designer, Software Developer, Nigerian, Developer'
        TwitterCardTtitle='DILLION MEGIDA'
    >
    	<h1 style={{textAlign: 'center'}}>About Me</h1>
    	<section className={Styles.AboutSection}>
    		<section className={Styles.Bio}>
    			<h3 align='left'>Front End Developer + Graphics Deeesigner</h3>
                <p align='justify'>
                    Efficient with HTML5 & CSS3, JS and it's frameworks such as ReactJs and jQuery.<br/>
	                I'm a technical writer writing mostly about web development on my blog here and other blog media.<br/><br/>
	                Efficient use of Adobe Photoshop and Adobe Illustrator for graphics designing. These includes photo editing, logo designing and advertisement cards. <br/><br/>
	                Average use of Adobe After Effects and Adobe Premiere Pro for video editing and motion graphics.<br/><br/>
	                Founder, <b>Deeesigns Studios</b>, which deals in Web Development and Graphics Designing.
                </p>
    		</section>
    		<section className={Styles.Dp}>
    			<Dp imgDivClass={Styles.ImgDiv}/>
    			<h1>DILLION MEGIDA &#128640;</h1>
                <p>
                	<i className="fa fa-envelope"></i> dillionmegida@gmail.com<br/>
	                <i className="fa fa-phone"></i> +234 905 896 1095<br/><br/>
	                {/* You can connect with me on my<br/>social media handles &#128512;<br/> */}
	                <a href='contact' title='Contact Me'><u>Contact Me</u></a>
                </p>
    		</section>
    	</section>

    	<section className={Styles.ServicesSection}>
             <h2>What I do</h2>
             <section className={Styles.Services}>
                <section>
                    <div>
                        <img src={require('../img/web.png')} width='30%'/>
                        <h4>Web Development</h4>
                    </div>
                    <div>
                        <img src={require('../img/brand.png')} width="30%" />
                        <h4>Branding Identity</h4>
                    </div>
                </section>

                <section>
                    <div>
                        <img src={require('../img/motion.png')} width="30%" />
                        <h4>Motion Graphics</h4>
                    </div>
                    <div>
                        <img src={require('../img/flyer.png')} width="30%" />
                        <h4>Flyers / Banners</h4>
                    </div>
                </section>

            </section>
        </section>
    </Layout>
);

export default Porfolio;
