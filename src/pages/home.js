import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import HomeBanner from '../images/home/home_banner.png';
import './home.css';

function HomePage() {
  // Seattle center coordinates
  const seattleCenter = [47.6062, -122.3321];

  return (
    <div className="home-page">
      <div className="home-section">
        <SectionHeader title="Rethink the way you consume." subtitle="Discover an eco-friendly business near you today." />
      </div>
      
      <div className="banner-image-section">
        <img src={HomeBanner} alt="Home Banner" className="home-banner" />
        <div className="banner-overlay">
          <div className="banner-overlay-content">
            <h2 className="banner-overlay-title">
              Sustainable consumerism made <span className="green-text">easy</span>
            </h2>
            <p className="banner-overlay-subtitle">
              Discover eco-friendly businesses for your next shopping and dining experience.
            </p>
          </div>
          <div className="banner-overlay-button-container">
            <button className="view-businesses-btn">View Businesses</button>
          </div>
        </div>
      </div>
      
      <div className="map-section">
        <div className="map-container">
          <MapContainer 
            center={seattleCenter} 
            zoom={11} 
            style={{ height: '70vh', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default HomePage;