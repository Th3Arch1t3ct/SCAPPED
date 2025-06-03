import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Tourist from "./components/Tourist/Tourist";
import Purist from "./components/Purist/purist";

function RouteHandler() {
  const location = useLocation();

  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]');
    
    if (location.pathname === '/den') {
      favicon.href = '/GRsigned.png';
      document.title = 'Gilberto Ramiro™';
    } else {
      favicon.href = '/blue.png';
      document.title = 'GR™ ';
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Purist />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <RouteHandler />
    </Router>
  );
}

export default App;
