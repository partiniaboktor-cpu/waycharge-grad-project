import React, { useEffect, useState } from "react";
import './Aboutus.css'
import Nav from '../Components/Nav';
import Title from '../Common/Title-section.jsx';
import Footer from '../Components/Footer.jsx'
import { supabase } from "../Supabase";

const Aboutus = () => {


const [aboutData, setAboutData] = useState([]);

useEffect(() => {
  async function getAboutAPI() {
    const { data, error } = await supabase
      .from("about-us")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setAboutData(data);
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
        {aboutData.filter(a => a.id === 4).map(a => (
          <React.Fragment key={a.id}>
            <h2 className="text-white tight-stack"> {a.section_title}</h2>
            <h2 className="text-white tight-stack"> {a.subtitle}</h2>
          </React.Fragment>
        ))}
      </div>

      {/* Right Content Block */}
      <div className="content-side">
        {aboutData.filter(a => a.id === 1).map(a => (
          <React.Fragment key={a.id}>
            <h2 className="sub-header"> {a.subtitle}</h2>
            <h2 className="main-title"> {a.section_title}</h2>
          </React.Fragment>
        ))}
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
    
{aboutData.filter(a => a.id === 2).map(a => (
  <React.Fragment key={a.id}>
    <Title 
       t1={a.section_title} 
       t2={a.section_title} 
       linkText="View More" 
    />
    <h2 className='aboutus-paragraph'> {a.description}</h2>
  </React.Fragment>
))}
    

{aboutData.filter(a => a.id === 3).map(a => (
  <React.Fragment key={a.id}>
    <Title 
       t1={a.section_title} 
       t2={a.section_title} 
       linkText="View More" 
    />
    <h2 className='aboutuss-paragraph'> {a.description}</h2>
  </React.Fragment>
))} 


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
            {aboutData.filter(a => a.id === 4).map(a => <h2 key={a.id} className='Find3'>{a.feature_title}</h2>)}
            {aboutData.filter(a => a.id === 4).map(a => <h2 key={a.id} className='Find33'>{a.feature_description}</h2>)}
          </div>
        </div>

        {/* Card 2 */}
        <div className="card-wrapper3">
          <div className="string3"></div>
          <div className="pin3"></div>
          <div className="card3">
            <div className="icon3">📅</div>
            {aboutData.filter(a => a.id === 5).map(a => <h2 key={a.id} className='Find3'>{a.feature_title}</h2>)}
            {aboutData.filter(a => a.id === 5).map(a => <h2 key={a.id} className='Find33'>{a.feature_description}</h2>)}
          </div>
        </div>

        {/* Card 3 */}
        <div className="card-wrapper3">
          <div className="string3"></div>
          <div className="pin3"></div>
          <div className="card3">
            <div className="icon3">💳</div>
            {aboutData.filter(a => a.id === 6).map(a => <h2 key={a.id} className='Find3'>{a.feature_title}</h2>)}
            {aboutData.filter(a => a.id === 6).map(a => <h2 key={a.id} className='Find33'>{a.feature_description}</h2>)}
          </div>
        </div>

        {/* Card 4 */}
        <div className="card-wrapper3">
          <div className="string3"></div>
          <div className="pin3"></div>
          <div className="card3">
            <div className="icon3">🚗</div>
            {aboutData.filter(a => a.id === 7).map(a => <h2 key={a.id} className='Find3'>{a.feature_title}</h2>)}
            {aboutData.filter(a => a.id === 7).map(a => <h2 key={a.id} className='Find33'>{a.feature_description}</h2>)}
          </div>
        </div>
      </div>

    </div>


<Footer />
    </> );
}
 
export default Aboutus;