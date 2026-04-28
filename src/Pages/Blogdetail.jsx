import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav';
import MainTitle from '../Components/MainTitle';
import '../Pages/Blogdetail.css'
import blog1 from '../Assets/Img/blog1.png'
import Footer from '../Components/Footer.jsx'
import { supabase } from "../Supabase";

const Blogdetail = () => {
  const [lang, setLang] = useState('en');
  const [insightData, setInsightData] = useState({});

  useEffect(() => {
    async function getInsightData() {
      const { data, error } = await supabase
        .from("insights_posts")
        .select("*")
        .eq("id", 1)
        .single();

      if (error) {
        console.log(error);
      } else {
        setInsightData(data);
      }
    }

    getInsightData();
  }, []);

  return (  
    <>
      <Nav onLanguageToggle={() => setLang(prev => prev === 'en' ? 'ar' : 'en')} />
      
      <MainTitle 
        t1={lang === 'en' ? (insightData.section_title_en || 'CHARGING INSIGHTS') : (insightData.section_title_ar || 'رؤى الشحن')}
      />
      
      <div>
        <img className="blogdetail-image" src={blog1} alt="EV Car" />
      </div>

      <div className='bigbox' dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className='blog-box'>
          <h2 className='blog-title'>
            {lang === 'en' ? insightData.post_title_en : insightData.post_title_ar}
          </h2>
          <h2 className='blog-paragraph' style={{ whiteSpace: 'pre-line' }}>
            {lang === 'en' ? insightData.post_content_en : insightData.post_content_ar}
          </h2>
        </div>
      </div>

      <Footer />
    </>
  );
}
 
export default Blogdetail;