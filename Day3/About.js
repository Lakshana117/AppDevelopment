import React from 'react';
import Reviews from './Reviews';
import './About.css';

const About = () => {
  return (
    <section id="About">
      <div className="container text-center">
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mt-5 py-5">
            <h2 className="about-heading">Book College Halls with Ease</h2>
            <p className="about-text">
              Easily book high-quality halls for lectures, seminars, workshops, and social events. Our platform offers a seamless booking experience designed to meet the unique needs of college life for both students and faculty members.
            </p>
            <a href="/hostels" className="btn btn-info btn-lg fw-bold">Start Booking Now</a>
          </div>
          <div className="col-md-6">
            <img src="https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-33.jpg" className="img-fluid" alt="Hall Booking" />
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src="" className="img-fluid" alt="Classroom" />
          </div>
          <div className="col-md-6 mt-5 py-5">
            <h2 className="about-heading">For Students</h2>
            <p className="about-text">
              Whether you need a space for group study sessions, project presentations, or organizing club events, our booking system allows you to find the perfect hall. Enjoy a streamlined booking process and ensure your academic and extracurricular activities run smoothly.
            </p>
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-md-6 mt-5 py-5">
            <h2 className="about-heading">For Faculty</h2>
            <p className="about-text">
              Faculty members can effortlessly reserve halls for lectures, seminars, and conferences. Our platform ensures that you have access to the best facilities to deliver quality education and conduct impactful events.
            </p>
          </div>
          <div className="col-md-6">
            <img src="https://pbs.twimg.com/media/FP5i2Z3acAMCCZG.jpg:large" className="img-fluid" alt="Seminar" />
          </div>
        </div>
      </div>
  
    </section>
  );
};

export default About;
