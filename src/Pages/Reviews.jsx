import React, { Component } from 'react';
import Nav from '../Components/Nav';
import '../Pages/Reviews.css'
import sarah from '../Assets/Img/sarah.png'
import diana from '../Assets/Img/diana.png'
import alex from '../Assets/Img/alex.png'
import MainTitle from '../Components/MainTitle';
import Footer from '../Components/Footer.jsx'
const Reviews = () => {
    return ( <>
    
    <Nav />

<div className="testimonialsContainer9">

<MainTitle 
t1='Testimonials'
/>

      <h2 className="testimonialsTitle9">What our customers are saying</h2>

      <div className="testimonialsGrid9">

        {/* Card 1 */}
        <div className="testimonialCard9">
          <img
            src={sarah}
            className="testimonialImage9"
            alt="customer"
          />

          <h3 className="testimonialName9">Sarah Jones</h3>
          <p className="testimonialRole9">Marketing director</p>

          <p className="testimonialText9">
            This product has exceeded our expectations. The quality and
            performance are outstanding
          </p>
        </div>

        {/* Card 2 */}
        <div className="testimonialCard9">
          <img
            src={diana}
            className="testimonialImage9"
            alt="customer"
          />

          <h3 className="testimonialName9">Diane Moree</h3>
          <p className="testimonialRole9">Project manager</p>

          <p className="testimonialText9">
            This product has exceeded our expectations. The quality and
            performance are outstanding
          </p>
        </div>

        {/* Card 3 */}
        <div className="testimonialCard9">
          <img
            src={alex}
            className="testimonialImage9"
            alt="customer"
          />

          <h3 className="testimonialName9">Alex Smith</h3>
          <p className="testimonialRole9">CEO</p>

          <p className="testimonialText9">
            This product has exceeded our expectations. The quality and
            performance are outstanding
          </p>
        </div>

      </div>


      {/* Quote Section */}

      <div className="quoteSection9">

        <div className="quoteIcon9">❝❝</div>

        <h3 className="quoteTitle9">
          A Premium Charging Experience Like No Other
        </h3>

        <p className="quoteText9">
          WayCharge completely transforms the way electric vehicle owners think
          about charging. Instead of planning your day around fixed stations or
          worrying about battery levels, WayCharge brings the charger directly
          to you. The convenience alone is impressive—but what truly sets it
          apart is the seamless experience from start to finish.
        </p>

        <p className="quoteText9">
          The app is intuitive and easy to use. Within seconds, you can request
          a portable charger, track its arrival in real time, and manage your
          payment effortlessly. There's no confusion, no complicated
          process—just a smooth, reliable service designed around the user's
          needs.
        </p>

      </div>

    </div>
<Footer />
    
    </> );
}
 
export default Reviews;