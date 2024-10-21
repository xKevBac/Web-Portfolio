import React from 'react';
import './Navbar.css'

const Navbar = ({ setActivePage }) => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem', backgroundColor: '#282c34' }}>
      <button style={{ color: 'white', background: 'none', border: 'none' }} onClick={() => setActivePage('home')}>Home</button>
      <button style={{ color: 'white', background: 'none', border: 'none' }} onClick={() => setActivePage('about')}>About</button>
      <button style={{ color: 'white', background: 'none', border: 'none' }} onClick={() => setActivePage('projects')}>Projects</button>
      <button style={{ color: 'white', background: 'none', border: 'none' }} onClick={() => setActivePage('contact')}>Contact</button>
    </nav>
  );
};

export default Navbar;
