import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [fullstackText, setFullstackText] = useState('Fullstack');
  const textOptions = ['Frontend', 'Backend'];

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % textOptions.length;
      setFullstackText(textOptions[currentIndex]);
    }, 1000);

    return () => clearInterval(interval);
  }, );

  return (
    <div className="home-container">
      <div className="left-section">
        <div className="profile-image">
          <img src="https://drive.google.com/drive/my-drive?lfhs=2" alt="Your Name" />
        </div>
      </div>
      <div className="right-section">
        <h1 className="home-title">
          <center>  I'm am {fullstackText} Developer</center>
        </h1>
       
       
        <p className="home-description">
          I am a passionate fullstack Developer with expertise in both frontend and backend technologies. My goal is to deliver scalable, flexible, and user-friendly web applications.
          As a Full Stack Web Developer with 1+ years of experience, I have a strong background in designing, developing, and maintaining web applications using a variety of technologies. 
          My expertise includes JavaScript, React, Angular, Node.js, HTML, CSS, and MySQL. I have experience in Agile development methodologies and have a good understanding of web development principles and best practices. 
          I am a quick learner and always eager to stay up-to-date with the latest technologies. In my current role at @Yougetplace Company, I am responsible for leading the development of several key projects. I have a proven track record of delivering projects on time and within budget.

          Certifications:
          Full stack web development beginner
          A data structure in java intermediate level

        </p>

        
        <div className="cta-buttons">
          <a href="path-to-resume.pdf" className="download-button">Download Resume</a>
          <button className="hire-button">Hire Me</button>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
