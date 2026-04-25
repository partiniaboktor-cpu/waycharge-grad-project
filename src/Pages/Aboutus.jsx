import React, { useEffect, useState } from "react";
import './Aboutus.css'
import Nav from '../Components/Nav';
import Title from '../Common/Title-section.jsx';
import Footer from '../Components/Footer.jsx'
import { supabase } from "../Supabase";

const Aboutus = () => {


const [About, setAbout] = useState([]);
useEffect(() => {

  async function getAboutAPI() {
    const { data, error } = await supabase
      .from("About")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setAbout(data);
      console.log(data);
    }
  }

  getAboutAPI();

}, []);

    return ( <>
    
        <Nav />

    <div className="banner-container">
      {/* Left Green Block */}
      <div className="green-side">
{
About
.filter(About => About.id === 7)
.map(About => (
  <h2 key={About.id} className="text-white tight-stack"> {About.Title}</h2>
))
}
{
About
.filter(About => About.id === 8)
.map(About => (
  <h2 key={About.id} className="text-white tight-stack"> {About.Title}</h2>
))
}        
    
      </div>

      {/* Right Content Block */}
      <div className="content-side">
{
About
.filter(About => About.id === 1)
.map(About => (
  <h2 key={About.id} className="sub-header"> {About.Description}</h2>
))
}  
{
About
.filter(About => About.id === 1)
.map(About => (
  <h2 key={About.id} className="main-title"> {About.Title}</h2>
))
} 
  
      </div>
    </div>
    

    {/* 3d model */}

     <div className="about-3d-container">
      <model-viewer 
        src="fast_charging_station.glb" 
        ar 
        ar-modes="webxr scene-viewer quick-look" 
        camera-controls 
        disable-zoom
        tone-mapping="neutral" 
        poster="poster.webp" 
        shadow-intensity="1" 
        camera-orbit="0deg 75deg 4.5m"
        min-field-of-view="23.59deg"
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
          touchAction: "pan-y"
        }}
      >
        <div className="progress-bar hide" slot="progress-bar">
            <div className="update-bar"></div>
        </div>
        <button slot="ar-button" id="ar-button">
            View in your space
        </button>
        <div id="ar-prompt">
            <img src="https://modelviewer.dev/shared-assets/icons/hand.png" alt="hand icon" />
        </div>
      </model-viewer>
    </div>
    
<Title 
   t1="About us" 
   t2="Abouts us" 
   linkText="View More" 
/>

{
About
.filter(About => About.id === 3)
.map(About => (
  <h2 key={About.id} className='aboutus-paragraph'> {About.Description}</h2>
))
} 
    

  <Title 
   t1="Why choose us ?" 
   t2="Why choose us ?" 
   linkText="View More" 
/>
  
{
About
.filter(About => About.id === 4)
.map(About => (
  <h2 key={About.id} className='aboutuss-paragraph'> {About.Description}</h2>
))
} 


<div className="container3">

      <div className="slider-line3">
        <div className="slider-dot3 left3"></div>
        <div className="slider-dot3 right3"></div>
      </div>

      <div className="cards-flex-wrapper">
        {/* Card 1 */}
        <div className="card-wrapper3">
          <div className="string3"></div>
          <div className="pin3"></div>
          <div className="card3">
            <div className="icon3">📍</div>
            {About.filter(a => a.id === 5).map(a => <h2 key={a.id} className='Find3'>{a.Title}</h2>)}
            {About.filter(a => a.id === 5).map(a => <h2 key={a.id} className='Find33'>{a.Description}</h2>)}
          </div>
        </div>

        {/* Card 2 */}
        <div className="card-wrapper3">
          <div className="string3"></div>
          <div className="pin3"></div>
          <div className="card3">
            <div className="icon3">📅</div>
            {About.filter(a => a.id === 6).map(a => <h2 key={a.id} className='Find3'>{a.Title}</h2>)}
            {About.filter(a => a.id === 6).map(a => <h2 key={a.id} className='Find33'>{a.Description}</h2>)}
          </div>
        </div>

        {/* Card 3 */}
        <div className="card-wrapper3">
          <div className="string3"></div>
          <div className="pin3"></div>
          <div className="card3">
            <div className="icon3">💳</div>
            {About.filter(a => a.id === 9).map(a => <h2 key={a.id} className='Find3'>{a.Title}</h2>)}
            {About.filter(a => a.id === 9).map(a => <h2 key={a.id} className='Find33'>{a.Description}</h2>)}
          </div>
        </div>

        {/* Card 4 */}
        <div className="card-wrapper3">
          <div className="string3"></div>
          <div className="pin3"></div>
          <div className="card3">
            <div className="icon3">🚗</div>
            {About.filter(a => a.id === 10).map(a => <h2 key={a.id} className='Find3'>{a.Title}</h2>)}
            {About.filter(a => a.id === 10).map(a => <h2 key={a.id} className='Find33'>{a.Description}</h2>)}
          </div>
        </div>
      </div>

    </div>


<Footer />
    </> );
}
 
export default Aboutus;