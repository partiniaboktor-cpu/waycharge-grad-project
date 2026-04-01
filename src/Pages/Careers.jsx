import React, { Component } from 'react';
import Nav from '../Components/Nav';
import '../Pages/Careers.css'
import MainTitle from '../Components/MainTitle';
import Title from '../Common/Title-section.jsx';
import Footer from '../Components/Footer.jsx';

const Careers = () => {
    return ( <>
    
    
    <Nav />
    

     <div className="jobsContainer7">

      {/* HERO */}
      <div className="jobsHero7">
           <MainTitle 
    t1='FIND JOBS IN WAYCHARGE'
    />

        <p className="jobsText7">
          Explore new career opportunities with us and become part of a team
          that is shaping the future of smart mobility. At WayCharge, we are
          always looking for passionate, innovative, and driven individuals who
          want to make an impact in the electric vehicle industry.
        </p>

        <button className="exploreBtn7">Explore now</button>
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
            <span className="jobTag7">Engineering</span>
            <h3 className="jobTitle7">Senior Battery Engineer</h3>
            <p className="jobDesc7">
              Lead the development of next-generation battery technology for
              our electric vehicle lineup.
            </p>
            <p className="jobLocation7">San Francisco, CA</p>
            <p className="jobType7">Full-time</p>
            <a className="applyBtn7">Apply Now →</a>
          </div>


          {/* CARD 2 */}
          <div className="jobCard7">
            <span className="jobTag7">Operations</span>
            <h3 className="jobTitle7">Charging Infrastructure Manager</h3>
            <p className="jobDesc7">
              Oversee the expansion and maintenance of our nationwide charging
              network.
            </p>
            <p className="jobLocation7">Austin, TX</p>
            <p className="jobType7">Full-time</p>
            <a className="applyBtn7">Apply Now →</a>
          </div>


          {/* CARD 3 */}
          <div className="jobCard7">
            <span className="jobTag7">Engineering</span>
            <h3 className="jobTitle7">Software Engineer - Energy Systems</h3>
            <p className="jobDesc7">
              Build intelligent energy management systems for optimized
              charging solutions.
            </p>
            <p className="jobLocation7">Remote</p>
            <p className="jobType7">Full-time</p>
            <a className="applyBtn7">Apply Now →</a>
          </div>


          {/* CARD 4 */}
          <div className="jobCard7">
            <span className="jobTag7">Design</span>
            <h3 className="jobTitle7">UX Designer</h3>
            <p className="jobDesc7">
              Create intuitive interfaces for our mobile app and in-vehicle
              charging experience.
            </p>
            <p className="jobLocation7">New York, NY</p>
            <p className="jobType7">Full-time</p>
            <a className="applyBtn7">Apply Now →</a>
          </div>


          {/* CARD 5 */}
          <div className="jobCard7">
            <span className="jobTag7">Sales</span>
            <h3 className="jobTitle7">Sales Representative</h3>
            <p className="jobDesc7">
              Drive adoption of electric charging solutions among commercial
              and residential clients.
            </p>
            <p className="jobLocation7">Multiple Locations</p>
            <p className="jobType7">Full-time</p>
            <a className="applyBtn7">Apply Now →</a>
          </div>


          {/* CARD 6 */}
          <div className="jobCard7">
            <span className="jobTag7">Strategy</span>
            <h3 className="jobTitle7">Sustainability Analyst</h3>
            <p className="jobDesc7">
              Analyze environmental impact and develop strategies for
              carbon-neutral operations.
            </p>
            <p className="jobLocation7">Seattle, WA</p>
            <p className="jobType7">Full-time</p>
            <a className="applyBtn7">Apply Now →</a>
          </div>

        </div>
      </div>
    </div>


<Footer />
    
    </> );
}
 
export default Careers;