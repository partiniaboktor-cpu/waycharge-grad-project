import React, { Component } from 'react';
import Nav from '../Components/Nav';
import MainTitle from '../Components/MainTitle';
import '../Pages/Chargerdetail.css'
import chargerfive from '../Assets/Img/chargerfive.png'
import Footer from '../Components/Footer.jsx'
const Chargerdetail = () => {
    return ( <>
    
    <Nav />
    <MainTitle 
    t1='TYPES OF DRAWINGS'
    />
    <div className="container14">

      {/* Header */}
      <div className="header14">
        <p className="topText14">
          WayCharge offers advanced portable charging solutions designed to meet diverse driving needs.
        </p>
      </div>

      {/* Card 1 */}
      <div className="card14">
        <img src={chargerfive} alt="" className="img14" />
        <div className="content14">
          <h2 className="title14">LEVEL 1 (120 VOLTS)</h2>
          <button className="btn14">Discover the charger</button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card14">
        <img src={chargerfive} alt="" className="img14" />
        <div className="content14">
          <h2 className="title14">LEVEL 1 (120 VOLTS)</h2>
          <button className="btn14">Discover the charger</button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card14">
        <img src={chargerfive} alt="" className="img14" />
        <div className="content14">
          <h2 className="title14">LEVEL 1 (120 VOLTS)</h2>
          <button className="btn14">Discover the charger</button>
        </div>
      </div>

      {/* Card 4 */}
      <div className="card14">
        <img src={chargerfive} alt="" className="img14" />
        <div className="content14">
          <h2 className="title14">LEVEL 1 (120 VOLTS)</h2>
          <button className="btn14">Discover the charger</button>
        </div>
      </div>

      {/* Card 5 */}
      <div className="card14">
        <img src={chargerfive} alt="" className="img14" />
        <div className="content14">
          <h2 className="title14">LEVEL 1 (120 VOLTS)</h2>
          <button className="btn14">Discover the charger</button>
        </div>
      </div>

    </div>

<Footer />

    </> );
}
 
export default Chargerdetail;