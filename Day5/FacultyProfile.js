import React from 'react';
import './FacultyPanel.css';

function FacultyProfile() {
    return (
        <div className="profile">
            <h1>Profile</h1>
            <div className="profile-info">
                <p><strong>Name:</strong> Dr. John Doe</p>
                <p><strong>Email:</strong> john.doe@faculty.com</p>
                <p><strong>Department:</strong> Computer Science</p>
            </div>
            <div className="profile-actions">
                <button>Edit Profile</button>
                <button>Change Password</button>
            </div>
        </div>
    );
}

export default FacultyProfile;
