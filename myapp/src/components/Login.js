import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Login.css';

function Login() {
    const [formData, setFormData] = useState({
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
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
                setMessage("Login successful!");
                console.log("Login successful:", formData);
            } else {
                setMessage("Invalid email or password.");
                console.log("Invalid email or password:", formData);
            }
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <div className="auth-content">
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
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
                            value={formData.password}
                            onChange={handleChange}
                            name="password"
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                        
                        <button type="submit">Sign In</button>
                    </form>
                    {message && <p className="message">{message}</p>}
                    <p>
                        Don't have an account? <Link to="/register">Sign Up</Link>
                    </p>
                </div>
                <div className="auth-side">
                    <h2><i>Welcome Back!</i></h2>
                    <p><i>Enter your credentials to seamlessly pick up where you left off :)</i></p>
                    
                </div>
            </div>
        </div>
    );
}

export default Login;
