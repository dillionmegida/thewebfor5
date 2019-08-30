import React from 'react';
import Dp from '../components//common/Dp';
import Layout from '../components/Layout/Layout';
import Styles from '../styles/About.module.css';

let imgDivStyle = {
	maxWidth: '300px',
	maxHeight: '300px',
	borderRadius: '20px',
	border: '1px solid red',
	overflow: 'hidden',
	margin: 0
}

let Porfolio = () => (
    <Layout>
    	<h1 style={{textAlign: 'center'}}>About Me</h1>
    	<section className={Styles.AboutSection}>
    		<section className={Styles.Bio}>
    			<h3 align='right'>Front End Developer + Graphics Deeesigner</h3>
                <p align='justify'>Efficient with HTML5 & CSS3, JS and it's frameworks such as ReactJs and jQuery.<br/>
	                I'm a technical writer writing mostly about web development on my blog here and other blog media.<br/>
	                I also ensure Web Responsibility making ease for all screen sizes.<br/><br/>
	                Efficient use of Adobe Photoshop and Adobe Illustrator for graphics designing. These includes photo editing, logo designing and advertisement cards. <br/><br/>
	                Average use of Adobe After Effects and Adobe Premiere Pro for video editing and motion graphics.<br/><br/>
	                Founder, <b>Deeesigns Studios</b>, which deals in Web Development and Graphics Designing. You can check Deeesigns page <a href='http://deeesignsstudios.com' title='Deeesigns Studios'><u>here</u></a>
                </p>
    		</section>
    		<section className={Styles.Dp}>
    			<Dp imgDivStyle={imgDivStyle}/>
    			<h1>DILLION MEGIDA &#128640;</h1>
                <p>
                	<i class="fa fa-envelope"></i> dillionmegida@gmail.com<br/>
	                <i class="fa fa-phone"></i> +234 905 896 1095<br/><br/>
	                You can connect with me on my<br/>social media handles &#128512;<br/>
	                <a href='contact' title='Contact Me'><u>Contact Me</u></a>
                </p>
    		</section>
    	</section>

    	<section>
             <h2>What I do</h2>
             <section className="services">
                <div>
                    <img src='public/img/web.png' width='10%'/>
                    <h3>Web Development</h3>
                </div>
                <div>
                    <img src='public/img/brand.png' width="10%" />
                    <h3>Branding Identity</h3>
                </div>
                <div>
                    <img src='public/img/motion.png' width="10%" />
                    <h3>Motion Graphics</h3>
                </div>
                <div>
                    <img src='public/img/flyer.png' width="10%" />
                    <h3>Flyers / Banners</h3>
                </div>
            </section>
        </section>
    </Layout>
);

export default Porfolio;
