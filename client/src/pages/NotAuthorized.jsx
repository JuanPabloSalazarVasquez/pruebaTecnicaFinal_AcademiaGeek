import React from 'react';

import Header from '../components/base/header';
import Footer from '../components/base/footer';
import NotAuthorized from '../components/notAuthorized';


const notAuthorized = () => {
    return (
        <div className="notAuthorized">
            <Header />
            <NotAuthorized />
            <Footer />
        </div>
    )
}

export default notAuthorized;