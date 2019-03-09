import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => (
    <div className="container">
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/clients" className="nav-link">Clients</Link>
            </li>
            {/* <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
            </li> */}
        </ul>
    </div>
)

export default Nav;



