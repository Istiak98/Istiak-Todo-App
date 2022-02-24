import React from "react";
import {NavLink} from 'react-router-dom'

export const Navbar: React.FC = () => {
    return (
    <nav>
        <div className="nav-wrapper teal px1">
            <a href="/" className="brand-logo center">Istiak Ahmed Daily Todo List</a>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/">To List</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
            </ul>
        </div>
    </nav>
    )
}