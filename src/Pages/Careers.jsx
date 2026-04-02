import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav';
import '../Pages/Careers.css'
import MainTitle from '../Components/MainTitle';
import Title from '../Common/Title-section.jsx';
import Footer from '../Components/Footer.jsx';
import { supabase } from "../Supabase";

const Careers = () => {

const [Careers, setCareers] = useState([]);
useEffect(() => {

  async function getCareersAPI() {
    const { data, error } = await supabase
      .from("Careers")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setCareers(data);
      console.log(data);
    }
  }

  getCareersAPI();

}, []);

    return ( <>
    
    
    <Nav />
    

     <div className="jobsContainer7">

      {/* HERO */}
      <div className="jobsHero7">
           <MainTitle 
    t1='FIND JOBS IN WAYCHARGE'
    />
{
Careers
.filter(Careers => Careers.id === 1)
.map(Careers => (
  <h2 key={Careers.id} className="jobsText7"> {Careers.Description}</h2>
))
}

{
Careers
.filter(Careers => Careers.id === 1)
.map(Careers => (
  <h2 key={Careers.id} className="exploreBtn7"> {Careers.buttons}</h2>
))
}

      </div>


      {/* OPEN POSITIONS */}
      <div className="openSection7">

         <Title 
   t1="OPEN POSITIONS" 
   t2="OPEN POSITIONS" 
   linkText="View More" 
/>

        <p className="openText7">
          Discover your next opportunity and help us accelerate the transition
          to sustainable energy.
        </p>


        <div className="jobsGrid7">

          {/* CARD 1 */}
          <div className="jobCard7">
{
Careers
.filter(Careers => Careers.id === 2)
.map(Careers => (
  <h2 key={Careers.id} className="jobTag7"> {Careers.buttons}</h2>
))
}
{
Careers
.filter(Careers => Careers.id === 2)
.map(Careers => (
  <h2 key={Careers.id} className="jobTitle7"> {Careers.Title}</h2>
))
}
{
Careers
.filter(Careers => Careers.id === 2)
.map(Careers => (
  <h2 key={Careers.id} className="jobDesc7"> {Careers.Description_career}</h2>
))
}
{
Careers
.filter(Careers => Careers.id === 2)
.map(Careers => (
  <h2 key={Careers.id} className="jobLocation7"> {Careers.Location}</h2>
))
}       
{
Careers
.filter(Careers => Careers.id === 2)
.map(Careers => (
  <h2 key={Careers.id} className="jobType7"> {Careers.Time}</h2>
))
}       
{
Careers
.filter(Careers => Careers.id === 2)
.map(Careers => (
  <h2 key={Careers.id} className="applyBtn7"> {Careers.Available}</h2>
))
} 
          </div>


          {/* CARD 2 */}
          <div className="jobCard7">
{
Careers
.filter(Careers => Careers.id === 3)
.map(Careers => (
  <h2 key={Careers.id} className="jobTag7"> {Careers.buttons}</h2>
))
}
{
Careers
.filter(Careers => Careers.id === 3)
.map(Careers => (
  <h2 key={Careers.id} className="jobTitle7"> {Careers.Title}</h2>
))
}
{
Careers
.filter(Careers => Careers.id === 3)
.map(Careers => (
  <h2 key={Careers.id} className="jobDesc7"> {Careers.Description_career}</h2>
))
}
{
Careers
.filter(Careers => Careers.id === 3)
.map(Careers => (
  <h2 key={Careers.id} className="jobLocation7"> {Careers.Location}</h2>
))
}       
{
Careers
.filter(Careers => Careers.id === 3)
.map(Careers => (
  <h2 key={Careers.id} className="jobType7"> {Careers.Time}</h2>
))
}       
{
Careers
.filter(Careers => Careers.id === 3)
.map(Careers => (
  <h2 key={Careers.id} className="applyBtn7"> {Careers.Available}</h2>
))
} 
          </div>


          {/* CARD 3 */}
          <div className="jobCard7">
{
Careers
.filter(Careers => Careers.id === 4)
.map(Careers => (
  <h2 key={Careers.id} className="jobTag7"> {Careers.buttons}</h2>
))
}
{
Careers
.filter(Careers => Careers.id === 4)
.map(Careers => (
  <h2 key={Careers.id} className="jobTitle7"> {Careers.Title}</h2>
))
}
{
Careers
.filter(Careers => Careers.id === 4)
.map(Careers => (
  <h2 key={Careers.id} className="jobDesc7"> {Careers.Description_career}</h2>
))
}
{
Careers
.filter(Careers => Careers.id === 4)
.map(Careers => (
  <h2 key={Careers.id} className="jobLocation7"> {Careers.Location}</h2>
))
}       
{
Careers
.filter(Careers => Careers.id === 4)
.map(Careers => (
  <h2 key={Careers.id} className="jobType7"> {Careers.Time}</h2>
))
}       
{
Careers
.filter(Careers => Careers.id === 4)
.map(Careers => (
  <h2 key={Careers.id} className="applyBtn7"> {Careers.Available}</h2>
))
} 
          </div>


          {/* CARD 4 */}
          <div className="jobCard7">
{
Careers
.filter(Careers => Careers.id === 5)
.map(Careers => (
  <h2 key={Careers.id} className="jobTag7"> {Careers.buttons}</h2>
))
}
{
Careers
.filter(Careers => Careers.id === 5)
.map(Careers => (
  <h2 key={Careers.id} className="jobTitle7"> {Careers.Title}</h2>
))
}
{
Careers
.filter(Careers => Careers.id === 5)
.map(Careers => (
  <h2 key={Careers.id} className="jobDesc7"> {Careers.Description_career}</h2>
))
}
{
Careers
.filter(Careers => Careers.id === 5)
.map(Careers => (
  <h2 key={Careers.id} className="jobLocation7"> {Careers.Location}</h2>
))
}       
{
Careers
.filter(Careers => Careers.id === 5)
.map(Careers => (
  <h2 key={Careers.id} className="jobType7"> {Careers.Time}</h2>
))
}       
{
Careers
.filter(Careers => Careers.id === 5)
.map(Careers => (
  <h2 key={Careers.id} className="applyBtn7"> {Careers.Available}</h2>
))
} 
          </div>


          {/* CARD 5 */}
          <div className="jobCard7">
{
Careers
.filter(Careers => Careers.id === 6)
.map(Careers => (
  <h2 key={Careers.id} className="jobTag7"> {Careers.buttons}</h2>
))
}
{
Careers
.filter(Careers => Careers.id === 6)
.map(Careers => (
  <h2 key={Careers.id} className="jobTitle7"> {Careers.Title}</h2>
))
}
{
Careers
.filter(Careers => Careers.id === 6)
.map(Careers => (
  <h2 key={Careers.id} className="jobDesc7"> {Careers.Description_career}</h2>
))
}
{
Careers
.filter(Careers => Careers.id === 6)
.map(Careers => (
  <h2 key={Careers.id} className="jobLocation7"> {Careers.Location}</h2>
))
}       
{
Careers
.filter(Careers => Careers.id === 6)
.map(Careers => (
  <h2 key={Careers.id} className="jobType7"> {Careers.Time}</h2>
))
}       
{
Careers
.filter(Careers => Careers.id === 6)
.map(Careers => (
  <h2 key={Careers.id} className="applyBtn7"> {Careers.Available}</h2>
))
} 
          </div>


          {/* CARD 6 */}
          <div className="jobCard7">
{
Careers
.filter(Careers => Careers.id === 7)
.map(Careers => (
  <h2 key={Careers.id} className="jobTag7"> {Careers.buttons}</h2>
))
}
{
Careers
.filter(Careers => Careers.id === 7)
.map(Careers => (
  <h2 key={Careers.id} className="jobTitle7"> {Careers.Title}</h2>
))
}
{
Careers
.filter(Careers => Careers.id === 7)
.map(Careers => (
  <h2 key={Careers.id} className="jobDesc7"> {Careers.Description_career}</h2>
))
}
{
Careers
.filter(Careers => Careers.id === 7)
.map(Careers => (
  <h2 key={Careers.id} className="jobLocation7"> {Careers.Location}</h2>
))
}       
{
Careers
.filter(Careers => Careers.id === 7)
.map(Careers => (
  <h2 key={Careers.id} className="jobType7"> {Careers.Time}</h2>
))
}       
{
Careers
.filter(Careers => Careers.id === 7)
.map(Careers => (
  <h2 key={Careers.id} className="applyBtn7"> {Careers.Available}</h2>
))
} 
          </div>

        </div>
      </div>
    </div>


<Footer />
    
    </> );
}
 
export default Careers;