import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home';
import Aboutus from './Pages/Aboutus';
import Mobileapp from './Pages/Mobileapp';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/mobileapp" element={<Mobileapp />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;