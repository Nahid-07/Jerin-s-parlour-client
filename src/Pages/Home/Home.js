import React from 'react';
import Banner from './Banner/Banner';
import Hero from './Hero/Hero';
import Services from './Services/Services';

const Home = () => {
    return (
      <div>
        <Hero></Hero>
        <Services></Services>
        <Banner></Banner>
      </div>
    );
};

export default Home;