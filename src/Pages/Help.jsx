import React, { useState } from "react";
import Nav from '../Components/Nav';
import '../Pages/Help.css';
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

    return ( <>
    
    <Nav />
     <div className="faqContainer8">

      <p className="faqIntro8">
        Have questions about WayCharge? Our Frequently Asked Questions section
        is here to help. From how the service works to pricing, availability,
        and safety, you'll find clear and simple answers to guide you.
      </p>


      <div className="faqContent8">

        {/* LEFT MENU */}

        <div className="faqMenu8">
          <button className="faqButton8">Reviews</button>
          <button className="faqButton8">Services</button>
          <button className="faqButton8">Bundles</button>
          <button className="faqButton8">Our Team</button>
          <button className="faqButton8">Types of charges</button>
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


    </> );
}
 
export default Help;