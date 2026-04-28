import React, { useEffect, useState } from "react";
import '../Components/DownloadSection.css';
import apple from '../Assets/Icons/apple.svg'
import play from '../Assets/Icons/play.svg'
import download_new from '../Assets/Img/download_new.png'
import { supabase } from "../Supabase";
import { motion } from "framer-motion";

const Appsec = ({ lang = 'en' }) => {
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
      <motion.section 
        className="download-app-section" 
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
        initial={{ x: 300, opacity: 0, rotate: 10 }}
        whileInView={{ x: 0, opacity: 1, rotate: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 20, 
          duration: 0.8 
        }}
        viewport={{ once: true }}
      >
        <div className="download-container">
          {appContent.filter(app => app.id === 1).map(app => (
            <h2 key={app.id} className="download-title">
              {lang === 'en' ? app.description_en : app.description_ar}
            </h2>
          ))}

          <div className="store-buttons" style={{ flexDirection: lang === 'ar' ? 'row-reverse' : 'row' }}>
            {appContent.filter(app => app.id === 4).map(app => (
              <a key={app.id} href="#" className="store-btn">
                <img src={apple} alt={lang === 'en' ? app.title_en : app.title_ar} />
                <div className="btn-text">
                  <span className="small">{lang === 'en' ? app.title_en.split(' ')[0] + ' ' + app.title_en.split(' ')[1] : app.title_ar.split(' ').slice(0,2).join(' ')}</span>
                  <span className="large">{lang === 'en' ? app.platform_en : app.platform_ar}</span>
                </div>
              </a>
            ))}
            
            {appContent.filter(app => app.id === 5).map(app => (
              <a key={app.id} href="#" className="store-btn">
                <img src={play} alt={lang === 'en' ? app.title_en : app.title_ar} />
                <div className="btn-text">
                  <span className="small">{lang === 'en' ? app.title_en.split(' ').slice(0, 3).join(' ') : app.title_ar.split(' ').slice(0, 2).join(' ')}</span>
                  <span className="large">{lang === 'en' ? app.platform_en : app.platform_ar}</span>
                </div>
              </a>
            ))}
          </div>

          {appContent.filter(app => app.id === 6).map(app => (
            <p key={app.id} className="download-slogan">
              {lang === 'en' ? app.title_en : app.title_ar}
            </p>
          ))}

          <div className="app-preview-container">
            <img src={download_new} alt="WayCharge App Preview" className="app-preview-img" />
          </div>
        </div>
      </motion.section>
    </> 
  );
}
 
export default Appsec;