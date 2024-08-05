import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginSuccess, loginFailure } from "../../store/authSlice";
import './Login.css';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
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
            if (formData.email === 'admin@gmail.com' && formData.password === 'admin') {
                const adminUser = { email: 'admin@gmail.com', role: 'admin' };
                dispatch(loginSuccess(adminUser));
                navigate('/admin/dashboard');
            } else if (formData.email === 'user@gmail.com' && formData.password === 'user') {
                const regularUser = { email: 'user@gmail.com', role: 'user' };
                dispatch(loginSuccess(regularUser));
                navigate('/user/dashboard');
            } else if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
                dispatch(loginSuccess(storedUser));
                navigate('/user/dashboard');
            } else {
                dispatch(loginFailure());
            }
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h3>Login Here</h3>
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
                
                <button type="submit">Login</button>
                {message && <p className="message">{message}</p>}
                <p>
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;