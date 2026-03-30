import React, { Component } from 'react';
import '../Components/DownloadSection.css';
import apple from '../Assets/Icons/apple.svg'
import play from '../Assets/Icons/play.svg'
import iphone from '../Assets/Img/iphone.png'

const Appsec = () => {
    return ( <>
    
<section className="app">
      <div className="hero-content">
        
        <h1 className="hero-title">
          NOW YOU CAN DOWNLOAD <br />
          OUR APP <span>"WAYCHARGE"</span> TO BE ABLE TO:
        </h1>

        <p className="hero-text">
          Take Charge of the Road. Your EV journey just got smarter.
        </p>

        <div className="buttons">
          <button className="btn apple">
             Download on the App Store
          </button>

          <button className="btn google">
            ▶ Get it on Google Play
          </button>
        </div>

      </div>

      <div className="hero-image">
        <img src={iphone} alt="app preview" />
      </div>
    </section>
    
    
    
    
    
    
    </> );
}
 
export default Appsec;