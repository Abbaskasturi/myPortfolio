import React, { useState } from 'react';
import './index.css'; 

const About = () => {

  const [isHighlighted, setIsHighlighted] = useState(false);

 
  const toggleHighlight = () => {
    setIsHighlighted(!isHighlighted);
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h1 className="about-heading">About me</h1>
        <div className="about-content">
         
          <div className="about-image-column">
            <div
              className={`about-image-wrapper ${isHighlighted ? 'highlighted' : ''}`}
              onClick={toggleHighlight}
              onTouchStart={toggleHighlight} 
              title="Click or touch to highlight!"
            >
              <img
                src="https://res.cloudinary.com/dsp32vyqi/image/upload/v1755608210/my_profile_epqxaw.jpg"
                alt="Abbas Kasturi"
                className="profile-picture"
              />
            </div>
          </div>

      
          <div className="about-text-column">
            <p>
              Full-stack MERN Developer dedicated to building and optimizing robust, user-focused web applications. Proven ability to architect scalable back-end services and create interactive front-end experiences
            </p>
            <ul>
              <li>As part of my curriculum at Vaagdevi College, I spearheaded the development of TradeLink, the core peer-to-peer engine for the Vaag Exchange app, which delivered a scalable platform for seamless exchanges..</li>
              <li>Possesses a strong aptitude for quickly learning and implementing new technologies in fast-paced development environments.</li>
              <li>Passionate about building innovative, user-friendly web solutions.</li>
              <li>Currently expanding my expertise by learning DSA to solve complex problems efficiently.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;