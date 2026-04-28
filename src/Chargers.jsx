import React, { useState, useEffect } from "react";
import "./Chargers.css";
import Nav from './Components/Nav';
import MainTitle from './Components/MainTitle';
import ch1 from './Assets/Img/ch1.png'
import ch2 from './Assets/Img/ch2.png'
import ch3 from './Assets/Img/ch3.png'
import chargerone from './Assets/Img/chargerone.png'
import chargertwo from './Assets/Img/chargertwo.png'
import charger3 from './Assets/Img/charger3.png'
// Removed circular import
import chargerfour from './Assets/Img/chargerfour.png' ;
import Footer from './Components/Footer.jsx'
import { Link } from 'react-router-dom';

const Chargers = () => {
    const [lang, setLang] = useState('en');
    
    return ( <>
    <Nav onLanguageToggle={() => setLang(prev => prev === 'en' ? 'ar' : 'en')} />
    
    <div className="container13" dir={lang === 'ar' ? 'rtl' : 'ltr'}>

      <MainTitle 
        t1={lang === 'en' ? 'Types of chargers' : 'أنواع الشواحن'}
      />
      
      {/* Header */}
      <div className="header13">
        <h2 className="title13">
          {lang === 'en' 
            ? 'WayCharge offers advanced portable charging solutions' 
            : 'تقدم WayCharge حلول شحن متنقلة متقدمة'}
        </h2>
        <p className="subtitle13">
          {lang === 'en' 
            ? 'Designed for quick top-ups and everyday use with efficient and reliable power.' 
            : 'مصممة للشحن السريع والاستخدام اليومي مع طاقة فعالة وموثوقة.'}
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
          <p className="cardText13">{lang === 'en' ? 'Level 1 (120V)' : 'المستوى 1 (120 فولت)'}</p>
        </div>

        <div className="card13">
          <img
            src={ch2}
            alt="Level 2"
            className="cardImg13"
          />
          <p className="cardText13">
            {lang === 'en' 
              ? 'Level 2 (240V, standard for home/public)' 
              : 'المستوى 2 (240 فولت، قياسي للمنازل/الأماكن العامة)'}
          </p>
        </div>

        <div className="card13">
          <img
            src={ch3}
            alt="Level 3"
            className="cardImg13"
          />
          <p className="cardText13">
            {lang === 'en' ? 'Level 3 (DC Fast Charging)' : 'المستوى 3 (شحن سريع DC)'}
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
        <button className="btn13">
          {lang === 'en' ? 'View all chargers' : 'عرض جميع الشواحن'}
        </button>
      </Link>
    </div>

    <Footer lang={lang} />
    </> );
}
 
export default Chargers;