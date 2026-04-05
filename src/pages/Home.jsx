import React from 'react';
import Hero from '../components/Hero/Hero';
import FeaturedClasses from '../components/FeaturedClasses/FeaturedClasses';
import AboutUs from '../components/AboutUs/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Trainers from '../components/Trainers/Trainers';
import Events from '../components/Events/Events';

const Home = () => {
    return (
        <div className='min-h-dvh'>
            <Hero />
            <FeaturedClasses />
            <AboutUs />
            <WhyChooseUs />
            <Trainers />
            <Events />
        </div>
    );
};

export default Home;
