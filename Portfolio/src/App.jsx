import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';

function App() {
  const [activePage, setActivePage] = useState('home');  // Set default page to 'home'

  return (
    <div>
      <Navbar setActivePage={setActivePage} />
      {activePage === 'home' && <Intro />}
      {activePage === 'about' && <About />}
      {activePage === 'projects' && <Projects />}
      {activePage === 'contact' && <Contact />}
    </div>
  );
}

export default App
