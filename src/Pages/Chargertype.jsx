import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav';
import './Chargertype.css'
import Footer from '../Components/Footer.jsx'
import { supabase } from "../Supabase";

const Chargertype = () => {

const [Chargertype, setChargertype] = useState([]);
useEffect(() => {

  async function getChargertypeAPI() {
    const { data, error } = await supabase
      .from("Chargertype")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setChargertype(data);
      console.log(data);
    }
  }

  getChargertypeAPI();

}, []);

    return (  <>
    
    <Nav />


  <div className="levelContainer15">

      <div className="topSection15">

        <div className="imageBox15">
{
Chargertype
.filter(Chargertype => Chargertype.id === 1)
.map(Chargertype => (
          <img key={Chargertype.id} src={Chargertype.image} alt="EV Charger" className="mainImage15"/>
))
}
        </div>

        <div className="textBox15">
{
Chargertype
.filter(Chargertype => Chargertype.id === 1)
.map(Chargertype => (
<h1 key={Chargertype.id} className="title15">{Chargertype.Title}</h1>))
}
{
Chargertype
.filter(Chargertype => Chargertype.id === 1)
.map(Chargertype => (
<p key={Chargertype.id} className="description15">{Chargertype.Description}</p>))
}         
{
Chargertype
.filter(Chargertype => Chargertype.id === 1)
.map(Chargertype => (
          <button key={Chargertype.id} className="button15">{Chargertype.buttons}</button>
))
} 
        </div>

      </div>


      <div className="infoSection15">
{
Chargertype
.filter(Chargertype => Chargertype.id === 1)
.map(Chargertype => (
        <h2 key={Chargertype.id} className="subtitle15">{Chargertype.question}</h2>
))
} 
{
Chargertype
.filter(Chargertype => Chargertype.id === 1)
.map(Chargertype => (
        <ul key={Chargertype.id} className="list15">{Chargertype.answer}</ul>
))
} 

{
Chargertype
.filter(Chargertype => Chargertype.id === 2)
.map(Chargertype => (
        <h2 key={Chargertype.id} className="subtitle15">{Chargertype.question}</h2>
))
} 
{
Chargertype
.filter(Chargertype => Chargertype.id === 2)
.map(Chargertype => (
        <p key={Chargertype.id} className="list15">{Chargertype.answer}</p>
))
} 
{
Chargertype
.filter(Chargertype => Chargertype.id === 3)
.map(Chargertype => (
        <h2 key={Chargertype.id} className="subtitle15">{Chargertype.question}</h2>
))
} 
{
Chargertype
.filter(Chargertype => Chargertype.id === 3)
.map(Chargertype => (
        <p key={Chargertype.id} className="list15">{Chargertype.answer}</p>
))
} 
{
Chargertype
.filter(Chargertype => Chargertype.id === 4)
.map(Chargertype => (
        <h2 key={Chargertype.id} className="subtitle15">{Chargertype.question}</h2>
))
} 
{
Chargertype
.filter(Chargertype => Chargertype.id === 4)
.map(Chargertype => (
        <p key={Chargertype.id} className="list15">{Chargertype.answer}</p>
))
} 

      </div>


      <div className="gallery15">
{
Chargertype
.filter(Chargertype => Chargertype.id === 2)
.map(Chargertype => (
          <img key={Chargertype.id} src={Chargertype.image} alt="EV Charger" className="galleryImage15"/>
))
}
{
Chargertype
.filter(Chargertype => Chargertype.id === 3)
.map(Chargertype => (
          <img key={Chargertype.id} src={Chargertype.image} alt="EV Charger" className="galleryImage15"/>
))
}
{
Chargertype
.filter(Chargertype => Chargertype.id === 4)
.map(Chargertype => (
          <img key={Chargertype.id} src={Chargertype.image} alt="EV Charger" className="galleryImage15"/>
))
}

      </div>

    </div>

<Footer />
    </>);
}
 
export default Chargertype;