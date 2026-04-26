import React from 'react';
import { Link } from 'react-router-dom';
import wholoelogo from '../Assets/Img/wholologo.svg';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="error-page-container">
      <div className="global-bg-texture"></div>
      <div className="error-content">
        <img src={wholoelogo} alt="WayCharge Logo" className="error-logo" />
        <h1 className="error-title">Oops!</h1>
        <p className="error-text">
          Something went wrong or the page you're looking for doesn't exist.
        </p>
        <Link to="/">
          <button className="waycharge-btn error-btn">Go to Homepage</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
