import React from 'react';
import './Navbar.css';
import logo from '../../../img/logo.JPG';
import logologout from '../../../img/logout.png';
import {
    Link
  } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="nav">
                <li className="logo">
                    <Link to="/dashboard">
                        <img className="logoImg" src={logo} alt="logo"/>
                    </Link>
                </li>

                <li className="logout">
                    <Link to="/">
                        <img className="logoutImg" src={logologout} alt="logout"/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;