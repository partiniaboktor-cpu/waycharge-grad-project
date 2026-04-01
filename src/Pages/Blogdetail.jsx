import React, { Component } from 'react';
import Nav from '../Components/Nav';
import MainTitle from '../Components/MainTitle';
import '../Pages/Blogdetail.css'
import blog2 from '../Assets/Img/blog2.png'

const Blogdetail = () => {
    return (  <>
    <Nav />
    
    <MainTitle 
    t1='CHARGING INSIGHTS'
    />
    
  <div class="item large">
      <Link to="/Blogdetail">
      <img src={blog2} alt="EV Car" />
      </Link>
      <span class="date">Sep 06, 2022</span>
    </div>

    </>);
}
 
export default Blogdetail;