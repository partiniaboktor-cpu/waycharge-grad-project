import React, { Component } from 'react';
import  './Blogpart.css'
import blog1 from '../Assets/Img/blog1.png'
import blog2 from '../Assets/Img/blog2.png'
import blog3 from '../Assets/Img/blog3.png'
import blog4 from '../Assets/Img/blog4.png'
import blog5 from '../Assets/Img/blog5.png'
import blog6 from '../Assets/Img/blog6.png'
import { Link } from "react-router-dom";

const blog = () => {
    return ( <>
    
<div class="gallery">
    <div class="item large">
        <Link to="/Blogdetail">
      <img src={blog1} alt="EV Car" />
      </Link>
      <span class="date">Sep 06, 2022</span>
    </div>

    <div class="item large">
      <Link to="/Blogdetail">
      <img src={blog2} alt="EV Car" />
      </Link>
      <span class="date">Sep 06, 2022</span>
    </div>

    <div class="item small">
       <Link to="/Blogdetail">
      <img src={blog3} alt="EV Car" />
      </Link>
      <span class="date">Sep 06, 2022</span>
    </div>

    <div class="item small">
      <Link to="/Blogdetail">
      <img src={blog4} alt="EV Car" />
      </Link>
      <span class="date">Sep 06, 2022</span>
    </div>

 <div class="item small">
  <Link to="/Blogdetail">
      <img src={blog5} alt="EV Car" />
      </Link>
      <span class="date">Sep 06, 2022</span>
    </div>


     <div class="item small">
      <Link to="/Blogdetail">
      <img src={blog6} alt="EV Car" />
      </Link>
      <span class="date">Sep 06, 2022</span>
    </div>

  </div>
    
    </> );
}
 
export default blog;