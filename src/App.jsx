// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './About'; 
import Hobbies from './Hobbies';
import Contact from './Contact'; // Import Contact page
import Navbar from './Navbar'; // Import the Navbar

const App = () => {
  return (
    <div>
      <Navbar /> {/* Add Navbar to the top */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Hobbies" element={<Hobbies />} /> {/* Add Hobbies route */}
        <Route path="/Contact" element={<Contact />} /> {/* Add Contact route */}
      </Routes>
    </div>
  );
};

export default App;
