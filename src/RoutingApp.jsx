import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home';
import Aboutus from './Pages/Aboutus';
import Mobileapp from './Pages/Mobileapp';
import Stations from './Pages/Stations';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/mobileapp" element={<Mobileapp />} />
        <Route path="/stations" element={<Stations />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;