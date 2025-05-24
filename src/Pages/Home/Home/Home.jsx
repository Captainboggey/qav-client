import React from 'react';
import Banner from '../Banner/Banner';
import Welcome from '../Welcome/Welcome';
import DoSection from '../DoSection/DoSection';
import Popular from '../Popular/Popular';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Welcome></Welcome>
           <DoSection></DoSection>
           <Popular></Popular>
            
        </div>
    );
};

export default Home;