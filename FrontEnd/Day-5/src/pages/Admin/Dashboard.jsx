import React from 'react'
import Sidebar from '../../components/UI/Sidebar'
import '../../assets/css/Dashboard.css'
import Navbar from '../../components/UI/Navbar'


function Dashboard() {
  return (
    <div>
        
            
            <Sidebar/>
            
      <h1 className='wel-dash'>Welcome to admin Dashboard</h1>
      <div className='card-info'>
        <h1 className='stu-info'>students loggedin (50)</h1>
        <div className='card-info'>
        <h1 className='stu-info'>number of applications (50)</h1>
        </div>
        <div className='card-info'>
        <h1 className='stu-info'>number of payments (50)</h1>
        </div>
      </div>
        
    
    </div>
  )
}

export default Dashboard
