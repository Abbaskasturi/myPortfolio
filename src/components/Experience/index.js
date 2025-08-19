import React, { useState } from 'react';
import './index.css';

const Experience = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const toggleHighlight = () => {
    setIsHighlighted(!isHighlighted);
  };

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <p className="experience-subtitle">WORK HISTORY</p>
        <h1 className="experience-title">My Experience</h1>
        <div className="experience-content">
          
          <div className="experience-left">
            <h2 className="company-name">MotionCut</h2>
            <p className="job-role">Frontend Developer</p>
            <div
              className={`company-image-wrapper ${isHighlighted ? 'highlighted' : ''}`}
              onClick={toggleHighlight}
              onTouchStart={toggleHighlight}
              title="Click or touch to highlight!"
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4E0BAQGaZ2BZ30-Wmw/img-crop_100/B4EZZnh0ZzHcAQ-/0/1745493641620?e=1758758400&v=beta&t=bQq_G64vf7_ZA3KkbMIaK0d_hVVvLetC3wOcAqRlOfg"
                alt="MotionCut Logo"
                className="company-image"
              />
            </div>
          </div>

         
          <div className="experience-right">
            <ul>
              <li>
                Gained hands-on experience building real-world frontend applications, from translating UI/UX designs into functional, high-quality code.
              </li>
              <li>
                Learned and applied industry best practices for the development lifecycle, including daily testing, debugging, and deployment.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;