import React, { Component } from 'react';
import './Home.css'
import Nav from '../Components/Nav';

const Home = () => {
    return ( <>
    <Nav />

    <div className='hero'>
        <div className='left-side-hero'>
        <h1 className='title'>Charge the <br></br>way forward</h1>
        <p className='text-hero-left'>WayCharge | Powering the path to a cleaner tomorrow. <br></br>High-speed EV charging designed for the modern journey. ️<br></br> Charge the way forward.</p>
        <button className='name-proj'>WayCharge...</button>
        </div>

        
    </div>

    
    
    </> );
}
 
export default Home;