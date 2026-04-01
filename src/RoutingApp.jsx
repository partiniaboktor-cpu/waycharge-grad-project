import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home';
import Aboutus from './Pages/Aboutus';
import Mobileapp from './Pages/Mobileapp';
import Stations from './Pages/Stations';
import Howitworks from './Pages/Howitworks';
import Contactus from './Pages/Contactus';
import Careers from './Pages/Careers';

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



      </Routes>
    </BrowserRouter>
  );
}

export default App;