import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav';
import '../Pages/Services.css'
import MainTitle from '../Components/MainTitle';
import cofee from '../Assets/Img/cofee.png'
import rewards from '../Assets/Img/rewards.png'
import portable from '../Assets/Img/portable.png'
import availble from '../Assets/Img/available.png'
import Footer from '../Components/Footer.jsx';
import { supabase } from "../Supabase";

const Services = () => {

const [Services, setServices] = useState([]);
useEffect(() => {

  async function getServicesAPI() {
    const { data, error } = await supabase
      .from("Services")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setServices(data);
      console.log(data);
    }
  }

  getServicesAPI();

}, []);

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
{
Services
.filter(Services => Services.id === 1)
.map(Services => (
  <h2 key={Services.id} className='download'> {Services.Service_type}</h2>
))
}
{
Services
.filter(Services => Services.id === 2)
.map(Services => (
  <h2 key={Services.id} className='download'> {Services.Service_type}</h2>
))
}
{
Services
.filter(Services => Services.id === 3)
.map(Services => (
  <h2 key={Services.id} className='download'> {Services.Service_type}</h2>
))
}
{
Services
.filter(Services => Services.id === 4)
.map(Services => (
  <h2 key={Services.id} className='download'> {Services.Service_type}</h2>
))
}
{
Services
.filter(Services => Services.id === 2)
.map(Services => (
  <h2 key={Services.id} className='download'> {Services.Service_type}</h2>
))
}
{
Services
.filter(Services => Services.id === 1)
.map(Services => (
  <h2 key={Services.id} className='download'> {Services.Service_type}</h2>
))
}
 
</div>
    

<div className="container11">

      {/* Section 1 */}
      <div className="section11">
 

        <div className="textBox11">
{
Services
.filter(Services => Services.id === 1)
.map(Services => (
  <h2 key={Services.id} className="title11"> {Services.Service_title}</h2>
))
}
{
Services
.filter(Services => Services.id === 1)
.map(Services => (
  <h2 key={Services.id} className="desc11"> {Services.description}</h2>
))
}

        </div>

        <div className="imageBox11">
{
Services
.filter(Services => Services.id === 1)
.map(Services => (
    <img
           key={Services.id}
            src={Services.image}
            alt="cofee"
            className="image11"
          />))
}
        </div>
      </div>

      {/* Section 2 */}
      <div className="section11 reverse11">
       

        <div className="textBox11">
{
Services
.filter(Services => Services.id === 2)
.map(Services => (
  <h2 key={Services.id} className="title11"> {Services.Service_title}</h2>
))
}
{
Services
.filter(Services => Services.id === 2)
.map(Services => (
  <h2 key={Services.id} className="desc11"> {Services.description}</h2>
))
}
        
        </div>

        <div className="imageBox11">
{
Services
.filter(Services => Services.id === 2)
.map(Services => (
    <img
           key={Services.id}
            src={Services.image}
            alt="cofee"
            className="image11"
          />))
}
    
        </div>
      </div>

      {/* Section 3 */}
      <div className="section11">
       

        <div className="textBox11">
{
Services
.filter(Services => Services.id === 3)
.map(Services => (
  <h2 key={Services.id} className="title11"> {Services.Service_title}</h2>
))
}
{
Services
.filter(Services => Services.id === 3)
.map(Services => (
  <h2 key={Services.id} className="desc11"> {Services.description}</h2>
))
}
     
        </div>

        <div className="imageBox11">
{
Services
.filter(Services => Services.id === 3)
.map(Services => (
    <img
           key={Services.id}
            src={Services.image}
            alt="cofee"
            className="image11"
          />))
}

        </div>
      </div>

      {/* Section 4 */}
      <div className="section11 reverse11">
      

        <div className="textBox11">
{
Services
.filter(Services => Services.id === 4)
.map(Services => (
  <h2 key={Services.id} className="title11"> {Services.Service_title}</h2>
))
}
{
Services
.filter(Services => Services.id === 4)
.map(Services => (
  <h2 key={Services.id} className="desc11"> {Services.description}</h2>
))
}

        </div>

        <div className="imageBox11">
{
Services
.filter(Services => Services.id === 4)
.map(Services => (
    <img
           key={Services.id}
            src={Services.image}
            alt="cofee"
            className="image11"
          />))
}
        </div>
      </div>

    </div>


<Footer />
    </> );
}
 
export default Services;