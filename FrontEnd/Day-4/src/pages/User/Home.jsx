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
          <p>Best Education in 2024</p>
          <button className='apply-home'>Apply Now</button>
        </div>
      </div>
      <div className='small-cards'>
      <div className='card'>
          <img src='https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='College Logo' className='card-img' />
          <div className='smallcards'>
            <h4>Skilled Lecturers</h4>
            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
            <button className='mad'>Read More</button>
            
          </div>
        </div>
      <div className='small-cards'>
      <div className='card'>
          <img src='https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='College Logo' className='card-img' />
          <div className='smallcards'>
            <h4>Skilled Lecturers</h4>
            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
            <button className='mad'>Read More</button>
            
          </div>
        </div>
        </div>
      <div className='small-cards'>
      <div className='card'>
          <img src='https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='College Logo' className='card-img' />
          <div className='smallcards'>
            <h4>Skilled Lecturers</h4>
            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
            <button className='mad'>Read More</button>
            
          </div>
        </div>
        </div>
        </div>

        </div>
        

    
  )
}

export default Home
