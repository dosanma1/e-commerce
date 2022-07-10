import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';

const Layout = () => {
    return (
        <div className='bg-white'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
