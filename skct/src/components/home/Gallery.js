import React from 'react';
import '../../style/Gallery.css';

const Gallery = () => {
  return (
    <section id="Gallery">
      <div className="container-fluid">
        <h1 className="text-center fw-bold">Our Gallery</h1>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="gallery-column">
            <img src="https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-14.jpg" className="img-fluid gallery-img" alt="Gallery Image 1" />
            <img src="https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-13.jpg" className="img-fluid gallery-img" alt="Gallery Image 2" />
          </div>
          <div className="gallery-column">
            <img src="https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-11.jpg" className="img-fluid gallery-img" alt="Gallery Image 3" />
            <img src="https://skct.edu.in/wp-content/uploads/2024/04/SKCT-Classroom-6.jpg" className="img-fluid gallery-img" alt="Gallery Image 4" />
          </div>
          <div className="gallery-column">
            <img src="https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-3.jpg" className="img-fluid gallery-img" alt="Gallery Image 5" />
            <img src="https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-20.jpg" className="img-fluid gallery-img" alt="Gallery Image 6" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
