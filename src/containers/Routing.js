import React from 'react'
import { Route, Routes } from 'react-router'
import SignUp from '../pages/signUp/SignUp'
import Login from "../pages/login/Login"
import Home from '../pages/home/Home'
import Dashboard from "../pages/dashboard/Dashboard"
import NewsEvent from '../pages/newsEvent/NewsEvent'
import Protected from './Protected'
import Reset3 from '../pages/reset/Reset3'
import Reset2 from '../pages/reset/Reset2'
import UploadAssignment from '../pages/assignment/UploadAssignment'
import UploadTest from '../pages/testPage/UploadTest'
import Attendance from '../pages/attendance/Attendance'

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/NewsEvent" element={<NewsEvent />} />
            <Route path="/*" element={<Protected />} />
            <Route path="/reset2" element={<Reset2 />} />
            <Route path="/reset3" element={<Reset3 />} />
            <Route path="/upload-assignment" element={<UploadAssignment />} />
            <Route path="/upload-test" element={<UploadTest />} />
            <Route path="/attendance" element={<Attendance />} />
        </Routes>
    )
}

export default Routing
