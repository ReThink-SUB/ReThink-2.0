import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import HomeBanner from '../images/home/home_banner.png';
import './home.css';
import "./home/styles.css";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

function HomePage() {
  // Seattle center coordinates
  const seattleCenter = [47.6062, -122.3321];

  // State for business search and filtering
  const [businesses, setBusinesses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const ref = collection(db, "businesses");
    const unsubscribe = onSnapshot(ref, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setBusinesses(items);
    });

    return () => unsubscribe();
  }, []);

  const filteredBusinesses = businesses.filter((business) => {
    const matchesSearch = business.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" ||
      (Array.isArray(business.category) &&
        business.category.includes(selectedCategory.toLowerCase()));

    return matchesSearch && matchesCategory;
  });

  const categories = ["Grocery", "Beauty", "Restaurant", "Clothing"];

  return (
    <div className="home-page">
      {/* New Section Header */}
      <div className="home-section">
        <SectionHeader title="Rethink the way you consume." subtitle="Discover an eco-friendly business near you today." />
      </div>
      
      {/* New Banner with Overlay */}
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
      
      {/* New Map Section */}
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

      {/* Existing Search and Business Grid */}
      <div className="container">
        <div className="header">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search"
              className="search-bar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="categories">
            <button
              className={`category-btn ${selectedCategory === "" ? "active" : ""}`}
              onClick={() => setSelectedCategory("")}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-btn ${
                  selectedCategory === cat.toLowerCase() ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(cat.toLowerCase())}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid">
          {filteredBusinesses.map((business, index) => (
            <div key={index} className="card">
              <div className="card-images">
                <img src={business.logo} alt="Logo" className="thumbnail" />
                <img src={business.image} alt="Business" className="thumbnail" />
              </div>
              <h2 className="business-name">{business.name}</h2>
              <p className="description">{business.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
