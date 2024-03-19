import React from 'react'
import '../assets/css/Enrollement.css'

function Enrollement() {
  return (
    <div className='roll-background'>
    <div className='roll'>
        <form className='en-roll'>
        <div className='en-name'>
                <label > Institution Name: <span className='en-span'>*</span></label>
                </div>
                <div className='en-box-2'>
                <select className='en-input-2' id="college"  name="college">
                    <option value="Select College"> Select College</option>
                    <option value="IIT">IIT Madras - Indian Institute of Technology - [IITM], Chennai</option>
                    <option value="IIMA">IIMA - Indian Institute of Management, Ahmedabad</option>
                    <option value="IIM">IIM Bangalore - Indian Institute of Management, Bangalore</option>
                    <option value="IIMC">IIMC - Indian Institute of Management, Kolkata</option>
                    <option value="VIT">VIT - Vellore Institute of Technology</option>
                </select>
                </div>
                <div className='en-name'>
                    <label>Student Name <span className='en-span'>*</span> </label>
                </div>
                <div className='en-box'>
                    <input className='en-input' type="text" placeholder='Student-Name' />
                </div>
                <div className='en-name'>
                    <label>Course Name <span className='en-span'>*</span></label>
                </div>
                <div className='en-box-2'>
                <select className='en-input-2' id="college"  name="college">
                    <option value="Select course"> Select Course</option>
                    <option value="CSE">Computer Science Engineering</option>
                    <option value="IT">Information Technology</option>
                    <option value="ECE">Electrical and Communication Engineering</option>
                    <option value="EEE">Electrical and Electronic Engineering</option>
                    <option value="MECH">Mechanical Engineering</option>
                </select>
                </div>
                <div className='en-name'>
                    <label>Course Description <span className='en-span'>*</span></label>
                </div>
                <div className='en-box'>
                <input className='en-input' type='text' placeholder='Course-Description'></input>
                </div>
                <div className='en-name'>
                    <label>Course Fees <span className='en-span'>*</span></label>
                </div>
                <div className='en-box-2'>
                <select className='en-input-2' id="Fees"  name="fees">
                    <option value="Select course"> Select Fees Amount</option>
                    <option value="CSE">10000</option>
                    <option value="IT">20000</option>
                    <option value="ECE">30000</option>
                    <option value="EEE">40000</option>
                    <option value="MECH">50000</option>
                </select>
                </div>
                <div>
                    <button className='en-button' type='submit'>Enroll</button>
                </div>

        </form>
      
    </div>
    </div>
  )
}

export default Enrollement
