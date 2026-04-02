import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav';
import Blogpart from '../Common/Blogpart.jsx'
import '../Pages/Blog.css'
import Footer from '../Components/Footer.jsx'
import MainTitle from '../Components/MainTitle';
import { supabase } from "../Supabase";

const Blog = () => {

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
    
    return ( <>
    
    <Nav />

    <MainTitle 
    t1='BEST OF THE WEEK'
    />

    <Blogpart />
    
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
    </> );
}
 
export default Blog;