

import { TypeAnimation } from 'react-type-animation';
import './index.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content-glass">
        <p className="hero-subtitle">HELLO, I'M</p>
        <h1 className="hero-name">Abbas Kasturi</h1>
        
        <h2 className="hero-typewriter">
          <TypeAnimation
            sequence={[
              'A Tech Enthusiast',
              2000,
              'A Frontend Developer',
              2000,
              'A MERN Stack Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p className="hero-description">
          Full-stack MERN Developer dedicated to building and optimizing robust, user-focused web applications. Proven ability to architect scalable back-end services and create interactive front-end experiences
        </p>
        
        <a 
          href="/ABBASRESUME.pdf"
          download="ABBASRESUME.pdf"
          className="hero-button"
        >
          Download Resume
        </a>

      </div>
    </section>
  );
};

export default HeroSection;