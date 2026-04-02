import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav.jsx'
import MainTitle from '../Components/MainTitle.jsx';
import '../Pages/Stations.css'
import Map from '../Common/Map.jsx'; 
import Title from '../Common/Title-section.jsx';
import thedrive from '../Assets/Img/thedrive.svg';
import uvenus from '../Assets/Img/u venus.svg';
import mivida from '../Assets/Img/mivida.svg';
import Footer from '../Components/Footer.jsx';
import { supabase } from "../Supabase";

const Stations = () => {

const [Charging_Stations, setCharging_Stations] = useState([]);
useEffect(() => {

  async function getCharging_StationsAPI() {
    const { data, error } = await supabase
      .from("Charging_Stations")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setCharging_Stations(data);
      console.log(data);
    }
  }

  getCharging_StationsAPI();

}, []);

    return ( <>


<Nav />
<MainTitle 
   t1="Our Locations:" 
/>

{
Charging_Stations
.filter(Charging_Stations => Charging_Stations.id === 1)
.map(Charging_Stations => (
  <h2 key={Charging_Stations.id} className='station-paragraph'> {Charging_Stations.Description_en}</h2>
))
}
<Map />

<div className='downloadnows'>
    
{
Charging_Stations
.filter(Charging_Stations => Charging_Stations.id === 1)
.map(Charging_Stations => (
  <h2 key={Charging_Stations.id} className='download'> {Charging_Stations.Titles}</h2>
))
}
{
Charging_Stations
.filter(Charging_Stations => Charging_Stations.id === 2)
.map(Charging_Stations => (
  <h2 key={Charging_Stations.id} className='download'> {Charging_Stations.Titles}</h2>
))
}

{
Charging_Stations
.filter(Charging_Stations => Charging_Stations.id === 3)
.map(Charging_Stations => (
  <h2 key={Charging_Stations.id} className='download'> {Charging_Stations.Titles}</h2>
))
}
</div>

 <Title 
   t1="Find us at" 
   t2="Find us at" 
   linkText="View More" 
/>

<div className='findus'>
{
Charging_Stations
.filter(Charging_Stations => Charging_Stations.id === 1)
.map(Charging_Stations => (
    <img key={Charging_Stations.id} src={Charging_Stations.img} alt="the drive" />
))
}
{
Charging_Stations
.filter(Charging_Stations => Charging_Stations.id === 2)
.map(Charging_Stations => (
    <img key={Charging_Stations.id} src={Charging_Stations.img} alt="the drive" />
))
}
{
Charging_Stations
.filter(Charging_Stations => Charging_Stations.id === 3)
.map(Charging_Stations => (
    <img key={Charging_Stations.id} src={Charging_Stations.img} alt="the drive" />
))
}

</div>

<Footer />

    </> );
}
 
export default Stations;