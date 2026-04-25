import React from "react";
import "./Preloader.css";
import pictorialLogo from '../Assets/Img/pictorial-logo.svg';

const Preloader = () => {
  return (
    <div className="preloader8">
      <div className="pictorial-logo-wrapper">
        <img src={pictorialLogo} alt="WayCharge Pictorial Logo" className="pictorial-logo" />
      </div>
      <p className="loadingText8">Loading the future...</p>
    </div>
  );
};

export default Preloader;