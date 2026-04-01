import Nav from '../Components/Nav';
import MainTitle from '../Components/MainTitle';
import './Howitworks.css'
import video from '../Assets/Videos/video.png'
import Footer from '../Components/Footer.jsx'
const howitworks = () => {

    return ( <>
    
    <Nav />
    
    <MainTitle 
    t1="HOW WAYCHARGE WORKS" 
    />

<section className="how-section">

      <p className="description">
        WayCharge works in three simple steps: request, connect, and charge.
        Through the app, you choose your location and request a portable
        charger.
      </p>

      <div className="timeline">
        <svg className="path" viewBox="0 0 1000 200">
          <path
            d="M0,150 C150,50 300,200 450,120 C600,50 750,180 1000,40"
            fill="transparent"
            stroke="#8DC63F"
            strokeWidth="4"
            className="draw-path"
          />
        </svg>

        <div className="step step1">
          <h3 className='con'>Connect</h3>
          <p >Connect charger cable with car & station.</p>
        </div>

        <div className="step step2">
          <h3>Request</h3>
          <p>Choose location & request charger.</p>
        </div>

        <div className="step step3">
          <h3>Start</h3>
          <p>Scan your phone to start charging.</p>
        </div>

        <div className="step step4">
          <h3>Charge</h3>
          <p>Your car charges instantly.</p>
        </div>
      </div>
    </section>


<div>
      <video className='video' width="600" controls>
        <source  src={video} type="video/mp4" />
      </video>
    </div>

<Footer />
    </> );
}
 
export default howitworks;