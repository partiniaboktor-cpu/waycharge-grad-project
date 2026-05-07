import React, { useEffect, useState } from "react";
import AnimatedCounter from "../Animations/AnimatedCounter.jsx";
import Nav from '../Components/Nav.jsx'
import ScrollRevealText from "../Animations/ScrollRevealText.jsx";
import MainTitle from '../Components/MainTitle.jsx';
import '../Pages/Stations.css'
import Map from '../Common/Map.jsx'; 
import Title from '../Common/Title-section.jsx';
import thedrive from '../Assets/Img/thedrive.svg';
import uvenus from '../Assets/Img/u venus.svg';
import mivida from '../Assets/Img/mivida.svg';
import Footer from '../Components/Footer.jsx';
import { supabase } from "../Supabase";

const Stations = () => {
  const [lang, setLang] = useState('en');
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function getLocationsAPI() {
      const { data, error } = await supabase
        .from("locations_content")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.log(error);
      } else {
        setLocations(data);
        console.log(data);
      }
    }

    getLocationsAPI();
  }, []);

  const row1 = locations.find(l => l.id === 1) || {};
  const stats = locations.filter(l => l.stat_title_en);
  const findUsItems = locations.filter(l => l.id >= 4 || !l.stat_title_en);
  const fallbackImages = [thedrive, uvenus, mivida];

  return (
    <>
      <Nav onLanguageToggle={() => setLang(prev => prev === 'en' ? 'ar' : 'en')} />
      
      <div className="stations-wrapper" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <MainTitle 
          t1={lang === 'en' ? (row1.section_title_en || "Our Locations:") : (row1.section_title_ar || "مواقعنا:")} 
        />

        <h2 className='station-paragraph'>
          <ScrollRevealText text={lang === 'en' ? row1.description_en : row1.description_ar} />
        </h2>

        <Map />

        <div className='downloadnows'>
          {stats.map(stat => (
            <h2 key={stat.id} className='download'>
              <AnimatedCounter 
                value={lang === 'en' 
                  ? `${stat.stat_value_en} ${stat.stat_title_en}` 
                  : `${stat.stat_value_ar} ${stat.stat_title_ar}`} 
              />
            </h2>
          ))}
        </div>

        <Title 
          t1={lang === 'en' ? (row1.item_title_en || "Find us at") : (row1.item_title_ar || "تجدنا في")} 
          t2={lang === 'en' ? (row1.item_title_en || "Find us at") : (row1.item_title_ar || "تجدنا في")} 
          linkText={lang === 'en' ? "View More" : "عرض المزيد"} 
        />

        <div className='findus'>
          {locations.slice(0, 3).map((item, index) => (
            <img 
              key={item.id} 
              src={item.image || fallbackImages[index % fallbackImages.length]} 
              alt={lang === 'en' ? item.item_title_en : item.item_title_ar} 
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
 
export default Stations;