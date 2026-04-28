import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav';
import '../Pages/Contactus.css';
import MainTitle from '../Components/MainTitle';
import contuctus from '../Assets/Img/contactus.png'
import Footer from '../Components/Footer.jsx'
import { supabase } from "../Supabase";

const Contactus = () => {
  const [lang, setLang] = useState('en');
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    async function getContactAPI() {
      const { data, error } = await supabase
        .from("contact_content")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.log(error);
      } else {
        setContactData(data);
      }
    }

    getContactAPI();
  }, []);

  // Safe checks for mapping
  const row1 = contactData.find(c => c.id === 1) || {};
  const row2 = contactData.find(c => c.id === 2) || {};
  const row3 = contactData.find(c => c.id === 3) || {};

  return ( 
    <>
      <Nav onLanguageToggle={() => setLang(prev => prev === 'en' ? 'ar' : 'en')} />
    
      <button className='contact-btn'>
        {lang === 'en' ? (row1.section_title_en || 'Contact') : (row1.section_title_ar || 'تواصل معنا')}
      </button>
      
      <MainTitle 
        t1={lang === 'en' ? (row1.subtitle_en || 'GET IN TOUCH') : (row1.subtitle_ar || 'تواصل معنا')}
      />

      <section className="contact-section6" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        
        {/* Left */}
        <div className="contact-left6">
          <p className="contact-desc6">
            {lang === 'en' ? row1.description_en : row1.description_ar}
          </p>

          {/* Info Cards */}
          <div className="info-card6">
            <span>📧</span>
            <div>
              <h4>{lang === 'en' ? row1.contact_label_en : row1.contact_label_ar}</h4>
              <p>{row1.contact_value}</p>
            </div>
          </div>

          <div className="info-card6">
            <span>📞</span>
            <div>
              <h4>{lang === 'en' ? row2.contact_label_en : row2.contact_label_ar}</h4>
              <p>{row2.contact_value}</p>
            </div>
          </div>

          <div className="info-card6">
            <span>📍</span>
            <div>
              <h4>{lang === 'en' ? row3.contact_label_en : row3.contact_label_ar}</h4>
              <p>{row3.contact_value}</p>
            </div>
          </div>

          {/* Image */}
          <img
            src={contuctus}
            alt="contact"
            className="contact-image6"
          />
        </div>

        {/* Right Form */}
        <div className="contact-right6">
          <form className="contact-form6">
            <input 
              type="text" 
              placeholder={lang === 'en' ? row1.field_placeholder_en : row1.field_placeholder_ar} 
            />
            <input 
              type="email" 
              placeholder={lang === 'en' ? row2.field_placeholder_en : row2.field_placeholder_ar} 
            />
            <textarea 
              placeholder={lang === 'en' ? row3.field_placeholder_en : row3.field_placeholder_ar} 
            />
            <button type="submit">
              {lang === 'en' ? row1.button_text_en : row1.button_text_ar}
            </button>
          </form>
        </div>
      </section>
      
      <Footer />
    </> 
  );
}
 
export default Contactus;