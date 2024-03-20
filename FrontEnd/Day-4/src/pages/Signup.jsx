import React, { useState } from "react";
import '../assets/css/Signup.css'; 
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        role: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateFormData(formData);
        if (Object.keys(errors).length === 0) {
            
            alert('Signup successful!');
            navigate('/');
        } else {
            
            setErrors(errors);
        }
    };

    const validateFormData = (data) => {
        const errors = {};
        if (!data.name) {
            errors.name = 'Name is required';
        }

        
        if (!data.email) {
            errors.email = 'Email is required';
        } else if (!isValidEmail(data.email)) {
            errors.email = 'Invalid email format';
        }

        
        if (!data.password) {
            errors.password = 'Password is required';
        } else if (data.password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        }

        
        if (!data.confirmPassword) {
            errors.confirmPassword = 'Confirm Password is required';
        } else if (data.password !== data.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }


        if (!data.phoneNumber) {
            errors.phoneNumber = 'Phone Number is required';
        }

    
        if (!data.role) {
            errors.role = 'Role is required';
        }

        return errors;
    };

    const isValidEmail = (email) => {
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div className="signup-background">
            <div className="signup-container">
                <form className="signup-form" onSubmit={handleSubmit}>
                    <h2 className="signup-head">Sign Up</h2>
                    <div className="signup-name">
                        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div className="signup-email">
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="signup-pass">
                        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    <div className="signup-con">
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
                        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                    </div>
                    <div className="signup-pho">
                        <input type="number" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
                        {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
                    </div>
                    <div className="signup-drop">
                        <select className="signup-drop-1" name="role" value={formData.role} onChange={handleChange} required>
                            <option value="">Select Role</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                        {errors.role && <span className="signup-error">{errors.role}</span>}
                    </div>
                    <button className="signup-button" type="submit">Sign Up</button>
                   
                </form>
            </div>
        </div>
    );
};

export default Signup;
