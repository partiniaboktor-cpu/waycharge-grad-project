import React, { useEffect, useState } from "react";
import './Footer.css';
import wholoelogo from '../Assets/Img/wholologo.svg';
import { supabase } from "../Supabase";
import { Link } from "react-router-dom";

const Footer = ({ lang = 'en' }) => {
  const [footerData, setFooterData] = useState([]);

  useEffect(() => {
    async function getFooterAPI() {
      const { data, error } = await supabase
        .from("footer_content")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.log(error);
      } else {
        setFooterData(data);
      }
    }

    getFooterAPI();
  }, []);

  const firstRow = footerData.find(f => f.id === 1) || {};
  const navItems = footerData.filter(f => f.nav_item_en);

  const getPath = (name) => {
    const lower = name.toLowerCase();
    if (lower.includes('home')) return '/';
    if (lower.includes('about')) return '/about';
    if (lower.includes('mobile')) return '/mobileapp';
    if (lower.includes('station')) return '/stations';
    if (lower.includes('blog')) return '/Blog';
    if (lower.includes('how')) return '/Howitworks';
    if (lower.includes('contact')) return '/Contactus';
    if (lower.includes('career')) return '/Careers';
    if (lower.includes('help')) return '/help';
    return `/${name.replace(/\s+/g, '')}`;
  };

  return ( 
    <div className="footer-container" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="lefts-section">
        <Link to="/">
          <img className="footer-logo" src={wholoelogo} alt="WayCharge Logo" />
        </Link>
        <p className="description">
          {lang === 'en' ? firstRow.description_en : firstRow.description_ar}
        </p>
      </div>

      <div className="rights-section">
        <h3 className='Quick Navigation'>
          {lang === 'en' ? firstRow.section_title_en : firstRow.section_title_ar}
        </h3>

        <div className="nav-grid">
          {navItems.map(item => (
            <Link key={item.id} to={getPath(item.nav_item_en)} className="nav-box" style={{ textDecoration: 'none', color: 'inherit' }}>
              {lang === 'en' ? item.nav_item_en : item.nav_item_ar}
            </Link>
          ))}
        </div>
      </div>

      <div className="bottom-footer">
        {/* <p style={{ marginTop: '20px', fontSize: '14px', color: '#888' }}>
          {lang === 'en' ? firstRow.copyright_en : firstRow.copyright_ar}
        </p> */}
      </div>
    </div>
  );
}
 
export default Footer;