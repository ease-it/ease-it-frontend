import React from 'react'
import HeaderNav from '../../components/headerNav/HeaderNav'
import MainNav from '../../components/mainNav/MainNav'
import UploadFile from '../../components/UploadFile'

const UploadAssignment = () => (

    <div>
        <HeaderNav />
        <MainNav />
        <div style={{ minHeight: "60vh" }}>
            <UploadFile title="Upload Assignment" text="Import File From Your Computer" classText="fromComputerBtn" icon="arrow_drop_down" />
        </div>
    </div >


)


export default UploadAssignment