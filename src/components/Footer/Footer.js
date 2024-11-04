import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Social Media Icons */}
            <ul className="footer-icons">
                <li><a href="#" aria-label="Facebook"><FaFacebookF /></a></li>
                <li><a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a></li>
                <li><a href="#" aria-label="Email"><FaEnvelope /></a></li>
                <li><a href="#" aria-label="Instagram"><FaInstagram /></a></li>
            </ul>

            {/* Navigation Links */}
            <ul className="footer-nav">
                <li><a href="/">HOME</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/criteria">CRITERIA</a></li>
                <li><a href="/promote-your-business">PROMOTE YOUR BUSINESS</a></li>
                <li><a href="/contact-us">CONTACT US</a></li>
            </ul>

            {/* Copyright Notice */}
            <div className="footer-bottom">
                Copyright © 2023 ReThink
            </div>
        </footer>
    );
};

export default Footer;
