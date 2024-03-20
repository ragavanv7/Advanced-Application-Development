import React, { useState } from "react";
import '../../assets/css/Forgot.css'
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const [error, setError] = useState('');
    const navigate=useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const newpasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;


        if (!emailRegex.test(email)) {
            setError('Email must be valid');
            navigate('/');
        } else if (!password.match(passwordRegex)) {
            setError('Password must be at least 8 characters with a special character');
        } else if (!newpassword.match(newpasswordRegex)) {
            setError('Password must be at least 8 characters with a special character');
        } 
        else {
            setError('');
            
        }
        alert('Password Changed Sucessfully!')
    };

    return (
        <div className="reset-background">
           

        <div className="login-container">
                              
                
            <form className="login-form" onSubmit={handleSubmit}>
                
                <h2 className="reset-head">Reset Password</h2>
                
                
                    <input className="forgot-email" type="email" value={email}  placeholder="Email"  onChange={handleEmailChange} required />
                <br/>
                
                    <input className="forgot-pass" type="password"  placeholder="New-Password" value={password} onChange={handlePasswordChange} required />
                    <br/>
                    <input className="forgot-newpass" type="newpassword"  placeholder="Confirm-Password" value={newpassword} onChange={handleNewPasswordChange} required />
                <br/>
                
                <button className="reset-button" type="submit" >Reset</button>
                <br/>
               

            </form>
        </div>
        </div>
    );
};

export default Login;