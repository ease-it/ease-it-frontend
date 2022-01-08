import React from 'react'
import logo from '../assets/images/ease-it-logo.png'
const MainNav = () => {
    return (
        <>
            <div className='flex justify-between gap-y-5 items-center bg-white'>
                <div className=' md:px-11 relative'>
                    <img src={logo} alt="ease-it-logo" className="md:top-5 h-14 md:min-w-fit md:left-5"  />
                </div>
                <div>
                    
                </div>
                <div className =" text-black items-center hidden  xl:block justify-end">
                    <ul className='flex font-bold gap-x-6 text-lg items-center primary-color-blue justify-center'>
                        <li><a href='/'>HOME</a></li>
                        <li><a href='/'>ABOUT US</a></li>
                        <li><a href='/'>DASHBOARD</a></li>
                        <li><a href='/'>RESOURCES</a></li>
                        <li><a href='/'>NEWS & EVENT</a></li>
                        <li><a href='/'>SEARCH </a></li>
                    </ul>
                </div>
                <div className="pr-3 flex justify-start">
                    <button className="primary-color-yellow hidden py-3 shadow-lg sm:px-4 text-white text-lg rounded-2xl font-extrabold">SignUp?Login</button>
                </div>
            </div>
        </>
    )
}

export default MainNav
