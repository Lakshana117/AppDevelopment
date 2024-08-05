import React from 'react';
import Contact from './Contact';
import Gallery from './Gallery';
import About from './About';
import './Home.css';

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="hero-section">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-6 mt-5 py-3">
                <h1 className="ms-5 fw-bold">Welcome to <span className="text-info">Sri Krishna College Hall Booking</span></h1>
                <p className="ms-5 fs-5 fst-italic">Looking to book a hall for your next event? Enroll now and secure your space.</p>
              </div>
              <div className="col-md-6 text-center">
                <img src="https://th.bing.com/th/id/OIP.x_ZSgDxwfdbQpRzsk9fJQgAAAA?rs=1&pid=ImgDetMainhttps://imgs.search.brave.com/Zm3O95VQHa1co6T7jROOwFE71hcDwU2EvSaJqqDIALM/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC55/WFQ2dHl0dmdOaWpk/M01aWXQ4ODNRSGFE/dCZwaWQ9QXBp" alt="Hall Booking" className="hero-img img-fluid smaller-img" />
              </div>
            </div>
          </div>
        </div>
        
        <About />
        <Gallery />
        <Contact />
      </section>
    </>
  );
};

export default Home;
