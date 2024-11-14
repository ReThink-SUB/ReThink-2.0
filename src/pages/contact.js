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
          <p className="title">Let's Chat</p>
        </div>
        <div className="box-right">
          <form>
            <input type="text" id="name" name="name" placeholder="Name" />
            <input type="text" id="subject" name="subject" placeholder="Subject" />
            <input type="email" id="email" name="email" placeholder="Email" />
            <textarea id="message" name="message" placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUsPage; 

// export default ContactUsPage;


// Attemting dynamic coding

/*
function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value   
 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log(formData);
    // Clear   
 form fields after submission
    setFormData({
      name: '',
      subject: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <div style={{ marginTop: '10vh' }}>
        <SectionHeader title="Contact Us" subtitle="We'd like to talk to you too! We'll be in touch soon." />
      </div>
      <div className="contact-box">
        <div className="box-left">
          <p className="title">Let's Chat</p>
        </div>
        <div className="box-right">
          <form onSubmit={handleSubmit}>
            <input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <input type="text" id="subject" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
            <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <textarea id="message" name="message" placeholder="Message" value={formData.message} onChange={handleChange}/>
            <button type="submit">Submit</button>
            <button type="reset">ReThink</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUsPage; */