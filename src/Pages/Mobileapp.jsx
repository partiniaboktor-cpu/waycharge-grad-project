import React, { Component } from 'react';
import Nav from '../Components/Nav';
import Title from '../Common/Title-section.jsx';
import '../Supabase.jsx'
import './Mobileapp.css'
import mobileapp from '../Assets/Img/mobileapp.svg'
import DownloadSection from '../Components/DownloadSection.jsx'
import Appsec from '../Components/DownloadSection.jsx';
const Mobileapp = () => {
    return ( <>
    
    <Nav />
    
    <div className="container4">
      <h1 className="title4">DOWNLOAD NOW</h1>

      <div className="content4">
        {/* Left Button */}
        <div className="btn4 left4">On Play Store</div>

        {/* Phone */}
        <div className="phone4">
          <img
            src={mobileapp}
            alt="phone"
          />
        </div>

        {/* Right Buttons */}
        <div className="btn4 right4 top4">For free</div>
        <div className="btn4 right4 bottom4">On App Store</div>

        {/* Bottom Left */}
        <div className="btn4 bottom-left4">Available everywhere</div>
      </div>
    </div>
    



<div className='downloadnow'>
    <p className='download'>Download Now</p>
    <p className='download'>Download Now</p>
    <p className='download'>Download Now</p>
    <p className='download'>Download Now</p>
    <p className='download'>Download Now</p>
    <p className='download'>Download Now</p>
    <p className='download'>Download Now</p>
    <p className='download'>Download Now</p>
</div>

<DownloadSection />
    

<div className='sec2'>
    <h1 className='left-text'>The WayCharge app makes EV charging smarter and easier. </h1>
    <img src={Appsec} alt="app-screenshot" />
    <h1 className='left-text'>With just a few taps, you can request a portable charger, track its arrival in real time.</h1>

</div>

    </> );
}
 
export default Mobileapp;