import React from 'react'
import { Route, Routes } from 'react-router'
import Attendance from '../pages/attendance/Attendance'
const Students = () => {
    return (
        <Routes>
            <Route path="/user/attendance" element={<Attendance />} />
        </Routes>
    )
}

export default Students
