
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../Navber/Navbar.css'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
// import { IconButton, styled } from '@mui/material';
import { LI } from '../../styled/ManageStudent';
import AlignHorizontalLeftOutlinedIcon from '@mui/icons-material/AlignHorizontalLeftOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import  { AuthContext } from '../../context/AuthProvider';
import { styled } from '@mui/material';


const Navber = () => {

    const { user, logOut } = useContext(AuthContext)

    // console.log(user.email)


    const NavberContainer = styled('NavberContainer')(({theme})=>({
        display: {sx: 'none'}
    }))

    return (
        <NavberContainer sx={{
            display: { xs: 'none', sm: 'none', lg: 'block' }
        }} className='navbar-container'>
            {/* logo */}
            <div>
                <Link to="/logo">LOGO</Link>
            </div>
            <nav>
                <ul>
                    <LI>
                        <PeopleOutlinedIcon />
                        <Link to="/addStudent">
                            Add Student
                        </Link>
                    </LI>
                    <LI>
                        <AlignHorizontalLeftOutlinedIcon/>
                        <Link to="/manageStudent">Manage Students</Link>
                    </LI>
                    {!user &&<LI>
                        <LoginOutlinedIcon/>
                        <Link to="/login">Login</Link>
                    </LI>}
                    {user && <LI onClick={logOut}>
                        <LoginOutlinedIcon />
                        <Link to="/register">Logout</Link>
                    </LI>}
                </ul>
            </nav>
        </NavberContainer>
    );
};

export default Navber;