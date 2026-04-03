import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Howitworks from "./Pages/Howitworks";
import Preloader from "./Pages/Preloader";
import Aboutus from "./Pages/Aboutus";

function AppContent() {

  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);

  }, [location]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/howitworks" element={<Howitworks />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;