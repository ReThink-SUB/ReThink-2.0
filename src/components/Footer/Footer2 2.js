import React from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '../../constants/routes.js';
import './styles2.css';
import rethinkLogo from '../../images/footer/RethinkLogo-no-background.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

/**
 * This component renders a footer with clickable icons of all 4 types of contact
 * and routes at that bottom that are clickable to all the pages.
 *
 * @returns {Footer} A React element that renders the footer.
 */

export default function Footer() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-left">
                    <img src={rethinkLogo} alt="ReThink Logo" className="footer-logo" />
                    <p className="footer-description">
                        <strong>Sustainability Upheld In Business.</strong><br />
                        We promote economic lifestyles that support and sustain our planet for future generations.
                    </p>
                </div>

                <div className="footer-middle">
                    <p className="footer-title">Let's keep in touch!</p>
                    <div className="media-links">
                        <a href="https://www.facebook.com/ReThinkUW" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookSquare} className="icon" />
                        </a>
                        <a href="https://www.instagram.com/rethinkuw" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="icon" />
                        </a>
                        <a href="https://www.linkedin.com/company/rethinkuw" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="icon" />
                        </a>
                        <a href="mailto:rethink@uw.edu" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        </a>
                    </div>
                </div>

                <div className="footer-right">
                    <p className="footer-menu-title">Menu</p>
                    <ul className="footer-menu">
                        {routes.map((route, index) => (
                            <li key={index}>
                                <button onClick={() => handleNavigation(route.path)}>
                                    {route.path === '/' ? 'Home' : route.path.substring(1).replace(/-/g, ' ')}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}