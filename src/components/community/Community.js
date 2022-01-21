import React from 'react'
import "./community.scss"
import { IoLogoGooglePlaystore } from "react-icons/io5"
const Community = () => {
    return (
        <div className='community'>

            <header className="community__header">
                <div className='community__heading'>
                    <h3 className='community__heading--1'>Join our community of Ease-it users. </h3>
                    <h3 className='community__heading--1'>With us, you can only get better.</h3>
                </div>

                <a href="/" className='community__header-btn'> Get started</a>
            </header>

            <div className='community__subscribe'>
                <a href='/' className='community__download-btn'>Download Mobile App
                    <span className="community__download-icon" >
                        <IoLogoGooglePlaystore />
                    </span>
                </a>
                <form >
                    <p className="community__subscribe-text"> Subscribe to our Newsletter</p>
                    <input className='community__email' type='email' placeholder='Enter Email' />
                    <input type="submit" value="subscribe" className='community__submit' />
                </form>

            </div>

        </div>
    )
}

export default Community
