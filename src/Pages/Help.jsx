import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav';
import '../Pages/Help.css';
import MainTitle from '../Components/MainTitle';
import Footer from '../Components/Footer.jsx'
import { Link } from "react-router-dom";
import { supabase } from "../Supabase";

const Help = () => {
  const [lang, setLang] = useState('en');
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqData, setFaqData] = useState([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    async function getFaqsAPI() {
      const { data, error } = await supabase
        .from("faqs_content")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.log(error);
      } else {
        setFaqData(data);
      }
    }

    getFaqsAPI();
  }, []);

  // Hardcoded answers with bilingual support since the DB doesn't have answer fields
  const hardcodedAnswers = {
    'What makes WayCharge different?': {
       en: 'WayCharge offers fast, smart and reliable EV charging solutions designed for modern electric vehicles.',
       ar: 'توفر WayCharge حلول شحن سيارات كهربائية سريعة وذكية وموثوقة مصممة للسيارات الحديثة.'
    },
    'How do I request a charger?': {
       en: 'You can request a charger directly from the WayCharge mobile app or website.',
       ar: 'يمكنك طلب شاحن مباشرة من تطبيق WayCharge للهاتف المحمول أو الموقع الإلكتروني.'
    },
    'How do I pay for the service?': {
       en: 'You can pay securely using credit card, wallet, or subscription through the app.',
       ar: 'يمكنك الدفع بأمان باستخدام بطاقة الائتمان أو المحفظة أو الاشتراك من خلال التطبيق.'
    },
    'Is WayCharge safe for my car?': {
       en: 'Yes. Our chargers are certified and designed to protect your vehicle battery.',
       ar: 'نعم. أجهزة الشحن لدينا معتمدة ومصممة لحماية بطارية سيارتك.'
    },
    'Where is WayCharge available?': {
       en: 'WayCharge is expanding rapidly across major cities and highways.',
       ar: 'تتوسع WayCharge بسرعة عبر المدن الرئيسية والطرق السريعة.'
    },
    'How long does charging take?': {
       en: 'Charging time depends on the charger type and your vehicle battery capacity.',
       ar: 'يعتمد وقت الشحن على نوع الشاحن وسعة بطارية سيارتك.'
    }
  };

  const firstRow = faqData.find(f => f.id === 1) || {};

  // Extract unique categories for the sidebar
  const categoriesMap = new Map();
  faqData.forEach(item => {
    if (item.category_en && !categoriesMap.has(item.category_en)) {
      categoriesMap.set(item.category_en, { en: item.category_en, ar: item.category_ar });
    }
  });
  const categories = Array.from(categoriesMap.values());

  // Filter out placeholders that are optional
  const validFaqs = faqData.filter(f => f.question_en && !f.question_en.includes('Optional placeholder'));

  return ( 
    <>
      <Nav onLanguageToggle={() => setLang(prev => prev === 'en' ? 'ar' : 'en')} />
      
      <div className="faqContainer8" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <MainTitle 
          t1={lang === 'en' ? (firstRow.subtitle_en || 'FREQUENTLY ASKED QUESTIONS') : (firstRow.subtitle_ar || 'الأسئلة المتكررة')}
        />

        <h2 className="faqIntro8" style={{ whiteSpace: 'pre-line' }}>
          {lang === 'en' ? firstRow.description_en : firstRow.description_ar}
        </h2>

        <div className="faqContent8">
          {/* LEFT MENU */}
          <div className="faqMenu8">
            {categories.map((cat, idx) => (
              <Link key={idx} to={`/${cat.en.replace(/\s+/g, '')}`}>
                <h2 className="faqButton8">
                  {lang === 'en' ? cat.en : cat.ar}
                </h2>
              </Link>
            ))}
          </div>

          {/* FAQ LIST */}
          <div className="faqList8">
            {validFaqs.map((item, index) => {
              const answer = hardcodedAnswers[item.question_en];
              const answerText = answer ? (lang === 'en' ? answer.en : answer.ar) : '';
              
              return (
                <div
                  className={`faqItem8 ${activeIndex === index ? "faqActive8" : ""}`}
                  key={item.id}
                >
                  <div
                    className="faqQuestion8"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{index + 1}. {lang === 'en' ? item.question_en : item.question_ar}</span>
                    <span className="faqArrow8">
                      {activeIndex === index ? "▲" : "▼"}
                    </span>
                  </div>

                  <div className="faqAnswer8">
                    <p>{answerText}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </> 
  );
}
 
export default Help;