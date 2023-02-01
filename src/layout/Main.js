import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../components/Navber/Navber';

const Main = () => {
    return (
        <Container sx={{
            display: 'flex',
            background: '#FFFCFB'
        }}>
            <div>
                <Navber></Navber>
            </div>
            <div className='Outlet-container'>
                <Outlet></Outlet>
            </div>
        </Container>
    );
};

export default Main;