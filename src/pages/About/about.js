import React, { useState } from "react";
import TeamPhoto from "../../images/aboutUs/TeamPhoto.png";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import "./styles.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const teamsData = [
  {
    id: 1,
    image: require('../../images/aboutUs/carla_yoo.jpg'),
    name: 'Carla Yoo',
    role: 'President',
    team: 'Leadership'
  },
  {
    id: 2,
    image: require('../../images/aboutUs/cindy_liang.jpg'),
    name: 'Cindy Liang',
    role: 'UI/UX',
    team: 'UI/UX'
  },
  {
    id: 3,
    image: require('../../images/aboutUs/claire_lai.jpg'),
    name: 'Claire Lai',
    role: 'UI/IX Team Lead',
    team: 'UI/UX'
  },
  {
    id: 4,
    image: require('../../images/aboutUs/dalaney_pham.jpg'),
    name: 'Delaney Pham',
    role: 'Marketing Team Lead',
    team: 'Marketing'
  },
  {
    id: 5,
    image: require('../../images/aboutUs/ella_crowder.jpg'),
    name: 'Ella Crowder',
    role: 'Developer',
    team: 'Developer'
  },
  {
    id: 6,
    image: require('../../images/aboutUs/hannah_chen.jpg'),
    name: 'Hannah Chen',
    role: 'Vice President',
    team: 'Leadership'
  },
  {
    id: 7,
    image: require('../../images/aboutUs/isabella_showman.jpg'),
    name: 'Isabella Showman',
    role: 'Research Team Lead',
    team: 'Research'
  }, 
  {
    id: 8,
    image: require('../../images/aboutUs/ishita_mundra.jpg'),
    name: 'Ishita Mundra',
    role: 'Developer',
    team: 'Developer'
  },
  {
    id: 9,
    image: require('../../images/aboutUs/james_moy.jpg'),
    name: 'James Moy',
    role: 'Research',
    team: 'Research'
  },
  {
    id: 10,
    image: require('../../images/aboutUs/jasmine_zhang.jpg'),
    name: 'Jasmine Zhang',
    role: 'Developer',
    team: 'Developer'
  },
  {
    id: 11,
    image: require('../../images/aboutUs/jeremy_nguyen.jpg'),
    name: 'Jeremy Nguyen',
    role: 'Developer Team Lead',
    team: 'Developer'
  },
  {
    id: 12,
    image: require('../../images/aboutUs/jonathan_to.jpg'),
    name: 'Jonathan To',
    role: 'UI/UX',
    team: 'UI/UX'
  },
  {
    id: 13,
    image: require('../../images/aboutUs/kylah_moon.jpg'),
    name: 'Kylah Moon',
    role: 'Developer',
    team: 'Developer'
  },
  {
    id: 14,
    image: require('../../images/aboutUs/sofia_alvi.jpg'),
    name: 'Sofia Alvi',
    role: 'Marketing',
    team: 'Marketing'
  }
]

function AboutPage() {
  const [activeFilter, setActiveFilter] = useState(null);

  const handleFilterClick = (filter) => {
    setActiveFilter((prevFilter) => (prevFilter === filter ? null : filter));
  };

  return (
    <div>
      <div className="about-page">
        <SectionHeader title="Who We Are" subtitle="Our mission and goals" />
      </div>

      <div className="who-we-are-container">
        <img src={TeamPhoto} alt="A group of students from ReThink" className="team-photo" />
        <div className="who-we-are-text">
          <p>
            ReThink is a University of Washington Michael G. Foster School of Business Registered Student Organization. We
            are a team of students advocating for sustainable consumer behavior. Through business outreach and thorough
            research, we determine what local companies follow guidelines that certify them as “sustainable”. Following an
            eco-friendly lifestyle can be challenging, which is why our organization aims to connect consumers to
            sustainable businesses in the Seattle area.
          </p>
          <p>
            We feature businesses that incorporate sustainability in their everyday operations. From the ingredients on
            their menus to the materials in their products, these businesses have a multitude of avenues to introduce
            sustainability within their company.
          </p>
        </div>
      </div>
      <div className="about-page">
        <SectionHeader
          title="Meet the Team"
          subtitle="The students that bring ReThink to you, from the University of Washington"
        />
      </div>
      <div className="filter-button-row">
        {["Everyone", "Leadership", "Marketing", "Research", "UI/UX", "Developer"].map((filter) => (
          <FilterButton
            key={filter}
            filter={filter}
            isActive={activeFilter === filter}
            onClick={() => handleFilterClick(filter)}
          />
        ))}
      </div>
      <TeamMemberGrid activeFilter={activeFilter} />
    </div>
  );
}

function FilterButton({ filter, isActive, onClick }) {
  return (
    <button
      className="filter-button"
      onClick={onClick}
      style={{
        background: isActive ? "#F56038": "rgba(245, 96, 56, 0.50)",
      }}>
      <p className="filter-button-text">{filter}</p>
    </button>
  );
}

function TeamMemberGrid({ activeFilter }) {
  const filteredTeams =
    activeFilter && activeFilter !== "Everyone"
      ? teamsData.filter((team) => team.team === activeFilter)
      : teamsData;

  return (
    <section id="team-members" className="team-members-container">
      <Container fluid>
        <Row className="justify-content-center">
          {filteredTeams.map((team) => (
            <Col xs={12} sm={6} md={4} lg={3} xl={2} key={team.id} className="member-col">
              <Container className="member-box">
                <div className="image">
                  <Image src={team.image} alt={team.name} fluid />
                </div>
                <div className="content">
                  <p className="member-name">{team.name}</p>
                  <p className="member-role">{team.role}</p>
                </div>
              </Container>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default AboutPage;