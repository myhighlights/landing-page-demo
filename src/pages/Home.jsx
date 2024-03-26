import React from 'react';
import HeroSection from '../components/heroSection/HeroSection';
import CarouselSection from '../components/carouselSection/CarouselSection';
import ShowCase from '../components/showCase/ShowCase';
import Technology from '../components/technology/Technology';
import ContactUs from '../components/contactUs/ContactUs';

const Home = () => {
    return (
        <>
            <HeroSection />
            <CarouselSection />
            <ShowCase />
            <Technology />
            <ContactUs />
        </>
    );
};

export default Home;