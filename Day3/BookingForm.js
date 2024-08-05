import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState({ eventType: '', guests: 0, date: '', time: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating a booking process
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(details);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    setTimeout(() => {
      console.log('Booking Details:', details);
      alert('Booking confirmed!');
      navigate('/bookedhall'); // Ensure this route exists
    }, 1000);
  };

  return (
    <div className="booking-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Event Type:
          <input type="text" name="eventType" value={details.eventType} onChange={handleChange} />
        </label>
        <label>
          Number of Guests:
          <input type="number" name="guests" value={details.guests} onChange={handleChange} />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={details.date} onChange={handleChange} />
        </label>
        <label>
          Time:
          <input type="time" name="time" value={details.time} onChange={handleChange} />
        </label>
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookingForm;
