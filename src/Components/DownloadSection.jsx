import React, { useEffect, useState } from "react";
import '../Components/DownloadSection.css';
import apple from '../Assets/Icons/apple.svg'
import play from '../Assets/Icons/play.svg'
import iphone from '../Assets/Img/iphone.png'
import { supabase } from "../Supabase";

const Appsec = () => {

const [Application, setApplication] = useState([]);
useEffect(() => {

  async function getApplicationAPI() {
    const { data, error } = await supabase
      .from("Application")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setApplication(data);
      console.log(data);
    }
  }

  getApplicationAPI();

}, []);


    return ( <>
    
<section className="app">
      <div className="hero-content">
        

{
Application
.filter(app => app.id === 1)
.map(app => (
      <h1 key={app.id} className="hero-title">
         {app.Title}
        </h1>
))
}
    
{
Application
.filter(app => app.id === 1)
.map(app => (
         <p key={app.id} className="hero-text">
          {app.Description}
        </p>
))
}
    

        <div className="buttons">
{
Application
.filter(app => app.id === 1)
.map(app => (
     <button key={app.id} className="btn apple">
            {app.Download}
          </button>
))
}
          
{
Application
.filter(app => app.id === 2)
.map(app => (
     <button key={app.id} className="btn apple">
            {app.Download}
          </button>
))
}
    
        </div>

      </div>

      <div className="hero-image">
        <img src={iphone} alt="app preview" />
      </div>
    </section>
    
    
    
    
    
    
    </> );
}
 
export default Appsec;