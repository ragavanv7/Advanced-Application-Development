import React from 'react'
import '../../assets/css/Navbar.css'
import { Navigate, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className='navbar-0'>
      <nav className='navbar-1'>
        <div class="nav-logo" style={{fontSize:"35px"}}>SNR</div>
       
        <label for="click" class="menu-btn">
            <i class="fas fa-bars"></i>
        </label>
        <ul className='nav-ul'>
            <li className='nav-li'><a className='navbar-a'onClick={()=>{navigate('/home')}} >Home</a></li>
            <li className='nav-li'><a className='navbar-a' onClick={()=>{navigate('/institutions')}}  >Institutions</a></li>
            <li className='nav-li'><a className='navbar-a' onClick={()=>{navigate('/registration')}} >Register</a></li>
            <li className='nav-li'><a className='navbar-a' >Departments</a></li>
            <li className='nav-li'><a className='navbar-a' >Courses</a></li>
            <li className='nav-li'><a className='navbar-a' >Admin</a></li>
            <li className='nav-li'><a className='navbar-a' >Logout</a></li>
        </ul>
    </nav>

      
    </div>
  )
}

export default Navbar
