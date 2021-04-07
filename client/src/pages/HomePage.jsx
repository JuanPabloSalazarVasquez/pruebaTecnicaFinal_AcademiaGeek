import React from 'react';

import HeaderHomePage from '../components/base/headerHomePage';
import Footer from '../components/base/footer';
import HomePage from '../components/homePage';


const homePage = () => {
    return (
        <div>
            <HeaderHomePage />
            <HomePage />
            <Footer />
        </div>
    )
}

export default homePage;