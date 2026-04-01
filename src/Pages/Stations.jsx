import React, { Component } from 'react';
import Nav from '../Components/Nav.jsx'
import MainTitle from '../Components/MainTitle.jsx';
import '../Pages/Stations.css'
import Map from '../Common/Map.jsx'; 
import Title from '../Common/Title-section.jsx';
import thedrive from '../Assets/Img/thedrive.svg';
import uvenus from '../Assets/Img/u venus.svg';
import mivida from '../Assets/Img/mivida.svg';
import Footer from '../Components/Footer.jsx';

const Stations = () => {
    return ( <>


<Nav />
<MainTitle 
   t1="Our Locations:" 
/>
<p className='station-paragraph'>WayCharge operates in key high-traffic areas to ensure fast and convenient access whenever you need a charge. Our service is strategically positioned to reach you quickly, whether you’re at work, at a café, or on the road. No fixed stations, no limitations—just smart, mobile charging delivered right to your location.</p>

<Map />

<div className='downloadnows'>
    <p className='download'>70+ Charging Stations</p>
    <p className='download'>100+ Active Users</p>
    <p className='download'>10+ Cities</p>
</div>

 <Title 
   t1="Find us at" 
   t2="Find us at" 
   linkText="View More" 
/>

<div className='findus'>
    <img src={thedrive} alt="the drive" />
    <img src={uvenus} alt="the drive" />
    <img src={mivida} alt="the drive" />
</div>

<Footer />

    </> );
}
 
export default Stations;