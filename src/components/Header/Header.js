import React from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '../../constants/routes.js';
import RethinkLogo from '../../images/header/RethinkLogo.jpg';
import './styles.css';

/**
 * This component renders a header with a logo on the right and uses
 * routes to create a clickable navbar on the left.
 *
 * @returns {Header} A React element that renders a greeting to the user.
 */
export default function Header() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <section className="logo">
        <img src={RethinkLogo} alt="ReThink Logo" />
      </section>
      <section className="navContainer">
        <ul className="nav">
          {routes.map((route, index) => (
            <li key={index} className={`nav-link`}>
              <button onClick={() => handleNavigation(route.path)}>
                {route.path === '/'
                  ? 'home'
                  : route.path.substring(1).replace(/-/gi, ' ')}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
