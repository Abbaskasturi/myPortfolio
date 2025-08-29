// App.js

import './App.css';
import Header from './components/Header'; 
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import ScrollToTop from './components/ScrollToTop';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks'; 

function App() {
  return (
    <div className="App">
      <Header /> 
      <SocialLinks /> 
      <ScrollToTop />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;