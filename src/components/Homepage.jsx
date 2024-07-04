import React from 'react';
import Hero from './HeroSection/Hero';
import Advantage from './Advantage/Advantage';
import Section from './Section/Section';
import Reviews from './Reviews';
import Pricing from './PricingAndPlans/Pricing';
import Brands from './Brands';
import Stroage from './Stroage';
import Transcription from './Transcription';
import Message from './Message';
import Ready from './Ready';
import Footer from './Footer';
import "../App.css"

const Homepage = () => {
    return (
        <div>
            <Hero />
            <Advantage />
            <Section />
            <Pricing />
            <Reviews />
            <Brands />
            <Stroage />
            <Transcription />
            <Message />
            <Ready />
            <Footer />
         
        </div>
    );
};

export default Homepage;