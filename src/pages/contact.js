import React from 'react';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import './contact.css';

function ContactUsPage() {
  return (
    <>
      <div style={{ marginTop: '10vh' }}>
        <SectionHeader title="Contact Us" subtitle="We'd like to talk to you too! We'll be in touch soon." />
      </div>
      <div className="contact-box"></div>
    </>
  );
}

export default ContactUsPage;