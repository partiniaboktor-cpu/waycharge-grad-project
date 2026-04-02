import React, { useEffect, useState } from "react";
import './Nav.css'
import wholoelogo from '../Assets/Img/wholologo.svg'
import language from '../Assets/Icons/language.svg'
import { Link } from "react-router-dom";
import { supabase } from "../Supabase";

const Nav = () => {

const [Nav, setNav] = useState([]);
useEffect(() => {

  async function getNavAPI() {
    const { data, error } = await supabase
      .from("Home")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setNav(data);
      console.log(data);
    }
  }

  getNavAPI();

}, []);

    return (  <>
    
    <div className='nav'>
<Link to="/">
{/* {
Nav
.filter(Nav => Nav.id === 1)
.map(Nav => (
  <h2 key={Nav.id} > {Nav.image}</h2>
))
} */}
<img className='logo' src={wholoelogo} alt="" />
</Link>
    <div className='menu'>
        <Link to="/about" className="menu1">About us</Link>
        <Link to="/mobileapp" className='menus2'>Mobile app</Link>
        <Link to="/stations" className='menus3'>Stations</Link>
        <Link to="/Blog" className='menus8'>Blogs</Link>
        <Link to="/Howitworks" className='menus4'>How it works?</Link>
        <Link to="/Contactus"className='menus5'>Contact us</Link>
        <Link to="/Careers" className='menus7'>Careers</Link>
        <Link to="/help" className='menus6'>Help</Link>
    </div>
        

{/* {
Nav
.filter(Nav => Nav.id === 2)
.map(Nav => (
  <h2 key={Nav.id} className='language'> {Nav.image}</h2>
))
} */}
<img className='language' src={language} alt="" />

    </div>
    
    
    </>);
}
 
export default Nav;