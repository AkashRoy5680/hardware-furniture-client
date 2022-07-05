import React from 'react';
import Banner from './Banner';
import Business from './Business';
import Feedback from './Parts/Feedback';
import Reviews from './Reviews';
import StayConnected from './StayConnected';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Business></Business>
            <Tools></Tools>
           {/* <Reviews></Reviews>*/}
            <Feedback></Feedback>
            <StayConnected></StayConnected>
            
        </div>
    );
};

export default Home;