import React from 'react';
import Banner from './Banner/Banner';
import HandleForm from './HandleForm/HandleForm';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
      <div>
        <Hero></Hero>
        <Services></Services>
        <Banner></Banner>
        <Testimonial></Testimonial>
        <HandleForm></HandleForm>
      </div>
    );
};

export default Home;