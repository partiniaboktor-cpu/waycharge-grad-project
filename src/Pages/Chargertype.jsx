import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav';
import './Chargertype.css'
import Footer from '../Components/Footer.jsx'
import { supabase } from "../Supabase";
import ch1 from '../Assets/Img/ch1.png';
import ch2 from '../Assets/Img/ch2.png';
import ch3 from '../Assets/Img/ch3.png';
import portable from '../Assets/Img/portable.png';

const Chargertype = () => {
  const [lang, setLang] = useState('en');
  const [chargeTypes, setChargeTypes] = useState([]);

  useEffect(() => {
    async function getChargertypeAPI() {
      const { data, error } = await supabase
        .from("charge_types")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.log(error);
      } else {
        setChargeTypes(data);
        console.log(data);
      }
    }

    getChargertypeAPI();
  }, []);

  const row1 = chargeTypes.find(t => t.id === 1) || {};

  const typeImages = {
    1: ch1,
    2: ch2,
    3: ch3
  };

  return (
    <>
      <Nav onLanguageToggle={() => setLang(prev => prev === 'en' ? 'ar' : 'en')} />

      <div className="levelContainer15" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="topSection15">
          <div className="imageBox15">
            <img src={portable} alt="EV Charger" className="mainImage15" />
          </div>

          <div className="textBox15">
            <h1 className="title15">
              {lang === 'en' ? row1.section_title_en : row1.section_title_ar}
            </h1>
            <p className="description15">
              {lang === 'en' ? row1.description_en : row1.description_ar}
            </p>
            <button className="button15">
              {lang === 'en' ? 'Learn More' : 'تعرف على المزيد'}
            </button>
          </div>
        </div>

        <div className="infoSection15">
          <p className="extra-info-text15" style={{ marginBottom: '2rem', fontStyle: 'italic', opacity: 0.8 }}>
            {lang === 'en' ? row1.extra_info_en : row1.extra_info_ar}
          </p>

          {chargeTypes.map(type => (
            <React.Fragment key={type.id}>
              <h2 className="subtitle15">
                {lang === 'en' ? type.type_name_en : type.type_name_ar}
              </h2>
              <p className="list15">
                {lang === 'en' ? type.type_details_en : type.type_details_ar}
              </p>
            </React.Fragment>
          ))}
        </div>

        <div className="gallery15">
          {chargeTypes.map(type => (
            <img 
              key={`gallery-${type.id}`} 
              src={typeImages[type.id] || ch1} 
              alt="EV Charger" 
              className="galleryImage15" 
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Chargertype;