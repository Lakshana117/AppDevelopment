import React from 'react';
import './UserPanel.css';

function UserDashboard() {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="stats">
                <div className="card">
                    <h2>Total Bookings</h2>
                    <p>5</p>
                </div>
                <div className="card">
                    <h2>Pending Approvals</h2>
                    <p>1</p>
                </div>
                <div className="card">
                    <h2>Upcoming Events</h2>
                    <p>2</p>
                </div>
            </div>
            <div className="recent-activity">
                <h2>Recent Activity</h2>
                <ul>
                    <li>John booked Auditorium</li>
                    <li>Mary booked Open Theatre</li>
                </ul>
            </div>
        </div>
    );
}

export default UserDashboard;
