
import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero from './components/HeroSection/Hero';
import Advantage from './components/Advantage/Advantage';
import Section from './components/Section/Section';
import Reviews from "../src/components/Reviews"
import Pricing from './components/PricingAndPlans/Pricing';
import Brands from './components/Brands';
import Stroage from './components/Stroage';
import Transcription from './components/Transcription';
import Message from './components/Message';
import Ready from './components/Ready';
import Footer from './components/Footer';
function App() {
  return (
  <div>
  <Navbar/>
  <Hero/>
  <Advantage/>
  <Section/>
  <Pricing/>
  <Reviews/>
  <Brands/>
  <Stroage/>
  <Transcription/>
  <Message/>
  <Ready/>
  <Footer/>
  </div>
  );
}

export default App;
