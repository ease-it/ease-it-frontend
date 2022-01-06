import React from 'react'
import "../assets/css/components/UploadFile.css"

const UploadFile = ({ title, text, classText, icon }) => (
    <div className='uploadFileLayout'>
        <h1 className="primary-color-blue">{title}</h1>
        <div >
            <input type="file" id="uploadFileFromComputer" />
            <label htmlFor="uploadFile" className="primary-color-blue fileLabel">
                {text} <span class="material-icons pt pl">
                    {icon}
                </span>
            </label>
        </div>
        <input type="submit" value="Upload" className={classText} />
    </div>
)

export default UploadFile
