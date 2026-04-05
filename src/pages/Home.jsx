import React from 'react';
import Hero from '../components/Hero/Hero';
import FeaturedClasses from '../components/FeaturedClasses/FeaturedClasses';

const Home = () => {
    return (
        <div className='min-h-dvh'>
            <Hero />
            <FeaturedClasses />
        </div>
    );
};

export default Home;
