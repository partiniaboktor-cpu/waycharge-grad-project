import React, { Component, useState } from 'react';
import './Home.css'
import Nav from '../Components/Nav';
import Title from '../Common/Title-section.jsx';
import '../Supabase.jsx'
import DownloadSection from '../Components/DownloadSection.jsx';
import charger from '../Assets/Img/charger.svg';
import imggroup from '../Assets/Img/imggroup.svg';
import dot from '../Assets/Img/dots.svg';
import Smallcard from '../Common/Smallcard.jsx';
import charger2 from '../Assets/Img/charging-image.png'
import locationicon from '../Assets/Icons/location.svg'
import phoneicon from '../Assets/Icons/phoneIcon.svg'
import lighteniceon from '../Assets/Icons/lightningIcon.svg'
import checkinicon from '../Assets/Icons/checkIcon.svg'
import Blog from '../Common/Blogpart.jsx'
import Footer from '../Components/Footer.jsx'
import { Link } from "react-router-dom";

const Home = () => {
    return ( <>
    <Nav />

    <div className='hero'>
        <div className='left-side-hero'>
        <h1 className='title-hero'>Charge the way forward</h1>
        <p className='text-hero-left'>WayCharge | Powering the path to a cleaner tomorrow. <br></br>High-speed EV charging designed for the modern journey. ️<br></br> Charge the way forward.</p>
        <button className='name-proj'>WayCharge...</button>
        </div>

{/* 3d car model */}
 <div style={{ width: "100%", height: "500px" }}>
      <model-viewer
        src="/3dcar.glb"
        alt="3D Car"
        auto-rotate
        camera-controls
        ar
        shadow-intensity="1"
        exposure="0.8"
        style={{
          width: "100%",
          height: "100%",
          background: "transparent"
        }}
      ></model-viewer>
    </div>

    </div>

 <Title 
   t1="Application" 
   t2="Application" 
   linkText="View More" 
/>

<DownloadSection />



 <Title 
   t1="How it works ?" 
   t2="How it works ?" 
   linkText="View More" 
/>


 <div className="steps-containerss">
      
      {/* LEFT SIDE */}
      <div className="steps-lefts">

        <div className="stepss">
          <div className="circles">1</div>
          <div>
            <h3 className='step-titless'>Connect</h3>
            <p>Connect charger cable with car & station.</p>
          </div>
        </div>

        <div className="stepss">
          <div className="circles">2</div>
          <div>
            <h3 className='step-titless'>Start</h3>
            <p>Start charging session by scanning your phone.</p>
          </div>
        </div>

      </div>


      {/* CENTER IMAGE */}
      <div className="charger-image">
        <div style={{ width: "100%", height: "500px" }}>
      <model-viewer
        src="/charger.glb"
        alt="3D Car"
        auto-rotate
        camera-controls
        ar
        shadow-intensity="1"
        exposure="0.8"
        style={{
          width: "100%",
          height: "100%",
          background: "transparent"
        }}
      ></model-viewer>
    </div>
      </div>


      {/* RIGHT SIDE */}
      <div className="steps-rights">

        <div className="stepss">
          <div className="circles">3</div>
          <div>
            <h3 className='step-titless'>Connect</h3>
            <p>Blue led light indicates start of charging session.</p>
          </div>
        </div>

        <div className="stepss">
          <div className="circles">4</div>
          <div>
            <h3 className='step-titless'>Charging complete</h3>
            <p>Stop charging session by using your phone.</p>
          </div>
        </div>

      </div>

    </div>

<section className='charging-stations'>

<div className='contetnt-charging'>
  <div className='dot'>
  <img src={imggroup} alt="imgggroup" />
  <img className='dotss' src={dot} alt="imgggroup" />

  </div>

<div className='nos'>
  <h2 className='number-one'>52+</h2>
  <h2 className='number-one'>100</h2>
  <h2 className='number-one'>1000</h2>
</div>

<div className='nos'>
  <h2 className='text-ones'>Charging stations</h2>
  <h2 className='text-ones'>Charging points</h2>
  <h2 className='text-ones'>Charging points</h2>
</div>

</div>

</section>

 <Smallcard />


 <Title 
   t1="Mission & vission" 
   t2="Mission & vission" 
   linkText="View More" 
/>


<div className="features-section">

      {/* LEFT IMAGE */}
      <div className="features-image">
        <img src={charger2} alt="charger2" />
      </div>

      {/* RIGHT FEATURES */}
      <div className="features-grid">

        <div className="feature-card">
          <div className="icon-box">
            <img src={locationicon} alt="icon"/>
          </div>
          <h3 className='Track'>Find a Station</h3>
          <p className='Track'>
            Use our app to locate the nearest charging station with real-time
            availability.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon-box">
            <img src={phoneicon} alt="icon"/>
          </div>
          <h3 className='Track'>Connect & pay</h3>
          <p className='Track'>
            Simply scan the QR code and start charging with seamless payment
            integration.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon-box">
            <img src={lighteniceon} alt="icon"/>
          </div>
          <h3 className='Track'>Fast Charging</h3>
          <p className='Track' >
            Enjoy ultra-fast charging speeds with our advanced DC fast charging
            technology.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon-box">
            <img src={checkinicon} alt="icon"/>
          </div>
          <h3 className='Track'>Track & go</h3>
          <p className='Track'>
            Monitor your charging progress in real-time and get notified when
            complete.
          </p>
        </div>
      </div>
    </div>

 <Title 
   t1="Blogs" 
   t2="Blogs" 
   linkText="View More" 
/>

<Blog />
    
<DownloadSection />
<Footer />

    </> );
}
 
export default Home;