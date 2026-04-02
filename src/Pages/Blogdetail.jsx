import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav';
import MainTitle from '../Components/MainTitle';
import '../Pages/Blogdetail.css'
import blog1 from '../Assets/Img/blog1.png'
import Footer from '../Components/Footer.jsx'
import { supabase } from "../Supabase";

const Blogdetail = () => {

const [Blog_posts, setBlog_posts] = useState([]);
useEffect(() => {

  async function getBlog_poststAPI() {
    const { data, error } = await supabase
      .from("Blog_posts")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setBlog_posts(data);
      console.log(data);
    }
  }

  getBlog_poststAPI();

}, []);

    return (  <>
    <Nav />
    
    <MainTitle 
    t1='CHARGING INSIGHTS'
    />
    
  <div >
      <img class="blogdetail-image" src={blog1} alt="EV Car" />
    </div>



<div className='bigbox'>
    <div className='blog-box'>
{
Blog_posts
.filter(Blog_posts => Blog_posts.id === 4)
.map(Blog_posts => (
  <h2 key={Blog_posts.id} className='blog-title'> {Blog_posts.post_title_en}</h2>
))
}
{
Blog_posts
.filter(Blog_posts => Blog_posts.id === 4)
.map(Blog_posts => (
  <h2 key={Blog_posts.id} className='blog-paragraph'> {Blog_posts.Description_en}</h2>
))
}
    </div>
</div>

<div className='bigbox'>
    <div className='blog-box'>
{
Blog_posts
.filter(Blog_posts => Blog_posts.id === 5)
.map(Blog_posts => (
  <h2 key={Blog_posts.id} className='blog-title'> {Blog_posts.post_title_en}</h2>
))
}
{
Blog_posts
.filter(Blog_posts => Blog_posts.id === 5)
.map(Blog_posts => (
  <h2 key={Blog_posts.id} className='blog-paragraph'> {Blog_posts.Description_en}</h2>
))
}
    </div>
</div>
<div className='bigbox'>
    <div className='blog-box'>
{
Blog_posts
.filter(Blog_posts => Blog_posts.id === 6)
.map(Blog_posts => (
  <h2 key={Blog_posts.id} className='blog-title'> {Blog_posts.post_title_en}</h2>
))
}
{
Blog_posts
.filter(Blog_posts => Blog_posts.id === 6)
.map(Blog_posts => (
  <h2 key={Blog_posts.id} className='blog-paragraph'> {Blog_posts.Description_en}</h2>
))
}
    </div>
</div>
<div className='bigbox'>
    <div className='blog-box'>
{
Blog_posts
.filter(Blog_posts => Blog_posts.id === 4)
.map(Blog_posts => (
  <h2 key={Blog_posts.id} className='blog-title'> {Blog_posts.post_title_en}</h2>
))
}
{
Blog_posts
.filter(Blog_posts => Blog_posts.id === 4)
.map(Blog_posts => (
  <h2 key={Blog_posts.id} className='blog-paragraph'> {Blog_posts.Description_en}</h2>
))
}
    </div>
</div>

<Footer />



    </>);
}
 
export default Blogdetail;