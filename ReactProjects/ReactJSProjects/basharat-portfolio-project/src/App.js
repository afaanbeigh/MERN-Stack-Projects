import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './ComponentFiles/AboutMeComponent';
import Publications from './ComponentFiles/PublicationsComponent';
import Courses from './ComponentFiles/CoursesComponent';
import Contact from './ComponentFiles/ContactComponent';
import Navbar from './ComponentFiles/NavbarComponent';
import Footer from './ComponentFiles/FooterComponent';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe/>} />
        <Route path="/publications" element={<Publications/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;