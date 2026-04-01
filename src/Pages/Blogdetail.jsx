import React, { Component } from 'react';
import Nav from '../Components/Nav';
import MainTitle from '../Components/MainTitle';
import '../Pages/Blogdetail.css'
import blog1 from '../Assets/Img/blog1.png'
import Footer from '../Components/Footer.jsx'

const Blogdetail = () => {
    return (  <>
    <Nav />
    
    <MainTitle 
    t1='CHARGING INSIGHTS'
    />
    
  <div >
      <img class="blogdetail-image" src={blog1} alt="EV Car" />
    </div>



<div className='bigbox'>
    <div className='blog-box'>
        <h1 className='blog-title'>1. The Future of Electric Vehicle Charging</h1>
        <p className='blog-paragraph'>As electric vehicles continue to shape the future of transportation, the need for flexible and accessible charging solutions has never been greater. Traditional charging stations, while effective, can limit drivers to fixed locations. WayCharge introduces a smarter approach—portable charging delivered directly to you. This innovation reduces range anxiety and transforms charging from a stressful necessity into a seamless experience.</p>
    </div>
</div>

<div className='bigbox'>
    <div className='blog-box'>
        <h1 className='blog-title'>1. The Future of Electric Vehicle Charging</h1>
        <p className='blog-paragraph'>As electric vehicles continue to shape the future of transportation, the need for flexible and accessible charging solutions has never been greater. Traditional charging stations, while effective, can limit drivers to fixed locations. WayCharge introduces a smarter approach—portable charging delivered directly to you. This innovation reduces range anxiety and transforms charging from a stressful necessity into a seamless experience.</p>
    </div>
</div>
<div className='bigbox'>
    <div className='blog-box'>
        <h1 className='blog-title'>1. The Future of Electric Vehicle Charging</h1>
        <p className='blog-paragraph'>As electric vehicles continue to shape the future of transportation, the need for flexible and accessible charging solutions has never been greater. Traditional charging stations, while effective, can limit drivers to fixed locations. WayCharge introduces a smarter approach—portable charging delivered directly to you. This innovation reduces range anxiety and transforms charging from a stressful necessity into a seamless experience.</p>
    </div>
</div>
<div className='bigbox'>
    <div className='blog-box'>
        <h1 className='blog-title'>1. The Future of Electric Vehicle Charging</h1>
        <p className='blog-paragraph'>As electric vehicles continue to shape the future of transportation, the need for flexible and accessible charging solutions has never been greater. Traditional charging stations, while effective, can limit drivers to fixed locations. WayCharge introduces a smarter approach—portable charging delivered directly to you. This innovation reduces range anxiety and transforms charging from a stressful necessity into a seamless experience.</p>
    </div>
</div>

<Footer />



    </>);
}
 
export default Blogdetail;