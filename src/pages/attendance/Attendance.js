import React from 'react'
import HeaderNav from '../../components/headerNav/HeaderNav'
import MainNav from '../../components/mainNav/MainNav'
import UploadFile from '../../components/UploadFile'

const Attendance = () => (
    <div>
        <HeaderNav />
        <MainNav />
        <UploadFile title="Attendance" text="Clock in" classText="fromDropdown" icon="fingerprint" />

    </div>
)


export default Attendance
