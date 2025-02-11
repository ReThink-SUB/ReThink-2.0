import React from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '../../constants/routes.js';
import './styles.css';

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
        <div className="media-links">
          <a href="https://www.facebook.com/ReThinkUW" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
            <FontAwesomeIcon icon={faFacebookSquare} className="icon" />
          </a>
          <a href="https://www.linkedin.com/company/rethinkuw" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a href="mailto:rethink@uw.edu" target="_blank" rel="noopener noreferrer" aria-label="Reach out via Email">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
          <a href="https://www.instagram.com/rethinkuw" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
        </div>
        
        <div className="nav">
          {routes.map((route, index) => (
            <li key={index} className={`nav-link`}>
              <button onClick={() => handleNavigation(route.path)}>
                {route.path === '/'
                  ? 'HOME'
                  : route.path.substring(1).replace(/-/gi, ' ').toUpperCase()}
              </button>
            </li>
          ))}
        </div>

        <div className="footer-bottom">
            <p className="copyright">Copyright © 2023 ReThink</p>
        </div>
      </footer>
    );
  }