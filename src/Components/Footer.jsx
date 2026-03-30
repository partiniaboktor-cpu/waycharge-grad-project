import React, { Component } from 'react';


const footer = () => {
    return ( <>
    
    <div className="container">
      <div className="left-section">
        <h2 className="title">⚡ Electric Charges</h2>

        <p className="description">
          Powering your journey with sustainable energy solutions.
          Find, charge, and continue your adventure.
        </p>

        <div className="stats">
          <div>
            <h3>500+</h3>
            <p>Stations</p>
          </div>

          <div>
            <h3>24/7</h3>
            <p>Support</p>
          </div>

          <div>
            <h3>50k+</h3>
            <p>Users</p>
          </div>
        </div>
      </div>

      <div className="right-section">
        <h3 className="nav-title">Quick Navigation</h3>

        <div className="grid">
          <Card icon="📍" text="About us" />
          <Card icon="📱" text="Mobile app" />
          <Card icon="⚡" text="Stations" />
          <Card icon="✈️" text="How it works?" />
          <Card icon="✉️" text="Contact us" />
          <Card icon="❓" text="Help" />
        </div>
      </div>

      <footer>
        <p>
          © 2026 Way Charge. All rights reserved. Charging the future, one
          station at a time.
        </p>

        <div className="links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </footer>
    </div>
    
    
    
    
    
    </> );
}
 
export default ;