import React from 'react';
import '../../assets/css/Department2.css'

import { useNavigate } from "react-router-dom";
import Navbar from '../../components/UI/Navbar';

const UserDepart = () => {
  const naviagate = useNavigate();
  return (
    
    <div className='full-card'>
     <Navbar/>
      <div className='card'>
        <img src='https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='card-img' />
        <div className='card-content'>
          <h2 className='card-title'>Computer Science Department</h2>
          <p className='card-description'>The Computer Science Department provides cutting-edge education in software development, AI, and cybersecurity, empowering students for tech-driven careers.</p>
          <div className='card-footer'>
            <button className='btn btn-primary'onClick={()=>{naviagate('/enrollement')}} >Enroll</button>
          </div>
        </div>
      </div>
      <div className='card'>
      <img src='https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='card-img' />
        <div className='card-content'>
          <h2 className='card-title'>Information Technology </h2>
          <p className='card-description'>Information Technology Department: Empowering students with tech skills for tomorrow's challenges .</p>
          <div className='card-footer'>
            <button className='btn btn-primary' onClick={()=>{naviagate('/enrollement')}}>Enroll</button>
          </div>
        </div>
      </div>
      <div className='card'>
      <img src='https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='card-img' />
        <div className='card-content'>
          <h2 className='card-title'>Electronics and Computer Engineering </h2>
          <p className='card-description'>Electronics and Computer Engineering Fusing electronics with computing for advanced technological solution .</p>
          <div className='card-footer'>
            <button className='btn btn-primary'  onClick={()=>{naviagate('/enrollement')}}>Enroll</button>
          </div>
        </div>
      </div>
      <div className='card'>
      <img src='https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='card-img' />
        <div className='card-content'>
          <h2 className='card-title'> Mechanical Engineering</h2>
          <p className='card-description'>Mechanical Engineering: Innovating solutions through the science of motion and machinery .</p>
          <div className='card-footer'>
            <button className='btn btn-primary' onClick={()=>{naviagate('/enrollement')}}>Enroll</button>
          </div>
        </div>
      </div>
      <div className='card'>
      <img src='https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='card-img' />
        <div className='card-content'>
          <h2 className='card-title'>Electronics and Electrical Engineering</h2>
          <p className='card-description'>Electronics and Electrical Engineering: Powering innovation through electronic systems and electrical networks .</p>
          <div className='card-footer'>
            <button className='btn btn-primary'  onClick={()=>{naviagate('/enrollement')}}>Enroll</button>
          </div>
        </div>
      </div>
      <div className='card'>
      <img src='https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='card-img' />
        <div className='card-content'>
          <h2 className='card-title'>Artificial Intelligence and Machine Learning </h2>
          <p className='card-description'>Artificial Intelligence and Machine Learning: Transforming data into intelligent solutions for tomorrow's challenges.</p>
          <div className='card-footer'>
            <button className='btn btn-primary'  onClick={()=>{naviagate('/enrollement')}}>Enroll</button>
          </div>
        </div>
      </div>
      <div className='card'>
      <img src='https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='card-img' />
        <div className='card-content'>
          <h2 className='card-title'>Cyber Security</h2>
          <p className='card-description'>nfaskfnfnakdfklfnfma fjdfjdas .</p>
          <div className='card-footer'>
            <button className='btn btn-primary'  onClick={()=>{naviagate('/enrollement')}}>Enroll</button>
          </div>
        </div>
      </div>
      <div className='card'>
      <img src='https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='card-img' />
        <div className='card-content'>
          <h2 className='card-title'>Engineering in Data Sciences</h2>
          <p className='card-description'>Cyber Security: Safeguarding digital assets through cutting-edge defense strategies .</p>
          <div className='card-footer'>
            <button className='btn btn-primary'  onClick={()=>{naviagate('/enrollement')}}>Enroll</button>
          </div>
        </div>
      </div>
      <div className='card'>
      <img src='https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='card-img' />
        <div className='card-content'>
          <h2 className='card-title'>BioTechnology</h2>
          <p className='card-description'>nfaskfnfnakdfklfnfma fjdfjdas .</p>
          <div className='card-footer'>
            <button className='btn btn-primary' onClick={()=>{naviagate('/enrollement')}}>Enroll</button>
          </div>
        </div>
      </div>
      <div className='card'>
      <img src='https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='card-img' />
        <div className='card-content'>
          <h2 className='card-title'>Chemical Engineering </h2>
          <p className='card-description'>BioTechnology: Pioneering innovations at the intersection of biology and technology.</p>
          <div className='card-footer'>
            <button className='btn btn-primary'  onClick={()=>{naviagate('/enrollement')}}>Enroll</button>
          </div>
        </div>
      </div>
      <div className='card'>
      <img src='https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='card-img' />
        <div className='card-content'>
          <h2 className='card-title'>Electronics and Telecom Engineering </h2>
          <p className='card-description'>Electronics and Telecom Engineering: Connecting the world through innovative electronic systems and telecommunications .</p>
          <div className='card-footer'>
            <button className='btn btn-primary' onClick={()=>{naviagate('/enrollement')}}>Enroll</button>
          </div>
        </div>
      </div>
      <div className='card'>
      <img src='https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='card-img' />
        <div className='card-content'>
          <h2 className='card-title'>Civil Engineering</h2>
          <p className='card-description'>Civil Engineering: Building the future with sustainable infrastructure and innovative solutions .</p>
          <div className='card-footer'>
            <button className='btn btn-primary' onClick={()=>{naviagate('/enrollement')}}>Enroll</button>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default UserDepart;