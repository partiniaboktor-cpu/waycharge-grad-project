import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav';
import '../Pages/Services.css'
import MainTitle from '../Components/MainTitle';
import cofee from '../Assets/Img/cofee.png'
import rewards from '../Assets/Img/rewards.png'
import portable from '../Assets/Img/portable.png'
import availble from '../Assets/Img/available.png'
import Footer from '../Components/Footer.jsx';
import { supabase } from "../Supabase";

const Services = () => {
  const [lang, setLang] = useState('en');
  const [servicesData, setServicesData] = useState([]);

  const images = {
    1: cofee,
    2: rewards,
    3: portable,
    4: availble
  };

  useEffect(() => {
    async function getServicesAPI() {
      const { data, error } = await supabase
        .from("services_content")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.log(error);
      } else {
        setServicesData(data);
      }
    }

    getServicesAPI();
  }, []);

  const firstRow = servicesData.find(s => s.id === 1) || {};

  return ( 
    <>
      <Nav onLanguageToggle={() => setLang(prev => prev === 'en' ? 'ar' : 'en')} />
      
      <div className="container10">
        <h1 className="title10">
          <MainTitle 
            t1={lang === 'en' ? (firstRow.section_title_en || 'WAYCHARGE SERVICES') : (firstRow.section_title_ar || 'خدمات WayCharge')}
          />
        </h1>

        <div className="iconsRow10">
          <div className="iconBox10">💰</div>
          <div className="iconBox10">☕</div>
          <div className="iconBox10">🚚</div>
          <div className="iconBox10">🍲</div>
          <div className="iconBox10">💵</div>
        </div>
      </div>
      
      <div className='downloadnow' dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        {[1, 2, 3, 4, 2, 1].map((id, index) => {
          const service = servicesData.find(s => s.id === id);
          return service ? (
            <h2 key={`${id}-${index}`} className='download'>
              {lang === 'en' ? service.item_title_en : service.item_title_ar}
            </h2>
          ) : null;
        })}
      </div>
      
      <div className="container11">
        {servicesData.map((service, index) => (
          <div 
            key={service.id} 
            className={`section11 ${index % 2 !== 0 ? 'reverse11' : ''}`} 
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          >
            <div className="textBox11">
              <h2 className="title11">
                {lang === 'en' ? service.item_title_en : service.item_title_ar}
              </h2>
              <h2 className="desc11" style={{ whiteSpace: 'pre-line' }}>
                {lang === 'en' ? service.description_en : service.description_ar}
              </h2>
            </div>

            <div className="imageBox11">
              <img
                src={images[service.id]}
                alt={service.item_title_en}
                className="image11"
              />
            </div>
          </div>
        ))}
      </div>

      <Footer lang={lang} />
    </> 
  );
}
 
export default Services;