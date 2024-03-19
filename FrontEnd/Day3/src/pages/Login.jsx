import React, { useState } from "react";
import '../assets/css/Login.css'; 
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate=useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;


        if (!emailRegex.test(email)) {
            setError('Email must be valid');
            navigate('/home');
        }
         else if (!password.match(passwordRegex)) {
            setError('Password must be at least 8 characters with a special character');
        } else {
            setError('');
            
        }
        
        alert('Login sucessfull!')
        if(email==='admin@gmail.com' && password==='12345678')
        {
            navigate('/dashboard');
        }
        
    };

    return (
        <div className="login-background">
           

        <div className="login-container">
                              
                
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="login-head">Login</h2>
                
                
                    <input className="login-email" type="email" value={email}  placeholder="Email"  onChange={handleEmailChange} required />
                <br/>
                
                    <input className="login-pass" type="password"  placeholder="Password" value={password} onChange={handlePasswordChange} required />
                <br/>
                
                <button className="login-button-7" type="submit" >Login</button>
                <br/>
                <li className="login-dont" onClick={()=>{navigate('/signup')}} > Don't have an account?</li>

            </form>
        </div>
        </div>
    );
};

export default Login;