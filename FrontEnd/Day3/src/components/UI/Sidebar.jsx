import React from 'react';
import 'C:/Users/ragav/Desktop/react-vite/front-end/src/assets/css/Sidebar.css'
import { useNavigate } from 'react-router-dom';
// import DashboardIcon from '@mui/icons-material/Dashboard';

const Sidebar = () => {
    const navigate=useNavigate();
    return (
        <div className="sidebar-con">
            <ul className='sidebar-ul' >
                <li className='sidebar-li'><a className='sidebar-1' href="#profile" onClick={()=>{navigate('/profile')}}>Profile</a></li>
                <li className='sidebar-li'><a className='sidebar-1' href="#dashboard" onClick={()=>{navigate('/dashboard')}}>Dashboard</a></li>
                <li className='sidebar-li'><a className='sidebar-1' href="#students" onClick={()=>{navigate('/students')}}>Students</a></li>
                <li className='sidebar-li'><a className='sidebar-1' href="#professors" onClick={()=>{navigate('/professors')}}>Professors</a></li>
                <li className='sidebar-li'><a className='sidebar-1' href="#departments" onClick={()=>{navigate('/department')}}>Departments</a></li>
                <li className='sidebar-li'><a className='sidebar-1' href="#courses" onClick={()=>{navigate("/course")}}>Courses</a></li>
                <button className='logout' type='submit' onClick={()=>{navigate("/")}}> LOGOUT</button>
            </ul>
        </div>
    );
}

export default Sidebar;