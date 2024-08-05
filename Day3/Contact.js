import React from 'react';

const Contact = () => {
  return (
    <section id="contact-form" className="contact-section">
      <div className="container shadow-lg p-3 mt-5 py-5 rounded text-center">
        <div className="row">
          <h1 className="text-center">Contact Us</h1>
          <div className="col-md-6 mt-5">
            <div className="card mt-3">
              <div className="card-body">
                <form action="/register" method="POST" autoComplete="off">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="fullname" placeholder="Full Name" required />
                    <label htmlFor="floatingInputGroup1">Full Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" name="email" placeholder="Email" required />
                    <label htmlFor="floatingInputGroup1">Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="phone" placeholder="Phone Number" required />
                    <label htmlFor="floatingInputGroup1">Phone Number</label>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea className="form-control" name="message" placeholder="Your Message" style={{ height: '150px' }} required></textarea>
                    <label htmlFor="floatingInputGroup1">Your Message</label>
                  </div>
                  <button type="submit" className="btn btn-primary fw-bold fs-5 text-center mt-4">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <img src="https://allmywebneeds.com/wp-content/uploads/2019/11/contact-us-page.jpg" alt="Contact Us" className="mt-5 img-fluid rounded" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background: url('./contact') no-repeat center center fixed;
          background-size: cover;
          color: black;
          padding: 50px 0;
        }
        .card {
          background: rgba(255, 255, 255, 0.8);
          border: none;
        }
        .form-control {
          border-radius: 30px;
        }
        .btn-primary {
          background-color: #007bff;
          border: none;
          padding: 10px 20px;
          border-radius: 30px;
        }
        .btn-primary:hover {
          background-color: #0056b3;
        }
        h1 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
        }
      `}</style>
    </section>
  );
};

export default Contact;
