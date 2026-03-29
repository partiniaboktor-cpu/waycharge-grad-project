import React, { Component } from 'react';
import './Nav.css'
import wholoelogo from '../Assets/Img/wholologo.png'
import language from '../Assets/Icons/language.svg'
const Nav = () => {
    return (  <>
    
    <div className='nav'>
        <img src={wholoelogo} alt="logo" />

    <div className='menu'>
        <p className='menus'>About us</p>
        <p className='menus'>Mobile app</p>
        <p className='menus'>Stations</p>
        <p className='menus'>How it works?</p>
        <p className='menus'>Contact us</p>
        <p className='menus'>Help</p>
    </div>
        
<img src={language} alt="" />

    </div>
    
    
    </>);
}
 
export default Nav;