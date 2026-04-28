import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav';
import '../Pages/Team.css'
import partinia from '../Assets/Img/partinia.png'
import perla from '../Assets/Img/perla.png'
import paula from '../Assets/Img/paula.png'
import marian from '../Assets/Img/marian.png'
import partinia2 from '../Assets/Img/partinia2.png'
import Footer from '../Components/Footer.jsx'
import { supabase } from "../Supabase";

const Team = () => {
  const [lang, setLang] = useState('en');
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    async function getTeamAPI() {
      const { data, error } = await supabase
        .from("team_content")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.log(error);
      } else {
        setTeamData(data);
        console.log(data);
      }
    }

    getTeamAPI();
  }, []);

  const teamImages = {
    1: partinia2,
    2: perla,
    3: marian,
    4: paula,
    5: partinia
  };

  return (
    <>
      <Nav onLanguageToggle={() => setLang(prev => prev === 'en' ? 'ar' : 'en')} />
      
      <div className="container13" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="topSection13">
          <div className="textSection13">
            {teamData.filter(t => t.id === 1).map(t => (
              <React.Fragment key={t.id}>
                <h2 className="title13"> {lang === 'en' ? t.name_en : t.name_ar}</h2>
                <h2 className="role13"> {lang === 'en' ? t.role_en : t.role_ar}</h2>
                <h2 className="desc13"> {lang === 'en' ? t.bio_en : t.bio_ar}</h2>
              </React.Fragment>
            ))}
          </div>

          <div className="imageSection13">
            {teamData.filter(t => t.id === 1).map(t => (
              <img
                key={t.id}
                src={t.image || teamImages[t.id]}
                alt="profile"
                className="mainImage13"
              />
            ))}
          </div>
        </div>

        <div className="teamSection13">
          {[2, 3, 4, 5].map(id => {
            const member = teamData.find(t => t.id === id);
            if (!member) return null;
            return (
              <div key={member.id} className="card13">
                <img src={member.image || teamImages[member.id]} alt="mypic" />
                <p>{lang === 'en' ? member.name_en : member.name_ar}</p>
              </div>
            );
          })}
        </div>

        <div className="bottomSection13">
          {teamData.filter(t => t.id === 1).map(t => (
            <React.Fragment key={t.id}>
              <h2 className="buildText13">
                {lang === 'en' ? t.section_title_en : t.section_title_ar}
              </h2>
              <p className="bottomDesc13">
                {lang === 'en' ? t.section_description_en : t.section_description_ar}
              </p>
            </React.Fragment>
          ))}
        </div>
      </div>
      
      <Footer />
    </>
  );
}
 
export default Team;