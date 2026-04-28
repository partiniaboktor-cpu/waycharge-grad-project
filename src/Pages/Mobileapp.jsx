import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav';
import Title from '../Common/Title-section.jsx';
import '../Supabase.jsx'
import './Mobileapp.css'
import mobileapp from '../Assets/Img/download_new.png'
import DownloadSection from '../Components/DownloadSection.jsx'
import Footer from '../Components/Footer.jsx';
import MainTitle from '../Components/MainTitle.jsx';
import { supabase } from "../Supabase";

const Mobileapp = () => {
  const [lang, setLang] = useState('en');
  const [appContent, setAppContent] = useState([]);

  useEffect(() => {
    async function getApplicationAPI() {
      const { data, error } = await supabase
        .from("app_download_content")
        .select("*");

      if (error) {
        console.log(error);
      } else {
        setAppContent(data);
      }
    }

    getApplicationAPI();
  }, []);

  return ( 
    <>
      <Nav onLanguageToggle={() => setLang(prev => prev === 'en' ? 'ar' : 'en')} />
      
      <div className="container4" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <MainTitle t1={lang === 'en' ? "DOWNLOAD APP NOW" : "حمل التطبيق الآن"} />

        <div className="content4">
          {/* Left Button */}
          {appContent.filter(app => app.id === 2).map(app => (
            <div key={app.id} className="btn4 left4">
              {lang === 'en' ? app.title_en : app.title_ar}
            </div>
          ))}

          {/* Phone */}
          <div className="phone4">
            <img src={mobileapp} alt="phone" style={{ width: '100%', height: 'auto', maxWidth: '600px' }} />
          </div>

          {/* Right Buttons */}
          {appContent.filter(app => app.id === 3).map(app => (
            <div key={app.id} className="btn4 right4 top4">
              {lang === 'en' ? app.title_en : app.title_ar}
            </div>
          ))}

          {appContent.filter(app => app.id === 4).map(app => (
            <div key={app.id} className="btn4 right4 bottom4">
              {lang === 'en' ? app.title_en : app.title_ar}
            </div>
          ))}

          {/* Bottom Left Button */}
          {appContent.filter(app => app.id === 5).map(app => (
            <div key={app.id} className="btn4 bottom-left4">
              {lang === 'en' ? app.title_en : app.title_ar}
            </div>
          ))}
        </div>
      </div>

      <div className='downloadnow' dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        {appContent.filter(app => app.id === 1).map(app => (
          Array(6).fill(0).map((_, i) => (
            <p key={`${app.id}-${i}`} className='download'>
              {lang === 'en' ? app.title_en : app.title_ar}
            </p>
          ))
        ))}
      </div>

      <DownloadSection lang={lang} />
      
      <Footer lang={lang} />
    </> 
  );
}
 
export default Mobileapp;