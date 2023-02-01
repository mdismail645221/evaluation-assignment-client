import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <aside>
            {/* logo */}
            <div>
                <Link to="/logo">LOGO</Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Add Student</Link></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Navber;