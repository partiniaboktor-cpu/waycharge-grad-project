import React, { Component } from 'react';
import Nav from '../Components/Nav';
import '../Pages/Contactus.css';
import MainTitle from '../Components/MainTitle';
import contuctus from '../Assets/Img/contactus.png'
import Footer from '../Components/Footer.jsx'
const Contactus = () => {
    return ( <>
    <Nav />
    <button className='contact-btn'>Contact</button>
    
    <MainTitle 
    t1='GET IN TOUCH'
    />


  <section className="contact-section6">
      
      {/* Left */}
      <div className="contact-left6">
        {/* <button className="contact-tag6">? Contact</button>

        <h1 className="contact-title6">GET IN TOUCH</h1> */}

        <p className="contact-desc6">
          Have questions or need assistance? The WayCharge team is here to help.
          Feel free to reach out. We’re always ready to connect and power your journey.
        </p>

        {/* Info Cards */}
        <div className="info-card6">
          <span>📧</span>
          <div>
            <h4>Email us</h4>
            <p>your@email.com</p>
          </div>
        </div>

        <div className="info-card6">
          <span>📞</span>
          <div>
            <h4>Call us</h4>
            <p>+20 123 456 789</p>
          </div>
        </div>

        <div className="info-card6">
          <span>📍</span>
          <div>
            <h4>Our location</h4>
            <p>Cairo, Egypt</p>
          </div>
        </div>

        {/* Image */}
        <img
          src={contuctus}
          alt="contact"
          className="contact-img6"
        />
      </div>

      {/* Right Form */}
      <div className="contact-right6">
        <form className="contact-form6">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
    

<Footer />

    </> );
}
 
export default Contactus;