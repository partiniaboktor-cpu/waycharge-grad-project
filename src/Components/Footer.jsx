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
{
Footer
.filter(Footer => Footer.id === 2)
.map(Footer => (
 <h3 key={Footer.id}> {Footer.Numbers}</h3>))
}
{
Footer
.filter(Footer => Footer.id === 2)
.map(Footer => (
 <p key={Footer.id}> {Footer.Text}</p>))
}           

          </div>

          <div>
{
Footer
.filter(Footer => Footer.id === 3)
.map(Footer => (
 <h3 key={Footer.id}> {Footer.Numbers}</h3>))
}
{
Footer
.filter(Footer => Footer.id === 3)
.map(Footer => (
 <p key={Footer.id}> {Footer.Text}</p>))
}           

          </div>
        </div>
      </div>

      <div className="rights-section">
{
Footer
.filter(Footer => Footer.id === 2)
.map(Footer => (
        <h3 key={Footer.id} className='Quick Navigation'>{Footer.Title}</h3>
))
}

        <div className="nav-grid">
{
Footer
.filter(Footer => Footer.id === 4)
.map(Footer => (
          <div key={Footer.id} className="nav-box">{Footer.Text}</div>
))
}
{
Footer
.filter(Footer => Footer.id === 5)
.map(Footer => (
          <div key={Footer.id} className="nav-box">{Footer.Text}</div>
))
}
{
Footer
.filter(Footer => Footer.id === 6)
.map(Footer => (
          <div key={Footer.id} className="nav-box">{Footer.Text}</div>
))
}
{
Footer
.filter(Footer => Footer.id === 7)
.map(Footer => (
          <div key={Footer.id} className="nav-box">{Footer.Text}</div>
))
}
{
Footer
.filter(Footer => Footer.id === 8)
.map(Footer => (
          <div key={Footer.id} className="nav-box">{Footer.Text}</div>
))
}
{
Footer
.filter(Footer => Footer.id === 9)
.map(Footer => (
          <div key={Footer.id} className="nav-box">{Footer.Text}</div>
))
}

        </div>
      </div>

      <div className="bottom-footer">
      </div>

    </div>
    
    
    
    
    
    </> );
}
 
export default Footer ;