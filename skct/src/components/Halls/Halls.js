import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Halls = () => {
  const [bookings, setBookings] = useState([
    { id: 1, booked: false },
    { id: 2, booked: false },
    { id: 3, booked: false },
    { id: 4, booked: false },
    { id: 5, booked: false },
    { id: 6, booked: false }
  ]);

  const hostels = [
    { id: 1, name: 'Vankatram Hall', description: 'A spacious and modern auditorium fully-equipped space designed for large-scale events, performances, and ceremonies.', capacity: 1000, location: 'Near Boys Hostel', imageUrl: "https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-33.jpg" },
    { id: 2, name: 'PG Seminar Hall', description: 'The PG Seminar Hall is a versatile, state-of-the-art facility ideal for hosting seminars, lectures, workshops, and conferences.', capacity: 150, location: 'In MBA Block', imageUrl: 'https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-25.jpg' },
    { id: 3, name: 'ES Seminar Hall', description: 'The ES Block Seminar Hall is a modern, well-equipped venue perfect for seminars, presentations, and academic events.',capacity: 125, location: 'In ES Block', imageUrl: 'https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-11.jpg' },
    { id: 4, name: 'Open Air Stadium', description: 'The open theatre is a scenic, open-air venue perfect for cultural performances, and community events.', capacity: 500, location: 'Near Cse Block', imageUrl: 'https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-16.jpg' },
    { id: 5, name: 'Incubation Hall', description: 'The incubation hall is a dynamic space designed for fostering innovation, entrepreneurship, and technical speeches.', capacity: 130, location: 'In Arts Block', imageUrl: 'https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-3.jpg' },
    { id: 6, name: 'Main Block Seminar Hall', description: 'A premier venue for academic seminars, lectures, and professional events.', capacity: 100, location: 'In Main Block', imageUrl: 'https://skct.edu.in/wp-content/uploads/2024/01/Conference-Seminar-Halls-skct.jpg' },
  ];

  const bookHostel = (id) => {
    setBookings(bookings.map(booking => booking.id === id ? { ...booking, booked: true } : booking));
  };

  return (
    <div className="container py-5">
      <h2 className="text-danger">Available Halls</h2>
      <div className="row mt-2">
        {hostels.map(hostel => {
          const booking = bookings.find(b => b.id === hostel.id);
          return (
            <div className="col-md-4" key={hostel.id}>
              <div className="card shadow-lg mb-5 bg-body rounded mt-3 border-dark">
                <div className="card-body">
                  <div className="container text-center py-3">
                    <img
                      src={hostel.imageUrl}
                      className="card-img-top"
                      alt={hostel.name}
                    />
                  </div>
                  <h5 className="card-title">{hostel.name}</h5>
                  <p>Description: {hostel.description}</p>
                  <p>Capacity: {hostel.capacity} | per hall</p>
                  <p>Location: {hostel.location}</p>
                  <div className="card-footer d-flex justify-content-between">
                    <button
                      onClick={() => bookHostel(hostel.id)}
                      className="btn btn-success fw-bold fs-5"
                      disabled={booking.booked}
                    >
                      {booking.booked ? 'Not Available' : 'Available'}
                    </button>
                    <Link to={`/hostel/${hostel.id}`} className="btn btn-primary fw-bold fs-5">See More</Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Halls;
