import React, { useEffect, useState } from "react";
import '../Components/DownloadSection.css';
import apple from '../Assets/Icons/apple.svg'
import play from '../Assets/Icons/play.svg'
import iphone from '../Assets/Img/app.png'
import { supabase } from "../Supabase";

const Appsec = () => {

const [Application, setApplication] = useState([]);
useEffect(() => {

  async function getApplicationAPI() {
    const { data, error } = await supabase
      .from("Application")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setApplication(data);
      console.log(data);
    }
  }

  getApplicationAPI();

}, []);


    return ( <>
    
<section className="download-app-section">
      <div className="download-container">
        <h2 className="download-title">
          NOW YOU CAN DOWNLOAD OUR APP <span className="highlight-green">"WAYCHARGE"</span> TO BE ABLE TO:
        </h2>

        <div className="store-buttons">
          <a href="#" className="store-btn">
            <img src={apple} alt="Download on the App store" />
            <div className="btn-text">
              <span className="small">Download on the</span>
              <span className="large">App store</span>
            </div>
          </a>
          <a href="#" className="store-btn">
            <img src={play} alt="Get it on Google play" />
            <div className="btn-text">
              <span className="small">Get it on</span>
              <span className="large">Google play</span>
            </div>
          </a>
        </div>

        <p className="download-slogan">
          Take Charge of the Road. Your EV journey just got smarter.
        </p>

        <div className="app-preview-container">
          <img src={iphone} alt="WayCharge App Preview" className="app-preview-img" />
        </div>
      </div>
    </section>
    
    
    
    
    
    
    </> );
}
 
export default Appsec;