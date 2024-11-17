import React from 'react';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import './contact.css';

function ContactUsPage() {
  return (
    <>
      <div style={{ marginTop: '10vh' }}>
        <SectionHeader title="Contact Us" subtitle="We'd like to talk to you too! We'll be in touch soon." />
      </div>
      <div className="contact-box">
        <div className="box-left">
          <p className="title">Let's Chat!</p>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" />
            
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Enter the subject" />
            
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
            
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Write your message here"></textarea>
            
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="box-right">
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;