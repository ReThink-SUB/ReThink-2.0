import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import routes from '../../constants/routes.js';
import RethinkLogo from '../../images/RethinkLogo-no-background.png';
import './styles.css';

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <header className="navDiv">
      <section className="logo">
        <img src={RethinkLogo} alt="ReThink Logo" />
      </section>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav className={`navContainer ${menuOpen ? 'open' : ''}`}>
        <ul className="nav">
          {routes.map((route, index) => (
            <li key={index} className="nav-link">
              <button onClick={() => handleNavigation(route.path)}>
                {route.path === '/' ? 'home' : route.path.substring(1).replace(/-/g, ' ')}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
