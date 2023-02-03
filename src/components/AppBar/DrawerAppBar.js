import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import { AppBarContainer } from '../../styled/AppBar';

import { Link } from 'react-router-dom';
import '../Navber/Navbar.css'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
// import { IconButton, styled } from '@mui/material';
import { LI } from '../../styled/ManageStudent';
import AlignHorizontalLeftOutlinedIcon from '@mui/icons-material/AlignHorizontalLeftOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { AuthContext } from '../../context/AuthProvider';


const drawerWidth = 240;


function DrawerAppBar(props) {
    // LOCAL STATE FOR LOGIN USER INFO
    const { user, logOut } = useContext(AuthContext)

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                LOGO
            </Typography>
            <Divider />

                {/* mobile navitems */}

                <nav>
                    <ul>
                        <LI>
                            <PeopleOutlinedIcon />
                            <Link to="/addStudent">
                                Add Student
                            </Link>
                        </LI>
                        <LI>
                            <AlignHorizontalLeftOutlinedIcon />
                            <Link to="/manageStudent">Manage Students</Link>
                        </LI>
                        {!user && <LI>
                            <LoginOutlinedIcon />
                            <Link to="/login">Login</Link>
                        </LI>}
                        {user && <LI onClick={logOut}>
                            <LoginOutlinedIcon />
                            <Link to="/register">Logout</Link>
                        </LI>}
                    </ul>
                </nav>

                
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;




    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline  />
            <AppBarContainer component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {user && <>
                            <Typography>
                                {user.email}
                            </Typography>
                            </>}
                        
                    </Box>
                </Toolbar>
            </AppBarContainer>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>

        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;
