import React from 'react';
import Banner from '../Banner/Banner';
import Welcome from '../Welcome/Welcome';
import DoSection from '../DoSection/DoSection';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Welcome></Welcome>
           <DoSection></DoSection>
            
        </div>
    );
};

export default Home;