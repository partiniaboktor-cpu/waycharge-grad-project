import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav';
import '../Pages/Contactus.css';
import MainTitle from '../Components/MainTitle';
import contuctus from '../Assets/Img/contactus.png'
import Footer from '../Components/Footer.jsx'
import { supabase } from "../Supabase";


const Contactus = () => {

const [Contact, setContact] = useState([]);
useEffect(() => {

  async function getContactAPI() {
    const { data, error } = await supabase
      .from("Contact")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setContact(data);
      console.log(data);
    }
  }

  getContactAPI();

}, []);


    return ( <>
    <Nav />
  
{
Contact
.filter(Contact => Contact.id === 6)
.map(Contact => (
 <button key={Contact.id} className='contact-btn'>{Contact.buttons}</button>))
}
    
    <MainTitle 
    t1='GET IN TOUCH'
    />


  <section className="contact-section6">
      
      {/* Left */}
      <div className="contact-left6">
        {/* <button className="contact-tag6">? Contact</button>

        <h1 className="contact-title6">GET IN TOUCH</h1> */}
{
Contact
.filter(Contact => Contact.id === 1)
.map(Contact => (
  <p key={Contact.id} className="contact-desc6"> {Contact.Description}</p>
))
}

        {/* Info Cards */}
        <div className="info-card6">
          <span>📧</span>
          <div>
{
Contact
.filter(Contact => Contact.id === 2)
.map(Contact => (
            <h4 key={Contact.id} >{Contact.social_media}</h4>
))
}
{
Contact
.filter(Contact => Contact.id === 2)
.map(Contact => (
            <p key={Contact.id} >{Contact.answers}</p>
))
}
          </div>
        </div>

        <div className="info-card6">
          <span>📞</span>
          <div>
{
Contact
.filter(Contact => Contact.id === 3)
.map(Contact => (
            <h4 key={Contact.id} >{Contact.social_media}</h4>
))
}
{
Contact
.filter(Contact => Contact.id === 3)
.map(Contact => (
            <p key={Contact.id} >{Contact.answers}</p>
))
}
          </div>
        </div>

        <div className="info-card6">
          <span>📍</span>
          <div>
{
Contact
.filter(Contact => Contact.id === 4)
.map(Contact => (
            <h4 key={Contact.id} >{Contact.social_media}</h4>
))
}
{
Contact
.filter(Contact => Contact.id === 4)
.map(Contact => (
            <p key={Contact.id} >{Contact.answers}</p>
))
}
          </div>
        </div>

        {/* Image */}
{
Contact
.filter(Contact => Contact.id === 1)
.map(Contact => (
               <img
        key={Contact.id}
          src={contuctus}
          alt="contact"
          className={Contact.image}
        />
))
}
    
      </div>

      {/* Right Form */}
      <div className="contact-right6">
        <form className="contact-form6">
{
Contact
.filter(Contact => Contact.id === 2)
.map(Contact => (
 <input key={Contact.id} type="text" placeholder={Contact.buttons} />))
}
         
{
Contact
.filter(Contact => Contact.id === 3)
.map(Contact => (
 <input key={Contact.id} type="text" placeholder={Contact.buttons} />))
}
{
Contact
.filter(Contact => Contact.id === 4)
.map(Contact => (
 <textarea key={Contact.id} type="text" placeholder={Contact.buttons} textarea/>))
}
{
Contact
.filter(Contact => Contact.id === 5)
.map(Contact => (
 <button key={Contact.id} type="submit">{Contact.buttons}</button>))
}
          
        </form>
      </div>
    </section>
    

<Footer />

    </> );
}
 
export default Contactus;