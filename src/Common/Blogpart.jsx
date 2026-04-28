import React, { useRef } from 'react';
import './Blogpart.css'
import blog1 from '../Assets/Img/blog1.png'
import blog2 from '../Assets/Img/blog2.png'
import blog3 from '../Assets/Img/blog3.png'
import blog4 from '../Assets/Img/blog4.png'
import blog5 from '../Assets/Img/blog5.png'
import blog6 from '../Assets/Img/blog6.png'
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const Blogpart = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });

    // Move the container to the left by up to 75% of its width
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return ( 
      <section ref={targetRef} className="blog-scroll-section">
        <div className="blog-sticky-container">
          <motion.div style={{ x }} className="gallery">
            <div className="item">

              <img src={blog1} alt="EV Car" />

              <span className="date">Sep 06, 2022</span>
            </div>

            <div className="item">

              <img src={blog2} alt="EV Car" />

              <span className="date">Sep 06, 2022</span>
            </div>

            <div className="item">

              <img src={blog3} alt="EV Car" />

              <span className="date">Sep 06, 2022</span>
            </div>

            <div className="item">

              <img src={blog4} alt="EV Car" />

              <span className="date">Sep 06, 2022</span>
            </div>

            <div className="item">

                  <img src={blog5} alt="EV Car" />

              <span className="date">Sep 06, 2022</span>
            </div>

            <div className="item">

              <img src={blog6} alt="EV Car" />

              <span className="date">Sep 06, 2022</span>
            </div>

            <div className="item">
    
              <img src={blog1} alt="EV Car" />

              <span className="date">Sep 07, 2022</span>
            </div>

            <div className="item">

              <img src={blog2} alt="EV Car" />

              <span className="date">Sep 08, 2022</span>
            </div>

            <div className="item">

              <img src={blog3} alt="EV Car" />

              <span className="date">Sep 09, 2022</span>
            </div>
          </motion.div>
        </div>
      </section>
    );
}
 
export default Blogpart;