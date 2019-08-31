import React from 'react';
import Layout from '../components/Layout/Layout';
import Styles from '../styles/Contact.module.css';

let Contact = () => {
    return(
        <Layout 
            PageTitle='Contact Me - Dillion Megida'
            PageDescription='Contact Dillion Megida'
            PageKeywords='Contact Dillion Megida'
            TwitterCardTtitle='Dillion Megida'
        >
            <section className={Styles.ContactSection}>
                <h1 align='center'>Need A Website, Graphic Design(s) or Just to say Hi?</h1>
                <p align='center'>Kindly fill in your informations</p>
            

                <section>
                    <form action="https://formspree.io/dillionmegida@gmail.com" method="POST">
                        <div>
                            <div>
                                <label for="name">Name:</label><br/>
                                <input name='name' type="text" placeholder="Enter your fullname..." /><br/>
                            </div>
                            <div>
                                <label for="name">Email Address:</label><br/>
                                <input name='email' type="email" placeholder="Enter your email address..."/ ><br/>
                            </div>
                        </div>
                        <label for="name">Message:</label><br/>
                        <textarea name="message" cols="30" rows="10" placeholder="Enter your message...">

                        </textarea>
                        <input className={Styles.submit_btn} type="submit" class="submit_btn" value="Send Message"></input>
                    </form>
                </section>
            </section>
        </Layout>
    )
}

export default Contact;