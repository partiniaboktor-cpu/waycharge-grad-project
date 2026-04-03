import React, { Component } from 'react';
import "./Chargers.css";
import Nav from './Components/Nav';
import MainTitle from './Components/MainTitle';
import ch1 from './Assets/Img/ch1.png'
import ch2 from './Assets/Img/ch2.png'
import ch3 from './Assets/Img/ch3.png'
import chargerone from './Assets/Img/chargerone.png'
import chargertwo from './Assets/Img/chargertwo.png'
import charger3 from './Assets/Img/charger3.png'
import Chargers from './Chargers';
import chargerfour from './Assets/Img/chargerfour.png' ;
import Footer from './Components/Footer.jsx'
import { Link } from 'react-router-dom';

const chargers = () => {
    
    return ( <>
    <Nav />
    <MainTitle 
    t1='Types of chargers'
    />
    
    <div className="container13">

      {/* Header */}
      <div className="header13">
        <h2 className="title13">
          WayCharge offers advanced portable charging solutions
        </h2>
        <p className="subtitle13">
          Designed for quick top-ups and everyday use with efficient and reliable power.
        </p>
      </div>

      {/* Chargers Section */}
      <div className="chargers13">

        <div className="card13">
          <img
            src={ch1}
            alt="Level 1"
            className="cardImg13"
          />
          <p className="cardText13">Level 1 (120V)</p>
        </div>

        <div className="card13">
          <img
            src={ch2}
            alt="Level 2"
            className="cardImg13"
          />
          <p className="cardText13">
            Level 2 (240V, standard for home/public)
          </p>
        </div>

        <div className="card13">
          <img
            src={ch3}
            alt="Level 3"
            className="cardImg13"
          />
          <p className="cardText13">
            Level 3 (DC Fast Charging)
          </p>
        </div>

      </div>

      {/* Gallery */}
      <div className="gallery13">

        <img
          src={chargerone}
          alt=""
          className="galleryImg13"
        />

        <img
          src={chargertwo}
          alt=""
          className="galleryImg13"
        />

        <img
          src={charger3}
          alt=""
          className="galleryImg13"
        />

      </div>

      {/* Button */}
      <Link to="/Chargerdetail">
      <button className="btn13">View all chargers</button>
      </Link>


<Footer />


    </div>
    </> );
}
 
export default chargers;