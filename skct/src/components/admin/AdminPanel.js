import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import BookedHalls from '../home/BookedHalls';
import './AdminPanel.css';

function AdminPanel() {
  return (
    <div className="admin-panel">
      <div className="sidebar">
        <ul>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/profile">Profile</Link></li>
          <li><Link to="/admin/user-info">User Info</Link></li>
          <li><Link to="/admin/booked-halls">Booked Halls</Link></li>
        </ul>
      </div>
      <div className="main-content">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="user-info" element={<UserInfo />} />
          <Route path="booked-halls" element={<BookedHalls />} />
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

function UserInfo() {
  return (
    <div className="user-info">
      <h1>User Info</h1>
      <div className="user-list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Bookings</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>3</td>
              <td><button>View Details</button></td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>jane@example.com</td>
              <td>2</td>
              <td><button>View Details</button></td>
            </tr>
            <tr>
              <td>Sam Wilson</td>
              <td>sam@example.com</td>
              <td>5</td>
              <td><button>View Details</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPanel;
