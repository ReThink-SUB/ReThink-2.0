import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.js';
import RethinkLogo from './rethinkLogo.png';
import './styles.css';

export default function Header() {
  return (
    <Navbar expand="lg" className="header container justify-content-between">
      <div className="navbar row">
        <section className="logo col-md-6">
          <img
            className="logo"
            src={RethinkLogo}
            alt="The word ReThink with petals next to it"
          />
        </section>
        <section className="navContainer col-md-6">
          <Nav>
            {routes.map((route, index) => (
              <Nav.Link
                key={index}
                as={Link}
                to={route.path}
                className={`navLink ${route.path.substring(1)}Button`}
              >
                {route.path === '/' ? 'home' : route.path.substring(1)}
              </Nav.Link>
            ))}
          </Nav>
        </section>
      </div>
    </Navbar>
  );
}
