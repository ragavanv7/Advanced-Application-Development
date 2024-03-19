import React from 'react'
import '../../assets/css/Home.css'
import Navbar from '../../components/UI/Navbar'

function Home() {
    
  return (
    <div className='home-full'>
        <Navbar/>
        <div className=''>
          
          <img  className='back-img' src='https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  />
          <div className='image-content'>
          <h1>Standard Colleges<br/> For Students</h1>
          <p>Best Education Theme in 2024</p>
          <button className='apply-home'>Apply Now</button>
        </div>
      </div>

        </div>
        

    
  )
}

export default Home
