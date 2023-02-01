
import React from 'react';
import { Link } from 'react-router-dom';
import '../Navber/Navbar.css'

const Navber = () => {
    return (
        <aside className='navbar-container'>
            {/* logo */}
            <div>
                <Link to="/logo">LOGO</Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/addStudent">Add Student</Link></li>
                    <li><Link to="/">Manage Students</Link></li>
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Navber;