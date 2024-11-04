import React from 'react';
import SectionHeader from '../components/SectionHeader/SectionHeader';


function ContactUsPage() {
  const boxStyle = {
    backgroundColor: '#E9F3E7',
    padding: '20px',
    margin: '10vh', 
    height: `calc(120vh - 160px)`,
    overflow: 'auto', 
  };

  return (
    <>
      <div style={{ marginTop: '10vh' }}>
      <SectionHeader title="Contact Us" subtitle="We'd like to talk to you too! We'll be in touch soon." />
    </div>
      <div style={boxStyle}><div/>
    </div>
  </>
  );
}

export default ContactUsPage;