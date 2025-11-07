import React, { useRef } from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import './style.css';
import emailjs from '@emailjs/browser';

//TODO: The link to the join form
const REDIRECT_URL = 'https://example.com';



function ContactUsPage() {
  const form = useRef();

  const handleRedirect = (url) => {
  // Added by copilot 
  window.open(url, '_blank', 'noopener,noreferrer');
 };

  const sendEmail = (e) => {
    e.preventDefault();
    
    const serviceId = 'service_pazoz54';
    const templateId = 'template_f9r6pje';
    const publicKey = 'NWwowGG_uHhk0RZAZ';

    emailjs.sendForm(serviceId, templateId, form.current, {
      publicKey: publicKey,
    })
      .then((result) => {
        console.log('Message sent successfully', result.text);
        alert('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        console.log('Message failed to send', error.text);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <>
      <div className="header">
        <SectionHeader title="Contact Us" subtitle="We'd like to talk to you too! We'll be in touch soon." />
      </div>
      <div className="contact-box">
        <div className="box-left">
          <p className="title">Let's Chat!</p>
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name:" required />
            
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Enter the subject:" required />
            
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email:" required />
            
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Write your message here:" required></textarea>
            
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="box-right">
        </div>
      </div>
      <div className = "Get Involved">
        <SectionHeader title = "Get Involved" subtitle = "Want to be apart of ReThinking consumerism? Apply now to join the team. We’d be happy to have you!"/>
      </div>
      <div className = "Join!">
        <div className = "box-left">
          <p className = "title">Join Rethink!</p>
          <p className = "body">We have rolling applications to join our team. Keep an eye out on our social media if you're interested! If you’re a current University of Washington student, apply now to join. Positions available:</p>
          <p className = "orange"> marketing, business development, researchers, front end developers.</p>
          <p className = "body"> Reach out to join@rethinkuw.org with any questions. </p>
        
          <button
            type="button"
            className="redirect-button"
            onClick={() => handleRedirect(REDIRECT_URL)}
            aria-label="Apply to join Rethink" //This part was added by copilot - Unsure what it does
          >
            Apply Now
          </button>
        </div>
      </div>
      <div className =  "box-right">

      </div>
    </>
  );
}

export default ContactUsPage;