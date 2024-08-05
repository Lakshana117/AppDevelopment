import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerSuccess, registerFailure } from "../../redux/authSlice";
import './Register.css';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: '',
        gender: '',
        email: '',
        password: '',
        role: ''
    });
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const message = useSelector(state => state.auth.message);
    const navigate = useNavigate();

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

        if (!formData.role) {
            validationErrors.role = "Role is required";
        }

        setErrors(validationErrors);

        return Object.keys(validationErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch('/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    dispatch(registerSuccess(data));
                    navigate('/login');
                } else {
                    dispatch(registerFailure({ email: "Registration failed" }));
                }
            })
            .catch(error => {
                dispatch(registerFailure({ email: "Registration failed" }));
            });
        }
    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <h1>Register</h1>
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
                
                <label>Date of Birth</label>
                <input
                    type="date"
                    placeholder="Enter your date of birth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                />
                {errors.dateOfBirth && <span className="error-message">{errors.dateOfBirth}</span>}
                
                <label>Gender</label>
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                {errors.gender && <span className="error-message">{errors.gender}</span>}
                
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Enter your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
                
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    name="password"
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
                
                <label>Role</label>
                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                >
                    <option value="">Select role</option>
                    <option value="admin">Admin</option>
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
                </select>
                {errors.role && <span className="error-message">{errors.role}</span>}
                
                <button type="submit">Register</button>
                <p className="login-link">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Register;
