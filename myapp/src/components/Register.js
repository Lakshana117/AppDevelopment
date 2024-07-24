import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Register.css';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: '',
        gender: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const validate = () => {
        let validationErrors = {};
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!formData.name) {
            validationErrors.name = "Name is required";
        }

        if (!formData.dateOfBirth) {
            validationErrors.dateOfBirth = "Date of birth is required";
        }

        if (!formData.gender) {
            validationErrors.gender = "Gender is required";
        }

        if (!formData.email) {
            validationErrors.email = "Email is required";
        } else if (!emailPattern.test(formData.email)) {
            validationErrors.email = "Invalid email format";
        }

        if (!formData.password) {
            validationErrors.password = "Password is required";
        }

        setErrors(validationErrors);

        return Object.keys(validationErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            localStorage.setItem('user', JSON.stringify(formData));
            setMessage("Registration successful. You can now log in.");
            console.log("Registration successful:", formData);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <div className="auth-side">
                    <h2><i>Create Your Account and Embrace the Journey</i></h2>
                    <p><i>"Start Your Adventure with Us!!!"</i></p>
                    
                </div>
                <div className="auth-content">
                    <h1>Create Account</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                        
                        <input
                            type="date"
                            placeholder="Date of Birth"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                        />
                        {errors.dateOfBirth && <span className="error">{errors.dateOfBirth}</span>}
                        
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && <span className="error">{errors.gender}</span>}
                        
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                        
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                        
                        <button type="submit">Sign Up</button>
                    </form>
                    {message && <p className="message">{message}</p>}
                    <p>
                        Already have an account? <Link to="/">Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
