import React, { Component, useState } from 'react';
import './Home.css'
import Nav from '../Components/Nav';
import Title from '../Common/Title-section.jsx';
import '../Supabase.jsx'
import DownloadSection from '../Components/DownloadSection.jsx';
import charger from '../Assets/Img/charger.svg'
import imggroup from '../Assets/Img/imggroup.svg'
import dot from '../Assets/Img/dots.svg'
const Home = () => {

    return ( <>
    <Nav />

    <div className='hero'>
        <div className='left-side-hero'>
        <h1 className='title'>Charge the <br></br>way forward</h1>
        <p className='text-hero-left'>WayCharge | Powering the path to a cleaner tomorrow. <br></br>High-speed EV charging designed for the modern journey. ️<br></br> Charge the way forward.</p>
        <button className='name-proj'>WayCharge...</button>
        </div>

{/* 3d car model */}

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


 <div className="steps-container">
      
      {/* LEFT SIDE */}
      <div className="steps-left">

        <div className="step">
          <div className="circle">1</div>
          <div>
            <h3 className='step-title'>Connect</h3>
            <p>Connect charger cable with car & station.</p>
          </div>
        </div>

        <div className="step">
          <div className="circle">2</div>
          <div>
            <h3 className='step-title'>Start</h3>
            <p>Start charging session by scanning your phone.</p>
          </div>
        </div>

      </div>


      {/* CENTER IMAGE */}
      <div className="charger-image">
        <img src={charger} alt="charger" />
      </div>


      {/* RIGHT SIDE */}
      <div className="steps-right">

        <div className="step">
          <div className="circle">3</div>
          <div>
            <h3 className='step-title'>Connect</h3>
            <p>Blue led light indicates start of charging session.</p>
          </div>
        </div>

        <div className="step">
          <div className="circle">4</div>
          <div>
            <h3 className='step-title'>Charging complete</h3>
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



    
    </> );
}
 
export default Home;