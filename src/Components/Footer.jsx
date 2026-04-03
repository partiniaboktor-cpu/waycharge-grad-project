import React, { useEffect, useState } from "react";
import './Footer.css';
import { supabase } from "../Supabase";

const Footer = () => {

const [Footer, setFooter] = useState([]);
useEffect(() => {

  async function getFooterAPI() {
    const { data, error } = await supabase
      .from("Footer")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setFooter(data);
      console.log(data);
    }
  }

  getFooterAPI();

}, []);

    return ( <>
    
  <div className="footer-container">

      <div className="lefts-section">
{
Footer
.filter(Footer => Footer.id === 1)
.map(Footer => (
  <h2 key={Footer.id} className="title-footer"> {Footer.Title}</h2>
))
}
{
Footer
.filter(Footer => Footer.id === 1)
.map(Footer => (
  <p key={Footer.id} className="description"> {Footer.Description}</p>
))
}

        <div className="stats">
          <div>
{
Footer
.filter(Footer => Footer.id === 1)
.map(Footer => (
 <h3 key={Footer.id}> {Footer.Numbers}</h3>))
}
{
Footer
.filter(Footer => Footer.id === 1)
.map(Footer => (
 <p key={Footer.id}> {Footer.Text}</p>))
}           

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
      </div>

    </div>
    
    
    
    
    
    </> );
}
 
export default Footer ;