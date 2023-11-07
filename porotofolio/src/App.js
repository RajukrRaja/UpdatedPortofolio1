import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact.js';
import Navbar from './Components/Navbar/Navbar.js';
import MyBlog from './Components/Pages/MyBlog';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer.js';
import MyProject from './Components/Myproject/Myproject';
import Info from './Components/Info/Info.js';

function App() {
  const [currentRoute, setCurrentRoute] = useState(null);

  // Listen for route changes
  useEffect(() => {
    const onRouteChange = () => {
      setCurrentRoute(window.location.pathname);
    };

    onRouteChange(); // Initial check

    window.addEventListener('popstate', onRouteChange);
    return () => {
      window.removeEventListener('popstate', onRouteChange);
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/MyBlog" element={<MyBlog />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/MyProject" element={<MyProject />} />
        <Route path="/*" element={<Navigate to="/Home" />} />
      </Routes>
      {currentRoute === '/Home' ? (
        <>
           <Info></Info>
          <Services />
          <MyProject />
       
        </>
      ) : null}
      <Footer />
    </Router>
  );
}

export default App;
