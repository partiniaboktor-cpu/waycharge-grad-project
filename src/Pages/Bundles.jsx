import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav';
import '../Pages/Bundles.css'
import MainTitle from '../Components/MainTitle';
import Footer from '../Components/Footer.jsx'
import { supabase } from "../Supabase";

const Bundles = () => {


const [Bundles, setBundles] = useState([]);
useEffect(() => {

  async function getBundlesAPI() {
    const { data, error } = await supabase
      .from("Bundles")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setBundles(data);
      console.log(data);
    }
  }

  getBundlesAPI();

}, []);

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
{
Bundles
.filter(Bundles => Bundles.id === 1)
.map(Bundles => (
  <h2 key={Bundles.id} className="cardTitle12"> {Bundles.Title}</h2>
))
}
{
Bundles
.filter(Bundles => Bundles.id === 1)
.map(Bundles => (
  <h2 key={Bundles.id} className="subtitle12"> {Bundles.Bio}</h2>
))
}     
{
Bundles
.filter(Bundles => Bundles.id === 1)
.map(Bundles => (
  <h2 key={Bundles.id} className="list12"> {Bundles.Description}</h2>
))
}  
 
{
Bundles
.filter(Bundles => Bundles.id === 1)
.map(Bundles => (
  <h2 key={Bundles.id} className="extra12"> {Bundles.Offer}</h2>
))
}  
{
Bundles
.filter(Bundles => Bundles.id === 1)
.map(Bundles => (
  <h2 key={Bundles.id}  className="priceBtn12"> {Bundles.Price}</h2>
))
}  
        </div>

        {/* Card 2 */}
        <div className="card12">
{
Bundles
.filter(Bundles => Bundles.id === 2)
.map(Bundles => (
  <h2 key={Bundles.id} className="cardTitle12"> {Bundles.Title}</h2>
))
}
{
Bundles
.filter(Bundles => Bundles.id === 2)
.map(Bundles => (
  <h2 key={Bundles.id} className="subtitle12"> {Bundles.Bio}</h2>
))
} 
{
Bundles
.filter(Bundles => Bundles.id === 2)
.map(Bundles => (
  <h2 key={Bundles.id} className="list12"> {Bundles.Description}</h2>
))
}  
{
Bundles
.filter(Bundles => Bundles.id === 2)
.map(Bundles => (
  <h2 key={Bundles.id} className="extra12"> {Bundles.Offer}</h2>
))
}       
{
Bundles
.filter(Bundles => Bundles.id === 2)
.map(Bundles => (
  <h2 key={Bundles.id}  className="priceBtn12"> {Bundles.Price}</h2>
))
}  
        </div>

        {/* Card 3 */}
        <div className="card12">
{
Bundles
.filter(Bundles => Bundles.id === 3)
.map(Bundles => (
  <h2 key={Bundles.id} className="cardTitle12"> {Bundles.Title}</h2>
))
}
{
Bundles
.filter(Bundles => Bundles.id === 3)
.map(Bundles => (
  <h2 key={Bundles.id} className="subtitle12"> {Bundles.Bio}</h2>
))
} 
{
Bundles
.filter(Bundles => Bundles.id === 3)
.map(Bundles => (
  <h2 key={Bundles.id} className="list12"> {Bundles.Description}</h2>
))
}  
{
Bundles
.filter(Bundles => Bundles.id === 3)
.map(Bundles => (
  <h2 key={Bundles.id} className="extra12"> {Bundles.Offer}</h2>
))
}  
{
Bundles
.filter(Bundles => Bundles.id === 3)
.map(Bundles => (
  <h2 key={Bundles.id}  className="priceBtn12"> {Bundles.Price}</h2>
))
}  

        </div>

        {/* Card 4 */}
        <div className="card12">
{
Bundles
.filter(Bundles => Bundles.id === 4)
.map(Bundles => (
  <h2 key={Bundles.id} className="cardTitle12"> {Bundles.Title}</h2>
))
}
{
Bundles
.filter(Bundles => Bundles.id === 4)
.map(Bundles => (
  <h2 key={Bundles.id} className="subtitle12"> {Bundles.Bio}</h2>
))
} 

{
Bundles
.filter(Bundles => Bundles.id === 4)
.map(Bundles => (
  <h2 key={Bundles.id} className="list12"> {Bundles.Description}</h2>
))
}  

{
Bundles
.filter(Bundles => Bundles.id === 4)
.map(Bundles => (
  <h2 key={Bundles.id}  className="priceBtn12"> {Bundles.Price}</h2>
))
}  

        </div>

        {/* Card 5 */}
        <div className="card12">
{
Bundles
.filter(Bundles => Bundles.id === 5)
.map(Bundles => (
  <h2 key={Bundles.id} className="cardTitle12"> {Bundles.Title}</h2>
))
}
{
Bundles
.filter(Bundles => Bundles.id === 5)
.map(Bundles => (
  <h2 key={Bundles.id} className="subtitle12"> {Bundles.Bio}</h2>
))
} 

{
Bundles
.filter(Bundles => Bundles.id === 5)
.map(Bundles => (
  <h2 key={Bundles.id} className="list12"> {Bundles.Description}</h2>
))
}  
 {
Bundles
.filter(Bundles => Bundles.id === 5)
.map(Bundles => (
  <h2 key={Bundles.id}  className="priceBtn12"> {Bundles.Price}</h2>
))
}  
        </div>

      </div>
    </div>


<Footer />

    </> );
}
 
export default Bundles;