import React, { Component } from 'react';
import Nav from '../Components/Nav';
import '../Pages/Team.css'
import partinia from '../Assets/Img/partinia.png'
import perla from '../Assets/Img/perla.png'
import paula from '../Assets/Img/paula.png'
import marian from '../Assets/Img/marian.png'
import partinia2 from '../Assets/Img/partinia2.png'
import Footer from '../Components/Footer.jsx'

const Team = () => {
    return ( <>
    <Nav />
    
    <div className="container13">
      <div className="topSection13">
        <div className="textSection13">
          <h1 className="title13">Partinia Emad</h1>
          <h3 className="role13">Founder</h3>
          <p className="desc13">
            Lorem ipsum dolor sit amet consectetur. Sit scelerisque nibh aenean
            proin amet aliquam varius etiam. Sed ut libero at fermentum amet
            consectetur lectus faucibus morbi.
          </p>
        </div>

        <div className="imageSection13">
          <img
            src={partinia}
            alt="profile"
            className="mainImage13"
          />
        </div>
      </div>

      <div className="teamSection13">
        <div className="card13">
          <img src={partinia2}alt="" />
          <p>Partinia Emad</p>
        </div>

        <div className="card13">
          <img src={perla} alt="" />
          <p>Perla Emad</p>
        </div>

        <div className="card13">
          <img src={marian} alt="" />
          <p>Marian Naady</p>
        </div>

        <div className="card13">
          <img src={paula} alt="" />
          <p>Paula Emad</p>
        </div>
      </div>

      <div className="bottomSection13">
        <h2 className="buildText13">
          We build <span>Waycharge</span>
        </h2>

        <p className="bottomDesc13">
          Lorem ipsum dolor sit amet consectetur. Fringilla massa morbi sit risus purus. Sit enim tristique felis morbi amet augue dignissim adipiscing nibh. Consectetur egestas sit eget ut fringilla congue proin a lacus. Consequat semper dapibus fringilla risus aliquam. Sed libero at interdum lectus molestie. Sagittis eu quisque diam facilisis ut at vehicula dolor nam. Nec eget neque eget tincidunt adipiscing sagittis sit vulputate. Auctor aliquet scelerisque cursus id amet feugiat urna dui. Urna semper ultrices iaculis duis. Pellentesque scelerisque nisl accumsan mus hac ut. Lacinia proin quis pellentesque cras vivamus purus proin cursus. Lacus sed donec eu vitae dui proin integer sit. Mattis dignissim nunc ac fringilla nullam.
        </p>
      </div>
    </div>
    

<Footer />

    </> );
}
 
export default Team;