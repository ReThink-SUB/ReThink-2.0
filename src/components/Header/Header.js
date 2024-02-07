import React from 'react';
import RethinkLogo from 'rethinkLogo.png';
import './styles.css';

/**
 *
 * Website header component. Title and subtitle text are passed in as props.
 * Has Rethink logo button on the right and navbar on the left
 */
export default function Header() {
  return (
    <section className="header">
      <section className="logo">
        <img
          className="logo"
          src={RethinkLogo}
          alt="The word ReThink with petals next to it"
        />
      </section>
      <section className="navContainer">
        <div className="navbar" />
        <div className="homeButton">home</div>
        <div className="aboutButton">about </div>
        <div className="contactButton">contact us</div>
        <div className="criteriaButton">criteria</div>
        <div className="promoteButton">promote your business</div>
      </section>
    </section>
  );
}
