import React, { Component } from 'react';
import './Footer.css';

const footer = () => {
    return ( <>
    
  <div className="footer-container">

      <div className="lefts-section">
        <h2 className="title-footer">⚡ WayCharge.</h2>

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

      <div className="rights-section">
        <h3 className='Quick Navigation'>Quick Navigation</h3>

        <div className="nav-grid">

          <div className="nav-box">📍 About us</div>
          <div className="nav-box">📱 Mobile app</div>
          <div className="nav-box">⚡ Stations</div>
          <div className="nav-box">✈️ How it works?</div>
          <div className="nav-box">✉️ Contact us</div>
          <div className="nav-box">❓ Help</div>

        </div>
      </div>

      <div className="bottom-footer">
        {/* <p>© 2026 Way Charge. All rights reserved. Charging the future, one station at a time.</p> */}

        {/* <div className="links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div> */}
      </div>

    </div>
    
    
    
    
    
    </> );
}
 
export default footer ;