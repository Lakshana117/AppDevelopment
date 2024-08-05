import React from 'react';
import './UserPanel.css';

function UserProfile() {
    return (
        <div className="profile">
            <h1>Profile</h1>
            <div className="profile-info">
                <p><strong>Name:</strong> Jane Doe</p>
                <p><strong>Email:</strong> jane.doe@user.com</p>
                <p><strong>Department:</strong> Marketing</p>
                <p><strong>Phone:</strong> (123) 456-7890</p>
                <p><strong>Address:</strong> 123 Main St, Anytown, USA</p>
            </div>
            <div className="profile-actions">
                <button>Edit Profile</button>
                <button>Change Password</button>
            </div>
        </div>
    );
}

export default UserProfile;
