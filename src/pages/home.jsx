
import React from 'react';
import Navbar from '../components/nav/navbar.jsx';
import Hero from '../components/section/hero.jsx';
import HomeCategory from '../components/section/homeCategory.jsx';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <div className='px-5 lg:px-24'>
                <HomeCategory />
            </div>        </>
    );
};

export default Home;
