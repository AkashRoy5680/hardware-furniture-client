import React from 'react';
import Banner from './Banner';
import Business from './Business';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Business></Business>
            <Tools></Tools>
            <Reviews></Reviews>
            
        </div>
    );
};

export default Home;