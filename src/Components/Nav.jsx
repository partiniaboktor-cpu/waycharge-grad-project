import React, { Component } from 'react';
import './Nav.css'
import wholoelogo from '../Assets/Img/wholologo.svg'
import language from '../Assets/Icons/language.svg'
import { Link } from "react-router-dom";

const Nav = () => {
    return (  <>
    
    <div className='nav'>
<Link to="/">
  <img className='logo' src={wholoelogo} alt="logo" />
</Link>
    <div className='menu'>
        <Link to="/about" className="menu1">About us</Link>
        <Link to="/mobileapp" className='menus2'>Mobile app</Link>
        <p className='menus3'>Stations</p>
        <p className='menus4'>How it works?</p>
        <p className='menus5'>Contact us</p>
        <p className='menus6'>Help</p>
    </div>
        
<img className='language' src={language} alt="" />

    </div>
    
    
    </>);
}
 
export default Nav;