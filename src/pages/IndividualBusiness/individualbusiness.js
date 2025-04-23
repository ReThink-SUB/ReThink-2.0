import React from 'react';
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import "./style.css";
import FrankieImage1 from '../../images/individualbusiness/frankieandjoes1.png';  
import FrankieImage2 from '../../images/individualbusiness/frankieandjoes2.png';
import FrankieImage3 from '../../images/individualbusiness/frankieandjoes3.png';
import facebook from '../../images/individualbusiness/facebook.png';  
import instagram from '../../images/individualbusiness/instagram.png';
import website from '../../images/individualbusiness/website.png';

const IndividualBusiness = () => {
  return (
    <div>
        <div className="individualbusiness-page">
            <SectionHeader title="Rethink" subtitle="Discover eco-friendly businesses for your next shopping and dining experience." />
        </div>
        <div className="contact-box">
            <div className="box-left">
                <h1 className="title">Frankie & Joe’s</h1>
                <p className="business-type">
                    Ice Cream, Vegan
                </p>
                <p className="business-description">
                    Frankie and Joe’s is a plant-based ice cream shop with multiple locations around Seattle. It is a women-owned company committed to supporting and encouraging a plant-based lifestyle.
                </p>
                <p className="business-description">
                    Being a B-Corp means holding themselves accountable to sustainability, climate change, organic practices, and their employees and community! Frankie and Joe’s offers a refreshing change to your normal ice cream spot and you’d be helping the planet.
                </p>
                <div className="visit-and-social">
                    <a href="https://frankieandjoes.com" target="_blank" rel="noreferrer">
                        <button className="visit-button">
                        Visit Website
                        </button>
                    </a>

                    <div className="social-links">
                        <a href="https://instagram.com/frankieandjoes" target="_blank" rel="noreferrer">
                        <img src={instagram} alt="Instagram" />
                        </a>
                        <a href="https://facebook.com/frankieandjoes" target="_blank" rel="noreferrer">
                        <img src={facebook} alt="Facebook" />
                        </a>
                        <a href="https://frankieandjoes.com/contact" target="_blank" rel="noreferrer">
                        <img src={website} alt="Website" />
                        </a>
                    </div>
                </div>
                <div className="contact-info">
                    <div className="left-info">
                        <p><strong>Address:</strong><br />1010 E Union St<br />Seattle, WA 98122</p>
                        <p style={{ marginTop: '10px' }}><strong>Tel:</strong><br />206-557-4603</p>
                    </div>

                    <div className="vertical-line"></div>

                    <div className="right-info">
                        <p><strong>Hours:</strong><br />
                        Sunday: Varies by Location
                        Monday: Varies by Location
                        Tuesday: Varies by Location
                        Wednesday: Varies by Location
                        Thursday: Varies by Location
                        Friday: Varies by Location
                        Saturday: Varies by Location
                        </p>
                    </div>
                </div>
            </div>

            <div className="box-right">
                <img src={FrankieImage1} alt="Inside of Frankie and Joes" className="frankieandjoes-1" />
                <div>
                    <img src={FrankieImage2} alt="One of Frankie and Joes' icecream" className="frankieandjoes-2" />
                    <img src={FrankieImage3} alt="The Owners of Frankie and Joes" className="frankieandjoes-3" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default IndividualBusiness;
