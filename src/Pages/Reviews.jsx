import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav';
import '../Pages/Reviews.css'
import sarah from '../Assets/Img/sarah.png'
import diana from '../Assets/Img/diana.png'
import alex from '../Assets/Img/alex.png'
import MainTitle from '../Components/MainTitle';
import Footer from '../Components/Footer.jsx'
import { supabase } from "../Supabase";

const Reviews = () => {
  const [lang, setLang] = useState('en');
  const [reviewsData, setReviewsData] = useState([]);

  const images = {
    1: sarah,
    2: diana,
    3: alex
  };

  useEffect(() => {
    async function getReviewsAPI() {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.log(error);
      } else {
        setReviewsData(data);
      }
    }

    getReviewsAPI();
  }, []);

  const firstRow = reviewsData.find(r => r.id === 1) || {};

  return ( 
    <>
      <Nav onLanguageToggle={() => setLang(prev => prev === 'en' ? 'ar' : 'en')} />

      <div className="testimonialsContainer9" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <MainTitle 
          t1={lang === 'en' ? (firstRow.section_title_en || 'Testimonials') : (firstRow.section_title_ar || 'آراء العملاء')}
        />

        <h2 className="testimonialsTitle9">
          {lang === 'en' ? (firstRow.subtitle_en || 'What our customers are saying') : (firstRow.subtitle_ar || 'ماذا يقول عملاؤنا')}
        </h2>

        <div className="testimonialsGrid9">
          {reviewsData.map(review => (
            <div key={review.id} className="testimonialCard9">
              <img
                src={images[review.id]}
                className="testimonialImage9"
                alt="customer"
              />
              <h2 className="testimonialName9">{lang === 'en' ? review.name_en : review.name_ar}</h2>
              <h2 className="testimonialRole9">{lang === 'en' ? review.role_en : review.role_ar}</h2>
              <h2 className="testimonialText9">{lang === 'en' ? review.review_en : review.review_ar}</h2>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="quoteSection9">
          <div className="quoteIcon9">❝❝</div>
          <h2 className="quoteTitle9">
            {lang === 'en' ? firstRow.highlight_title_en : firstRow.highlight_title_ar}
          </h2>
          <h2 className="quoteText9">
            {lang === 'en' ? firstRow.highlight_text_en : firstRow.highlight_text_ar}
          </h2>
        </div>
      </div>
      
      <Footer />
    </> 
  );
}
 
export default Reviews;