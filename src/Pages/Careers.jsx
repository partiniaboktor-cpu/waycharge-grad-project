import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav';
import '../Pages/Careers.css'
import MainTitle from '../Components/MainTitle';
import Title from '../Common/Title-section.jsx';
import Footer from '../Components/Footer.jsx';
import { supabase } from "../Supabase";

const Careers = () => {
  const [lang, setLang] = useState('en');
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getCareersAPI() {
      const { data, error } = await supabase
        .from("careers")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.log(error);
      } else {
        setJobs(data);
        console.log(data);
      }
    }

    getCareersAPI();
  }, []);

  const row1 = jobs.find(j => j.id === 1) || {};

  return (
    <>
      <Nav onLanguageToggle={() => setLang(prev => prev === 'en' ? 'ar' : 'en')} />

      <div className="jobsContainer7" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        {/* HERO */}
        <div className="jobsHero7">
          <MainTitle 
            t1={lang === 'en' ? (row1.section_title_en || 'FIND JOBS IN WAYCHARGE') : (row1.section_title_ar || 'وظائف في WayCharge')} 
          />
          <h2 className="jobsText7">
            {lang === 'en' ? row1.description_en : row1.description_ar}
          </h2>
          <h2 className="exploreBtn7">
            {lang === 'en' ? row1.subtitle_en : row1.subtitle_ar}
          </h2>
        </div>

        {/* OPEN POSITIONS */}
        <div className="openSection7">
          <Title 
            t1={lang === 'en' ? "OPEN POSITIONS" : "الوظائف المتاحة"} 
            t2={lang === 'en' ? "OPEN POSITIONS" : "الوظائف المتاحة"} 
            linkText={lang === 'en' ? "View More" : "عرض المزيد"} 
          />

          <p className="openText7">
            {lang === 'en' 
              ? "Discover your next opportunity and help us accelerate the transition to sustainable energy." 
              : "اكتشف فرصتك التالية وساعدنا في تسريع الانتقال إلى الطاقة المستدامة."}
          </p>

          <div className="jobsGrid7">
            {jobs.map(job => (
              <div key={job.id} className="jobCard7">
                <h2 className="jobTag7">
                  {lang === 'en' ? job.category_en : job.category_ar}
                </h2>
                <h2 className="jobTitle7">
                  {lang === 'en' ? job.job_title_en : job.job_title_ar}
                </h2>
                <h2 className="jobDesc7">
                  {lang === 'en' ? job.job_description_en : job.job_description_ar}
                </h2>
                <h2 className="jobLocation7">
                  {lang === 'en' ? job.location_en : job.location_ar}
                </h2>
                <h2 className="jobType7">
                  {lang === 'en' ? job.job_type_en : job.job_type_ar}
                </h2>
                <h2 className="applyBtn7">
                  {lang === 'en' ? job.action_text_en : job.action_text_ar}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
 
export default Careers;