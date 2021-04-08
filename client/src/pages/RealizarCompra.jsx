import React from 'react';

import HeaderHomePage from '../components/base/headerHomePage';
import Footer from '../components/base/footer';
import RealizarCompra from '../components/realizarCompra';


const realizarCompra = () => {
    return (
        <div>
            <HeaderHomePage />
            <RealizarCompra />
            <Footer />
        </div>
    )
}

export default realizarCompra;