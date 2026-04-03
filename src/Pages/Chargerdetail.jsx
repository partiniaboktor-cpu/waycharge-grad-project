import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav';
import MainTitle from '../Components/MainTitle';
import '../Pages/Chargerdetail.css'
import chargerfive from '../Assets/Img/chargerfive.png'
import Footer from '../Components/Footer.jsx'
import { supabase } from "../Supabase";
import { Link } from "react-router-dom";

const Chargerdetail = () => {

const [Chargerdetail, setChargerdetail] = useState([]);
useEffect(() => {

  async function getChargerdetailAPI() {
    const { data, error } = await supabase
      .from("Chargerdetail")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setChargerdetail(data);
      console.log(data);
    }
  }

  getChargerdetailAPI();

}, []);

    return ( <>
    
    <Nav />
    <MainTitle 
    t1='TYPES OF DRAWINGS'
    />
    <div className="container14">

      {/* Header */}
      <div className="header14">
{
Chargerdetail
.filter(Chargerdetail => Chargerdetail.id === 1)
.map(Chargerdetail => (
   <p key={Chargerdetail.id} className="topText14">
          {Chargerdetail.Description}
        </p>))
}
     
      </div>

      {/* Card 1 */}
      <div className="card14">
{
Chargerdetail
.filter(Chargerdetail => Chargerdetail.id === 2)
.map(Chargerdetail => (
        <img key={Chargerdetail.id} src={Chargerdetail.image} alt="" className="img14" />
))
}
        <div className="content14">
{
Chargerdetail
.filter(Chargerdetail => Chargerdetail.id === 2)
.map(Chargerdetail => (
          <h2 key={Chargerdetail.id} className="title14">{Chargerdetail.Charger_type})</h2>
))
}
{
Chargerdetail
.filter(Chargerdetail => Chargerdetail.id === 2)
.map(Chargerdetail => (
<Link to="/chargertype">
  <button key={Chargerdetail.id} className="btn14">
    {Chargerdetail.buttons}
  </button>
</Link>))
}
        </div>
      </div>

      {/* Card 2 */}
      <div className="card14">
{
Chargerdetail
.filter(Chargerdetail => Chargerdetail.id === 2)
.map(Chargerdetail => (
        <img key={Chargerdetail.id} src={Chargerdetail.image} alt="" className="img14" />
))
}
        <div className="content14">
{
Chargerdetail
.filter(Chargerdetail => Chargerdetail.id === 2)
.map(Chargerdetail => (
          <h2 key={Chargerdetail.id} className="title14">{Chargerdetail.Charger_type})</h2>
))
}
{
Chargerdetail
.filter(Chargerdetail => Chargerdetail.id === 2)
.map(Chargerdetail => (
<Link to="/chargertype">
  <button key={Chargerdetail.id} className="btn14">
    {Chargerdetail.buttons}
  </button>
</Link>))
}
        </div>
      </div>

      {/* Card 3 */}
      <div className="card14">
{
Chargerdetail
.filter(Chargerdetail => Chargerdetail.id === 2)
.map(Chargerdetail => (
        <img key={Chargerdetail.id} src={Chargerdetail.image} alt="" className="img14" />
))
}
        <div className="content14">
{
Chargerdetail
.filter(Chargerdetail => Chargerdetail.id === 2)
.map(Chargerdetail => (
          <h2 key={Chargerdetail.id} className="title14">{Chargerdetail.Charger_type})</h2>
))
}
{
Chargerdetail
.filter(Chargerdetail => Chargerdetail.id === 2)
.map(Chargerdetail => (
<Link to="/chargertype">
  <button key={Chargerdetail.id} className="btn14">
    {Chargerdetail.buttons}
  </button>
</Link>))
}
        </div>
      </div>

      {/* Card 4 */}
      <div className="card14">
{
Chargerdetail
.filter(Chargerdetail => Chargerdetail.id === 2)
.map(Chargerdetail => (
        <img key={Chargerdetail.id} src={Chargerdetail.image} alt="" className="img14" />
))
}
        <div className="content14">
{
Chargerdetail
.filter(Chargerdetail => Chargerdetail.id === 2)
.map(Chargerdetail => (
          <h2 key={Chargerdetail.id} className="title14">{Chargerdetail.Charger_type})</h2>
))
}
{
Chargerdetail
.filter(Chargerdetail => Chargerdetail.id === 2)
.map(Chargerdetail => (
<Link to="/chargertype">
  <button key={Chargerdetail.id} className="btn14">
    {Chargerdetail.buttons}
  </button>
</Link>))
}
        </div>
      </div>

      {/* Card 5 */}
      <div className="card14">
{
Chargerdetail
.filter(Chargerdetail => Chargerdetail.id === 2)
.map(Chargerdetail => (
        <img key={Chargerdetail.id} src={Chargerdetail.image} alt="" className="img14" />
))
}
        <div className="content14">
{
Chargerdetail
.filter(Chargerdetail => Chargerdetail.id === 2)
.map(Chargerdetail => (
          <h2 key={Chargerdetail.id} className="title14">{Chargerdetail.Charger_type})</h2>
))
}
{
Chargerdetail
.filter(Chargerdetail => Chargerdetail.id === 2)
.map(Chargerdetail => (
<Link to="/chargertype">
  <button key={Chargerdetail.id} className="btn14">
    {Chargerdetail.buttons}
  </button>
</Link>))
}
        </div>
      </div>


    </div>

<Footer />

    </> );
}
 
export default Chargerdetail;