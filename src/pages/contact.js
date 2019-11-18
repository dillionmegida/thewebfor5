import React from 'react';
import Layout from '../components/Layout/Layout';
import Styles from '../styles/Contact.module.css';

let Contact = () => {
    return(
        <Layout 
            PageTitle='Contact Me - Dillion Megida'
            PageLink='/contact'
            PageDescription='Contact Dillion Megida'
            PageKeywords='Contact Dillion Megida'
            TwitterCardTtitle='Dillion Megida'
        >
            <section className={Styles.ContactSection}>
                <h1 align='center'>You have a project for me to work on<br/>or You want to make an enquiry?</h1>
                <p align='center'>Kindly fill in your informations</p>
            

                <section>
                    <form action="https://formspree.io/dillionmegida@gmail.com" method="POST">
                        <div>
                            <div>
                                <label htmlFor="name">Name:</label><br/>
                                <input name='name' type="text" placeholder="Enter your fullname..." /><br/>
                            </div>
                            <div>
                                <label htmlFor="name">Email Address:</label><br/>
                                <input name='email' type="email" placeholder="Enter your email address..."/ ><br/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name">Message:</label><br/>
                            <textarea name="message" cols="30" rows="10" placeholder="Enter your message..."></textarea>
                        </div>
                        <input name='_next' type="hidden" value="/" />
                        <input className={Styles.submit_btn} type="submit" value="Send Message" />
                    </form>
                </section>
            </section>
        </Layout>
    )
}

export default Contact;
