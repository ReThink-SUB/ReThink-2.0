import React, { useRef } from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import './style.css';
import emailjs from '@emailjs/browser';

function ContactUsPage() {
  const form = useRef();
  
  const handleApplyRedirect = (e) => {
    e.preventDefault();
    //TODO: add new application link
    window.open('https://forms.office.com/pages/responsepage.aspx?id=W9229i_wGkSZoBYqxQYL0sMws091HfVPpiyCi8NdQV1UNFlCR1ZGVk5SNUVIQUFCQlVIS0U3NVdJVi4u&route=shorturl', '_blank', 'noopener,noreferrer');
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
      <div className="contact-section-header">
        <SectionHeader title="Contact Us" subtitle="We'd like to talk to you too! We'll be in touch soon." />
      </div>
      <div className="contact-box">
        <div className="box-top-left">
          <p className="chat-title">Let's Chat!</p>
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
        <div className="box-top-right">
        </div>
      </div>
      <div className = "Get header">
        <SectionHeader title = "Get Involved" subtitle = "Want to be apart of ReThinking consumerism? Apply now to join the team. We’d be happy to have you!"/>
      </div>
      <div className = "get-involved-box">
        <div className = "box-bottom-left">
          <p className = "lefttitle">Join Rethink!</p>
          <p>
          We have rolling applications to join our team. Keep an eye out on our social media if you're interested! If you’re a current University of Washington student, apply now to join. Positions available:
          <em orange> marketing, business development, researchers, front end developers.</em> Reach out to <a href="mailto:rethink@uw.edu">rethink@uw.edu</a> with any questions.
        </p>
        <form onSubmit={handleApplyRedirect}><button type="submit">Apply Here</button></form>
        </div>
      
      <div className = "box-bottom-right">
      </div>
      </div>
    </>
  );
}

export default ContactUsPage;