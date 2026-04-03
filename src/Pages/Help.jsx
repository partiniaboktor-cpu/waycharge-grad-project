import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav';
import '../Pages/Help.css';
import MainTitle from '../Components/MainTitle';
import Footer from '../Components/Footer.jsx'
import { Link } from "react-router-dom";
import { supabase } from "../Supabase";

const Help = () => {
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "1. What makes WayCharge different ?",
      answer: "WayCharge offers fast, smart and reliable EV charging solutions designed for modern electric vehicles."
    },
    {
      question: "6. How do I request a charger?",
      answer: "You can request a charger directly from the WayCharge mobile app or website."
    },
    {
      question: "5. How long does charging take?",
      answer: "Charging time depends on the charger type and your vehicle battery capacity."
    },
    {
      question: "4. Where is WayCharge available?",
      answer: "WayCharge is expanding rapidly across major cities and highways."
    },
    {
      question: "3. Is WayCharge safe for my car?",
      answer: "Yes. Our chargers are certified and designed to protect your vehicle battery."
    },
    {
      question: "2. How do I pay for the service?",
      answer: "You can pay securely using credit card, wallet, or subscription through the app."
    }
  ];


const [Help, setHelp] = useState([]);
useEffect(() => {

  async function getHelpAPI() {
    const { data, error } = await supabase
      .from("Help")
      .select("*");

    if (error) {
      console.log(error);
    } else {
      setHelp(data);
      console.log(data);
    }
  }

  getHelpAPI();

}, []);

    return ( <>
    
    <Nav />
     <div className="faqContainer8">
  <MainTitle 
    t1='FREQUENTLY ASKED QUESTIONS'
    />
{
Help
.filter(Help => Help.id === 1)
.map(Help => (
  <h2 key={Help.id} className="faqIntro8"> {Help.Description}</h2>
))
}

      <div className="faqContent8">

        {/* LEFT MENU */}

        <div className="faqMenu8">

<Link to="/Reviews">
{
Help
.filter(Help => Help.id === 2)
.map(Help => (
  <h2 key={Help.id} className="faqButton8"> {Help.Titles}</h2>
))
}
</Link>
<Link to="/Services">
{
Help
.filter(Help => Help.id === 3)
.map(Help => (
  <h2 key={Help.id} className="faqButton8"> {Help.Titles}</h2>
))
}
</Link>
<Link to="/Bundles">
{
Help
.filter(Help => Help.id === 4)
.map(Help => (
  <h2 key={Help.id} className="faqButton8"> {Help.Titles}</h2>
))
}</Link>
<Link to="/Team">
{
Help
.filter(Help => Help.id === 5)
.map(Help => (
  <h2 key={Help.id} className="faqButton8"> {Help.Titles}</h2>
))
}</Link>
<Link to="/Chargers">
{
Help
.filter(Help => Help.id === 6)
.map(Help => (
  <h2 key={Help.id} className="faqButton8"> {Help.Titles}</h2>
))
}</Link>
        </div>


        {/* FAQ LIST */}

        <div className="faqList8">

          {faqData.map((item, index) => (

            <div
              className={`faqItem8 ${activeIndex === index ? "faqActive8" : ""}`}
              key={index}
            >

              <div
                className="faqQuestion8"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <span className="faqArrow8">
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </div>

              <div className="faqAnswer8">
                <p>{item.answer}</p>
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

<Footer />
    </> );
}
 
export default Help;