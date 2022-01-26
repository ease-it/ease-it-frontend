import React from 'react'
import { Route, Routes } from 'react-router'
import UploadAssignment from '../pages/assignment/UploadAssignment'
import UploadTest from '../pages/test-page/UploadTest'
import Students from './Students'

const Protected = () => {
    return (
        <Routes>
            <Route path="/user/uploadassignment" element={<UploadAssignment />} />
            <Route path="/user/uploadtest" element={<UploadTest />} />
            <Route path="/*" element={<Students />} />
        </Routes>
    )
}

export default Protected
