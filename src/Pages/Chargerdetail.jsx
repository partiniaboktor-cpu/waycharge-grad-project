import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav';
import MainTitle from '../Components/MainTitle';
import '../Pages/Chargerdetail.css'
import Footer from '../Components/Footer.jsx'
import { supabase } from "../Supabase";
import { Link } from "react-router-dom";

import chargerone from '../Assets/Img/chargerone.png';
import chargertwo from '../Assets/Img/chargertwo.png';
import chargerfour from '../Assets/Img/chargerfour.png';
import chargerfive from '../Assets/Img/chargerfive.png';
import charger6 from '../Assets/Img/charger6.png';

const Chargerdetail = () => {
  const [lang, setLang] = useState('en');
  const [drawings, setDrawings] = useState([]);

  useEffect(() => {
    async function getChargerdetailAPI() {
      const { data, error } = await supabase
        .from("drawing_types")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.log(error);
      } else {
        setDrawings(data);
        console.log(data);
      }
    }

    getChargerdetailAPI();
  }, []);

  const row1 = drawings.find(d => d.id === 1) || {};
  const fallbackImages = [chargerone, chargertwo, chargerfour, chargerfive, charger6];

  return (
    <>
      <Nav onLanguageToggle={() => setLang(prev => prev === 'en' ? 'ar' : 'en')} />
      
      <MainTitle 
        t1={lang === 'en' ? (row1.section_title_en || 'TYPES OF DRAWINGS') : (row1.section_title_ar || 'أنواع الشواحن')} 
      />

      <div className="container14" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="header14">
          <p className="topText14">
            {lang === 'en' ? row1.description_en : row1.description_ar}
          </p>
        </div>

        {drawings.map((item, index) => (
          <div key={item.id} className="card14">
            <img 
              src={item.image || fallbackImages[index % fallbackImages.length]} 
              alt="Charger" 
              className="img14" 
            />
            <div className="content14">
              <h2 className="title14">
                {lang === 'en' ? item.item_title_en : item.item_title_ar}
              </h2>
              <Link to="/chargertype">
                <button className="btn14">
                  {lang === 'en' ? item.action_text_en : item.action_text_ar}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Chargerdetail;