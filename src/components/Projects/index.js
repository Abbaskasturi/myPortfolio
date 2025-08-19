import React from 'react';
import './index.css';


const projectsData = [
  {
    title: 'Nxt Trendz - Ecommerce',
    description: 'A cutting-edge e-commerce platform inspired by Amazon and Flipkart with secure authentication.',
    tags: ['React JS', 'CSS', 'Bootstrap', 'JWT Token'],
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png',
    url: 'https://trendecommerce.ccbp.tech/login',
  },
  {
    title: 'Jobby - Jobs Portal',
    description: 'A comprehensive job search platform offering advanced filtering and seamless application processes.',
    tags: ['React JS', 'REST API', 'Bootstrap', 'JWT'],
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jobby-app-home-img.png',
    url: 'https://smartjobportal.ccbp.tech/login',
  },
  {
    title: 'Smart Career Guidance',
    description: 'An AI-integrated app to guide students in choosing the right career path and learning resources.',
    tags: ['React.js', 'TypeScript', 'Vite', 'Tailwind CSS'],
    imageUrl: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/692/952/datas/original.png', 
    url: 'https://inspire-career-guide.lovable.app',
  },
  {
    title: 'Vaag Exchange - P2P Rentals',
    description: 'A full-stack, peer-to-peer rental platform with college ID verification and secure authentication.',
    tags: ['React.js', 'Node.js', 'MySQL', 'Express.js'],
    imageUrl: 'https://iot-analytics.com/wp-content/uploads/2022/11/p2p-lending-platforms-e1669818868950.png',
    url: 'https://vaagexchangeapp.vercel.app/login',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <p className="projects-subtitle">MY WORK</p>
        <h1 className="projects-title">Featured Projects</h1>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.title} className="project-card">
              <div className="project-image-container">
                <img src={project.imageUrl} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-button">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        
       
        <a href="https://github.com/Abbaskasturi" target="_blank" rel="noopener noreferrer" className="see-more-button">
          See More
        </a>

      </div>
    </section>
  );
};

export default Projects;