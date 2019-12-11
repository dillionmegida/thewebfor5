import React from 'react';
import Layout from '../containers/Layout/Layout';
import { Link } from 'gatsby';

let ErrorPage = () => (
    <Layout
        PageTitle='Page Not Found : ('
        PageLink='404'
        PageDescription='Page Not Found.'
        PageKeywords=''
    >
        <section style={{
            width: '100%',
            height: '60%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <h1 style={{
                fontSize: '40px'
            }}>
                Page Not Found : (
            </h1>
            <Link
                to='/'
                title="Dillion Megida's Blog"
            >
                <section style={{
                    display: 'block',
                    backgroundColor: 'var(--mainColor1)',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '10px',
                    borderBottom: '5px solid var(--mainColor2)'
                }}>
                    Go To Homepage
                </section>
            </Link>
        </section>
    </Layout>
);

export default ErrorPage;