import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home';
import Aboutus from './Pages/Aboutus';
import Mobileapp from './Pages/Mobileapp';
import Stations from './Pages/Stations';
import Howitworks from './Pages/Howitworks';
import Contactus from './Pages/Contactus';
import Careers from './Pages/Careers';
import Help from './Pages/Help';
import Reviews from './Pages/Reviews';
import Services from './Pages/Services';
import Blog from './Pages/Blog';
import Blogdetail from './Pages/Blogdetail';
import Bundles from './Pages/Bundles';
import Team from './Pages/Team';
import Chargers from './Chargers';
import Chargerdetail from './Pages/Chargerdetail';
import Chargertype from './Pages/Chargertype';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/mobileapp" element={<Mobileapp />} />
        <Route path="/stations" element={<Stations />} />
        <Route path="/Howitworks" element={<Howitworks />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/help" element={<Help />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Blogdetail" element={<Blogdetail />} />
        <Route path="/Bundles" element={<Bundles />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Chargers" element={<Chargers />} />
        <Route path="/Chargerdetail" element={<Chargerdetail />} />
        <Route path="/Chargertype" element={<Chargertype />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;