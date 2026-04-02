import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav';
import Title from '../Common/Title-section.jsx';
import '../Supabase.jsx'
import './Mobileapp.css'
import mobileapp from '../Assets/Img/mobileapp.svg'
import DownloadSection from '../Components/DownloadSection.jsx'
import Appsec from '../Components/DownloadSection.jsx';
import appsec from '../Assets/Img/appsc.svg'
import Footer from '../Components/Footer.jsx';
import MainTitle from '../Components/MainTitle.jsx';
import { supabase } from "../Supabase";
import Services from './Services';

const Mobileapp = () => {
  
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
    
    <Nav />
    
    <div className="container4">
<MainTitle
   t1="DOWNLOAD APP NOW" 
/>

      <div className="content4">
        {/* Left Button */}
{
Application
.filter(app => app.id === 1)
.map(app => (
  <div key={app.id} className="btn4 left4">
    {app.Services}
  </div>
))
}

        {/* Phone */}
        <div className="phone4">
          <img
            src={mobileapp}
            alt="phone"
          />
        </div>

        {/* Right Buttons */}
{
Application
.filter(app => app.id === 2)
.map(app => (
  <div key={app.id} className="btn4 right4 top4">
    {app.Services}
  </div>
))
}
{
Application
.filter(app => app.id === 3)
.map(app => (
  <div key={app.id} className="btn4 right4 bottom4">
    {app.Services}
  </div>
))
}

{
Application
.filter(app => app.id === 4)
.map(app => (
  <div key={app.id} className="btn4 bottom-left4">
    {app.Services}
  </div>
))
} 

        {/* Bottom Left */}
      </div>
    </div>
    



<div className='downloadnow'>
  {
Application
.filter(app => app.id === 3)
.map(app => (
      <p key={app.id}  className='download'>{app.Download}</p>

))
} 
   {
Application
.filter(app => app.id === 3)
.map(app => (
      <p key={app.id}  className='download'>{app.Download}</p>

))
} 
  {
Application
.filter(app => app.id === 3)
.map(app => (
      <p key={app.id}  className='download'>{app.Download}</p>

))
} 
  {
Application
.filter(app => app.id === 3)
.map(app => (
      <p key={app.id}  className='download'>{app.Download}</p>

))
} 
  {
Application
.filter(app => app.id === 3)
.map(app => (
      <p key={app.id}  className='download'>{app.Download}</p>

))
} 
  {
Application
.filter(app => app.id === 3)
.map(app => (
      <p key={app.id}  className='download'>{app.Download}</p>

))
} 

</div>

<DownloadSection />
    

<div className='sec2'>
    {
Application
.filter(app => app.id === 2)
.map(app => (
    <h1 key={app.id}  className='left-text'>{app.Description} </h1>

))
} 
 <img src={appsec} alt="app-screenshot" />

    {
Application
.filter(app => app.id === 3)
.map(app => (
    <h1 key={app.id}  className='left-text'>{app.Description} </h1>

))
} 
   
</div>

<Footer />

    </> );
}
 
export default Mobileapp;