import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../../assets/css/Collegelist.css'
import Sidebar from '../../components/UI/Sidebar';


const Professors = () => {
    const navigate = useNavigate();

    
    const studentData = [
        { ProfessorsName: 'Ragavan', BranchName: 'BE - CSE', email: 'srikrishna@skct.edu.in', phone: '987654320', Location: 'Coimbatore' },
        { ProfessorsName: 'Sakthivel', BranchName: 'BE - CSE', email: 'srikrishna@skct.edu.in', phone: '987654320', Location: 'Coimbatore' },
        { ProfessorsName: 'Naveen', BranchName: 'BE - CSE', email: 'srikrishna@skct.edu.in', phone: '987654320', Location: 'Coimbatore' },
        { ProfessorsName: 'Ragavan',  BranchName: 'BE - CSE', email: 'srikrishna@skct.edu.in', phone: '987654320', Location: 'Coimbatore' },
        { ProfessorsName: 'Sakthivel',  BranchName: 'BE - CSE', email: 'srikrishna@skct.edu.in', phone: '987654320', Location: 'Coimbatore' },
        { ProfessorsName: 'Naveen', BranchName: 'BE - CSE', email: 'srikrishna@skct.edu.in', phone: '987654320', Location: 'Coimbatore' },
        { ProfessorsName: 'Ragavan', BranchName: 'BE - CSE', email: 'srikrishna@skct.edu.in', phone: '987654320', Location: 'Coimbatore' },
        
 
        
        
    ];

    return (
        <div className="College-list">
            
            <Sidebar/>
           
            
            <div className="content-side">
                <table className="student-table1">
                    <thead>
                        <tr>
                            <th>Professors Name</th>
                            <th>BranchName</th>
                            <th>EMAIL</th>
                            <th>PHONE</th>
                            <th>Location</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentData.map((student, index) => (
                            <tr key={index}>
                                <td>{student.ProfessorsName}</td>
                                
                                <td>{student.BranchName}</td>
                                <td>{student.email}</td>
                                <td>{student.phone}</td>
                                <td>{student.Location}</td>
                                <td>    
                                    <button className='view' onClick={() => handleView(student)}>View</button>
                                    <button className='delete' onClick={() => handleDelete(student)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Professors