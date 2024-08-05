import React from 'react';
import './UserPanel.css';

function UserBookings() {
    const bookings = [
        { event: 'Seminar on AI', date: 'August 2, 2024', status: 'Confirmed' },
        { event: 'Workshop on React', date: 'August 10, 2024', status: 'Pending' },
    ];

    return (
        <div className="bookings">
            <h1>My Bookings</h1>
            <table>
                <thead>
                    <tr>
                        <th>Event</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking, index) => (
                        <tr key={index}>
                            <td>{booking.event}</td>
                            <td>{booking.date}</td>
                            <td>{booking.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserBookings;
