import React, { useEffect, useState } from "react";
import './Home.css'
import Nav from '../Components/Nav';
import Title from '../Common/Title-section.jsx';
import DownloadSection from '../Components/DownloadSection.jsx';
import charger from '../Assets/Img/charger.svg';
import imggroup from '../Assets/Img/imggroup.svg';
import dot from '../Assets/Img/dots.svg';
import Smallcard from '../Common/Smallcard.jsx';
import charger2 from '../Assets/Img/charging-image.png'
import locationicon from '../Assets/Icons/location.svg'
import phoneicon from '../Assets/Icons/phoneIcon.svg'
import lighteniceon from '../Assets/Icons/lightningIcon.svg'
import checkinicon from '../Assets/Icons/checkIcon.svg'
import Blog from '../Common/Blogpart.jsx'
import Footer from '../Components/Footer.jsx'
import { Link } from "react-router-dom";
import { supabase } from "../Supabase";
import Preloader from "./Preloader";

const Home = () => {
  const [lang, setLang] = useState('en');
  const [landingData, setLandingData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const { data, error } = await supabase
        .from("landing_page_content")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.log(error);
      } else {
        setLandingData(data);
      }

      setLoading(false);
    }

    getData();
  }, []);

  if (loading) {
    return <Preloader />;
  }

  const row1 = landingData.find(d => d.id === 1) || {};
  const row2 = landingData.find(d => d.id === 2) || {};
  const row7 = landingData.find(d => d.id === 7) || {};
  const row8 = landingData.find(d => d.id === 8) || {};
  const row9 = landingData.find(d => d.id === 9) || {};
  const row10 = landingData.find(d => d.id === 10) || {};

  return ( 
    <>
      <Nav onLanguageToggle={() => setLang(prev => prev === 'en' ? 'ar' : 'en')} />

      <div className='hero-container' dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="hero-bg-glow glow-left"></div>
        <div className="hero-bg-glow glow-right"></div>

        <div className="hero-model car-3d">
          <model-viewer
            src="/3dcar.glb"
            alt="3D Car"
            auto-rotate
            camera-controls
            disable-zoom
            shadow-intensity="2"
            exposure="1.5"
            camera-orbit="45deg 75deg 8m"
            style={{ width: "100%", height: "100%", background: "transparent", touchAction: "pan-y" }}
          ></model-viewer>
        </div>

        <div className='hero-text-overlay'>
          <h1 className='hero-main-title'>
            <span className="charge-the">
              {lang === 'en' 
                ? row1.section_title_en?.split(' ').slice(0, 2).join(' ') 
                : row1.section_title_ar?.split(' ').slice(0, 1).join(' ')}
            </span>
            <span className="way-forward">
              {lang === 'en' 
                ? row1.section_title_en?.split(' ').slice(2).join(' ') 
                : row1.section_title_ar?.split(' ').slice(1).join(' ')}
            </span>
          </h1>
          <div className="hero-button-wrapper">
            <button className='waycharge-btn'>WayCharge</button>
          </div>
        </div>

        <div className="hero-model charger-3d">
          <model-viewer 
            src="/charger.glb" 
            ar 
            ar-modes="webxr scene-viewer quick-look" 
            camera-controls 
            disable-zoom
            tone-mapping="neutral" 
            shadow-intensity="2" 
            exposure="1.2"
            min-camera-orbit="-30deg 77deg auto" 
            max-camera-orbit="77deg 77deg auto"
            auto-rotate
            style={{ width: "100%", height: "100%", background: "transparent", touchAction: "pan-y" }}
          >
            <div className="progress-bar hide" slot="progress-bar">
              <div className="update-bar"></div>
            </div>
            <button slot="ar-button" id="ar-button">
              View in your space
            </button>
            <div id="ar-prompt">
              <img src="https://modelviewer.dev/shared-assets/icons/hand.png" alt="hand icon" />
            </div>
          </model-viewer>
        </div>
      </div>

      <Title 
        t1={lang === 'en' ? (row10.subtitle_en || 'Application') : (row10.subtitle_ar || 'التطبيق')} 
        t2={lang === 'en' ? (row10.subtitle_en || 'Application') : (row10.subtitle_ar || 'التطبيق')} 
        linkText={lang === 'en' ? 'View More' : 'عرض المزيد'} 
        linkTo="/mobileapp"
      />

      <DownloadSection lang={lang} />

      <Title 
        t1={lang === 'en' ? (row2.section_title_en || 'How it works ?') : (row2.section_title_ar || 'كيف يعمل؟')} 
        t2={lang === 'en' ? (row2.section_title_en || 'How it works ?') : (row2.section_title_ar || 'كيف يعمل؟')} 
        linkText={lang === 'en' ? 'View More' : 'عرض المزيد'} 
        linkTo="/Howitworks"
      />

      <div className="steps-containerss" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        {/* LEFT SIDE */}
        <div className="steps-lefts">
          {[2, 3].map((id, index) => {
            const step = landingData.find(d => d.id === id);
            if (!step) return null;
            return (
              <div key={step.id} className={`stepss step-anim-${index + 1}`}>
                <div className="circles">{index + 1}</div>
                <div>
                  <h3 className='step-titless'>{lang === 'en' ? step.title_en : step.title_ar}</h3>
                  <p className='brief'>{lang === 'en' ? step.description_en : step.description_ar}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CENTER IMAGE */}
        <div className="charger-3d-container">
          <model-viewer
            src="/charger.glb"
            alt="3D Charger"
            auto-rotate
            camera-controls
            disable-zoom
            ar
            shadow-intensity="2"
            exposure="1.2"
            camera-orbit="0deg 75deg 6m"
            style={{
              width: "100%",
              height: "100%",
              background: "transparent",
              touchAction: "pan-y"
            }}
          ></model-viewer>
        </div>

        {/* RIGHT SIDE */}
        <div className="steps-rights">
          {[4, 12].map((id, index) => {
            const step = landingData.find(d => d.id === id);
            if (!step) return null;
            return (
              <div key={step.id} className={`stepss step-anim-${index + 3}`}>
                <div className="circles">{index + 3}</div>
                <div>
                  <h3 className='step-titless'>{lang === 'en' ? step.title_en : step.title_ar}</h3>
                  <p className='brief'>{lang === 'en' ? step.description_en : step.description_ar}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <section className='charging-stations'>
        <div className='contetnt-charging'>
          <div className='dot'>
            <img src={imggroup} alt="imgggroup" />
            <img className='dotss' src={dot} alt="imgggroup" />
          </div>

          <div className='nos'>
            {landingData.filter(d => d.id === 5 || d.id === 11 || d.id === 6).sort((a,b) => {
              const order = {5: 1, 11: 2, 6: 3};
              return order[a.id] - order[b.id];
            }).map(stat => (
              <h2 key={`val-${stat.id}`} className='number-one'>{lang === 'en' ? stat.title_en : stat.title_ar}</h2>
            ))}
          </div>

          <div className='nos'>
            {landingData.filter(d => d.id === 5 || d.id === 11 || d.id === 6).sort((a,b) => {
              const order = {5: 1, 11: 2, 6: 3};
              return order[a.id] - order[b.id];
            }).map(stat => (
              <h2 key={`lbl-${stat.id}`} className='text-ones'>{lang === 'en' ? stat.subtitle_en : stat.subtitle_ar}</h2>
            ))}
          </div>
        </div>
      </section>

      <Smallcard />

      <Title 
        t1={lang === 'en' ? (row7.section_title_en || 'Mission & Vision') : (row7.section_title_ar || 'المهمة والرؤية')} 
        t2={lang === 'en' ? (row7.section_title_en || 'Mission & Vision') : (row7.section_title_ar || 'المهمة والرؤية')} 
        linkText={lang === 'en' ? 'View More' : 'عرض المزيد'} 
      />

      <div className="features-section" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="features-image">
          <img src={charger2} alt="charger2" />
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="icon-box"><img src={locationicon} alt="icon"/></div>
            <h3 className='Track'>{lang === 'en' ? row7.title_en : row7.title_ar}</h3>
            <p className='Track'>{lang === 'en' ? row7.description_en : row7.description_ar}</p>
          </div>

          <div className="feature-card">
            <div className="icon-box"><img src={phoneicon} alt="icon"/></div>
            <h3 className='Track'>{lang === 'en' ? row7.meta_en : row7.meta_ar}</h3>
            <p className='Track'>{lang === 'en' ? "Simply scan the QR code and start charging with seamless payment integration." : "ببساطة، امسح رمز الاستجابة السريعة وابدأ الشحن بتكامل دفع سلس."}</p>
          </div>

          <div className="feature-card">
            <div className="icon-box"><img src={lighteniceon} alt="icon"/></div>
            <h3 className='Track'>{lang === 'en' ? row8.title_en : row8.title_ar}</h3>
            <p className='Track'>{lang === 'en' ? row8.description_en : row8.description_ar}</p>
          </div>

          <div className="feature-card">
            <div className="icon-box"><img src={checkinicon} alt="icon"/></div>
            <h3 className='Track'>{lang === 'en' ? row8.meta_en : row8.meta_ar}</h3>
            <p className='Track'>{lang === 'en' ? "Monitor your charging progress in real-time and get notified when complete." : "راقب تقدم الشحن الخاص بك في الوقت الفعلي واحصل على إشعار عند الانتهاء."}</p>
          </div>
        </div>
      </div>

      <Title 
        t1={lang === 'en' ? (row9.section_title_en || 'Blogs') : (row9.section_title_ar || 'المدونة')} 
        t2={lang === 'en' ? (row9.section_title_en || 'Blogs') : (row9.section_title_ar || 'المدونة')} 
        linkText={lang === 'en' ? 'View More' : 'عرض المزيد'} 
        linkTo="/Blog"
      />

      <Blog lang={lang} />
          
      <DownloadSection lang={lang} />
      <Footer lang={lang} />
    </> 
  );
}
 
export default Home;