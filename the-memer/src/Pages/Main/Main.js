import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            
            <main>
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default Main;