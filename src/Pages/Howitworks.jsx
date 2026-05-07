import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav';
import CinematicStoryboard from "../Components/CinematicStoryboard";
import MainTitle from '../Components/MainTitle';
import './Howitworks.css'
import Footer from '../Components/Footer.jsx'
import { supabase } from "../Supabase";

const Howitworks = () => {
  const [lang, setLang] = useState('en');
  const [howData, setHowData] = useState([]);

  useEffect(() => {
    async function getHowDataAPI() {
      const { data, error } = await supabase
        .from("how_it_works")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.log(error);
      } else {
        setHowData(data);
      }
    }

    getHowDataAPI();
  }, []);

  // Safe checks for the first element
  const mainData = howData.find(item => item.id === 1) || {};

  return ( 
    <>
      <Nav onLanguageToggle={() => setLang(prev => prev === 'en' ? 'ar' : 'en')} />
      
      <MainTitle 
        t1={lang === 'en' ? (mainData.section_title_en || "HOW WAYCHARGE WORKS") : (mainData.section_title_ar || "كيف يعمل WayCharge")} 
      />

      <section className="how-section">
        <p className="descriptions" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          {lang === 'en' ? mainData.section_description_en : mainData.section_description_ar}
        </p>

        <div className="timeline" dir="ltr">
          <svg className="path" viewBox="0 0 1000 200">
            <path
              d="M0,150 C150,50 300,200 450,120 C600,50 750,180 1000,40"
              fill="transparent"
              stroke="#8DC63F"
              strokeWidth="4"
              className="draw-path"
            />
          </svg>

          {howData.map((step, index) => (
            <div key={step.id} className={`step step${index + 1}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              <h3 className={index === 0 ? 'con' : ''}>
                {lang === 'en' ? step.title_en : step.title_ar}
              </h3>
              <p>
                {lang === 'en' ? step.description_en : step.description_ar}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CinematicStoryboard />

      <Footer lang={lang} />
    </> 
  );
}
 
export default Howitworks;