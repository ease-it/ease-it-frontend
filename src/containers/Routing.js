import React from 'react'
import { Route, Routes } from 'react-router'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import Dashboard from "../pages/Dashboard"
import NewsEvent from '../pages/NewsEvent'
import Protected from './Protected'
import Reset3 from '../pages/Reset3'
import Reset2 from '../pages/Reset2'
import UploadAssignment from '../pages/UploadAssignment'
import UploadTest from '../pages/UploadTest'
import Attendance from '../pages/Attendance'

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/NewsEvent" element={<NewsEvent />} />
            <Route path="/signup" element={<SignUp/>}  />
            <Route path="/dashboard" element={<Dashboard />} />
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
