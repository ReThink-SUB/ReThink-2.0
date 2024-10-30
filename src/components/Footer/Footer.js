import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            {/* Social Media Icons */}
            <ul className="footer-icons">
                <li><a href="#" aria-label="Facebook">F</a></li>
                <li><a href="#" aria-label="LinkedIn">L</a></li>
                <li><a href="#" aria-label="Email">E</a></li>
                <li><a href="#" aria-label="Instagram">I</a></li>
            </ul>

            {/* Navigation Links */}
            <ul className="footer-nav">
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">CRITERIA</a></li>
                <li><a href="#">PROMOTE YOUR BUSINESS</a></li>
                <li><a href="#">CONTACT US</a></li>
            </ul>

            {/* Copyright Notice */}
            <div className="footer-bottom">
                Copyright © 2023 ReThink
            </div>
        </footer>
    );
};

export default Footer;
