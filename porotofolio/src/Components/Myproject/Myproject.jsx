import React from 'react';
import './Myproject.css';

function MyProject() {
  const projects = [
    {
      title: "Project 1",
      description: "Description for Project 1",
      image: "https://4kwallpapers.com/images/walls/thumbs_3t/5661.jpg",
    },
    {
      title: "Project 2",
      description: "Description for Project 2",
      image: "https://4kwallpapers.com/images/walls/thumbs_3t/5661.jpg",
    },
    {
      title: "Project 3",
      description: "Description for Project 3",
      image: "https://4kwallpapers.com/images/walls/thumbs_3t/5661.jpg",
    },
    {
      title: "Project 4",
      description: "Description for Project 4",
      image: "https://4kwallpapers.com/images/walls/thumbs_3t/5661.jpg",
    },
    // Add more projects if needed
  ];

  return (
    <div className="project-container">
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProject;
