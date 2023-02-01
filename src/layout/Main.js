import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../components/Navber/Navber';

const Main = () => {
    return (
        <div>
            <div>
                <Navber></Navber>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;