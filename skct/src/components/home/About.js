import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="About">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-md-6 mt-5 py-5">
            <h2 className="about-heading">Book College Halls with Ease</h2>
            <p className="about-text">
              Easily book high-quality halls for lectures, seminars, workshops, and social events. Our platform offers a seamless booking experience designed to meet the unique needs of college life.
            </p>
            <a href="/hostels" className="btn btn-info btn-lg fw-bold">Start Booking Now</a>
          </div>
          <div className="col-md-6">
            <img src="https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-33.jpg" className="img-fluid" alt="Hall Booking" />
          </div>
        </div>
      </div>
      <div className="container py-5">
        <h1 className="text-center section-heading">Discover Our College Event Halls</h1>
        <div className="row py-2">
          <div className="col-md-6 py-5">
            <h2 className="text-center facilities-heading">Why Choose Our College Halls?</h2>
            <p className="facilities-text">
              Our platform provides a diverse selection of halls equipped with modern amenities to ensure your college events are successful and memorable. Whether it's a lecture, club meeting, or cultural festival, our halls are designed to meet all your requirements. Enjoy an easy booking process and exceptional customer service to assist you at every step.
            </p>
            <center><a href="/gallery" className="btn btn-danger btn-lg fw-bold">Explore More</a></center>
          </div>
          <div className="col-md-6 py-5">
            <img src="https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-16.jpg" className="img-fluid" alt="Facilities" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
