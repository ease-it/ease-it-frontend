import React from 'react'
import HeaderNav from '../components/HeaderNav'
import MainNav from '../components/MainNav'
import UploadFile from '../components/UploadFile'

const UploadAssignment = () => (

    <div>
        <HeaderNav />
        <MainNav />
        <UploadFile title="Upload Assignment" text="Import File From Your Computer" classText="fromComputerBtn" icon="arrow_drop_down" />
    </div >


)


export default UploadAssignment