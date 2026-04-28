import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav';
import '../Pages/Bundles.css'
import MainTitle from '../Components/MainTitle';
import Footer from '../Components/Footer.jsx'
import { supabase } from "../Supabase";

const Bundles = () => {

const [lang, setLang] = useState('en');
const [Bundles, setBundles] = useState([]);

useEffect(() => {

  async function getBundlesAPI() {
    const { data, error } = await supabase
      .from("pricing_plans")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setBundles(data);
      console.log(data);
    }
  }

  getBundlesAPI();

}, []);

    return ( <>
    
    <Nav onLanguageToggle={() => setLang(prev => prev === 'en' ? 'ar' : 'en')} />
    <MainTitle 
    t1={lang === 'en' ? 'WAYCHARGE PRICING' : 'أسعار واي تشارج'}
    />

 <div className="container12">
      <h1 className="title12">{lang === 'en' ? 'Select the plan that fits you' : 'اختر الخطة المناسبة لك'}</h1>

      <div className="grid12">

        {Bundles.sort((a,b) => a.id - b.id).map((plan) => (
          <div key={plan.id} className="card12" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <h2 className="cardTitle12">{lang === 'en' ? plan.plan_name_en : plan.plan_name_ar}</h2>
            
            { (lang === 'en' ? plan.tagline_en : plan.tagline_ar) && (
              <h2 className="subtitle12">{lang === 'en' ? plan.tagline_en : plan.tagline_ar}</h2>
            )}

            { (lang === 'en' ? plan.description_en : plan.description_ar) && (
              <h2 className="list12" style={{ whiteSpace: 'pre-line', marginBottom: '15px' }}>
                {lang === 'en' ? plan.description_en : plan.description_ar}
              </h2>
            )}

            { (lang === 'en' ? plan.features_en : plan.features_ar) && (
              <ul className="list12" style={{ paddingInlineStart: lang === 'ar' ? '20px' : '20px' }}>
                {(lang === 'en' ? plan.features_en : plan.features_ar)?.split('\n').map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            )}

            { (lang === 'en' ? plan.extras_en : plan.extras_ar) && (
              <h2 className="extra12" style={{ whiteSpace: 'pre-line' }}>
                {lang === 'en' ? plan.extras_en : plan.extras_ar}
              </h2>
            )}

            { (lang === 'en' ? plan.bonus_en : plan.bonus_ar) && (
              <h2 className="bonus12" style={{ fontSize: '14px', whiteSpace: 'pre-line' }}>
                {lang === 'en' ? plan.bonus_en : plan.bonus_ar}
              </h2>
            )}

            { (lang === 'en' ? plan.price_en : plan.price_ar) && (
              <h2 className="priceBtn12">{lang === 'en' ? plan.price_en : plan.price_ar}</h2>
            )}
          </div>
        ))}

      </div>
    </div>

<Footer lang={lang} />

    </> );
}
 
export default Bundles;