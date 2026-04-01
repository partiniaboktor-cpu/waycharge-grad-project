import React, { Component } from 'react';
import Nav from '../Components/Nav';
import '../Pages/Services.css'
import MainTitle from '../Components/MainTitle';
import cofee from '../Assets/Img/cofee.png'
import rewards from '../Assets/Img/rewards.png'
import portable from '../Assets/Img/portable.png'
import availble from '../Assets/Img/available.png'
import Footer from '../Components/Footer.jsx';
const Services = () => {


    return ( <>
    
    <Nav />
    <div className="container10">
      <h1 className="title10">

     <MainTitle 
     t1='WAYCHARGE SERVICES'
     />
      </h1>

      <div className="iconsRow10">
        <div className="iconBox10">💰</div>
        <div className="iconBox10">☕</div>
        <div className="iconBox10">🚚</div>
        <div className="iconBox10">🍲</div>
        <div className="iconBox10">💵</div>
      </div>
    </div>
    
<div className='downloadnow'>
    <p className='download'>Points</p>
    <p className='download'>Coffee experience</p>
    <p className='download'>Delivery chargers</p>
    <p className='download'>Requesting Chargers</p>
    <p className='download'>Points</p>
    <p className='download'>Coffee experience</p>
    <p className='download'>Delivery chargers</p>
    <p className='download'>Requesting Chargers</p>
</div>
    

<div className="container11">

      {/* Section 1 */}
      <div className="section11">
 

        <div className="textBox11">
          <h2 className="title11">ENJOY COFFEE EXPERIENCE</h2>
          <p className="desc11">
            At WayCharge, charging isn’t just a service — it’s a moment.
            Enjoy a complimentary cup of coffee while you wait.
          </p>
        </div>

        <div className="imageBox11">
          <img
            src={cofee}
            alt="cofee"
            className="image11"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="section11 reverse11">
       

        <div className="textBox11">
          <h2 className="title11">REWARDS & POINTS SYSTEM</h2>
          <p className="desc11">
            Earn points with every charging session. Track rewards easily.
          </p>
        </div>

        <div className="imageBox11">
          <img
            src={rewards}
            alt="rewards"
            className="image11"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="section11">
       

        <div className="textBox11">
          <h2 className="title11">PORTABLE CHARGERS</h2>
          <p className="desc11">
            Request a portable charger and we’ll come to your location.
          </p>
        </div>

        <div className="imageBox11">
          <img
            src={portable}
            alt="portable"
            className="image11"
          />
        </div>
      </div>

      {/* Section 4 */}
      <div className="section11 reverse11">
      

        <div className="textBox11">
          <h2 className="title11">AVAILABLE EVERYWHERE</h2>
          <p className="desc11">
            We reach you anywhere — home, work, or on the road.
          </p>
        </div>

        <div className="imageBox11">
          <img
            src={availble}
            alt="availble"
            className="image11"
          />
        </div>
      </div>

    </div>


<Footer />
    </> );
}
 
export default Services;