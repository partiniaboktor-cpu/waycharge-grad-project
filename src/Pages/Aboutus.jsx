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

     <div style={{ width: "100%", height: "500px" }}>
      <model-viewer
        src="/station.glb"
        alt="3D Car"
        auto-rotate
        camera-controls
        ar
        shadow-intensity="1"
        exposure="0.8"
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
        }}
      ></model-viewer>
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

      {/* Card 1 */}
      <div className="card-wrapper3 card-03">
        <div className="string3"></div>
        <div className="pin3"></div>
        <div className="card3">
          <div className="icon3">📍</div>
{
About
.filter(About => About.id === 5)
.map(About => (
  <h2 key={About.id} className='Find3'> {About.Title}</h2>
))
} 
{
About
.filter(About => About.id === 5)
.map(About => (
  <h2 key={About.id} className='Find33'> {About.Description}</h2>
))
} 
        </div>
      </div>

      {/* Card 2 */}
      <div className="card-wrapper3 card-13">
        <div className="string3"></div>
        <div className="pin3"></div>
        <div className="card3">
          <div className="icon3">📅</div>
{
About
.filter(About => About.id === 6)
.map(About => (
  <h2 key={About.id} className='Find3'> {About.Title}</h2>
))
} 
{
About
.filter(About => About.id === 6)
.map(About => (
  <h2 key={About.id} className='Find33'> {About.Description}</h2>
))
} 
        </div>
      </div>

      {/* Card 3 */}
      <div className="card-wrapper3 card-23">
        <div className="string3"></div>
        <div className="pin3"></div>
        <div className="card3">
          <div className="icon3">💳</div>
{
About
.filter(About => About.id === 9)
.map(About => (
  <h2 key={About.id} className='Find3'> {About.Title}</h2>
))
} 
{
About
.filter(About => About.id === 9)
.map(About => (
  <h2 key={About.id} className='Find33'> {About.Description}</h2>
))
} 
        </div>
      </div>

      {/* Card 4 */}
      <div className="card-wrapper3 card-33">
        <div className="string3"></div>
        <div className="pin3"></div>
        <div className="card3">
          <div className="icon3">🚗</div>
{
About
.filter(About => About.id === 10)
.map(About => (
  <h2 key={About.id} className='Find3'> {About.Title}</h2>
))
} 
{
About
.filter(About => About.id === 10)
.map(About => (
  <h2 key={About.id} className='Find33'> {About.Description}</h2>
))
} 
        </div>
      </div>

    </div>


<Footer />
    </> );
}
 
export default Aboutus;