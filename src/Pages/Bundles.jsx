import React, { Component } from 'react';
import Nav from '../Components/Nav';
import '../Pages/Bundles.css'
import MainTitle from '../Components/MainTitle';
import Footer from '../Components/Footer.jsx'
const Bundles = () => {

    return ( <>
    
    <Nav />
    <MainTitle 
    t1='WAYCHARGE PRICING'
    />

 <div className="container12">
      <h1 className="title12">Select the plan that fits you</h1>

      <div className="grid12">

        {/* Card 1 */}
        <div className="card12">
          <h2 className="cardTitle12">Pay-Per-Charge (On-Demand)</h2>
          <p className="subtitle12">Starting from $25 per session</p>

          <ul className="list12">
            <li>Portable charger delivered to your location</li>
            <li>Up to 40 km emergency charge</li>
            <li>Real-time tracking through the app</li>
            <li>Complimentary coffee</li>
            <li>Secure in-app payment</li>
            <li>Digital receipt</li>
          </ul>

          <p className="extra12">Extra: Additional km charged per unit</p>

          <button className="priceBtn12">800 LE</button>
        </div>

        {/* Card 2 */}
        <div className="card12">
          <h2 className="cardTitle12">Monthly Subscription Essential</h2>
          <p className="subtitle12">Perfect for regular EV drivers</p>

          <ul className="list12">
            <li>4 charging sessions per month</li>
            <li>Priority booking</li>
            <li>Free delivery</li>
            <li>24/7 support</li>
          </ul>

          <p className="bonus12">Bonus: 10% discount on extra sessions</p>

          <button className="priceBtn12">1200 LE</button>
        </div>

        {/* Card 3 */}
        <div className="card12">
          <h2 className="cardTitle12">Premium Plan</h2>
          <p className="subtitle12">For frequent drivers</p>

          <ul className="list12">
            <li>8 charging sessions per month</li>
            <li>Priority fast dispatch</li>
            <li>Larger capacity</li>
            <li>Exclusive offers</li>
          </ul>

          <p className="bonus12">Bonus: 20% discount</p>

          <button className="priceBtn12">1700 LE</button>
        </div>

        {/* Card 4 */}
        <div className="card12">
          <h2 className="cardTitle12">Business / Fleet Plan</h2>
          <p className="subtitle12">For companies</p>

          <ul className="list12">
            <li>Multiple vehicle coverage</li>
            <li>Fleet analytics</li>
            <li>Monthly reports</li>
            <li>Dedicated manager</li>
          </ul>

          <button className="priceBtn12">1900 LE</button>
        </div>

        {/* Card 5 */}
        <div className="card12">
          <h2 className="cardTitle12">Rewards Program</h2>
          <p className="subtitle12">Earn & redeem points</p>

          <ul className="list12">
            <li>Earn points per charge</li>
            <li>Free sessions</li>
            <li>Coffee upgrades</li>
            <li>VIP benefits</li>
          </ul>

          <button className="priceBtn12">2200 LE</button>
        </div>

      </div>
    </div>


<Footer />

    </> );
}
 
export default Bundles;