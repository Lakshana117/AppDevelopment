import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './HallDetails.css';

const HostelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [booked, setBooked] = useState(false);

  const hostels = [
    { id: 1, name: 'VANKATRAM HALL', description: 'Welcome to our state-of-the-art auditorium, a premier venue designed to host a wide range of events, from corporate conferences and seminars to cultural performances and social gatherings. With a seating capacity of [insert number], our auditorium boasts exceptional acoustics and advanced audio-visual equipment to ensure a seamless experience for both performers and audience members.The spacious stage is equipped with modern lighting and sound systems, making it an ideal setting for live performances, presentations, and screenings', capacity: 1000, location: 'Near Cse Block', imageUrl: "https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-33.jpg" },
    { id: 2, name: 'PG SEMINAR HALL', description: 'The PG Seminar Hall is a versatile space designed to accommodate a variety of academic and professional events. Equipped with state-of-the-art audiovisual technology, comfortable seating, and ample lighting, it provides an ideal environment for seminars, workshops, conferences, and guest lectures. Its flexible layout can be adapted to suit different event formats, ensuring a seamless and productive experience for all attendees.', capacity: 150, Location: 'In MBA Block', imageUrl: 'https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-25.jpg' },
    { id: 3, name: 'ES SEMINAR HALL', description: 'The ES Block Seminar Hall is a modern, well-equipped venue designed to enhance the experience of seminars, presentations, and academic events. It features cutting-edge audiovisual systems, ergonomic seating, and a spacious layout that promotes engagement and interaction. Ideal for both small and large gatherings, the hall offers a professional and comfortable setting that meets the diverse needs of students, faculty, and guest speakers.', capacity: 125, Location: 'In ES Block', imageUrl: 'https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-11.jpg' },
    { id: 4, name: 'Open AIR STADIUM', description: 'The open theatre in our college is a scenic, open-air venue that offers a unique and vibrant setting for a variety of events, including cultural performances, film screenings, and community gatherings. Surrounded by natural beauty and equipped with essential amenities, it provides an immersive experience that combines the charm of outdoor ambiance with the convenience of a well-maintained event space. This versatile theatre is ideal for fostering creativity, entertainment, and social interaction in an inviting, natural environment.', capacity: 500, location: 'Near Cse Block', imageUrl: 'https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-16.jpg' },
    { id: 5, name: 'INCUBATION HALL', description: 'The incubation hall is a dynamic and collaborative environment dedicated to fostering innovation, entrepreneurship, and technical discourse within the college community. This versatile space is equipped with state-of-the-art facilities, including high-speed internet, modern workstations, and adaptable meeting areas, making it ideal for both creative project development and technical presentations. It provides a supportive atmosphere where students and faculty can engage in brainstorming, prototyping, and networking, while also hosting a range of technical speeches and workshops that drive forward innovative solutions and entrepreneurial ventures.', capacity: 130, location: 'In Arts Block', imageUrl: 'https://skct.edu.in/wp-content/uploads/2024/04/SKCT-College-Campus-3.jpg' },
    { id: 6, name: 'MAIN BLOCK SEMINAR HALL', description: 'The Main Block Seminar Hall is a premier venue designed to host a wide array of academic seminars, lectures, and professional events. Featuring state-of-the-art audiovisual equipment, comfortable seating, and a spacious layout, it provides an ideal setting for intellectual engagement and knowledge exchange. The halls versatile design accommodates both small and large gatherings, making it perfect for hosting distinguished speakers, interactive workshops, and formal presentations. It serves as a central hub for academic excellence and professional development within the college.', capacity: 100, location: 'In Main Block', imageUrl: 'https://skct.edu.in/wp-content/uploads/2024/01/Conference-Seminar-Halls-skct.jpg' },
  ];

  const hostel = hostels.find(h => h.id === parseInt(id));

  if (!hostel) {
    return <div className="container py-5">Hostel not found.</div>;
  }

  const bookHostel = () => {
    setBooked(true);
    navigate(`/booking/${id}`);
  };

  return (
    <div className="hostel-details-container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={hostel.imageUrl}
            alt={hostel.name}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>{hostel.name}</h2>
          <p>Description: {hostel.description}</p>
          <p>Capacity: {hostel.capacity} per hall</p>
          <p>Location: {hostel.location}</p>
          <div className="text-center mt-3">
            <button
              onClick={bookHostel}
              className="btn btn-success fw-bold fs-5"
              disabled={booked}
            >
              {booked ? 'Booked' : 'Book now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelDetails;
