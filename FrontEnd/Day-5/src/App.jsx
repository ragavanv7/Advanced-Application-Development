import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RegistrationForm from './pages/Registration'
import Enrollement from './pages/Enrollement'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Admin from './pages/Admin/Admin'
import Sidebar from './components/UI/Sidebar'
import Dashboard from './pages/Admin/Dashboard'
import Profile from './pages/Admin/Profile'
import Students from './pages/Admin/Students'
import Professors from './pages/Admin/Professors'
import Department from './pages/Admin/Department'
import Course from './pages/Admin/Course'
import Navbar from './components/UI/Navbar'
import Home from './pages/User/Home'
import Forgot from './pages/User/Forgot'
import Institutions from './pages/User/Institutions'
import UserDepart from './pages/User/Department2'
import CollegeList from './pages/Admin/Collegelist'



function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/enrollement" element={<Enrollement />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/students" element={<Students />} />
          <Route path="/professors" element={<Professors />} />
          <Route path="/department" element={<Department />} />
          <Route path="/course" element={<Course />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/institutions" element={<Institutions />} />
          <Route path="/userdepart" element={<UserDepart />} />
          <Route path="/college" element={<CollegeList />} />
          <Route path="/college" element={<CollegeList />} />
          
          
          
        </Routes>
      </Router>

      
    </>
  )
}

export default App
