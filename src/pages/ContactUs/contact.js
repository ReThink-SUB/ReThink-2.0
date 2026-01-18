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
      <div className="contact-section-header">
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
    </>
  );
}

export default ContactUsPage;