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

const [Reviews, setReviews] = useState([]);
useEffect(() => {

  async function getReviewsAPI() {
    const { data, error } = await supabase
      .from("Reviews")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setReviews(data);
      console.log(data);
    }
  }

  getReviewsAPI();

}, []);

    return ( <>
    
    <Nav />

<div className="testimonialsContainer9">

<MainTitle 
t1='Testimonials'
/>

      <h2 className="testimonialsTitle9">What our customers are saying</h2>

      <div className="testimonialsGrid9">

        {/* Card 1 */}
        <div className="testimonialCard9">
{
Reviews
.filter(Reviews => Reviews.id === 1)
.map(Reviews => (
     <img
            key={Reviews.id}
            src= {Reviews.image}
            className="testimonialImage9"
            alt="customer"
          />))
}  
{
Reviews
.filter(Reviews => Reviews.id === 1)
.map(Reviews => (
  <h2 key={Reviews.id} className="testimonialName9"> {Reviews.Name}</h2>
))
}
{
Reviews
.filter(Reviews => Reviews.id === 1)
.map(Reviews => (
  <h2 key={Reviews.id} className="testimonialRole9"> {Reviews.job_description}</h2>
))
}
   {
Reviews
.filter(Reviews => Reviews.id === 1)
.map(Reviews => (
  <h2 key={Reviews.id} className="testimonialText9"> {Reviews.review_en}</h2>
))
}    

      
        </div>

        {/* Card 2 */}
        <div className="testimonialCard9">
       {
Reviews
.filter(Reviews => Reviews.id === 2)
.map(Reviews => (
     <img
            key={Reviews.id}
            src= {Reviews.image}
            className="testimonialImage9"
            alt="customer"
          />))
}  

{
Reviews
.filter(Reviews => Reviews.id === 2)
.map(Reviews => (
  <h2 key={Reviews.id} className="testimonialName9"> {Reviews.Name}</h2>
))
}
{
Reviews
.filter(Reviews => Reviews.id === 2)
.map(Reviews => (
  <h2 key={Reviews.id} className="testimonialRole9"> {Reviews.job_description}</h2>
))
}
{
Reviews
.filter(Reviews => Reviews.id === 2)
.map(Reviews => (
  <h2 key={Reviews.id} className="testimonialText9"> {Reviews.review_en}</h2>
))
}   
        </div>

        {/* Card 3 */}
        <div className="testimonialCard9">
{
Reviews
.filter(Reviews => Reviews.id === 3)
.map(Reviews => (
     <img
            key={Reviews.id}
            src= {Reviews.image}
            className="testimonialImage9"
            alt="customer"
          />))
}  
     
{
Reviews
.filter(Reviews => Reviews.id === 3)
.map(Reviews => (
  <h2 key={Reviews.id} className="testimonialName9"> {Reviews.Name}</h2>
))
}
{
Reviews
.filter(Reviews => Reviews.id === 3)
.map(Reviews => (
  <h2 key={Reviews.id} className="testimonialRole9"> {Reviews.job_description}</h2>
))
}
   {
Reviews
.filter(Reviews => Reviews.id === 3)
.map(Reviews => (
  <h2 key={Reviews.id} className="testimonialText9"> {Reviews.review_en}</h2>
))
}  
        </div>

      </div>


      {/* Quote Section */}

      <div className="quoteSection9">

        <div className="quoteIcon9">❝❝</div>

{
Reviews
.filter(Reviews => Reviews.id === 4)
.map(Reviews => (
  <h2 key={Reviews.id} className="quoteTitle9"> {Reviews.job_description}</h2>
))
}    

      
{
Reviews
.filter(Reviews => Reviews.id === 4)
.map(Reviews => (
  <h2 key={Reviews.id} className="quoteText9"> {Reviews.review_en}</h2>
))
}  
      

      </div>

    </div>
<Footer />
    
    </> );
}
 
export default Reviews;