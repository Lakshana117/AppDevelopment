import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../style/Gallery.css';

const Gallery = () => {
  return (
    <section id="Gallery" className="gallery-section">
      <div className="container-fluid p-0">
        <div className="gallery-container">
          <h1 className="text-center fw-bold mb-4">Our Gallery</h1>
          <Carousel controls={true} indicators={true} interval={1000} pause={"hover"} fade>
            <Carousel.Item>
              <img
                className="d-block w-100 gallery-img"
                src="https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-14.jpg"
                alt="Gallery Image 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 gallery-img"
                src="https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-13.jpg"
                alt="Gallery Image 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 gallery-img"
                src="https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-11.jpg"
                alt="Gallery Image 3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 gallery-img"
                src="https://skct.edu.in/wp-content/uploads/2024/04/SKCT-Classroom-6.jpg"
                alt="Gallery Image 4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 gallery-img"
                src="https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-3.jpg"
                alt="Gallery Image 5"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 gallery-img"
                src="https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-20.jpg"
                alt="Gallery Image 6"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
