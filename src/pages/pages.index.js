import React, { useState } from 'react'

import Sidebar from '../Components/Sidebar/index'; 
import Navbar from '../Components/Navbar/index';
import HeroSection from '../Components/HeroSection/HeroSection.index';
import InfoSection from '../Components/InfoSection/info.index';
import { homeObjOne, homeObjThree, homeObjTwo } from '../Components/InfoSection/Data';
import Services from '../Components/Services/services.index';
import Footer from '../Components/Footer/Footer.index';

const Home = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    // toggling isOpen from true to false and false to true
    const toggle = () => {
        setIsOpen(!isOpen);     
    };

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services />
            <InfoSection {...homeObjThree}/>
            <Footer />
        </div>
    );
};

export default Home;
