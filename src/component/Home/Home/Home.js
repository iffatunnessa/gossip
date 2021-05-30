import React from 'react';
import About from '../Service/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import AboutSecond from '../Service/AboutSecond';

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <AboutSecond/>
            <Service />
            <Footer />
        </>
    );
};

export default Home;