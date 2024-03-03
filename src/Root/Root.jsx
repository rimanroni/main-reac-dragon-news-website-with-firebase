import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Header/Header';
import Navbar from '../pages/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;