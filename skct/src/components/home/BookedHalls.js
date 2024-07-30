import React, { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const BookedHalls = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(bookings);
  }, []);

  const handleDelete = (index) => {
    const newBookings = bookings.filter((_, i) => i !== index);
    setBookings(newBookings);
    localStorage.setItem('bookings', JSON.stringify(newBookings));
  };

  return (
    <div>
      <h2>Booked Halls</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Event Type</TableCell>
              <TableCell>Number of Guests</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking, index) => (
              <TableRow key={index}>
                <TableCell>{booking.eventType}</TableCell>
                <TableCell>{booking.guests}</TableCell>
                <TableCell>{booking.date}</TableCell>
                <TableCell>{booking.time}</TableCell>
                <TableCell>
                  <Button
                    sx={{
                      backgroundColor: '#d32f2f',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: '#b71c1c',
                      },
                    }}
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BookedHalls;
