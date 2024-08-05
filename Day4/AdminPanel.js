import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { FaTachometerAlt, FaUser, FaUsers, FaCalendarAlt, FaCog, FaBars } from 'react-icons/fa';
import BookedHalls from '../home/BookedHalls';
import './AdminPanel.css';

function AdminPanel() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className={`admin-panel ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className="sidebar">
        <div className="sidebar-header">
          <img src="https://th.bing.com/th/id/OIP.OdQQJxf0UFikV_SreFYyoQAAAA?rs=1&pid=ImgDetMain" alt="Admin" className="profile-pic" />
          <h2>Admin</h2>
          <span className="status online">Online</span>
        </div>
        <ul>
          <li><Link to="/admin/dashboard"><FaTachometerAlt /> Dashboard</Link></li>
          <li><Link to="/admin/profile"><FaUser /> Profile</Link></li>
          <li><Link to="/admin/faculty"><FaUsers /> Faculty</Link></li>
          <li><Link to="/admin/users"><FaUsers /> Users</Link></li>
          <li><Link to="/admin/booked-halls"><FaCalendarAlt /> Booked Halls</Link></li>
          <li><Link to="/admin/settings"><FaCog /> Settings</Link></li>
        </ul>
      </div>
      <div className="main-content">
        <button className="toggle-sidebar" onClick={toggleSidebar}><FaBars /></button>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="users" element={<Users />} />
          <Route path="booked-halls" element={<BookedHalls />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats">
        <div className="card">
          <h2>Total Bookings</h2>
          <p>120</p>
        </div>
        <div className="card">
          <h2>Pending Approvals</h2>
          <p>5</p>
        </div>
        <div className="card">
          <h2>Upcoming Events</h2>
          <p>3</p>
        </div>
      </div>
      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <ul>
          <li>John Doe booked Hall A</li>
          <li>Jane Smith booked Hall B</li>
          <li>Sam Wilson booked Hall C</li>
        </ul>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="profile">
      <h1>Profile</h1>
      <div className="profile-info">
        <p><strong>Name:</strong> Admin</p>
        <p><strong>Email:</strong> admin@example.com</p>
        <p><strong>Role:</strong> Administrator</p>
      </div>
      <div className="profile-actions">
        <button>Edit Profile</button>
        <button>Change Password</button>
      </div>
    </div>
  );
}

function Faculty() {
  const faculties = [
    { name: 'Dr. John Smith', department: 'Computer Science', email: 'john.smith@example.com' },
    { name: 'Dr. Jane Doe', department: 'Mathematics', email: 'jane.doe@example.com' },
    // Add more faculty members here
  ];

  return (
    <div className="faculty">
      <h1>Faculty</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {faculties.map((faculty, index) => (
            <tr key={index}>
              <td>{faculty.name}</td>
              <td>{faculty.department}</td>
              <td>{faculty.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Users() {
  const users = [
    { name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'User' },
    { name: 'Bob Williams', email: 'bob.williams@example.com', role: 'User' },
    // Add more users here
  ];

  return (
    <div className="users">
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Settings() {
  return (
    <div className="settings">
      <h1>Settings</h1>
      <div className="settings-options">
        <div className="settings-option">
          <label htmlFor="theme">Theme</label>
          <select id="theme">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="settings-option">
          <label htmlFor="notifications">Notifications</label>
          <input type="checkbox" id="notifications" />
        </div>
        <div className="settings-option">
          <label htmlFor="language">Language</label>
          <select id="language">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            {/* Add more languages here */}
          </select>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
