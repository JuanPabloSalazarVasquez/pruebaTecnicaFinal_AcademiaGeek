import React from 'react';

import Header from '../components/base/header';
import Footer from '../components/base/footer';
import TotalCompras from '../components/totalCompras';


const totalCompras = () => {
    return (
        <div>
            <Header />
            <TotalCompras />
            <Footer />
        </div>
    )
}

export default totalCompras;