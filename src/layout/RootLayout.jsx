import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div className='container mx-auto'>
            <Navbar/>
            <Outlet/>

            <Footer/>
            <ToastContainer />
        </div>
    );
};

export default RootLayout;