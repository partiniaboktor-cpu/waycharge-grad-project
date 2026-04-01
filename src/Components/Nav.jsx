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
        <Link to="/stations" className='menus3'>Stations</Link>
        <Link to="/blogs" className='menus8'>Blogs</Link>
        <Link to="/Howitworks" className='menus4'>How it works?</Link>
        <Link to="/Contactus"className='menus5'>Contact us</Link>
        <Link to="/Careers" className='menus7'>Careers</Link>
        <Link to="/help" className='menus6'>Help</Link>
    </div>
        
<img className='language' src={language} alt="" />

    </div>
    
    
    </>);
}
 
export default Nav;