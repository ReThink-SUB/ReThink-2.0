import React from 'react';
import '../styles/promote.css';
import RethinkLogoNoBackground from '../images/header/RethinkLogo-no-background.png'
import RethinkPromoteBusinessImage from '../images/header/rethink-promote-business-image.png'
import '../components/SectionHeader/SectionHeader';
import SectionHeader from '../components/SectionHeader/SectionHeader';

function PromotePage() {
  return (
    <div className="promote-page-container">
      <SectionHeader title="Promote Your Business" subtitle="Partner with ReThink and reach a community like yours that's deciated to sustainability"/>
      <div className="green-box">
        <div className="bottom-row">
          <div className="reason-col">
            <p className="join-heading">Why you should join!:</p>
            <CreateReasonBox reasonNumber="1" reasonHeading="Build Trust &<br />Integrity" reasonDescription="Become certified in our community as a sustainable business!"/>
            <CreateReasonBox reasonNumber="2" reasonHeading="Marketing" reasonDescription="You'll be marketed to UW students and faculty, 40,000+ people, and on our social media and our platforms through our website and articles!"/>
            <CreateReasonBox reasonNumber="3" reasonHeading="Attract Student Talent" reasonDescription="Find deeply knowledgable students about green business practices."/>
          </div>
          <div className="join-col">
            <div className="logo-container">
              <img src={RethinkLogoNoBackground} alt="ReThink Logo" className="rethink-logo" />          
            </div>
            <p className="join-text">Want to join a community of businesses dedicated to sustainability, just like you? Continue below to sign up and help your neighbors ReThink consumerism.</p>
            <img src={RethinkPromoteBusinessImage} alt="ReThink Promote Business" className="rethink-promote-business-image"/>
            <div className="sign-up-button">
            <button onClick={() => window.open("https://forms.office.com/Pages/ResponsePage.aspx?id=W9229i_wGkSZoBYqxQYL0gWQVJmCk39CiTHrFRMC5TFURUU3Mlc2ODJYQVREWklUOFFSV05ITEowSS4u", "_blank")}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CreateReasonBox(props) {
  return (
    <div className="reason-box">
      <div className="reason-box-row">
        <div className="reason-box-circle">
          <p className="reason-box-number">{props.reasonNumber}</p>
        </div>
        <div className="reason-box-column">
          <p className="reason-box-heading" dangerouslySetInnerHTML={{ __html: props.reasonHeading }}/>
          <p className="reason-box-description">{props.reasonDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default PromotePage;
