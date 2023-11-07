import React from 'react';
import './Services.css'; // Make sure the CSS file name matches the import

function Services() {
  return (
    <div className="services-container">
      <div className="service">
        <h2>Digital Learning</h2>
        <p>
          At ClassmateCoach, we are dedicated to revolutionizing the way students learn in a digital age. Our focus is on addressing the challenges faced by junior students and early-stage learners due to the lack of guidance from seniors and the right professionals.
        </p>
      </div>
      <div className="service">
        <h2>Our Innovative Solution</h2>
        <p>
          Our proposed solution, "ClassmateCoach," is designed to bridge this gap. With ClassmateCoach, we have created a dynamic learning environment where students can schedule meetings with senior mentors seamlessly through the Google Meet API. This virtual classroom is a hub of knowledge, with supercharge senior students acting as instructors. They have the power to view, answer questions, remove any impediments, and ensure the smooth flow of learning.
        </p>
      </div>
      <div className="service">
        <h2>Empowering a Learning Ecosystem</h2>
        <p>
          In our innovative concept, senior students who take on the role of mentors are not only giving back to the learning community, but they also earn cashback rewards for their contributions. This cashback can be used to access professional mentorship, creating a virtuous cycle of learning and growth. By fostering collaboration between students at different stages of their educational journeys, we're creating a holistic and supportive learning ecosystem that benefits everyone involved.
        </p>
      </div>
      <div className="service">
        <h2>Personalized Tutoring</h2>
        <p>
          We offer personalized tutoring services that cater to individual learning needs. Our expert tutors work closely with students to help them achieve their academic goals. Whether it's homework help, exam preparation, or specific subject tutoring, our personalized tutoring services make a difference in your education.
        </p>
      </div>
    </div>
  );
}

export default Services;
