import React, { Component } from 'react';
import './Nav.css'
import wholoelogo from '../Assets/Img/wholologo.svg'
import language from '../Assets/Icons/language.svg'
const Nav = () => {
    return (  <>
    
    <div className='nav'>
        <img className='logo' src={wholoelogo} alt="logo" />

    <div className='menu'>
        <p className='menu1'>About us</p>
        <p className='menus2'>Mobile app</p>
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