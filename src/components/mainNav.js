import React from 'react'
import logo from '../assets/images/ease-it-logo.png'
const MainNav = () => {
    return (
        <>
            <div className='flex justify-between gap-y-5 items-center bg-white'>
                <div className='px-11 relative'>
                    <img src={logo} alt="ease-it-logo" className="top-5 left-5"  />
                </div>
                <div className ="flex text-black items-center hidden xl:block justify-end">
                    <ul className='flex font-extrabold gap-x-6 text-lg items-center primary-color-blue justify-center'>
                        <li><a>HOME</a></li>
                        <li><a>ABOUT US</a></li>
                        <li><a>DASHBOARD</a></li>
                        <li><a>RESOURCES</a></li>
                        <li><a>NEWS & EVENT</a></li>
                        <li><a>SEARCH </a></li>
                    </ul>
                </div>
                <div className="pr-3 flex justify-start">
                    <button className="primary-color-yellow py-3 shadow-lg px-4 text-white text-lg rounded-2xl font-extrabold">SignUp?Login</button>
                </div>
            </div>
        </>
    )
}

export default MainNav
