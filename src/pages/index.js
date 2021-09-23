import React, { useState } from 'react'

import Sidebar from '../Components/Sidebar/index'; 
import Navbar from '../Components/Navbar/index';

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
        </div>
    );
};

export default Home;
