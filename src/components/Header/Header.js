import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.js';
import RethinkLogo from '../../images/header/RethinkLogo.jpg';
import './styles.css';

// defuzz logo
// buttons
// clamp css for responsivity
export default function Header() {
  return (
    <div>
      <section className="logo">
        <img src={RethinkLogo} alt="The word ReThink with petals next to it" />
      </section>
      <section className="navContainer">
        <ul className="nav">
          {routes.map((route, index) => (
            <li key={index} className={`nav-link`}>
              <button to={route.path}>
                {route.path === '/' ? 'home' : route.path.substring(1)}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
