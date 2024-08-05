import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { FaTachometerAlt, FaUser, FaCalendarAlt, FaBars } from 'react-icons/fa';
import UserDashboard from './UserDashboard';
import UserProfile from './UserProfile';
import UserBookings from './UserBookings';
import './UserPanel.css';

function UserPanel() {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    return (
        <div className={`user-panel ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <div className="sidebar">
                <div className="sidebar-header">
                    <img src="https://th.bing.com/th/id/OIP.OdQQJxf0UFikV_SreFYyoQAAAA?rs=1&pid=ImgDetMain" alt="User" className="profile-pic" />
                    <h2>User</h2>
                    <span className="status online">Online</span>
                </div>
                <ul>
                    <li><Link to="/user/dashboard"><FaTachometerAlt /> Dashboard</Link></li>
                    <li><Link to="/user/profile"><FaUser /> Profile</Link></li>
                    <li><Link to="/user/bookings"><FaCalendarAlt /> Bookings</Link></li>
                </ul>
            </div>
            <div className="main-content">
                <button className="toggle-sidebar" onClick={toggleSidebar}><FaBars /></button>
                <Routes>
                    <Route path="dashboard" element={<UserDashboard />} />
                    <Route path="profile" element={<UserProfile />} />
                    <Route path="bookings" element={<UserBookings />} />
                </Routes>
            </div>
        </div>
    );
}

export default UserPanel;
