import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';

const About = () => <section id="about"><h1>About Me</h1><p>This is the about section.</p></section>;
const Projects = () => <section id="projects"><h1>Projects</h1><p>This is the projects section.</p></section>;
const Contact = () => <section id="contact"><h1>Contact</h1><p>This is the contact section.</p></section>;

function App() {
  return (
    <div>
      <Navbar />
      <section id="intro">
        <Intro />
      </section>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;