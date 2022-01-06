import React from 'react'
import HeaderNav from '../components/HeaderNav'
import MainNav from '../components/MainNav'
import UploadFile from '../components/UploadFile'

const UploadTest = () => (

    <div>
        <HeaderNav />
        <MainNav />
        <UploadFile title="Upload Test" text="Import File From Your Computer" classText="fromComputerBtn" icon="arrow_drop_down" />
    </div >


)


export default UploadTest