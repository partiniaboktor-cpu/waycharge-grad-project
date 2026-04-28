import React, { useEffect, useState } from "react";
import './Footer.css';
import wholoelogo from '../Assets/Img/wholologo.svg';
import { supabase } from "../Supabase";

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

  return ( 
    <div className="footer-container" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="lefts-section">
        <img className="footer-logo" src={wholoelogo} alt="WayCharge Logo" />
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
            <div key={item.id} className="nav-box">
              {lang === 'en' ? item.nav_item_en : item.nav_item_ar}
            </div>
          ))}
        </div>
      </div>

      <div className="bottom-footer">
        {/* Optional: Add extra links and copyright if needed in your CSS layout */}
        <p style={{ marginTop: '20px', fontSize: '14px', color: '#888' }}>
          {lang === 'en' ? firstRow.copyright_en : firstRow.copyright_ar}
        </p>
      </div>
    </div>
  );
}
 
export default Footer;