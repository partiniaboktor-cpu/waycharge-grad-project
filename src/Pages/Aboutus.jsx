import React, { Component } from 'react';
import './Aboutus.css'
import Nav from '../Components/Nav';
import Title from '../Common/Title-section.jsx';
import '../Supabase.jsx'
import Footer from '../Components/Footer.jsx'

const Aboutus = () => {
    return ( <>
    
        <Nav />

    <div className="banner-container">
      {/* Left Green Block */}
      <div className="green-side">
        <h2 className="text-white tight-stack">PORTABLE</h2>
        <h2 className="text-white tight-stack">CHARGES</h2>
      </div>

      {/* Right Content Block */}
      <div className="content-side">
        <p className="sub-header">Electrical Charging power station</p>
        <h1 className="main-title">ELECTRIC VEHICLE</h1>
      </div>
    </div>
    

    {/* 3d model */}
    
<Title 
   t1="About us" 
   t2="Abouts us" 
   linkText="View More" 
/>

<p className='aboutus-paragraph'>WayCharge is an innovative portable electric vehicle charging solution designed to make EV charging accessible anywhere, anytime. Built to support the growing shift toward sustainable mobility, WayCharge provides convenient, on-the-go charging while enhancing the user experience with added value—like complimentary coffee during charging sessions. The platform combines practicality, technology, and comfort, ensuring drivers never feel limited by location or infrastructure. WayCharge isn’t just a charger; it’s a smart mobility service designed to power journeys with ease, reliability, and a touch of everyday luxury.</p>
    

  <Title 
   t1="Why choose us ?" 
   t2="Why choose us ?" 
   linkText="View More" 
/>
  
  <p className='aboutuss-paragraph'>WayCharge gives you the freedom to charge your electric vehicle anywhere, without depending on fixed stations. It’s portable, convenient, and designed to make charging simple and stress-free. With added comfort like complimentary coffee, WayCharge turns everyday charging into a smarter and more enjoyable experience.</p>


<div className="container3">

      <div className="slider-line3">
        <div className="slider-dot3 left3"></div>
        <div className="slider-dot3 right3"></div>
      </div>

      {/* Card 1 */}
      <div className="card-wrapper3 card-03">
        <div className="string3"></div>
        <div className="pin3"></div>
        <div className="card3">
          <div className="icon3">📍</div>
          <h3 className='Find3'>Find a Station</h3>
          <p className='Find3'>Use our app to locate the nearest charging station with real-time availability.</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card-wrapper3 card-13">
        <div className="string3"></div>
        <div className="pin3"></div>
        <div className="card3">
          <div className="icon3">📍</div>
          <h3 className='Find3'>Find a Station</h3>
          <p className='Find3'>Use our app to locate the nearest charging station with real-time availability.</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card-wrapper3 card-23">
        <div className="string3"></div>
        <div className="pin3"></div>
        <div className="card3">
          <div className="icon3">📍</div>
          <h3 className='Find3'>Find a Station</h3>
          <p className='Find3'>Use our app to locate the nearest charging station with real-time availability.</p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="card-wrapper3 card-33">
        <div className="string3"></div>
        <div className="pin3"></div>
        <div className="card3">
          <div className="icon3">📍</div>
          <h3 className='Find3'>Find a Station</h3>
          <p className='Find3'>Use our app to locate the nearest charging station with real-time availability.</p>
        </div>
      </div>

    </div>


<Footer />
    </> );
}
 
export default Aboutus;