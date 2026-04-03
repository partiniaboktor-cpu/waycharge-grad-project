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

const [Team, setTeam] = useState([]);
useEffect(() => {

  async function getTeamAPI() {
    const { data, error } = await supabase
      .from("Team")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setTeam(data);
      console.log(data);
    }
  }

  getTeamAPI();

}, []);

    return ( <>
    <Nav />
    
    <div className="container13">
      <div className="topSection13">
        <div className="textSection13">
{
Team
.filter(Team => Team.id === 1)
.map(Team => (
  <h2 key={Team.id} className="title13"> {Team.Name}</h2>
))
}
{
Team
.filter(Team => Team.id === 1)
.map(Team => (
  <h2 key={Team.id} className="role13"> {Team.Job_title}</h2>
))
}
{
Team
.filter(Team => Team.id === 1)
.map(Team => (
  <h2 key={Team.id} className="desc13"> {Team.Description}</h2>
))
}
        </div>

        <div className="imageSection13">
{
Team
.filter(Team => Team.id === 1)
.map(Team => (
   <img
          key={Team.id}
            src={Team.image}
            alt="profile"
            className="mainImage13"
          />))
}
       
        </div>
      </div>

      <div className="teamSection13">
        <div className="card13">
{
Team
.filter(Team => Team.id === 2)
.map(Team => (
          <img key={Team.id} src= {Team.image}alt="mypic" />))
}
{
Team
.filter(Team => Team.id === 2)
.map(Team => (
 <p key={Team.id}>{Team.Name}</p>))
}
         
        </div>

        <div className="card13">
{
Team
.filter(Team => Team.id === 3)
.map(Team => (
          <img key={Team.id} src= {Team.image}alt="mypic" />))
}
{
Team
.filter(Team => Team.id === 3)
.map(Team => (
 <p key={Team.id}>{Team.Name}</p>))
}

        </div>

        <div className="card13">
{
Team
.filter(Team => Team.id === 4)
.map(Team => (
          <img key={Team.id} src= {Team.image}alt="mypic" />))
}
{
Team
.filter(Team => Team.id === 4)
.map(Team => (
 <p key={Team.id}>{Team.Name}</p>))
}
        </div>

        <div className="card13">
{
Team
.filter(Team => Team.id === 5)
.map(Team => (
          <img key={Team.id} src= {Team.image}alt="mypic" />))
}
{
Team
.filter(Team => Team.id === 5)
.map(Team => (
 <p key={Team.id}>{Team.Name}</p>))
}
        </div>
      </div>

      <div className="bottomSection13">
{
Team
.filter(Team => Team.id === 1)
.map(Team => (
     <h2 key={Team.id} className="buildText13">
          {Team.Title}
        </h2>))
}
    
{
Team
.filter(Team => Team.id === 1)
.map(Team => (
 <p key={Team.id} className="bottomDesc13">{Team.team_description}</p>))
}

      </div>
    </div>
    

<Footer />

    </> );
}
 
export default Team;