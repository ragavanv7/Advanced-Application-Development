import React from 'react';
import '../assets/css/Registration.css'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/UI/Navbar';

function RegistrationForm() {
    const navigate=useNavigate();
    
    
    return (
        
        <div className='reg-background'>
            <Navbar/>
            <div className='con1'>
            <h2 className='heading'>Students Details</h2>
            <form className='regcontainer'>
                <div className="col1">
                <div className='name'>
                <label >Name: <span>*</span></label>
                </div>
                <div className='name2'>
                <input type="text" placeholder='Name' id="name" name="name" required />
                </div>
                <div className='name'>
                <label >E-mail: <span>*</span></label>
                </div>
                <div className='name2'>
                <input type="text" placeholder='E-mail' id="email" name="email" required />
                </div>
                
                <div className='name'>
                <label >Father's Name: <span>*</span> </label>
                </div>
                <div className='name2'>
                <input type="text" placeholder='Father-Name' id="fatherName" name="fatherName" required />
                </div>
                <div className='name'>
                <label >Mother's Name: <span>*</span> </label>
                </div>
                <div className='name2'>
                <input type="text" placeholder='Mother-Name' id="motherName" name="motherName" required />
                </div>

                <div className='name'>
                <label >Gender: <span>*</span> </label>
                </div>
                <div className='name2-gender'>
                <select id="gender" name="gender">
                    <option value="Select Gende"> Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                </div>

                <div className='name'>
                <label>Age: <span>*</span> </label>
                </div>
                <div className='name2'>
                <input type="number" placeholder='Age' id="age" name="age" required />
                </div>
                </div>

                <div className='col2'>
                <div className='name'>
                <label>Nationality: <span>*</span> </label>
                </div>
                <div className='name2'>
                <input type="text" placeholder='Nationality' id="nationality" name="nationality" required />
                </div>

                <div className='name'>
                <label >Date of Birth: <span>*</span> </label>
                </div>
                <div className='name2'>
                <input type="date" id="dob" name="dob" required />
                </div>

                <div className='name'>
                <label >Address: <span>*</span> </label>
                </div>
                <div className='name2'>
                <input id="address" placeholder='Address' name="address" rows={4} required></input>
                </div>
                <div className='name'>
                <label >Mobile Number: <span>*</span> </label>
                </div>
                <div className='name2'>
                <input type="tel" placeholder='Mobil-Number' id="mobile" name="mobile" pattern="[0-9]{10}" required />
                </div>
                <div className='name'>
                <label >SSLC Mark: <span>*</span> </label>
                </div>
                <div className='name2'>
                <input type="number" placeholder='SSLC Marck' id="sslcMark" name="sslcMark" required />
                </div>

                <div className='name'>
                <label >HSLC Mark: <span>*</span> </label>
                </div>
                <div className='name2'>
                <input type="number" placeholder='HSLC-Mark' id="hslcMark" name="hslcMark" required />
                </div>
                </div>
                <div className='reg-button'>
                <button className="submit-button" type="submit" onClick={()=>{navigate('/enrollement')}}>Submit</button>
                
                </div>
            </form>
            
            </div>
            </div>
        
    );
}

export default RegistrationForm;