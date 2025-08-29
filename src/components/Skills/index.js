import React from 'react';
import './index.css';

const skillsData = [
  { name: 'HTML', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Bootstrap', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'React JS', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node JS', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express JS', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Python', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'MongoDB', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg' },
  { name: 'MySQL', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' },
  { name: 'SQLite', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
  { name: 'Responsive Design', imgSrc: 'https://tse1.mm.bing.net/th/id/OIP.wSMkWYTUAhaF8xtI65QTNwHaEK?rs=1&pid=ImgDetMain' },
  { name: 'No-Code/Low-Code', imgSrc: 'https://th.bing.com/th/id/OIP.ER0Ce2g7Km6tGgOdbIp_OAHaEO?rs=1&pid=ImgDetMain' },
  { name: 'AI Tools', imgSrc: 'https://tse4.mm.bing.net/th/id/OIP.qxL61yUKtmy_5wactqtOPgHaEb?rs=1&pid=ImgDetMain' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h1 className="skills-heading">Skills</h1>
        <div className="skills-grid">
          {skillsData.map((skill) => (
            <div key={skill.name} className="skill-card">
              <img src={skill.imgSrc} alt={`${skill.name} logo`} className="skill-icon" />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;