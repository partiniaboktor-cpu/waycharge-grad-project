import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav';
import Blogpart from '../Common/Blogpart.jsx'
import '../Pages/Blog.css'
import Footer from '../Components/Footer.jsx'
import MainTitle from '../Components/MainTitle';
import { supabase } from "../Supabase";

const Blog = () => {
  const [lang, setLang] = useState('en');
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    async function getBlogDataAPI() {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.log(error);
      } else {
        setBlogData(data);
      }
    }

    getBlogDataAPI();
  }, []);

  const firstRow = blogData.find(b => b.id === 1) || {};

  return ( 
    <>
      <Nav onLanguageToggle={() => setLang(prev => prev === 'en' ? 'ar' : 'en')} />

      <MainTitle 
        t1={lang === 'en' ? (firstRow.section_title_en || 'BEST OF THE WEEK') : (firstRow.section_title_ar || 'الأفضل هذا الأسبوع')}
      />

      <Blogpart lang={lang} />
      
      {blogData.map((blog) => (
        <div key={blog.id} className='bigbox' dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          <div className='blog-box'>
            <h2 className='blog-title'>
              {lang === 'en' ? blog.post_title_en : blog.post_title_ar}
            </h2>
            <h2 className='blog-paragraph'>
              {lang === 'en' ? blog.post_content_en : blog.post_content_ar}
            </h2>
          </div>
        </div>
      ))}

      <Footer />
    </> 
  );
}
 
export default Blog;