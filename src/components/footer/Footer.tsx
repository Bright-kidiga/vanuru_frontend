import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import "./Footer.css";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section">
                    <h3 className="footer-title">Our Contacts</h3>
                    <p className="footer-text">123456 Nairobi, Kenya</p>
                    <p className="footer-text">vanuruco@gmail.com</p>
                    <p className="footer-text">+2547000234234</p>
                </div>

                <div className="footer-section">
                    <h4 className="footer-subtitle">Quick Links</h4>
                    <ul className="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        {/*<li><a href="#donate">Donate</a></li>*/}
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section-socials">
                    <h4 className="footer-subtitle">Follow Us</h4>
                    <div className="footer-socials">
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} Vanuru co. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
