import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './Nav.css';
import wholoelogo from '../Assets/Img/wholologo.svg';
import language from '../Assets/Icons/language.svg';
import { Link } from "react-router-dom";
import { supabase } from "../Supabase";

const Nav = ({ onLanguageToggle }) => {
  const [NavData, setNavData] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // burger menu state
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    async function getNavAPI() {
      const { data, error } = await supabase.from("Home").select("*");
      if (error) console.log(error);
      else setNavData(data);
    }
    getNavAPI();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
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
        
        <div 
          className="dropdown-wrapper"
          onMouseEnter={() => setIsHelpOpen(true)}
          onMouseLeave={() => setIsHelpOpen(false)}
        >
          <Link to="/help" className='menus6'>Help</Link>
          <AnimatePresence>
            {isHelpOpen && (
              <motion.div 
                className="dropdown-menu"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Link to="/Services" className="dropdown-item">Services</Link>
                <Link to="/Bundles" className="dropdown-item">Bundles</Link>
                <Link to="/Chargertype" className="dropdown-item">Charger Types</Link>
                <Link to="/Team" className="dropdown-item">Our Team</Link>
                <Link to="/Reviews" className="dropdown-item">Reviews</Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="nav-controls">
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <img className='language' src={language} alt="language" onClick={onLanguageToggle} style={{ cursor: onLanguageToggle ? 'pointer' : 'default' }} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;