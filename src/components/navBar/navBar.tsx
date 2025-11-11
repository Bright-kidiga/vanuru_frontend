import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png"; // adjust the path

const Navbar: React.FC = () => {
    return (
        <header className="navbar">
            <div className="navbar-container">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="navbar-logo" />
                    <h1 className="company-name">My Company</h1>
                </div>

                <nav className="nav-links">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/team">Team</a>
                    <a href="/services">Services</a>
                    <a href="/contact">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
