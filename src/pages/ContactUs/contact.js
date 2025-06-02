import React, { useRef } from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import './style.css';
import emailjs from '@emailjs/browser';

function ContactUsPage() {
  const form = useRef();

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
      <div className="section-header">
        {/* Left‐side stripes fill all available space */}
        <div className="stripe-container">
          <div className="stripe green"></div>
          <div className="stripe mint"></div>
          <div className="stripe orange"></div>
        </div>

        {/* Centered header text */}
        <div className="header-text">
          <h2>Contact Us</h2>
          <p className="subtext">We’d like to talk to you too! We’ll be in touch soon.</p>
        </div>

        {/* Right‐side stripes fill all available space */}
        <div className="stripe-container">
          <div className="stripe green"></div>
          <div className="stripe mint"></div>
          <div className="stripe orange"></div>
        </div>
      </div>

      <div className="contact-box">
Contact-Us-Page
        <div className="contact-left">
          <p className="title">Let’s Chat!</p>
          <form>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name:"
            />

            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter the subject:"
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email:"
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here:"
            />

            <button type="submit">Submit</button>
          </form>
        </div>

        {/* Right‐side of Contact Us: “contact-us-photo.png” */}
        <div className="contact-right" />
      </div>

      <div className="section-header">
        <div className="stripe-container">
          <div className="stripe green"></div>
          <div className="stripe mint"></div>
          <div className="stripe orange"></div>
        </div>

        <div className="header-text">
          <h2>Get Involved</h2>
          <p className="subtext">
            Want to be a part of ReThinking consumerism? Apply now to join the team. We’d be happy to have you!
          </p>
        </div>

        <div className="stripe-container">
          <div className="stripe green"></div>
          <div className="stripe mint"></div>
          <div className="stripe orange"></div>
        </div>
      </div>

      <div className="involved-box">
        <div className="involved-left">
          <p className="join-title">Join ReThink!</p>
          <p className="join-description">
            We have rolling applications to join our team. Keep an eye on our social media if you’re interested!
            If you’re a current University of Washington student, apply now to join.
            <br /><br />
            Positions available: marketing, business development, researchers, front end developers. Reach out to{' '}
            <a href="mailto:join@rethinkuw.org" className="join-email">
              join@rethinkuw.org
            </a>{' '}
            with any questions.
          </p>
          <button className="apply-button">Apply Here</button>
        </div>

        {/* Right‐side of Get Involved: “contact-us-image.png” */}
        <div className="involved-right" />
      </div>
    </>
  );
}

export default ContactUsPage;