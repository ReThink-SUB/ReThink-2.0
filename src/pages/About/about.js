import React from 'react';
import TeamPhoto from '../../images/TeamPhoto.png';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import './styles.css';

function AboutPage() {
  return (
    <div>
      <div className="about-page">
        <SectionHeader title="Who We Are" subtitle="Our mission and goals" />
      </div>

      <div className="who-we-are-container">
        <img src={TeamPhoto} alt="Team Photo" className="team-photo" />
        
        <div className="who-we-are-text">
          <p>
            ReThink is a University of Washington Michael G. Foster School of Business Registered Student Organization. 
            We are a team of students advocating for sustainable consumer behavior. Through business outreach and thorough 
            research, we determine what local companies follow guidelines that certify them as “sustainable”. Following an 
            eco-friendly lifestyle can be challenging, which is why our organization aims to connect consumers to sustainable 
            businesses in the Seattle area.
          </p>
          <p>
            We feature businesses that incorporate sustainability in their everyday operations. From the ingredients on 
            their menus, to the materials in their products, these businesses have a multitude of avenues to introduce 
            sustainability within their company.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;