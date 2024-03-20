import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../../assets/css/Collegelist.css'
import Navbar from '../../components/UI/Navbar';
import Sidebar from '../../components/UI/Sidebar';


const CollegeList = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/navbar');
        
    };
    const studentData = [
        { CollegeName: 'SKCET', CollegeCode: '2718', BranchName: 'BE - CSE', email: 'srikrishna@skct.edu.in', phone: '987654320', Location: 'Coimbatore' },
        { CollegeName: 'SKCET', CollegeCode: '2718', BranchName: 'BE - CSE', email: 'srikrishna@skct.edu.in', phone: '987654320', Location: 'Coimbatore' },
        { CollegeName: 'SKCET', CollegeCode: '2718', BranchName: 'BE - CSE', email: 'srikrishna@skct.edu.in', phone: '987654320', Location: 'Coimbatore' },
        { CollegeName: 'SKCET', CollegeCode: '2718', BranchName: 'BE - CSE', email: 'srikrishna@skct.edu.in', phone: '987654320', Location: 'Coimbatore' },
        { CollegeName: 'SKCET', CollegeCode: '2718', BranchName: 'BE - CSE', email: 'srikrishna@skct.edu.in', phone: '987654320', Location: 'Coimbatore' },
        { CollegeName: 'SKCET', CollegeCode: '2718', BranchName: 'BE - CSE', email: 'srikrishna@skct.edu.in', phone: '987654320', Location: 'Coimbatore' },
        { CollegeName: 'SKCET', CollegeCode: '2718', BranchName: 'BE - CSE', email: 'srikrishna@skct.edu.in', phone: '987654320', Location: 'Coimbatore' },
        
 
        
        
    ];

    return (
        <div className="College-list">
            
            <Sidebar/>
           
            
            <div className="content-side">
                <table className="student-table1">
                    <thead>
                        <tr>
                            <th>College Name</th>
                            <th>College Code</th>
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
                                <td>{student.CollegeName}</td>
                                <td>{student.CollegeCode}</td>
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

export default CollegeList