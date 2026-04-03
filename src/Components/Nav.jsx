import React, { useEffect, useState } from "react";
import './Nav.css';
import wholoelogo from '../Assets/Img/wholologo.svg';
import language from '../Assets/Icons/language.svg';
import { Link } from "react-router-dom";
import { supabase } from "../Supabase";

const Nav = () => {
  const [NavData, setNavData] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // burger menu state

  useEffect(() => {
    async function getNavAPI() {
      const { data, error } = await supabase.from("Home").select("*");
      if (error) console.log(error);
      else setNavData(data);
    }
    getNavAPI();
  }, []);

  return (
    <nav className='nav-container'>
      <Link to="/">
        <img className='logo' src={wholoelogo} alt="logo" />
      </Link>

      {/* Burger icon */}
      <div className={`burger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu links */}
      <div className={`menu ${isOpen ? "menu-open" : ""}`}>
        <Link to="/about" className="menu1">About us</Link>
        <Link to="/mobileapp" className='menus2'>Mobile app</Link>
        <Link to="/stations" className='menus3'>Stations</Link>
        <Link to="/Blog" className='menus8'>Blogs</Link>
        <Link to="/Howitworks" className='menus4'>How it works?</Link>
        <Link to="/Contactus"className='menus5'>Contact us</Link>
        <Link to="/Careers" className='menus7'>Careers</Link>
        <Link to="/help" className='menus6'>Help</Link>
        <img className='language' src={language} alt="language" />
      </div>
    </nav>
  );
};

export default Nav;