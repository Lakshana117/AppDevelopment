import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { FaTachometerAlt, FaUser, FaCalendarAlt, FaBars } from 'react-icons/fa';
import FacultyDashboard from './FacultyDashboard';
import FacultyProfile from './FacultyProfile';
import FacultyBookings from './FacultyBookings';
import './FacultyPanel.css';

function FacultyPanel() {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    return (
        <div className={`faculty-panel ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <div className="sidebar">
                <div className="sidebar-header">
                    <img src="https://th.bing.com/th/id/OIP.OdQQJxf0UFikV_SreFYyoQAAAA?rs=1&pid=ImgDetMain" alt="Faculty" className="profile-pic" />
                    <h2>Faculty</h2>
                    <span className="status online">Online</span>
                </div>
                <ul>
                    <li><Link to="/faculty/dashboard"><FaTachometerAlt /> Dashboard</Link></li>
                    <li><Link to="/faculty/profile"><FaUser /> Profile</Link></li>
                    <li><Link to="/faculty/bookings"><FaCalendarAlt /> Bookings</Link></li>
                </ul>
            </div>
            <div className="main-content">
                <button className="toggle-sidebar" onClick={toggleSidebar}><FaBars /></button>
                <Routes>
                    <Route path="dashboard" element={<FacultyDashboard />} />
                    <Route path="profile" element={<FacultyProfile />} />
                    <Route path="bookings" element={<FacultyBookings />} />
                </Routes>
            </div>
        </div>
    );
}

export default FacultyPanel;
