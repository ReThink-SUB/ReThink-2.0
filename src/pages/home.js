import React, { useState, useEffect } from "react";
import "./home/styles.css";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

function HomePage() {
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
  );
}

export default HomePage;
