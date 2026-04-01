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



      </Routes>
    </BrowserRouter>
  );
}

export default App;